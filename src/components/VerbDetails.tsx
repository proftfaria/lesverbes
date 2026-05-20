import { useState } from 'react';
import { Info, HelpCircle, FileText, ChevronRight, Award, HelpCircle as HelpIcon, Volume2 } from 'lucide-react';
import { Verb, TenseKey } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface VerbDetailsProps {
  verb: Verb;
}

export default function VerbDetails({ verb }: VerbDetailsProps) {
  const [selectedTense, setSelectedTense] = useState<TenseKey>('present');

  const tenses: { key: TenseKey; label: string; sub: string }[] = [
    { key: 'present', label: 'Présent', sub: 'Presente' },
    { key: 'passé_composé', label: 'Passé Composé', sub: 'Passado Comp.' },
    { key: 'imparfait', label: 'Imparfait', sub: 'Imperfeito' },
    { key: 'futur_simple', label: 'Futur Simple', sub: 'Futuro' },
    { key: 'conditionnel', label: 'Conditionnel', sub: 'Condicional' },
    { key: 'subjonctif', label: 'Subjonctif', sub: 'Subjuntivo' }
  ];

  const currentTense = verb.tenses[selectedTense];

  return (
    <div className="space-y-6">
      {/* Verb Header Info */}
      <div className="bg-slate-50 border-2 border-black p-6 md:p-8 neo-shadow text-slate-900">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="space-y-3">
            <div>
              <span className="text-[10px] font-black uppercase bg-yellow-300 text-black border-2 border-black px-2.5 py-1 neo-shadow-sm inline-block tracking-wider">
                {verb.regular ? 'Regulier' : 'Irrégulier'} • {verb.group === '1er' ? '1er Groupe' : verb.group === '2e' ? '2e Groupe' : '3e Groupe'}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-indigo-600 uppercase tracking-tighter">
              {verb.infinitive}
            </h1>
            
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-[10px] font-mono font-black uppercase tracking-wide px-2.5 py-1 bg-white border border-black text-black">
                Nível {verb.difficulty}
              </span>
              <span className="text-[10px] uppercase font-black px-2.5 py-1 bg-black text-white">
                Auxiliaire: {verb.auxiliary}
              </span>
            </div>
          </div>

          <div className="text-left md:text-right md:min-w-[200px] border-l-4 md:border-l-0 md:border-r-4 border-indigo-600 pl-3 md:pl-0 md:pr-4">
            <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
              Significado
            </span>
            <p className="text-xl font-serif italic font-bold text-slate-900 capitalize mt-0.5">
              "{verb.translation}"
            </p>
          </div>
        </div>

        {/* Dynamic Explanation block */}
        <div className="mt-6 border-t-2 border-black pt-5 flex gap-3 text-slate-700 text-xs md:text-sm leading-relaxed items-start">
          <Info className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
          <p className="font-medium text-slate-700">
            {verb.explanation}
          </p>
        </div>
      </div>

      {/* Tense Tabs Selection */}
      <div className="bg-white border-2 border-black p-4 neo-shadow">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {tenses.map((t) => {
            const isSelected = selectedTense === t.key;
            return (
              <button
                key={t.key}
                onClick={() => setSelectedTense(t.key)}
                className={`py-2.5 px-3 border-2 border-black transition-all text-xs flex flex-col items-center justify-center font-black cursor-pointer uppercase ${
                  isSelected
                    ? 'bg-yellow-300 text-black neo-shadow-sm font-black'
                    : 'bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span className="font-extrabold text-xs md:text-sm tracking-tight">{t.label}</span>
                <span className={`text-[9px] mt-0.5 font-bold ${isSelected ? 'text-black/80' : 'text-slate-400'}`}>
                  {t.sub}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Conjugation Display Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 bg-white border-2 border-black p-6 neo-shadow">
          <div className="mb-4 border-b-2 border-black pb-4">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight flex items-center gap-1.5 border-l-4 border-indigo-600 pl-2">
              Tempo: {currentTense?.frenchName || selectedTense}
            </h3>
            <p className="text-[11px] text-slate-600 mt-1.5 leading-relaxed font-semibold">
              {currentTense?.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-5">
            {currentTense?.forms.map((f, index) => {
              return (
                <div
                  key={index}
                  className="p-4 border-2 border-black bg-slate-50 flex items-center justify-between"
                >
                  <div className="space-y-0.5">
                    <span className="text-[10px] uppercase font-mono text-slate-400 font-extrabold">
                      {f.pronoun}
                    </span>
                    <p className="text-lg font-black text-indigo-700 font-sans tracking-tight">
                      {f.form}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-slate-800 bg-white border border-black px-2 py-1 neo-shadow-sm uppercase font-sans">
                      {f.translation}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          
          {currentTense?.example && (
            <div className="mt-5 p-4 border-2 border-dashed border-indigo-500 bg-indigo-50/50">
              <span className="text-[10px] font-black uppercase text-indigo-600 bg-indigo-100 border border-indigo-200 px-2.5 py-1 inline-block tracking-wider mb-2 font-mono">
                Exemplo do tempo: {currentTense.frenchName}
              </span>
              <p className="text-base font-black text-indigo-700 font-sans tracking-tight leading-relaxed">
                "{currentTense.example.french}"
              </p>
              <p className="text-xs text-slate-600 mt-1 font-bold">
                {currentTense.example.portuguese}
              </p>
            </div>
          )}

          <div className="mt-5 text-[10px] font-black uppercase tracking-wider text-slate-400 border-t border-slate-200 pt-3.5 flex items-center gap-1.5 justify-end">
            <HelpIcon className="w-3.5 h-3.5 text-slate-400" />
            <span>Pratique lendo as formas em voz alta para reflexos automáticos.</span>
          </div>
        </div>

        {/* Examples section */}
        <div className="lg:col-span-5 bg-indigo-600 text-white border-2 border-black p-6 neo-shadow flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-black uppercase text-white pb-3 border-b border-indigo-500 flex items-center gap-2">
              <FileText className="w-4.5 h-4.5 text-yellow-300" />
              Exemples de phrases
            </h3>
            <div className="mt-4 space-y-4">
              {currentTense?.example && (
                <div className="bg-yellow-300 text-black p-4 border-2 border-black neo-shadow-sm space-y-1">
                  <span className="text-[9px] bg-black text-white font-mono font-black px-1.5 py-0.5 uppercase tracking-wide">
                    Exemple: {currentTense.frenchName}
                  </span>
                  <p className="italic font-serif text-sm font-black leading-relaxed">
                    "{currentTense.example.french}"
                  </p>
                  <p className="text-[10px] text-black/80 font-bold uppercase tracking-wider">
                    {currentTense.example.portuguese}
                  </p>
                </div>
              )}
              {verb.examples.map((ex, i) => {
                return (
                  <div key={i} className="bg-indigo-700/50 p-3.5 border-l-4 border-yellow-300 space-y-1">
                    <span className="text-[9px] bg-black text-white/90 font-mono font-bold px-1.5 py-0.5 uppercase tracking-wide">
                      {ex.pronoun}
                    </span>
                    <p className="italic font-serif text-sm leading-relaxed text-white">
                      "{ex.french}"
                    </p>
                    <p className="text-[10px] text-indigo-200 mt-1 uppercase font-bold tracking-wider">
                      {ex.portuguese}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-indigo-950/40 border border-indigo-500/30 p-3 mt-6">
            <p className="text-[10px] leading-relaxed text-indigo-200 italic font-medium">
              "Lembre-se: em francês, a conjugação em contexto fixa melhor na memória de longo prazo. Reescreva estes padrões no Caderno de Treino."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
