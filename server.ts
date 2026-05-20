import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy client generation to survive startup without crashing if KEY is temporarily undefined
let aiClient: GoogleGenAI | null = null;

function getAI(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY is required and not configured in Secrets.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// 1. API: HEALTH / API SECRETS CHECK
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    hasApiKey: !!process.env.GEMINI_API_KEY
  });
});

// 2. API: EXPLORE EXTRA FRENCH VERBS WITH GEMINI
app.post("/api/gemini/conjugate", async (req, res) => {
  try {
    const { verb } = req.body;
    if (!verb || typeof verb !== "string") {
      return res.status(400).json({ error: "É necessário fornecer o verbo em francês (ex: 'devoir')." });
    }

    const cleanVerb = verb.trim().toLowerCase();

    // Check key
    if (!process.env.GEMINI_API_KEY) {
      return res.status(400).json({
        error: "Chave de API do Gemini não configurada.",
        instructions: "Por favor, adicione a sua GEMINI_API_KEY no painel de Configurações > Secrets da plataforma para usar a busca por IA."
      });
    }

    const ai = getAI();

    const systemInstruction = `Você é um professor e linguista especialista em língua francesa.
O seu objetivo é conjugar o verbo francês solicitado pelo usuário e empacotar a resposta em formato JSON estrito.
A tradução e as explicações gramaticais devem estar escritas em Português de Portugal ou do Brasil.
Você DEVE fornecer explicações gramaticais focadas e interessantes sobre a classificação e particularidades do verbo.
Preencha exatamente a estrutura JSON especificada e forneça traduções completas para português de todas as formas e frases.`;

    const prompt = `Gere a conjugação e análise gramatical completa do verbo francês "${cleanVerb}" nos seguintes tempos: present, passé_composé, imparfait, futur_simple, conditionnel, subjonctif. Adicione também 6 exemplos de frases em francês utilizando o verbo conjugado (uma para cada pronome pessoal: je, tu, il/elle, nous, vous, ils/elles) com suas respectivas traduções em português.`;

    // Define responseSchema for strict integration
    const responseSchema = {
      type: Type.OBJECT,
      properties: {
        infinitive: { type: Type.STRING, description: "O infinitivo do verbo em francês, ex: devor" },
        translation: { type: Type.STRING, description: "A tradução do infinitivo para português" },
        group: { type: Type.STRING, description: "O grupo correspondente ao verbo", enum: ["1er", "2e", "3e"] },
        auxiliary: { type: Type.STRING, description: "Verbo auxiliar usado no passé composé", enum: ["avoir", "être"] },
        regular: { type: Type.BOOLEAN, description: "Se o verbo é regular de acordo com regras gerais de seu grupo" },
        difficulty: { type: Type.STRING, description: "Nível de dificuldade geral (A1, A2, B1, B2)", enum: ["A1", "A2", "B1", "B2"] },
        explanation: { type: Type.STRING, description: "Explicação das irregularidades, dicas históricas ou mnemónicas em português" },
        tenses: {
          type: Type.OBJECT,
          properties: {
            present: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING, description: "Nome em português ('Presente')" },
                frenchName: { type: Type.STRING, description: "Nome em francês ('Présent')" },
                description: { type: Type.STRING, description: "Breve explicação do uso deste tempo" },
                forms: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      pronoun: { type: Type.STRING, description: "Pronome do sujeito, ex: je, nous" },
                      form: { type: Type.STRING, description: "A forma conjugada do verbo" },
                      translation: { type: Type.STRING, description: "Tradução desta forma conjugada" }
                    },
                    required: ["pronoun", "form", "translation"]
                  }
                }
              },
              required: ["name", "frenchName", "description", "forms"]
            },
            passé_composé: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                frenchName: { type: Type.STRING },
                description: { type: Type.STRING },
                forms: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      pronoun: { type: Type.STRING },
                      form: { type: Type.STRING },
                      translation: { type: Type.STRING }
                    },
                    required: ["pronoun", "form", "translation"]
                  }
                }
              },
              required: ["name", "frenchName", "description", "forms"]
            },
            imparfait: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                frenchName: { type: Type.STRING },
                description: { type: Type.STRING },
                forms: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      pronoun: { type: Type.STRING },
                      form: { type: Type.STRING },
                      translation: { type: Type.STRING }
                    },
                    required: ["pronoun", "form", "translation"]
                  }
                }
              },
              required: ["name", "frenchName", "description", "forms"]
            },
            futur_simple: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                frenchName: { type: Type.STRING },
                description: { type: Type.STRING },
                forms: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      pronoun: { type: Type.STRING },
                      form: { type: Type.STRING },
                      translation: { type: Type.STRING }
                    },
                    required: ["pronoun", "form", "translation"]
                  }
                }
              },
              required: ["name", "frenchName", "description", "forms"]
            },
            conditionnel: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                frenchName: { type: Type.STRING },
                description: { type: Type.STRING },
                forms: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      pronoun: { type: Type.STRING },
                      form: { type: Type.STRING },
                      translation: { type: Type.STRING }
                    },
                    required: ["pronoun", "form", "translation"]
                  }
                }
              },
              required: ["name", "frenchName", "description", "forms"]
            },
            subjonctif: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                frenchName: { type: Type.STRING },
                description: { type: Type.STRING },
                forms: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      pronoun: { type: Type.STRING },
                      form: { type: Type.STRING },
                      translation: { type: Type.STRING }
                    },
                    required: ["pronoun", "form", "translation"]
                  }
                }
              },
              required: ["name", "frenchName", "description", "forms"]
            }
          },
          required: ["present", "passé_composé", "imparfait", "futur_simple", "conditionnel", "subjonctif"]
        },
        examples: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              pronoun: { type: Type.STRING, description: "A pessoa correspondente à frase" },
              french: { type: Type.STRING, description: "A frase inteira produzida no francês" },
              portuguese: { type: Type.STRING, description: "Tradução literal ou equivalente natural em português" }
            },
            required: ["pronoun", "french", "portuguese"]
          }
        }
      },
      required: ["infinitive", "translation", "group", "auxiliary", "regular", "difficulty", "explanation", "tenses", "examples"]
    };

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("Resposta da IA retornou vazia.");
    }

    const aiResult = JSON.parse(text);
    res.json(aiResult);

  } catch (error: any) {
    console.error("Erro na busca por IA de conjugação:", error);
    res.status(500).json({
      error: "Houve um problema ao consultar a IA para este verbo.",
      details: error.message || error
    });
  }
});

