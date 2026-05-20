import React, { useState, useEffect } from 'react';
import { BookOpen, GraduationCap, Sparkles, RefreshCw, PenTool, Globe, Info, AlertTriangle, Check, Trophy } from 'lucide-react';
import { PRELOADED_VERBS } from './data/verbs';
import { Verb } from './types';
import VerbSelector from './components/VerbSelector';
import VerbDetails from './components/VerbDetails';
import GrammarPanel from './components/GrammarPanel';
import PracticePanel from './components/PracticePanel';
import IrregularVerbsPanel from './components/IrregularVerbsPanel';
import QuizPanel from './components/QuizPanel';
import { getOfflineConjugation } from './data/conjugationService';

export default function App() {
  const [activeTab, setActiveTab] = useState<'explorer' | 'practice' | 'grammar' | 'irregular' | 'quiz'>('explorer');
  const [verbs, setVerbs] = useState<Verb[]>(PRELOADED_VERBS);
  const [selectedVerbId, setSelectedVerbId] = useState<string>('etre');
  const [hasApiKey, setHasApiKey] = useState<boolean>(true);
  const [apiChecked, setApiChecked] = useState<boolean>(true);
  
  // Searching States
  const [aiSearching, setAiSearching] = useState<boolean>(false);
  const [aiSearchError, setAiSearchError] = useState<string>('');

  // Find the currently selected verb details
  const currentVerb = verbs.find(v => v.id === selectedVerbId) || verbs[0];

  const handleSearchAI = async (verbName: string) => {
    setAiSearching(true);
    setAiSearchError('');
    
    // Satisfying simulated speed transition for tactile quality
    await new Promise(resolve => setTimeout(resolve, 350));
    
    try {
      const newVerb = getOfflineConjugation(verbName);
      
      // Prepend or add new verb to the list in state
      setVerbs(prev => {
        if (prev.some(v => v.id === newVerb.id)) {
          return prev; // don't duplicate
        }
        return [...prev, newVerb];
      });

      // Set actively selected verb
      setSelectedVerbId(newVerb.id);
    } catch (err: any) {
      console.error(err);
      setAiSearchError(err.message || 'Erro ao organizar as conjugações offline para o verbo solicitado.');
      throw err;
    } finally {
      setAiSearching(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans select-none pb-12">
      {/* Top Banner Navigation bar */}
      <header className="bg-white border-b-4 border-black sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Main Logo Text */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-black flex items-center justify-center text-white font-mono font-black text-xl border-2 border-black neo-shadow-sm uppercase">
              FR
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-black tracking-tighter uppercase border-b-4 border-indigo-600 inline-block font-sans text-slate-950">
                Maître des Verbes
              </h1>
              <p className="text-[11px] sm:text-xs font-bold text-slate-500 tracking-wider uppercase mt-1">
                Guia Interativo de Conjugação Francesa & Gramática
              </p>
            </div>
          </div>

          {/* Offline Engine Status Badge */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-yellow-300 border-2 border-black px-3 py-1.5 font-bold uppercase text-[10px] tracking-wider text-black neo-shadow-sm select-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
              </span>
              Motor Offline Ativo
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Quick App Intro Panel */}
        <div className="bg-white border-2 border-black p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 neo-shadow">
          <div className="space-y-1 max-w-xl">
            <h2 className="text-xl font-black text-slate-950 uppercase tracking-tight">
              Aprenda a Estrutura dos Verbos Franceses de Forma Lógica
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-sans">
              Esqueça tabelas quilométricas para decorar. Selecione um verbo modelo, examine as desinências destacadas por tempos verbais, consulte os rebeldes irregulares e teste seus instintos em nosso quiz gamificado imediato.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 w-full lg:w-auto pb-1 lg:pb-0">
            <button
              onClick={() => setActiveTab('explorer')}
              className={`whitespace-nowrap flex items-center gap-1.5 px-3 py-2 border-2 border-black font-black uppercase text-[10px] transition-all cursor-pointer ${
                activeTab === 'explorer'
                  ? 'bg-yellow-300 text-black neo-shadow-sm'
                  : 'bg-white hover:bg-slate-50 text-slate-700'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" /> Explorador
            </button>
            <button
              onClick={() => setActiveTab('irregular')}
              className={`whitespace-nowrap flex items-center gap-1.5 px-3 py-2 border-2 border-black font-black uppercase text-[10px] transition-all cursor-pointer ${
                activeTab === 'irregular'
                  ? 'bg-yellow-300 text-black neo-shadow-sm'
                  : 'bg-white hover:bg-slate-50 text-slate-700'
              }`}
            >
              <Globe className="w-3.5 h-3.5" /> Irregulares
            </button>
            <button
              onClick={() => setActiveTab('quiz')}
              className={`whitespace-nowrap flex items-center gap-1.5 px-3 py-2 border-2 border-black font-black uppercase text-[10px] transition-all cursor-pointer ${
                activeTab === 'quiz'
                  ? 'bg-yellow-300 text-black neo-shadow-sm'
                  : 'bg-white hover:bg-slate-50 text-slate-700'
              }`}
            >
              <Trophy className="w-3.5 h-3.5" /> Quiz
            </button>
            <button
              onClick={() => setActiveTab('practice')}
              className={`whitespace-nowrap flex items-center gap-1.5 px-3 py-2 border-2 border-black font-black uppercase text-[10px] transition-all cursor-pointer ${
                activeTab === 'practice'
                  ? 'bg-yellow-300 text-black neo-shadow-sm'
                  : 'bg-white hover:bg-slate-50 text-slate-700'
              }`}
            >
              <PenTool className="w-3.5 h-3.5" /> Caderno Prático
            </button>
            <button
              onClick={() => setActiveTab('grammar')}
              className={`whitespace-nowrap flex items-center gap-1.5 px-3 py-2 border-2 border-black font-black uppercase text-[10px] transition-all cursor-pointer ${
                activeTab === 'grammar'
                  ? 'bg-yellow-300 text-black neo-shadow-sm'
                  : 'bg-white hover:bg-slate-50 text-slate-700'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" /> Gramática
            </button>
          </div>
        </div>

        {/* Tab 1: Verb Explorer Layout */}
        {activeTab === 'explorer' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Sidebar list of verbs */}
            <div className="lg:col-span-4 h-full">
              <VerbSelector
                verbs={verbs}
                selectedVerbId={selectedVerbId}
                onSelectVerb={(id) => setSelectedVerbId(id)}
                onSearchAI={handleSearchAI}
                aiSearching={aiSearching}
                hasApiKey={hasApiKey}
              />
            </div>

            {/* Main view details */}
            <div className="lg:col-span-8 space-y-6">
              {aiSearching ? (
                <div className="bg-white border-2 border-black p-12 text-center neo-shadow flex flex-col items-center justify-center space-y-4">
                  <div className="relative">
                    <div className="w-12 h-12 border-4 border-black border-t-indigo-600 animate-spin" />
                    <Sparkles className="absolute -top-1 -right-1.5 w-6 h-6 text-indigo-500 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 text-lg uppercase tracking-tight">Analisando Conjugação</h3>
                    <p className="text-xs text-slate-500 max-w-sm mt-1 leading-relaxed">
                      Utilizando algoritmos de flexão de desinência para construir a tabela de conjugação e regras de concordância offline...
                    </p>
                  </div>
                </div>
              ) : aiSearchError ? (
                <div className="bg-red-50 p-6 border-2 border-black text-red-950 space-y-3 neo-shadow">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-700" />
                    <h3 className="font-extrabold uppercase text-xs tracking-wider">Falha ao conjugar verbo</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-red-900 font-medium">
                    {aiSearchError}
                  </p>
                  <button
                    onClick={() => setAiSearchError('')}
                    className="text-white bg-black hover:bg-indigo-600 border-2 border-black text-xs px-3 py-1.5 font-bold uppercase transition-colors"
                  >
                    Tentar Novamente
                  </button>
                </div>
              ) : currentVerb ? (
                <VerbDetails verb={currentVerb} />
              ) : (
                <div className="bg-white border-2 border-black p-8 text-center text-slate-400 neo-shadow uppercase font-black text-sm tracking-wider">
                  Nenhum verbo selecionado.
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Irregular Verbs Portal */}
        {activeTab === 'irregular' && (
          <IrregularVerbsPanel />
        )}

        {/* Tab 3: Pratical Conjugation Test Quiz */}
        {activeTab === 'quiz' && (
          <QuizPanel verbs={verbs} />
        )}

        {/* Tab 4: Workbook Practice */}
        {activeTab === 'practice' && (
          <div className="bg-white border-2 border-black p-6 md:p-8 neo-shadow">
            <div className="mb-6 pb-4 border-b-2 border-black">
              <h2 className="text-xl font-black text-slate-950 flex items-center gap-2 uppercase tracking-tight">
                <PenTool className="w-5 h-5 text-indigo-600" />
                Caderno de Prática de Conjugação
              </h2>
              <p className="text-xs text-slate-500 mt-1 uppercase font-bold tracking-tight">
                Coloque o seu francês em prática. Construa orações com os verbos exigidos e obtenha feedback corretivo instantâneo do nosso analisador de desinências local.
              </p>
            </div>
            
            <PracticePanel verbs={verbs} hasApiKey={hasApiKey} />
          </div>
        )}

        {/* Tab 5: Grammar Lessons List */}
        {activeTab === 'grammar' && (
          <div className="space-y-6">
            <GrammarPanel />
          </div>
        )}
      </main>

      {/* Footer System Credits */}
      <footer className="bg-white border-t-2 border-black py-8 mt-12 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-1.5 flex flex-col items-center">
          <p className="font-black uppercase tracking-widest text-[10px]">&copy; 2026 L'Alliance Française Tech • Maître des Verbes</p>
          <p className="text-[10px] text-slate-400 font-semibold">Criado em português para o estudo estruturado da gramática francesa.</p>
          <p className="text-[9px] text-slate-300 italic">Todo o motor de busca, avaliação de frases e tabelas de tempos verbais operam localmente de forma offline.</p>
        </div>
      </footer>
    </div>
  );
}
