export type VerbGroup = '1er' | '2e' | '3e'; // 1er (-er), 2e (-ir), 3e (irregulares / outros)

export interface ConjugationForm {
  pronoun: string;
  form: string;
  translation: string; // Meaning of this translated form (e.g., "eu sou", "tu és")
}

export type TenseKey = 'present' | 'passé_composé' | 'imparfait' | 'futur_simple' | 'conditionnel' | 'subjonctif';

export interface TenseDetail {
  name: string;
  frenchName: string;
  description: string;
  forms: ConjugationForm[];
  example?: { french: string; portuguese: string }; // Exemplo de frase para este tempo verbal específico
}

export interface SentenceExample {
  pronoun: string;
  french: string;
  portuguese: string;
}

export interface Verb {
  id: string; // infinitive verb, e.g. "être"
  infinitive: string;
  translation: string;
  group: VerbGroup;
  auxiliary: 'avoir' | 'être';
  regular: boolean;
  difficulty: 'A1' | 'A2' | 'B1' | 'B2';
  explanation: string; // Explicação gramatical do verbo
  tenses: Record<TenseKey, TenseDetail>;
  examples: SentenceExample[];
}

export interface GrammarLesson {
  id: string;
  title: string;
  description: string;
  content: string;
  category: 'auxiliaries' | 'groups' | 'tenses' | 'tips';
}

export interface AIResult {
  infinitive: string;
  translation: string;
  group: VerbGroup;
  auxiliary: 'avoir' | 'être';
  regular: boolean;
  difficulty: 'A1' | 'A2' | 'B1' | 'B2';
  explanation: string;
  tenses: Record<TenseKey, TenseDetail>;
  examples: SentenceExample[];
}

export interface EvaluationResult {
  correct: boolean;
  userSentence: string;
  verb: string;
  tense: string;
  feedback: string;
  translation: string;
  analysisDetails: {
    verbCheck: string; // "correct" | "incorrect" | "not_found"
    explanation: string;
    suggestedFix: string;
  };
}
