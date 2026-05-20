import React, { useState, useEffect } from 'react';
import { HelpCircle, RefreshCw, Trophy, AlertTriangle, CheckCircle2, XCircle, ArrowRight, Play, Award, HelpCircle as HelpIcon, Sparkles } from 'lucide-react';
import { Verb, TenseKey } from '../types';

interface QuizQuestion {
  verb: Verb;
  tenseKey: TenseKey;
  tenseName: string;
  tenseFrenchName: string;
  pronoun: string;
  correctForm: string;
  translation: string;
}

interface QuizPanelProps {
  verbs: Verb[];
}

export default function QuizPanel({ verbs }: QuizPanelProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [answersHistory, setAnswersHistory] = useState<{
    question: QuizQuestion;
    userAnswer: string;
    isCorrect: boolean;
  }[]>([]);

  // Sound effects of sorts? Or simulated high-polish review. Let's build special characters toolbar.
  const SPECIAL_CHARS = ['é', 'è', 'ê', 'ë', 'à', 'â', 'ù', 'û', 'ç', 'î', 'ï', 'œ'];

  const handleInsertChar = (char: string) => {
    setUserAnswer(prev => prev + char);
  };

  const generateQuiz = () => {
    const generated: QuizQuestion[] = [];
    const tKeys: TenseKey[] = ['present', 'passé_composé', 'imparfait', 'futur_simple', 'conditionnel', 'subjonctif'];
    
    // Choose 10 random questions
    for (let i = 0; i < 10; i++) {
      const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
      const randomTenseKey = tKeys[Math.floor(Math.random() * tKeys.length)];
      const tenseDetails = randomVerb.tenses[randomTenseKey];
      const randomPronounIndex = Math.floor(Math.random() * 6);
      const formInfo = tenseDetails.forms[randomPronounIndex];

      generated.push({
        verb: randomVerb,
        tenseKey: randomTenseKey,
        tenseName: tenseDetails.name,
        tenseFrenchName: tenseDetails.frenchName,
        pronoun: formInfo.pronoun,
        correctForm: formInfo.form,
        translation: formInfo.translation
      });
    }

    setQuestions(generated);
    setCurrentIndex(0);
    setUserAnswer('');
    setHasSubmitted(false);
    setScore(0);
    setAnswersHistory([]);
    setIsPlaying(true);
  };

  const handleVerifyAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    if (hasSubmitted) return;
    if (!userAnswer.trim()) return;

    const currentQuestion = questions[currentIndex];
    
    // Clean and normalize answers to be generous with accidental spaces or capitalizations
    const cleanUser = userAnswer.trim().toLowerCase().replace(/['’]/g, "'");
    const cleanCorrect = currentQuestion.correctForm.trim().toLowerCase().replace(/['’]/g, "'");

    // Handle parentheses alternatives like allé(e)s
    let matches = false;
    if (cleanCorrect.includes('(')) {
      // Create alternatives: translate e.g. "allé(e)s" -> "allés" or "allées" or "allé" or "allée"
      const cleanedPattern = cleanCorrect
        .replace(/\(e\)s/g, 'es')
        .replace(/\(e\)/g, 'e')
        .replace(/\(s\)/g, 's');
      
      const cleanedPatternSg = cleanCorrect
        .replace(/\(e\)s/g, 's')
        .replace(/\(e\)/g, '')
        .replace(/\(s\)/g, '');

      matches = (cleanUser === cleanCorrect || cleanUser === cleanedPattern || cleanUser === cleanedPatternSg);
    } else {
      matches = (cleanUser === cleanCorrect);
    }

    setIsCorrect(matches);
    if (matches) {
      setScore(prev => prev + 1);
    }
    setHasSubmitted(true);

    setAnswersHistory(prev => [
      ...prev,
      {
        question: currentQuestion,
        userAnswer: userAnswer.trim(),
        isCorrect: matches
      }
    ]);
  };

  const handleNext = () => {
    if (currentIndex < 9) {
      setCurrentIndex(prev => prev + 1);
      setUserAnswer('');
      setHasSubmitted(false);
    } else {
      // Finished
      setCurrentIndex(10); 
    }
  };

  const getRank = (finalScore: number) => {
    if (finalScore === 10) return { title: '🏆 Grand Maître des Verbes', color: 'text-yellow-600 bg-yellow-100', text: 'Excelente! Você acertou todas as conjugações francesas! Suas bases estão perfeitamente consolidadas.' };
    if (finalScore >= 8) return { title: '🥇 Expert en Conjugaison', color: 'text-indigo-600 bg-indigo-50', text: 'Magnífico! Você domina quase todas as desinências dos verbos comuns.' };
    if (finalScore >= 5) return { title: '🥈 Étudiant Trilingue', color: 'text-amber-700 bg-amber-50', text: 'Muito bom! Você possui um ótimo instinto de radical e tempo. Continue estudando.' };
    return { title: '🥉 Apprenti Explorateur', color: 'text-slate-800 bg-slate-100', text: 'Uma boa oportunidade de rever as regras de radical e as desinências dos grupos na seção de Gramática.' };
  };

  const currentQ = questions[currentIndex];

  return (
    <div className="bg-white border-2 border-black p-6 md:p-8 neo-shadow">
      
      {/* Intro state */}
      {!isPlaying && (
        <div className="py-8 text-center space-y-6 max-w-xl mx-auto">
          <div className="w-20 h-20 bg-yellow-300 border-2 border-black rounded-full flex items-center justify-center mx-auto neo-shadow-sm">
            <Trophy className="w-10 h-10 text-black" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tight">
              Avaliador de Conjugações
            </h2>
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
              Teste seus conhecimentos franceses offline
            </p>
            <p className="text-xs text-slate-600 leading-relaxed font-sans pt-3">
              Iremos gerar <strong>10 desafios de escrita aleatórios</strong> com verbos regulares e irregulares de diversos grupos nos tempos chaves como Présent, Passé Composé e Imperfeito. Conjugue corretamente de acordo com o pronome sugerido!
            </p>
          </div>

          <button
            onClick={generateQuiz}
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-black py-4 px-10 border-2 border-black uppercase text-xs tracking-wider neo-shadow-sm cursor-pointer transition-all flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4 text-yellow-300" />
            Iniciar Teste Prático
          </button>
        </div>
      )}

      {/* Playing state */}
      {isPlaying && currentIndex < 10 && currentQ && (
        <div className="space-y-6">
          {/* Progress bar */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-black uppercase text-slate-500">
              <span>Questão {currentIndex + 1} de 10</span>
              <span className="bg-yellow-100 text-black px-2 py-0.5 border border-black font-semibold">
                Acertos: {score}
              </span>
            </div>
            <div className="h-4 bg-slate-100 border-2 border-black rounded-full overflow-hidden relative">
              <div 
                className="h-full bg-indigo-600 border-r-2 border-black transition-all duration-300"
                style={{ width: `${(currentIndex) * 10}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-4">
            
            {/* The Target Box (Left) */}
            <div className="lg:col-span-5 bg-indigo-600 border-2 border-black p-6 neo-shadow text-white flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-black uppercase text-indigo-200 tracking-wider">
                  DESAFIO DE CONJUGAÇÃO
                </span>
                <div className="space-y-1">
                  <div className="text-[11px] font-bold text-indigo-300 uppercase">Verbo Alvo:</div>
                  <h3 className="text-4xl font-black text-white uppercase tracking-tight font-mono">
                    {currentQ.verb.infinitive}
                  </h3>
                  <p className="text-xs text-yellow-300 font-bold uppercase">
                    ({currentQ.verb.translation})
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-6 mt-6 border-t border-indigo-400">
                <div>
                  <div className="text-[10px] font-black text-indigo-200 uppercase">Tempo Verbal:</div>
                  <strong className="text-lg font-black text-white block uppercase">
                    {currentQ.tenseFrenchName}
                  </strong>
                  <span className="text-xs text-indigo-200">
                    ({currentQ.tenseName})
                  </span>
                </div>

                <div>
                  <div className="text-[10px] font-black text-indigo-200 uppercase">Sujeito / Pronome:</div>
                  <strong className="text-2xl font-black text-yellow-300 block font-mono">
                    {currentQ.pronoun}
                  </strong>
                </div>
              </div>
            </div>

            {/* Answer Box (Right) */}
            <div className="lg:col-span-7 bg-white border-2 border-black p-6 neo-shadow space-y-5 flex flex-col justify-between">
              
              <form onSubmit={handleVerifyAnswer} className="space-y-4">
                <div>
                  <label className="block text-xs font-black text-slate-900 uppercase tracking-wide mb-2">
                    Escreva a forma conjugada correta:
                  </label>
                  <input
                    type="text"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    disabled={hasSubmitted}
                    placeholder="Ex: parlons"
                    className="w-full bg-slate-50 border-2 border-black p-4 text-base font-bold font-mono text-indigo-950 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all uppercase"
                    autoFocus
                    autoComplete="off"
                    autoCorrect="off"
                  />
                </div>

                {/* Accent Toolbar */}
                {!hasSubmitted && (
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">
                      Teclado de Acentos Franceses:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {SPECIAL_CHARS.map(char => (
                        <button
                          key={char}
                          type="button"
                          onClick={() => handleInsertChar(char)}
                          className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 border border-black text-xs font-black font-mono uppercase cursor-pointer"
                        >
                          {char}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Submit trigger button */}
                {!hasSubmitted ? (
                  <button
                    type="submit"
                    disabled={!userAnswer.trim()}
                    className="w-full bg-yellow-300 hover:bg-yellow-400 disabled:opacity-50 text-black font-black py-3 px-6 border-2 border-black uppercase text-xs tracking-wider cursor-pointer neo-shadow-sm transition-all"
                  >
                    Verificar Conjugação
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full bg-black hover:bg-slate-900 text-white font-black py-4 px-6 border-2 border-black uppercase text-xs tracking-wider cursor-pointer neo-shadow-sm transition-all flex items-center justify-center gap-2"
                  >
                    {currentIndex < 9 ? 'Próxima Questão' : 'Ver Resultado Final'}
                    <ArrowRight className="w-4 h-4 text-yellow-300" />
                  </button>
                )}
              </form>

              {/* Feedback cards on actions */}
              {hasSubmitted && (
                <div className="space-y-3 mt-4">
                  {isCorrect ? (
                    <div className="bg-emerald-100 border-2 border-black p-4 text-emerald-950 flex items-start gap-2 neo-shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-xs font-black uppercase text-emerald-800">C’est correct! Excelente trabalho!</strong>
                        <p className="text-xs font-semibold mt-0.5">
                          Você conjugou perfeitamente. Significado: "{currentQ.translation}"
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-red-100 border-2 border-black p-4 text-red-950 flex items-start gap-2 neo-shadow-sm">
                      <XCircle className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-xs font-black uppercase text-red-800">Attention! Resposta incorreta.</strong>
                        <div className="text-xs font-semibold mt-0.5 space-y-1">
                          <p>Sua resposta: <strong className="font-mono text-red-700 uppercase">"{userAnswer}"</strong></p>
                          <p>A resposta correta é: <strong className="font-mono text-indigo-900 text-sm block uppercase mt-1 p-1.5 bg-white border border-black inline-block">{currentQ.correctForm} <span className="text-xs text-slate-500 font-sans font-normal normal-case ml-2">({currentQ.translation})</span></strong></p>
                          <p className="text-[10px] text-slate-500 italic mt-1.5 pt-1 border-t border-red-200">
                            Significa: "{currentQ.translation}"
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

            </div>

          </div>
        </div>
      )}

      {/* Finished Summary Results State */}
      {isPlaying && currentIndex >= 10 && (
        <div className="space-y-6">
          
          {/* Main Hero Summary */}
          <div className="bg-yellow-100 border-2 border-black p-6 md:p-8 text-center space-y-5 neo-shadow max-w-2xl mx-auto">
            <Trophy className="w-16 h-16 text-black mx-auto animate-bounce" />
            
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase bg-black text-yellow-300 px-3 py-1 border border-black">
                Resultat Final
              </span>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mt-2.5">
                {getRank(score).title}
              </h3>
              <p className="text-xs font-bold text-slate-600 uppercase">
                Acertos correspondentes: <span className="text-indigo-600 font-extrabold">{score} de 10</span>
              </p>
            </div>

            <p className="text-sm font-semibold max-w-md mx-auto leading-relaxed text-slate-800">
              {getRank(score).text}
            </p>

            <button
              onClick={generateQuiz}
              className="bg-black text-white hover:bg-slate-900 text-xs font-black uppercase py-3.5 px-8 border-2 border-black tracking-wider neo-shadow-sm cursor-pointer transition-all flex items-center justify-center gap-2 mx-auto"
            >
              <RefreshCw className="w-3.5 h-3.5 text-yellow-300" />
              Experimentar de Novo
            </button>
          </div>

          {/* Table history list of correct or incorrect items for active review */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase text-slate-500 border-l-4 border-black pl-2">
              Revisão de Desafios & Erros
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {answersHistory.map((item, index) => (
                <div 
                  key={index}
                  className={`p-4 border-2 border-black flex items-start gap-3 transition-all ${
                    item.isCorrect ? 'bg-emerald-50/20' : 'bg-red-50/20'
                  }`}
                >
                  {item.isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  )}

                  <div className="space-y-1 text-xs">
                    <div className="font-extrabold uppercase text-slate-900 tracking-tight">
                      Questão {index + 1}: {item.question.verb.infinitive.toUpperCase()} ({item.question.tenseFrenchName})
                    </div>
                    <div className="font-semibold text-slate-600">
                      Sujeito: <strong className="font-mono text-black">{item.question.pronoun}</strong>
                    </div>
                    <div>
                      Sua resposta: <span className={`font-mono font-bold ${item.isCorrect ? 'text-emerald-700' : 'text-red-700 line-through'}`}>"{item.userAnswer || '(vazia)'}"</span>
                    </div>
                    {!item.isCorrect && (
                      <div className="font-semibold text-indigo-950">
                        Correto: <strong className="font-mono uppercase bg-white px-1.5 py-0.5 border border-black inline-block text-[11px] font-black">{item.question.correctForm}</strong>
                      </div>
                    )}
                    <span className="text-[10px] text-slate-500 italic block pt-1">
                      Significa: "{item.question.translation}"
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
