var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
var import_dotenv = __toESM(require("dotenv"), 1);
import_dotenv.default.config();
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json());
var aiClient = null;
function getAI() {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY is required and not configured in Secrets.");
    }
    aiClient = new import_genai.GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
  }
  return aiClient;
}
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    hasApiKey: !!process.env.GEMINI_API_KEY
  });
});
app.post("/api/gemini/conjugate", async (req, res) => {
  try {
    const { verb } = req.body;
    if (!verb || typeof verb !== "string") {
      return res.status(400).json({ error: "\xC9 necess\xE1rio fornecer o verbo em franc\xEAs (ex: 'devoir')." });
    }
    const cleanVerb = verb.trim().toLowerCase();
    if (!process.env.GEMINI_API_KEY) {
      return res.status(400).json({
        error: "Chave de API do Gemini n\xE3o configurada.",
        instructions: "Por favor, adicione a sua GEMINI_API_KEY no painel de Configura\xE7\xF5es > Secrets da plataforma para usar a busca por IA."
      });
    }
    const ai = getAI();
    const systemInstruction = `Voc\xEA \xE9 um professor e linguista especialista em l\xEDngua francesa.
O seu objetivo \xE9 conjugar o verbo franc\xEAs solicitado pelo usu\xE1rio e empacotar a resposta em formato JSON estrito.
A tradu\xE7\xE3o e as explica\xE7\xF5es gramaticais devem estar escritas em Portugu\xEAs de Portugal ou do Brasil.
Voc\xEA DEVE fornecer explica\xE7\xF5es gramaticais focadas e interessantes sobre a classifica\xE7\xE3o e particularidades do verbo.
Preencha exatamente a estrutura JSON especificada e forne\xE7a tradu\xE7\xF5es completas para portugu\xEAs de todas as formas e frases.`;
    const prompt = `Gere a conjuga\xE7\xE3o e an\xE1lise gramatical completa do verbo franc\xEAs "${cleanVerb}" nos seguintes tempos: present, pass\xE9_compos\xE9, imparfait, futur_simple, conditionnel, subjonctif. Adicione tamb\xE9m 6 exemplos de frases em franc\xEAs utilizando o verbo conjugado (uma para cada pronome pessoal: je, tu, il/elle, nous, vous, ils/elles) com suas respectivas tradu\xE7\xF5es em portugu\xEAs.`;
    const responseSchema = {
      type: import_genai.Type.OBJECT,
      properties: {
        infinitive: { type: import_genai.Type.STRING, description: "O infinitivo do verbo em franc\xEAs, ex: devor" },
        translation: { type: import_genai.Type.STRING, description: "A tradu\xE7\xE3o do infinitivo para portugu\xEAs" },
        group: { type: import_genai.Type.STRING, description: "O grupo correspondente ao verbo", enum: ["1er", "2e", "3e"] },
        auxiliary: { type: import_genai.Type.STRING, description: "Verbo auxiliar usado no pass\xE9 compos\xE9", enum: ["avoir", "\xEAtre"] },
        regular: { type: import_genai.Type.BOOLEAN, description: "Se o verbo \xE9 regular de acordo com regras gerais de seu grupo" },
        difficulty: { type: import_genai.Type.STRING, description: "N\xEDvel de dificuldade geral (A1, A2, B1, B2)", enum: ["A1", "A2", "B1", "B2"] },
        explanation: { type: import_genai.Type.STRING, description: "Explica\xE7\xE3o das irregularidades, dicas hist\xF3ricas ou mnem\xF3nicas em portugu\xEAs" },
        tenses: {
          type: import_genai.Type.OBJECT,
          properties: {
            present: {
              type: import_genai.Type.OBJECT,
              properties: {
                name: { type: import_genai.Type.STRING, description: "Nome em portugu\xEAs ('Presente')" },
                frenchName: { type: import_genai.Type.STRING, description: "Nome em franc\xEAs ('Pr\xE9sent')" },
                description: { type: import_genai.Type.STRING, description: "Breve explica\xE7\xE3o do uso deste tempo" },
                forms: {
                  type: import_genai.Type.ARRAY,
                  items: {
                    type: import_genai.Type.OBJECT,
                    properties: {
                      pronoun: { type: import_genai.Type.STRING, description: "Pronome do sujeito, ex: je, nous" },
                      form: { type: import_genai.Type.STRING, description: "A forma conjugada do verbo" },
                      translation: { type: import_genai.Type.STRING, description: "Tradu\xE7\xE3o desta forma conjugada" }
                    },
                    required: ["pronoun", "form", "translation"]
                  }
                }
              },
              required: ["name", "frenchName", "description", "forms"]
            },
            pass\u00E9_compos\u00E9: {
              type: import_genai.Type.OBJECT,
              properties: {
                name: { type: import_genai.Type.STRING },
                frenchName: { type: import_genai.Type.STRING },
                description: { type: import_genai.Type.STRING },
                forms: {
                  type: import_genai.Type.ARRAY,
                  items: {
                    type: import_genai.Type.OBJECT,
                    properties: {
                      pronoun: { type: import_genai.Type.STRING },
                      form: { type: import_genai.Type.STRING },
                      translation: { type: import_genai.Type.STRING }
                    },
                    required: ["pronoun", "form", "translation"]
                  }
                }
              },
              required: ["name", "frenchName", "description", "forms"]
            },
            imparfait: {
              type: import_genai.Type.OBJECT,
              properties: {
                name: { type: import_genai.Type.STRING },
                frenchName: { type: import_genai.Type.STRING },
                description: { type: import_genai.Type.STRING },
                forms: {
                  type: import_genai.Type.ARRAY,
                  items: {
                    type: import_genai.Type.OBJECT,
                    properties: {
                      pronoun: { type: import_genai.Type.STRING },
                      form: { type: import_genai.Type.STRING },
                      translation: { type: import_genai.Type.STRING }
                    },
                    required: ["pronoun", "form", "translation"]
                  }
                }
              },
              required: ["name", "frenchName", "description", "forms"]
            },
            futur_simple: {
              type: import_genai.Type.OBJECT,
              properties: {
                name: { type: import_genai.Type.STRING },
                frenchName: { type: import_genai.Type.STRING },
                description: { type: import_genai.Type.STRING },
                forms: {
                  type: import_genai.Type.ARRAY,
                  items: {
                    type: import_genai.Type.OBJECT,
                    properties: {
                      pronoun: { type: import_genai.Type.STRING },
                      form: { type: import_genai.Type.STRING },
                      translation: { type: import_genai.Type.STRING }
                    },
                    required: ["pronoun", "form", "translation"]
                  }
                }
              },
              required: ["name", "frenchName", "description", "forms"]
            },
            conditionnel: {
              type: import_genai.Type.OBJECT,
              properties: {
                name: { type: import_genai.Type.STRING },
                frenchName: { type: import_genai.Type.STRING },
                description: { type: import_genai.Type.STRING },
                forms: {
                  type: import_genai.Type.ARRAY,
                  items: {
                    type: import_genai.Type.OBJECT,
                    properties: {
                      pronoun: { type: import_genai.Type.STRING },
                      form: { type: import_genai.Type.STRING },
                      translation: { type: import_genai.Type.STRING }
                    },
                    required: ["pronoun", "form", "translation"]
                  }
                }
              },
              required: ["name", "frenchName", "description", "forms"]
            },
            subjonctif: {
              type: import_genai.Type.OBJECT,
              properties: {
                name: { type: import_genai.Type.STRING },
                frenchName: { type: import_genai.Type.STRING },
                description: { type: import_genai.Type.STRING },
                forms: {
                  type: import_genai.Type.ARRAY,
                  items: {
                    type: import_genai.Type.OBJECT,
                    properties: {
                      pronoun: { type: import_genai.Type.STRING },
                      form: { type: import_genai.Type.STRING },
                      translation: { type: import_genai.Type.STRING }
                    },
                    required: ["pronoun", "form", "translation"]
                  }
                }
              },
              required: ["name", "frenchName", "description", "forms"]
            }
          },
          required: ["present", "pass\xE9_compos\xE9", "imparfait", "futur_simple", "conditionnel", "subjonctif"]
        },
        examples: {
          type: import_genai.Type.ARRAY,
          items: {
            type: import_genai.Type.OBJECT,
            properties: {
              pronoun: { type: import_genai.Type.STRING, description: "A pessoa correspondente \xE0 frase" },
              french: { type: import_genai.Type.STRING, description: "A frase inteira produzida no franc\xEAs" },
              portuguese: { type: import_genai.Type.STRING, description: "Tradu\xE7\xE3o literal ou equivalente natural em portugu\xEAs" }
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
  } catch (error) {
    console.error("Erro na busca por IA de conjuga\xE7\xE3o:", error);
    res.status(500).json({
      error: "Houve um problema ao consultar a IA para este verbo.",
      details: error.message || error
    });
  }
});
app.post("/api/gemini/evaluate", async (req, res) => {
  try {
    const { verb, tense, pronoun, form, userSentence } = req.body;
    if (!verb || !tense || !pronoun || !form || !userSentence) {
      return res.status(400).json({ error: "Par\xE2metros em falta. Certifique-se de que escolheu um verbo, conjuga\xE7\xE3o e escreveu a frase." });
    }
    if (!process.env.GEMINI_API_KEY) {
      return res.status(400).json({
        error: "Chave de API do Gemini n\xE3o configurada.",
        instructions: "Por favor, adicione a sua GEMINI_API_KEY nas Configura\xE7\xF5es do AI Studio para usar a avalia\xE7\xE3o interativa."
      });
    }
    const ai = getAI();
    const systemInstruction = `Voc\xEA \xE9 um professor nativo de franc\xEAs que avalia tarefas de escrita de alunos falantes de portugu\xEAs.
O aluno escolheu o verbo "${verb}", no tempo "${tense}", para o pronome/formato correspondente a "${pronoun}" (que se conjuga como "${form}").
E escreveu a seguinte frase em franc\xEAs: "${userSentence}".

Analise cuidadosamente:
1. Ele utilizou o verbo solicitado corretamente conjugado na frase? (Deve bater com a conjuga\xE7\xE3o francesa de "${verb}" no tempo "${tense}" para "${pronoun}").
2. O restante da frase em franc\xEAs est\xE1 gramaticalmente correto, faz sentido sem\xE2ntico e tem ortografia adequada?
3. Diga-lhe qual \xE9 a tradu\xE7\xE3o em portugu\xEAs da frase que ele escreveu (mesmo que haja erros).

Retorne em formato JSON estrito correspondente ao esquema fornecido. Seja did\xE1tico, positivo, construtivo e escreva as an\xE1lises em portugu\xEAs.`;
    const responseSchema = {
      type: import_genai.Type.OBJECT,
      properties: {
        correct: { type: import_genai.Type.BOOLEAN, description: "Verdadeiro se toda a frase estiver correta, ou se o erro for extremamente irrelevante (por exemplo, esquecimento de um ponto final, mas aceitando corre\xE7\xF5es)" },
        userSentence: { type: import_genai.Type.STRING },
        verb: { type: import_genai.Type.STRING },
        tense: { type: import_genai.Type.STRING },
        feedback: { type: import_genai.Type.STRING, description: "Feedback global did\xE1tico de 2-3 frases motivadoras e explicativas em portugu\xEAs" },
        translation: { type: import_genai.Type.STRING, description: "A tradu\xE7\xE3o da frase que o usu\xE1rio escreveu para o portugu\xEAs" },
        analysisDetails: {
          type: import_genai.Type.OBJECT,
          properties: {
            verbCheck: { type: import_genai.Type.STRING, enum: ["correct", "incorrect", "not_found"], description: "Diz se o verbo conjugado foi encontrado correto, incorreto ou se n\xE3o foi utilizado na frase" },
            explanation: { type: import_genai.Type.STRING, description: "Explica\xE7\xE3o t\xE9cnica detalhada da flex\xE3o ou gram\xE1tica do erro ou acerto em portugu\xEAs" },
            suggestedFix: { type: import_genai.Type.STRING, description: "A frase completamente corrigida em franc\xEAs (ou o que ele escreveu se estiver 100% correta)" }
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
      throw new Error("Resposta da IA vazia na avalia\xE7\xE3o.");
    }
    res.json(JSON.parse(text));
  } catch (error) {
    console.error("Erro na avalia\xE7\xE3o com IA:", error);
    res.status(500).json({
      error: "Falha ao avaliar a frase com o professor de IA.",
      details: error.message || error
    });
  }
});
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server fully operational on http://localhost:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