// 3. API: EVALUATE PRACTICE PRACTICE WRITING SENTENCES
app.post("/api/gemini/evaluate", async (req, res) => {
  try {
    const { verb, tense, pronoun, form, userSentence } = req.body;
    if (!verb || !tense || !pronoun || !form || !userSentence) {
      return res.status(400).json({ error: "Parâmetros em falta. Certifique-se de que escolheu um verbo, conjugação e escreveu a frase." });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(400).json({
        error: "Chave de API do Gemini não configurada.",
        instructions: "Por favor, adicione a sua GEMINI_API_KEY nas Configurações do AI Studio para usar a avaliação interativa."
      });
    }

    const ai = getAI();

    const systemInstruction = `Você é um professor nativo de francês que avalia tarefas de escrita de alunos falantes de português.
O aluno escolheu o verbo "${verb}", no tempo "${tense}", para o pronome/formato correspondente a "${pronoun}" (que se conjuga como "${form}").
E escreveu a seguinte frase em francês: "${userSentence}".

Analise cuidadosamente:
1. Ele utilizou o verbo solicitado corretamente conjugado na frase? (Deve bater com a conjugação francesa de "${verb}" no tempo "${tense}" para "${pronoun}").
2. O restante da frase em francês está gramaticalmente correto, faz sentido semântico e tem ortografia adequada?
3. Diga-lhe qual é a tradução em português da frase que ele escreveu (mesmo que haja erros).

Retorne em formato JSON estrito correspondente ao esquema fornecido. Seja didático, positivo, construtivo e escreva as análises em português.`;

    const responseSchema = {
      type: Type.OBJECT,
      properties: {
        correct: { type: Type.BOOLEAN, description: "Verdadeiro se toda a frase estiver correta, ou se o erro for extremamente irrelevante (por exemplo, esquecimento de um ponto final, mas aceitando correções)" },
        userSentence: { type: Type.STRING },
        verb: { type: Type.STRING },
        tense: { type: Type.STRING },
        feedback: { type: Type.STRING, description: "Feedback global didático de 2-3 frases motivadoras e explicativas em português" },
        translation: { type: Type.STRING, description: "A tradução da frase que o usuário escreveu para o português" },
        analysisDetails: {
          type: Type.OBJECT,
          properties: {
            verbCheck: { type: Type.STRING, enum: ["correct", "incorrect", "not_found"], description: "Diz se o verbo conjugado foi encontrado correto, incorreto ou se não foi utilizado na frase" },
            explanation: { type: Type.STRING, description: "Explicação técnica detalhada da flexão ou gramática do erro ou acerto em português" },
            suggestedFix: { type: Type.STRING, description: "A frase completamente corrigida em francês (ou o que ele escreveu se estiver 100% correta)" }
          },
          required: ["verbCheck", "explanation", "suggestedFix"]
        }
      },
      required: ["correct", "userSentence", "verb", "tense", "feedback", "translation", "analysisDetails"]
    };

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: "Avalie a frase do estudante.",
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("Resposta da IA vazia na avaliação.");
    }

    res.json(JSON.parse(text));

  } catch (error: any) {
    console.error("Erro na avaliação com IA:", error);
    res.status(500).json({
      error: "Falha ao avaliar a frase com o professor de IA.",
      details: error.message || error
    });
  }
});

// Configure Vite or serve static production bundle
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server fully operational on http://localhost:${PORT}`);
  });
}

startServer();
