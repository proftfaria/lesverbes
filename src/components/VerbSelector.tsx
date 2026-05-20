import React, { useState } from 'react';
import { Search, Sparkles, BookOpen } from 'lucide-react';
import { Verb, VerbGroup } from '../types';

interface VerbSelectorProps {
  verbs: Verb[];
  selectedVerbId: string;
  onSelectVerb: (verbId: string) => void;
  onSearchAI: (verbName: string) => Promise<void>;
  aiSearching: boolean;
  hasApiKey: boolean;
}

export default function VerbSelector({
  verbs,
  selectedVerbId,
  onSelectVerb,
  onSearchAI,
  aiSearching,
  hasApiKey
}: VerbSelectorProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [localError, setLocalError] = useState('');

  const filteredVerbs = verbs.filter(v =>
    v.infinitive.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.translation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAISearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError('');
    const cleanSearch = searchTerm.trim().toLowerCase();
    
    if (!cleanSearch) {
      setLocalError('Escreva um verbo para buscar.');
      return;
    }

    // Check if it already exists locally
    const exists = verbs.find(v => v.infinitive.toLowerCase() === cleanSearch);
    if (exists) {
      onSelectVerb(exists.id);
      return;
    }

    try {
      await onSearchAI(cleanSearch);
    } catch (err: any) {
      setLocalError(err.message || 'Falha ao conjugar o verbo solicitado.');
    }
  };

  const renderGroupTitle = (group: VerbGroup) => {
    switch (group) {
      case '1er': return '1er Groupe (-er)';
      case '2e': return '2e Groupe (-ir)';
      case '3e': return '3e Groupe (Irregulares)';
    }
  };

  const verbsByGroup = (group: VerbGroup) => {
    return filteredVerbs.filter(v => v.group === group);
  };

  const groups: VerbGroup[] = ['1er', '2e', '3e'];

  return (
    <div className="bg-white border-2 border-black p-6 neo-shadow flex flex-col h-full min-h-[500px]">
      <div className="mb-6">
        <h3 className="text-xs uppercase tracking-wider font-extrabold text-indigo-600 border-l-4 border-indigo-600 pl-2 mb-4 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-indigo-600" />
          Verbos Cadastrados
        </h3>
        <form onSubmit={handleAISearch} className="relative">
          <input
            type="text"
            placeholder="Pesquise ou conjugue qualquer verbo..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setLocalError('');
            }}
            className="w-full bg-slate-50 border-2 border-black py-2.5 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-sans text-slate-800 font-bold"
          />
          <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
          
          {searchTerm && !verbs.some(v => v.infinitive.toLowerCase() === searchTerm.trim().toLowerCase()) && (
            <button
              type="submit"
              disabled={aiSearching}
              title="Conjugar este verbo instantaneamente"
              className="absolute right-2 top-2 p-1.5 bg-yellow-300 hover:bg-yellow-400 border border-black text-black transition-colors disabled:opacity-50 cursor-pointer"
            >
              <Sparkles className={`w-4 h-4 ${aiSearching ? 'animate-spin' : ''}`} />
            </button>
          )}
        </form>

        {localError && (
          <p className="mt-2 text-xs text-red-900 bg-red-100 p-2.5 border-2 border-black leading-relaxed">
            {localError}
          </p>
        )}

        {searchTerm && !verbs.some(v => v.infinitive.toLowerCase() === searchTerm.trim().toLowerCase()) && (
          <div className="mt-4 bg-yellow-50 border-2 border-black p-4 neo-shadow-sm">
            <p className="text-xs text-indigo-900 font-black uppercase mb-1.5 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              Conjugue "{searchTerm}" agora!
            </p>
            <p className="text-[11px] text-slate-700 leading-normal mb-3 font-semibold">
              Clique no botão abaixo para que nosso motor de regras gere a tabela conjugada inteira com traduções e exemplos de forma imediata!
            </p>
            <button
              onClick={handleAISearch}
              disabled={aiSearching}
              className="w-full bg-black hover:bg-indigo-600 text-white text-xs font-black py-2 px-3 border-2 border-black transition-all flex items-center justify-center gap-1.5 cursor-pointer uppercase tracking-tight"
            >
              {aiSearching ? 'A processar desinências...' : 'Conjugar Verbo Agora'}
            </button>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto space-y-6 max-h-[550px] pr-1">
        {groups.map((group) => {
          const groupVerbs = verbsByGroup(group);
          if (groupVerbs.length === 0) return null;

          return (
            <div key={group} className="space-y-2">
              <h4 className="text-[10px] uppercase font-black text-slate-500 tracking-wider">
                {renderGroupTitle(group)}
              </h4>
              <div className="space-y-2">
                {groupVerbs.map((v) => {
                  const isSelected = v.id === selectedVerbId;
                  const isDynamic = !['etre', 'avoir', 'parler', 'finir', 'aller', 'faire'].includes(v.id);
                  return (
                    <button
                      key={v.id}
                      onClick={() => onSelectVerb(v.id)}
                      className={`w-full text-left p-3.5 border-2 border-black flex items-center justify-between transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-black text-white neo-shadow-sm font-black'
                          : 'bg-white hover:bg-slate-50 text-slate-800'
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className="text-sm font-black flex items-center gap-1.5">
                          {v.infinitive.toUpperCase()}
                          {isDynamic && (
                            <span className={`text-[9px] px-1.5 py-0.5 font-bold border ${
                              isSelected ? 'bg-yellow-300 text-black border-black/10' : 'bg-indigo-50 text-indigo-700 border-indigo-200'
                            }`} title="Gerado por IA">
                              IA
                            </span>
                          )}
                        </span>
                        <span className={`text-xs mt-0.5 font-medium ${
                          isSelected ? 'text-slate-300' : 'text-slate-500 italic'
                        }`}>
                          {v.translation}
                        </span>
                      </div>
                      
                      <div className="flex gap-1 items-center">
                        <span className={`text-[9px] font-mono font-black uppercase px-2 py-0.5 border ${
                          isSelected 
                            ? 'bg-yellow-300 text-black border-black' 
                            : 'bg-slate-100 text-slate-700 border-slate-300'
                        }`}>
                          {v.difficulty}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}

        {filteredVerbs.length === 0 && (
          <div className="text-center py-10 border-2 border-dashed border-slate-300">
            <p className="text-sm font-bold text-slate-500 uppercase tracking-tight">Verbo não cadastrado.</p>
            <p className="text-xs text-slate-400 mt-1">Busque acima para conjugá-lo via IA.</p>
          </div>
        )}
      </div>
    </div>
  );
}
