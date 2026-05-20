import React, { useState, useEffect } from 'react';
import { Play, Sparkles, RefreshCw, CheckCircle2, XCircle, FileText, ArrowRight, ClipboardCheck, Info, AlertTriangle } from 'lucide-react';
import { Verb, TenseKey, EvaluationResult } from '../types';
import { evaluateStudentSentence } from '../data/conjugationService';

interface PracticePanelProps {
  verbs: Verb[];
  hasApiKey: boolean;
}

export default function PracticePanel({ verbs, hasApiKey }: PracticePanelProps) {
  const [selectedVerbInfinitive, setSelectedVerbInfinitive] = useState(verbs[0]?.infinitive || 'être');
  const [selectedTenseKey, setSelectedTenseKey] = useState<TenseKey>('present');
  const [pronounIndex, setPronounIndex] = useState(0);
  
  const [userSentence, setUserSentence] = useState('');
  const [evaluating, setEvaluating] = useState(false);
  const [evalResult, setEvalResult] = useState<EvaluationResult | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  // Find currently active parameters
  const activeVerb = verbs.find(v => v.infinitive === selectedVerbInfinitive) || verbs[0];
  const activeTense = activeVerb?.tenses[selectedTenseKey];
  const activeForm = activeTense?.forms[pronounIndex];

  // Auto-reset evaluation and input if verb/tense/pronoun changes
  useEffect(() => {
    setEvalResult(null);
    setErrorMsg('');
  }, [selectedVerbInfinitive, selectedTenseKey, pronounIndex]);

  const selectRandomTarget = () => {
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const tKeys: TenseKey[] = ['present', 'passé_composé', 'imparfait', 'futur_simple', 'conditionnel', 'subjonctif'];
    const randomTense = tKeys[Math.floor(Math.random() * tKeys.length)];
    const randomPronoun = Math.floor(Math.random() * 6);

    setSelectedVerbInfinitive(randomVerb.infinitive);
    setSelectedTenseKey(randomTense);
    setPronounIndex(randomPronoun);
    setUserSentence('');
    setEvalResult(null);
  };

  const handleSubmitPractice = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userSentence.trim()) {
      setErrorMsg('Escreva uma frase antes de avaliar.');
      return;
    }
    if (!activeForm) return;

    setErrorMsg('');
    setEvaluating(true);
    setEvalResult(null);

    // Dynamic, high-accuracy offline correction evaluation with a realistic pedagogical delay (600ms)
    setTimeout(() => {
      try {
        const localResult = evaluateStudentSentence(
          activeVerb.infinitive,
          activeTense.frenchName,
          activeForm.pronoun,
          activeForm.form,
          userSentence.trim()
        );
        setEvalResult(localResult as any);
      } catch (err: any) {
        console.error(err);
        setErrorMsg('Falha ao processar avaliação pedagógica local.');
      } finally {
        setEvaluating(false);
      }
    }, 600);
  };

  const getTensePortuguese = (tense: TenseKey) => {
    switch (tense) {
      case 'present': return 'Presente';
      case 'passé_composé': return 'Passado Composto';
      case 'imparfait': return 'Pretérito Imperfeito';
      case 'futur_simple': return 'Futuro Simples';
      case 'conditionnel': return 'Condicional Presente';
      case 'subjonctif': return 'Subjuntivo Presente';
    }
  };

  const tKeyList: TenseKey[] = ['present', 'passé_composé', 'imparfait', 'futur_simple', 'conditionnel', 'subjonctif'];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Target Builder (left side) */}
      <div className="lg:col-span-12 xl:col-span-5 space-y-5">
        <div className="bg-white border-2 border-black p-6 neo-shadow">
          <div className="flex justify-between items-center mb-5 pb-3 border-b-2 border-black">
            <h3 className="text-xs font-black text-indigo-600 uppercase tracking-wider flex items-center gap-1.5 border-l-4 border-indigo-600 pl-2">
              Gerar Desafio
            </h3>
            <button
              onClick={selectRandomTarget}
              className="bg-yellow-300 hover:bg-yellow-400 border-2 border-black text-black px-3 py-1 text-[10px] font-black uppercase transition-all flex items-center gap-1 cursor-pointer neo-shadow-sm"
            >
              <RefreshCw className="w-3" /> Sortear Desafio
            </button>
          </div>

          <div className="space-y-4">
            {/* Verb Select */}
            <div>
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wider mb-1.5">
                Escolha o Verbo
              </label>
              <select
                value={selectedVerbInfinitive}
                onChange={(e) => setSelectedVerbInfinitive(e.target.value)}
                className="w-full bg-slate-50 border-2 border-black py-2.5 px-3 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {verbs.map(v => (
                  <option key={v.id} value={v.infinitive}>
                    {v.infinitive.toUpperCase()} ({v.translation})
                  </option>
                ))}
              </select>
            </div>

            {/* Tense Select */}
            <div>
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wider mb-1.5">
                Tempo Verbal Alvo
              </label>
              <select
                value={selectedTenseKey}
                onChange={(e) => setSelectedTenseKey(e.target.value as TenseKey)}
                className="w-full bg-slate-50 border-2 border-black py-2.5 px-3 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {tKeyList.map(tk => (
                  <option key={tk} value={tk}>
                    {getTensePortuguese(tk)} ({tk === 'passé_composé' ? 'Passé Composé' : tk})
                  </option>
                ))}
              </select>
            </div>

            {/* Pronoun Select */}
            <div>
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wider mb-1.5">
                Sujeito / Pronome Alvo (Escolha um)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {activeTense?.forms.map((f, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setPronounIndex(idx)}
                    className={`py-2.5 px-1.5 text-xs font-black border-2 border-black transition-all cursor-pointer ${
                      pronounIndex === idx
                        ? 'bg-black text-white neo-shadow-sm'
                        : 'bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {f.pronoun}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Task target card */}
        {activeForm && (
          <div className="bg-indigo-600 text-white border-2 border-black p-6 neo-shadow relative overflow-hidden">
            <span className="text-[10px] uppercase font-black text-indigo-200 tracking-wider">
              Objetivo de Escrita
            </span>
            
            <p className="text-sm mt-1.5 text-white font-medium leading-relaxed">
              Escreva uma frase completa em francês utilizando o verbo <strong className="underline decoration-yellow-300 decoration-2 font-black">{activeVerb.infinitive.toUpperCase()}</strong>:
            </p>

            <div className="my-4 p-4 bg-yellow-300 border-2 border-black text-black neo-shadow-sm">
              <div className="text-[10px] uppercase font-black text-black/70">Forma conjugada requerida:</div>
              <div className="text-2xl font-black font-sans mt-0.5 tracking-tight">
                {activeForm.pronoun} {activeForm.form}
              </div>
              <div className="text-[11px] font-bold text-black/80 mt-1 italic">
                Significa: "{activeForm.translation}"
              </div>
            </div>

            <p className="text-[10px] text-indigo-100 leading-normal flex items-start gap-1.5">
              <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-yellow-300" />
              <span>Sua frase pode ser longa ou curta, mas o professor IA irá avaliar ortografia, coerência de gênero/número e a correta flexão.</span>
            </p>
          </div>
        )}
      </div>

      {/* Editor & AI Evaluation Workspace (right side) */}
      <div className="lg:col-span-12 xl:col-span-7 space-y-5">
        <form onSubmit={handleSubmitPractice} className="bg-white border-2 border-black p-6 neo-shadow space-y-4">
          <div>
            <label className="block text-sm font-black text-slate-900 uppercase tracking-tight mb-2">
              Sua Frase em Francês:
            </label>
            <textarea
              value={userSentence}
              onChange={(e) => {
                setUserSentence(e.target.value);
                setErrorMsg('');
              }}
              placeholder={`Ex: ${activeVerb.examples[pronounIndex]?.french || 'Escreva sua frase aqui...'}`}
              rows={4}
              disabled={evaluating}
              className="w-full bg-slate-50 border-2 border-black p-4 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-sans text-slate-900"
            />
          </div>

          {errorMsg && (
            <div className="p-3.5 bg-red-100 border-2 border-black text-xs text-red-950 flex items-start gap-2 leading-relaxed">
              <AlertTriangle className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
              <div>
                <p className="font-black uppercase tracking-wider text-[10px]">Aviso do Sistema</p>
                <p className="mt-0.5 font-semibold text-red-900">{errorMsg}</p>
              </div>
            </div>
          )}

          <div className="p-3 bg-yellow-50 border-2 border-black text-[10px] font-bold text-slate-800 flex items-start gap-2">
            <Info className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
            <span>Este corretor opera <strong>100% offline</strong> utilizando regras gramaticais compiladas de alto desempenho. Nenhuma tecla de acesso à IA externa é necessária!</span>
          </div>

          <div className="flex justify-end pt-1">
            <button
              type="submit"
              disabled={evaluating || !userSentence.trim()}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-black py-3 px-6 border-2 border-black neo-shadow-sm transition-all disabled:opacity-50 flex items-center gap-2 text-xs uppercase tracking-wider cursor-pointer"
            >
              {evaluating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-white" />
                  Analisador ortográfico está corrigindo...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                  Submeter para Avaliação Instantânea
                </>
              )}
            </button>
          </div>
        </form>

        {/* LOADING ANIMATED SKELETON */}
        {evaluating && (
          <div className="bg-white border-2 border-black p-8 neo-shadow flex flex-col items-center justify-center text-center space-y-4">
            <div className="relative">
              <div className="w-12 h-12 border-4 border-black border-t-indigo-600 animate-spin" />
              <Sparkles className="absolute -top-1.5 -right-1.5 w-6 h-6 text-indigo-600 animate-pulse" />
            </div>
            <div>
              <h4 className="font-black uppercase tracking-tight text-slate-900 text-sm">Corrigindo Frase em Tempo Real</h4>
              <p className="text-xs text-slate-500 max-w-sm mt-1 leading-relaxed font-semibold">
                Analisando a estrutura verbal, verificando concordâncias do particípio passado e gerando o parecer pedagógico...
              </p>
            </div>
          </div>
        )}

        {/* RESULTS INTERACTION PANEL */}
        {evalResult && (
          <div className="bg-white border-2 border-black neo-shadow overflow-hidden">
            {/* Header Badge */}
            <div className={`p-5 flex items-center gap-3 border-b-2 border-black ${
              evalResult.correct 
                ? 'bg-emerald-100 text-emerald-950' 
                : 'bg-red-100 text-red-950'
            }`}>
              {evalResult.correct ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-700 shrink-0" />
              ) : (
                <XCircle className="w-6 h-6 text-red-700 shrink-0" />
              )}
              
              <div>
                <h4 className="font-extrabold text-sm uppercase tracking-tight">
                  {evalResult.correct ? 'Félicitations! Frase Correta' : 'Atenção: Necessita Ajustes'}
                </h4>
                <p className="text-[10px] uppercase font-black tracking-widest text-slate-500 mt-0.5">
                  Parecer do Avaliador Pedagógico
                </p>
              </div>
            </div>

            <div className="p-6 space-y-5">
              {/* Feedback text */}
              <div>
                <h5 className="text-[11px] font-black text-slate-500 uppercase tracking-wider mb-2 border-l-4 border-black pl-2">
                  Comentário Pedagógico
                </h5>
                <p className="text-xs md:text-sm text-slate-900 leading-relaxed font-semibold bg-slate-50 p-4 border-2 border-black neo-shadow-sm">
                  {evalResult.feedback}
                </p>
              </div>

              {/* Translation */}
              <div>
                <h5 className="text-[11px] font-black text-slate-500 uppercase tracking-wider mb-1.5">
                  Tradução em Português
                </h5>
                <p className="text-xs font-serif italic font-bold text-slate-700">
                  "{evalResult.translation}"
                </p>
              </div>

              {/* Analysis details block */}
              <div className="border-t-2 border-black pt-4 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-[11px] font-black text-slate-500 uppercase tracking-wider mb-1.5">
                      Verbo Alvo ({evalResult.verb.toUpperCase()})
                    </h5>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-black uppercase px-2 py-1 border border-black ${
                        evalResult.analysisDetails.verbCheck === 'correct'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {evalResult.analysisDetails.verbCheck === 'correct' ? 'Verbo Correto' : 'Verbo Incorreto'}
                      </span>
                      <span className="text-xs text-slate-600 font-bold font-mono">
                        {evalResult.tense}
                      </span>
                    </div>
                  </div>

                  {evalResult.analysisDetails.suggestedFix !== evalResult.userSentence && (
                    <div>
                      <h5 className="text-[11px] font-black text-red-600 uppercase tracking-wider mb-1.5">
                        Frase Sugerida pelo Professor
                      </h5>
                      <span className="text-xs font-mono font-bold text-indigo-950 bg-indigo-50 border border-indigo-200 px-2 py-1 inline-block">
                        {evalResult.analysisDetails.suggestedFix}
                      </span>
                    </div>
                  )}
                </div>

                <div className="bg-yellow-50 p-4 border-2 border-black neo-shadow-sm">
                  <h6 className="text-[11px] font-black text-slate-900 tracking-wider uppercase mb-1.5 flex items-center gap-1.5 border-b border-black/10 pb-1">
                    <FileText className="w-4 h-4 text-indigo-600" /> Análise Gramatical Detalhada:
                  </h6>
                  <p className="text-xs text-slate-800 leading-relaxed font-sans font-medium">
                    {evalResult.analysisDetails.explanation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
