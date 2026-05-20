import React, { useState } from 'react';
import { BookOpen, GraduationCap, ChevronRight, HelpCircle, FileText, Globe } from 'lucide-react';
import { GRAMMAR_LESSONS } from '../data/verbs';

export default function GrammarPanel() {
  const [selectedLessonId, setSelectedLessonId] = useState(GRAMMAR_LESSONS[0].id);

  const activeLesson = GRAMMAR_LESSONS.find(l => l.id === selectedLessonId) || GRAMMAR_LESSONS[0];

  const renderFormattedText = (text: string) => {
    // Splits by bold tokens (**word**) and italic tokens (*word*)
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold text-slate-950 font-sans">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={index} className="font-medium text-slate-900 italic font-sans">{part.slice(1, -1)}</em>;
      }
      return part;
    });
  };

  const parseCustomMarkdown = (content: string) => {
    const lines = content.split('\n');
    let insideList = false;
    let listType: 'ul' | 'ol' | null = null;
    const elements: React.ReactNode[] = [];

    const flushList = (key: string) => {
      if (insideList && listElements.length > 0) {
        if (listType === 'ul') {
          elements.push(
            <ul key={`ul-${key}`} className="space-y-1 my-3 list-disc pl-5">
              {[...listElements]}
            </ul>
          );
        } else {
          elements.push(
            <ol key={`ol-${key}`} className="space-y-1 my-3 list-decimal pl-5">
              {[...listElements]}
            </ol>
          );
        }
        listElements = [];
        insideList = false;
        listType = null;
      }
    };

    let listElements: React.ReactNode[] = [];

    lines.forEach((line, index) => {
      const cleanLine = line.trim();
      
      if (!cleanLine) {
        flushList(`empty-${index}`);
        return;
      }

      // Headers ###
      if (cleanLine.startsWith('### ')) {
        flushList(`h3-${index}`);
        elements.push(
          <h3 key={index} className="text-base font-black uppercase border-b-2 border-slate-200 pb-1 text-indigo-700 mt-6 mb-3 first:mt-0">
            {cleanLine.replace('### ', '')}
          </h3>
        );
        return;
      }

      // Headers ####
      if (cleanLine.startsWith('#### ')) {
        flushList(`h4-${index}`);
        elements.push(
          <h4 key={index} className="text-xs uppercase tracking-wider font-extrabold text-slate-800 mt-4 mb-2">
            {cleanLine.replace('#### ', '')}
          </h4>
        );
        return;
      }

      // Bullet List *
      if (cleanLine.startsWith('* ')) {
        if (!insideList || listType !== 'ul') {
          flushList(`pre-ul-${index}`);
          insideList = true;
          listType = 'ul';
        }
        const text = cleanLine.substring(2);
        listElements.push(
          <li key={`li-${index}`} className="text-sm text-slate-600 leading-relaxed font-sans">
            {renderFormattedText(text)}
          </li>
        );
        return;
      }

      // Numbered List (e.g., 1. )
      if (/^\d+\.\s/.test(cleanLine)) {
        if (!insideList || listType !== 'ol') {
          flushList(`pre-ol-${index}`);
          insideList = true;
          listType = 'ol';
        }
        const text = cleanLine.replace(/^\d+\.\s/, '');
        listElements.push(
          <li key={`li-${index}`} className="text-sm text-slate-600 leading-relaxed font-sans">
            {renderFormattedText(text)}
          </li>
        );
        return;
      }

      // Standard Paragraph
      flushList(`para-${index}`);
      elements.push(
        <p key={index} className="text-sm text-slate-600 mb-4 leading-relaxed font-sans">
          {renderFormattedText(cleanLine)}
        </p>
      );
    });

    // Cleanup residual list
    flushList('final');
    return elements;
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'groups': return 'Grupos';
      case 'auxiliaries': return 'Auxiliares';
      case 'tenses': return 'Uso dos Tempos';
      default: return 'Geral';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Lesson Index List */}
      <div className="space-y-3 lg:col-span-1">
        <h3 className="text-xs uppercase tracking-wider font-extrabold text-indigo-600 border-l-4 border-indigo-600 pl-2 mb-3 flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
          Lições Teóricas
        </h3>
        
        <div className="space-y-3">
          {GRAMMAR_LESSONS.map((lesson) => {
            const isSelected = lesson.id === selectedLessonId;
            return (
              <button
                key={lesson.id}
                onClick={() => setSelectedLessonId(lesson.id)}
                className={`w-full text-left p-4 border-2 border-black flex flex-col items-start gap-1.5 cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-black text-white neo-shadow-sm font-black'
                    : 'bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`text-[9px] font-mono uppercase font-black px-2 py-0.5 border ${
                    isSelected ? 'bg-yellow-300 text-black border-black/10' : 'bg-slate-100 text-slate-800 border-slate-300'
                  }`}>
                    {getCategoryBadge(lesson.category)}
                  </span>
                </div>
                
                <h4 className="text-xs font-black uppercase leading-snug tracking-tight">
                  {lesson.title}
                </h4>
                
                <p className={`text-[11px] font-medium leading-relaxed ${
                  isSelected ? 'text-slate-300' : 'text-slate-500'
                }`}>
                  {lesson.description}
                </p>
              </button>
            );
          })}
        </div>

        <div className="p-4 bg-yellow-50 border-2 border-black neo-shadow-sm mt-4">
          <h4 className="text-xs font-black text-indigo-950 flex items-center gap-1 uppercase tracking-tight">
            <GraduationCap className="w-4 h-4 text-indigo-650" />
            Metodologia Lógica
          </h4>
          <p className="text-[10px] text-slate-700 mt-1 leading-relaxed font-semibold">
            No francês, a conjugação obedece a padrões lógicos de radical + desinência. Estudar as leis estruturais reduz em 80% a necessidade de decorar tabelas isoladas.
          </p>
        </div>
      </div>

      {/* Lesson Content Area */}
      <div className="lg:col-span-3 bg-white border-2 border-black p-6 md:p-8 neo-shadow">
        <div className="border-b-2 border-black pb-5 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase px-2.5 py-1 bg-yellow-300 border border-black text-black">
              Grammaire Française
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-950 uppercase tracking-tighter mt-2">
            {activeLesson.title}
          </h2>
          <p className="text-xs text-slate-500 font-bold uppercase mt-1 tracking-wider">
            {activeLesson.description}
          </p>
        </div>

        <div className="prose prose-slate max-w-none">
          {parseCustomMarkdown(activeLesson.content)}
        </div>
      </div>
    </div>
  );
}
