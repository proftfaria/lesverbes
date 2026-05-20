import React, { useState } from 'react';
import { BookOpen, Sparkles, AlertTriangle, Lightbulb, GraduationCap, FastForward, HelpCircle } from 'lucide-react';
import { IRREGULAR_VERBS_DATA, IrregularVerbDetail } from '../data/irregularVerbsData';

export default function IrregularVerbsPanel() {
  const [selectedVerbId, setSelectedVerbId] = useState<string>('etre');
  const [activeTenseKey, setActiveTenseKey] = useState<'present' | 'passé_composé' | 'imparfait' | 'futur_simple'>('present');

  const activeVerb = IRREGULAR_VERBS_DATA.find(v => v.id === selectedVerbId) || IRREGULAR_VERBS_DATA[0];
  const activeTenseData = activeVerb.tenses[activeTenseKey];

  const getTenseLabel = (key: string) => {
    switch (key) {
      case 'present': return 'Présent (Presente)';
      case 'passé_composé': return 'Passé Composé (Passado)';
      case 'imparfait': return 'Imparfait (Imperfeito)';
      case 'futur_simple': return 'Futur Simple (Futuro)';
      default: return key;
    }
  };

  const difficultyColors = {
    A1: 'bg-emerald-100 text-emerald-950 border-emerald-400',
    A2: 'bg-indigo-100 text-indigo-950 border-indigo-400',
    B1: 'bg-amber-100 text-amber-950 border-amber-400',
    B2: 'bg-rose-100 text-rose-950 border-rose-400'
  };

  return (
    <div className="space-y-6">
      
      {/* Intro Bento Hero Card */}
      <div className="bg-yellow-100 border-2 border-black p-6 neo-shadow flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase bg-black text-yellow-300 px-2.5 py-1 border border-black">
              Irregularités Majeures
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-black text-slate-950 uppercase tracking-tight mt-1">
            Verbos Irregulares Comuns em Francês
          </h2>
          <p className="text-sm text-slate-800 font-semibold leading-relaxed">
            Consulte os maiores "rebeldes" da gramática francesa. Entenda a lógica histórica dos seus múltiplos radicais (stems) e acabe de uma vez por todas com a decoreba sem sentido.
          </p>
        </div>
        <div className="flex items-center gap-2 text-indigo-700 bg-white border-2 border-black px-4 py-2 font-black text-xs uppercase neo-shadow-sm">
          <GraduationCap className="w-4 h-4" /> {IRREGULAR_VERBS_DATA.length} Verbos Chave
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Irregular Verbs Selector Stack (left side) */}
        <div className="lg:col-span-4 space-y-3">
          <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 border-l-4 border-black pl-2">
            Selecione o Verbo Irregular
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
            {IRREGULAR_VERBS_DATA.map((v) => {
              const isSelected = v.id === selectedVerbId;
              return (
                <button
                  key={v.id}
                  onClick={() => setSelectedVerbId(v.id)}
                  className={`w-full text-left p-4 border-2 border-black transition-all flex justify-between items-center cursor-pointer ${
                    isSelected
                      ? 'bg-black text-white neo-shadow-sm translate-y-[-2px]'
                      : 'bg-white text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <div>
                    <div className="text-sm font-black uppercase tracking-tight">
                      {v.infinitive}
                    </div>
                    <div className={`text-[11px] font-medium leading-none mt-1 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                      {v.translation}
                    </div>
                  </div>
                  <span className={`text-[8px] font-mono px-1.5 py-0.5 border-2 border-black uppercase font-black ${
                    isSelected ? 'bg-yellow-300 text-black' : 'bg-slate-100 text-slate-800'
                  }`}>
                    {v.difficulty}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Tip Box */}
          <div className="p-4 bg-indigo-50 border-2 border-black text-xs font-semibold text-slate-800 space-y-1.5 leading-relaxed">
            <h4 className="font-black text-indigo-950 uppercase text-[10px] sm:text-xs flex items-center gap-1">
              <Lightbulb className="w-4 h-4 text-amber-500 shrink-0" />
              DICA MNEMÓNICA
            </h4>
            <p>
              Os verbos mais frequentes em qualquer língua costumam ser os mais irregulares devido à rapidez com que foram falados ao longo de séculos (chamado de <em>erosão fonética</em>).
            </p>
          </div>
        </div>

        {/* Selected Verb Conjugation Board (right side) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white border-2 border-black p-6 neo-shadow space-y-5">
            
            {/* Header Description of the verb */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b-2 border-black pb-4 gap-3">
              <div>
                <h3 className="text-2xl font-black text-black uppercase tracking-tight flex items-center gap-2">
                  Verbo {activeVerb.infinitive.toUpperCase()}
                  <span className={`text-xs uppercase px-2 py-0.5 border border-black font-mono font-black select-none ${difficultyColors[activeVerb.difficulty]}`}>
                    {activeVerb.difficulty}
                  </span>
                </h3>
                <p className="text-xs text-slate-500 font-bold uppercase mt-1">
                  Tradução: <span className="text-indigo-600 underline font-black">{activeVerb.translation}</span>
                </p>
              </div>
              
              <div className="text-[11px] font-medium text-slate-700 bg-slate-50 border border-black p-2 max-w-xs leading-relaxed">
                {activeVerb.quickExplanation}
              </div>
            </div>

            {/* Tense Choice Buttons */}
            <div>
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wider mb-2">
                Escolha o Tempo Verbal
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(['present', 'passé_composé', 'imparfait', 'futur_simple'] as const).map((tk) => {
                  const isTenseActive = activeTenseKey === tk;
                  return (
                    <button
                      key={tk}
                      type="button"
                      onClick={() => setActiveTenseKey(tk)}
                      className={`py-2 px-1 text-xs font-black border-2 border-black text-center transition-all cursor-pointer truncate ${
                        isTenseActive
                          ? 'bg-yellow-300 text-black neo-shadow-sm font-black'
                          : 'bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {tk === 'present' && 'Présent (Presente)'}
                      {tk === 'passé_composé' && 'Passé Composé'}
                      {tk === 'imparfait' && 'Imparfait'}
                      {tk === 'futur_simple' && 'Futur Simple'}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Conjugation Grid (Bento Boxes for the 6 forms) */}
            <div className="space-y-2">
              <h4 className="text-xs font-black uppercase text-indigo-600 flex items-center gap-1 pl-1">
                <FastForward className="w-3.5 h-3.5 text-indigo-600" />
                Formas Verbais do {getTenseLabel(activeTenseKey)}
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                {activeTenseData.forms.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-slate-50 border-2 border-black hover:bg-indigo-50/20 transition-all flex flex-col justify-between"
                  >
                    <span className="text-[10px] font-mono font-black text-slate-400 uppercase">
                      {item.pronoun}
                    </span>
                    <strong className="text-lg font-black text-slate-950 font-sans tracking-tight block truncate mt-0.5">
                      {item.form}
                    </strong>
                    <span className="text-[11px] italic font-bold text-slate-600 lowercase block mt-1.5 leading-none">
                      {item.translation}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Explanations of deviations and patterns */}
            <div className="bg-yellow-50 p-5 border-2 border-black space-y-3">
              <h4 className="text-xs font-black text-slate-900 tracking-tight uppercase border-b border-black/15 pb-1 flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                Por que este verbo é irregular e como memorizar?
              </h4>
              <ul className="space-y-2">
                {activeVerb.patternsAndIrregularities.map((rule, idx) => (
                  <li key={idx} className="text-xs text-slate-800 leading-relaxed font-semibold flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-1.5" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
