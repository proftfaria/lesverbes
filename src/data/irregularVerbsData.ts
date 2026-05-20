export interface IrregularVerbConjugation {
  pronoun: string;
  form: string;
  translation: string;
}

export interface IrregularVerbTense {
  name: string;
  frenchName: string;
  forms: IrregularVerbConjugation[];
}

export interface IrregularVerbDetail {
  id: string;
  infinitive: string;
  translation: string;
  difficulty: 'A1' | 'A2' | 'B1' | 'B2';
  quickExplanation: string;
  patternsAndIrregularities: string[]; // List of detailed insights about why and where it breaks standard patterns
  tenses: {
    present: IrregularVerbTense;
    passé_composé: IrregularVerbTense;
    imparfait: IrregularVerbTense;
    futur_simple: IrregularVerbTense;
  };
}

export const IRREGULAR_VERBS_DATA: IrregularVerbDetail[] = [
  {
    id: 'etre',
    infinitive: 'être',
    translation: 'ser / estar',
    difficulty: 'A1',
    quickExplanation: 'O pilar absoluto do francês. Suas irregularidades derivam de fusões históricas de diferentes verbos latinos (esse e stare), gerando múltiplos radicais.',
    patternsAndIrregularities: [
      'Presente extremamente irregular (suis, es, est, sommes, êtes, sont), de origem indo-europeia direta.',
      'O radical do futuro é "ser-" (serai, seras, etc.), herdado do infinitivo latino "essere".',
      'No imperfeito, usa o radical "ét-" (étais, étais, était...), que é o único verbo francês cuja raiz não provém de "nous" do presente.',
      'Auxiliar do Passé Composé é "avoir" e o seu particípio passado é "été".'
    ],
    tenses: {
      present: {
        name: 'Presente',
        frenchName: 'Présent',
        forms: [
          { pronoun: 'je', form: 'suis', translation: 'sou / estou' },
          { pronoun: 'tu', form: 'es', translation: 'és / estás' },
          { pronoun: 'il / elle', form: 'est', translation: 'é / está' },
          { pronoun: 'nous', form: 'sommes', translation: 'somos / estamos' },
          { pronoun: 'vous', form: 'êtes', translation: 'sóis / estais (vós)' },
          { pronoun: 'ils / elles', form: 'sont', translation: 'são / estão' }
        ]
      },
      passé_composé: {
        name: 'Passado Composto',
        frenchName: 'Passé Composé',
        forms: [
          { pronoun: "j'ai", form: 'été', translation: 'fui / estive' },
          { pronoun: 'tu as', form: 'été', translation: 'foste / estiveste' },
          { pronoun: 'il / elle a', form: 'été', translation: 'foi / esteve' },
          { pronoun: 'nous avons', form: 'été', translation: 'fomos / estivemos' },
          { pronoun: 'vous avez', form: 'été', translation: 'fostes / estivestes' },
          { pronoun: 'ils / elles ont', form: 'été', translation: 'foram / estiveram' }
        ]
      },
      imparfait: {
        name: 'Pretérito Imperfeito',
        frenchName: 'Imparfait',
        forms: [
          { pronoun: 'j’étais', form: 'étais', translation: 'era / estava' },
          { pronoun: 'tu étais', form: 'étais', translation: 'eras / estavas' },
          { pronoun: 'il / elle était', form: 'était', translation: 'era / estava' },
          { pronoun: 'nous étions', form: 'étions', translation: 'éramos / estávamos' },
          { pronoun: 'vous étiez', form: 'étiez', translation: 'éreis / estáveis' },
          { pronoun: 'ils / elles étaient', form: 'étaient', translation: 'eram / estavam' }
        ]
      },
      futur_simple: {
        name: 'Futuro Simples',
        frenchName: 'Futur Simple',
        forms: [
          { pronoun: 'je serai', form: 'serai', translation: 'serei / estarei' },
          { pronoun: 'tu seras', form: 'seras', translation: 'serás / estarás' },
          { pronoun: 'il / elle sera', form: 'sera', translation: 'será / estará' },
          { pronoun: 'nous serons', form: 'serons', translation: 'seremos / estaremos' },
          { pronoun: 'vous serez', form: 'serez', translation: 'sereis / estareis' },
          { pronoun: 'ils / elles seront', form: 'seront', translation: 'serão / estarão' }
        ]
      }
    }
  },
  {
    id: 'avoir',
    infinitive: 'avoir',
    translation: 'ter / haver',
    difficulty: 'A1',
    quickExplanation: 'Usado como verbo principal para expressar posse ou idade, e como auxiliar para formar quase 97% dos tempos compostos em francês.',
    patternsAndIrregularities: [
      'Presente com formas ultra breves de uma só letra no singular (j’ai, tu as, il a).',
      'No plural do presente, cria a clássica "liaison" fónica (nous‿avons, vous‿avez, ils‿ont).',
      'Radical do imperfeito regular baseado no presente plural "av-" (avais, avait, etc.).',
      'Radical do futuro passa para "aur-" (aurai, auras, etc.), o que gera contraste imediato visual.',
      'Seu particípio é "eu" (pronunciado como a vogal "u").'
    ],
    tenses: {
      present: {
        name: 'Presente',
        frenchName: 'Présent',
        forms: [
          { pronoun: 'j’ai', form: 'ai', translation: 'tenho' },
          { pronoun: 'tu as', form: 'as', translation: 'tens' },
          { pronoun: 'il / elle a', form: 'a', translation: 'tem' },
          { pronoun: 'nous avons', form: 'avons', translation: 'temos' },
          { pronoun: 'vous avez', form: 'avez', translation: 'tendes (vós)' },
          { pronoun: 'ils / elles ont', form: 'ont', translation: 'têm' }
        ]
      },
      passé_composé: {
        name: 'Passado Composto',
        frenchName: 'Passé Composé',
        forms: [
          { pronoun: 'j’ai', form: 'eu', translation: 'tive' },
          { pronoun: 'tu as', form: 'eu', translation: 'tiveste' },
          { pronoun: 'il / elle a', form: 'eu', translation: 'teve' },
          { pronoun: 'nous avons', form: 'eu', translation: 'tivemos' },
          { pronoun: 'vous avez', form: 'eu', translation: 'tivestes' },
          { pronoun: 'ils / elles ont', form: 'eu', translation: 'tiveram' }
        ]
      },
      imparfait: {
        name: 'Pretérito Imperfeito',
        frenchName: 'Imparfait',
        forms: [
          { pronoun: 'j’avais', form: 'avais', translation: 'tinha' },
          { pronoun: 'tu avais', form: 'avais', translation: 'tinhas' },
          { pronoun: 'il / elle avait', form: 'avait', translation: 'tinha' },
          { pronoun: 'nous avions', form: 'avions', translation: 'tínhamos' },
          { pronoun: 'vous aviez', form: 'aviez', translation: 'tínheis' },
          { pronoun: 'ils / elles avaient', form: 'avaient', translation: 'tinham' }
        ]
      },
      futur_simple: {
        name: 'Futuro Simples',
        frenchName: 'Futur Simple',
        forms: [
          { pronoun: 'j’aurai', form: 'aurai', translation: 'terei' },
          { pronoun: 'tu auras', form: 'auras', translation: 'terás' },
          { pronoun: 'il / elle aura', form: 'aura', translation: 'terá' },
          { pronoun: 'nous aurons', form: 'aurons', translation: 'teremos' },
          { pronoun: 'vous aurez', form: 'aurez', translation: 'tereis' },
          { pronoun: 'ils / elles auront', form: 'auront', translation: 'terão' }
        ]
      }
    }
  },
  {
    id: 'aller',
    infinitive: 'aller',
    translation: 'ir',
    difficulty: 'A1',
    quickExplanation: 'Embora termine em "-er", pertence ao 3º grupo por ser extremamente irregular. Auxiliar no Passé Composé é "être" (l’accord du participe é obrigatório!). Essencial para o Futuro Próximo.',
    patternsAndIrregularities: [
      'No presente, emprega três raízes diferentes: "va-" no singular e eles (vais, vas, va, vont); "all-" em nós e vós (allons, allez); e "ir-" no futuro (irai, iras).',
      'No Passé Composé, conjuga-se com o auxiliar ÊTRE, exigindo concordância em gênero e número (allé/allée/allés/allées).',
      'Inova radical para "ir-" no Futuro Simples (j’irai, tu iras...), por fusão histórica com o latim ire.'
    ],
    tenses: {
      present: {
        name: 'Presente',
        frenchName: 'Présent',
        forms: [
          { pronoun: 'je', form: 'vais', translation: 'vou' },
          { pronoun: 'tu', form: 'vas', translation: 'vais' },
          { pronoun: 'il / elle', form: 'va', translation: 'vai' },
          { pronoun: 'nous', form: 'allons', translation: 'vamos' },
          { pronoun: 'vous', form: 'allez', translation: 'ides (vós)' },
          { pronoun: 'ils / elles', form: 'vont', translation: 'vão' }
        ]
      },
      passé_composé: {
        name: 'Passado Composto',
        frenchName: 'Passé Composé',
        forms: [
          { pronoun: 'je suis', form: 'allé(e)', translation: 'fui / estive' },
          { pronoun: 'tu es', form: 'allé(e)', translation: 'foste / estiveste' },
          { pronoun: 'il / elle est', form: 'allé(e)', translation: 'foi' },
          { pronoun: 'nous sommes', form: 'allé(e)s', translation: 'fomos' },
          { pronoun: 'vous êtes', form: 'allé(e)s', translation: 'fostes / fostes' },
          { pronoun: 'ils / elles sont', form: 'allé(e)s', translation: 'foram' }
        ]
      },
      imparfait: {
        name: 'Pretérito Imperfeito',
        frenchName: 'Imparfait',
        forms: [
          { pronoun: 'j’allais', form: 'allais', translation: 'ia' },
          { pronoun: 'tu allais', form: 'allais', translation: 'ias' },
          { pronoun: 'il / elle allait', form: 'allait', translation: 'ia' },
          { pronoun: 'nous allions', form: 'allions', translation: 'íamos' },
          { pronoun: 'vous alliez', form: 'alliez', translation: 'íeis (vós)' },
          { pronoun: 'ils / elles allaient', form: 'allaient', translation: 'iam' }
        ]
      },
      futur_simple: {
        name: 'Futuro Simples',
        frenchName: 'Futur Simple',
        forms: [
          { pronoun: 'j’irai', form: 'irai', translation: 'irei' },
          { pronoun: 'tu iras', form: 'iras', translation: 'irás' },
          { pronoun: 'il / elle ira', form: 'ira', translation: 'irá' },
          { pronoun: 'nous irons', form: 'irons', translation: 'iremos' },
          { pronoun: 'vous irez', form: 'irez', translation: 'ireis' },
          { pronoun: 'ils / elles iront', form: 'iront', translation: 'irão' }
        ]
      }
    }
  },
  {
    id: 'faire',
    infinitive: 'faire',
    translation: 'fazer / praticar',
    difficulty: 'A2',
    quickExplanation: 'Um verbo polivalente usado para exprimir tarefas, atividades ou o clima. Possui mutações radicais notáveis em "nous" e "vous" no presente.',
    patternsAndIrregularities: [
      'A segunda pessoa do plural no presente é "vous faites" (evite o erro comum "faisez").',
      'A primeira pessoa do plural no presente é "nous faisons", onde "ai" se pronuncia como "e" mudo de forma irregular.',
      'A terceira pessoa do plural é "ils font".',
      'Reduz o radical para "fer-" no Futuro Simples (ferai, feras, etc.).'
    ],
    tenses: {
      present: {
        name: 'Presente',
        frenchName: 'Présent',
        forms: [
          { pronoun: 'je', form: 'fais', translation: 'faço' },
          { pronoun: 'tu', form: 'fais', translation: 'fazes' },
          { pronoun: 'il / elle', form: 'fait', translation: 'faz' },
          { pronoun: 'nous', form: 'faisons', translation: 'fazemos' },
          { pronoun: 'vous', form: 'faites', translation: 'fazeis (vós)' },
          { pronoun: 'ils / elles', form: 'font', translation: 'fazem' }
        ]
      },
      passé_composé: {
        name: 'Passado Composto',
        frenchName: 'Passé Composé',
        forms: [
          { pronoun: 'j’ai', form: 'fait', translation: 'fiz' },
          { pronoun: 'tu as', form: 'fait', translation: 'fizeste' },
          { pronoun: 'il / elle a', form: 'fait', translation: 'fez' },
          { pronoun: 'nous avons', form: 'fait', translation: 'fizemos' },
          { pronoun: 'vous avez', form: 'fait', translation: 'fizestes' },
          { pronoun: 'ils / elles ont', form: 'fait', translation: 'fizeram' }
        ]
      },
      imparfait: {
        name: 'Pretérito Imperfeito',
        frenchName: 'Imparfait',
        forms: [
          { pronoun: 'je', form: 'faisais', translation: 'fazia' },
          { pronoun: 'tu', form: 'faisais', translation: 'fazias' },
          { pronoun: 'il / elle faisait', form: 'faisait', translation: 'fazia' },
          { pronoun: 'nous faisions', form: 'faisions', translation: 'fazíamos' },
          { pronoun: 'vous faisiez', form: 'faisiez', translation: 'fazíeis' },
          { pronoun: 'ils / elles faisaient', form: 'faisaient', translation: 'faziam' }
        ]
      },
      futur_simple: {
        name: 'Futuro Simples',
        frenchName: 'Futur Simple',
        forms: [
          { pronoun: 'je ferai', form: 'ferai', translation: 'farei' },
          { pronoun: 'tu feras', form: 'feras', translation: 'farás' },
          { pronoun: 'il / elle fera', form: 'fera', translation: 'fará' },
          { pronoun: 'nous ferons', form: 'ferons', translation: 'faremos' },
          { pronoun: 'vous ferez', form: 'ferez', translation: 'fareis' },
          { pronoun: 'ils / elles feront', form: 'feront', translation: 'farão' }
        ]
      }
    }
  },
  {
    id: 'prendre',
    infinitive: 'prendre',
    translation: 'tomar / pegar',
    difficulty: 'A2',
    quickExplanation: 'Modelo para dezenas de outros verbos como "comprendre" e "apprendre". Possui um jogo de supressão e duplicação da consoante radical.',
    patternsAndIrregularities: [
      'No plural do presente, abandona o "d" radical (nous prenons, vous prenez) e duplica o "n" na 3ª do plural (ils prennent).',
      'No Passé Composé, o seu particípio passado é "pris" (de "prender").',
      'No imperfeito, o radical perde a letra "d" herdada do infinitivo (pren-).'
    ],
    tenses: {
      present: {
        name: 'Presente',
        frenchName: 'Présent',
        forms: [
          { pronoun: 'je', form: 'prends', translation: 'tomo' },
          { pronoun: 'tu', form: 'prends', translation: 'tomas' },
          { pronoun: 'il / elle', form: 'pred', translation: 'toma' },
          { pronoun: 'nous', form: 'prenons', translation: 'tomamos' },
          { pronoun: 'vous', form: 'prenez', translation: 'tomais (vós)' },
          { pronoun: 'ils / elles prennent', form: 'prennent', translation: 'tomam' }
        ]
      },
      passé_composé: {
        name: 'Passado Composto',
        frenchName: 'Passé Composé',
        forms: [
          { pronoun: 'j’ai', form: 'pris', translation: 'tomei' },
          { pronoun: 'tu as', form: 'pris', translation: 'tomaste' },
          { pronoun: 'il / elle a', form: 'pris', translation: 'tomou' },
          { pronoun: 'nous avons', form: 'pris', translation: 'tomámos' },
          { pronoun: 'vous avez', form: 'pris', translation: 'tomastes' },
          { pronoun: 'ils / elles ont', form: 'pris', translation: 'tomaram' }
        ]
      },
      imparfait: {
        name: 'Pretérito Imperfeito',
        frenchName: 'Imparfait',
        forms: [
          { pronoun: 'je', form: 'prenais', translation: 'tomava' },
          { pronoun: 'tu', form: 'prenais', translation: 'tomavas' },
          { pronoun: 'il / elle prenait', form: 'prenait', translation: 'tomava' },
          { pronoun: 'nous prenions', form: 'prenions', translation: 'tomávamos' },
          { pronoun: 'vous preniez', form: 'preniez', translation: 'tomáveis' },
          { pronoun: 'ils / elles prenaient', form: 'prenaient', translation: 'tomavam' }
        ]
      },
      futur_simple: {
        name: 'Futuro Simples',
        frenchName: 'Futur Simple',
        forms: [
          { pronoun: 'je prendrai', form: 'prendrai', translation: 'tomarei' },
          { pronoun: 'tu prendras', form: 'prendras', translation: 'tomarás' },
          { pronoun: 'il / elle prendra', form: 'prendra', translation: 'tomará' },
          { pronoun: 'nous prendrons', form: 'prendrons', translation: 'tomaremos' },
          { pronoun: 'vous prendrez', form: 'prendrez', translation: 'tomareis' },
          { pronoun: 'ils / elles prendront', form: 'prendront', translation: 'tomarão' }
        ]
      }
    }
  },
  {
    id: 'vouloir',
    infinitive: 'vouloir',
    translation: 'querer',
    difficulty: 'A2',
    quickExplanation: 'Verbo modal para expressar forte desejo ou cortesia social. Apresenta o radical em "veut" e "voul-".',
    patternsAndIrregularities: [
      'Usa desinências em "x" no presente (je veux, tu veux), ao contrário das ordinárias em "s".',
      'Altera o radical para "veul-" na terceira pessoa do plural do presente (ils veulent).',
      'No futuro, ganha uma raiz distinta com som palatal: "voudr-" (je voudrai, tu voudras).'
    ],
    tenses: {
      present: {
        name: 'Presente',
        frenchName: 'Présent',
        forms: [
          { pronoun: 'je', form: 'veux', translation: 'quero' },
          { pronoun: 'tu', form: 'veux', translation: 'queres' },
          { pronoun: 'il / elle', form: 'veut', translation: 'quer' },
          { pronoun: 'nous', form: 'voulons', translation: 'queremos' },
          { pronoun: 'vous', form: 'voulez', translation: 'quereis (vós)' },
          { pronoun: 'ils / elles veulent', form: 'veulent', translation: 'querem' }
        ]
      },
      passé_composé: {
        name: 'Passado Composto',
        frenchName: 'Passé Composé',
        forms: [
          { pronoun: 'j’ai', form: 'voulu', translation: 'quis' },
          { pronoun: 'tu as', form: 'voulu', translation: 'quiseste' },
          { pronoun: 'il / elle a', form: 'voulu', translation: 'quis' },
          { pronoun: 'nous avons', form: 'voulu', translation: 'quisemos' },
          { pronoun: 'vous avez', form: 'voulu', translation: 'quiseram' },
          { pronoun: 'ils / elles ont', form: 'voulu', translation: 'quiseram' }
        ]
      },
      imparfait: {
        name: 'Pretérito Imperfeito',
        frenchName: 'Imparfait',
        forms: [
          { pronoun: 'je', form: 'voulais', translation: 'queria' },
          { pronoun: 'tu', form: 'voulais', translation: 'querias' },
          { pronoun: 'il / elle voulait', form: 'voulait', translation: 'queria' },
          { pronoun: 'nous voulions', form: 'voulions', translation: 'queríamos' },
          { pronoun: 'vous vouliez', form: 'vouliez', translation: 'queríeis' },
          { pronoun: 'ils / elles voulaient', form: 'voulaient', translation: 'queriam' }
        ]
      },
      futur_simple: {
        name: 'Futuro Simples',
        frenchName: 'Futur Simple',
        forms: [
          { pronoun: 'je voudrai', form: 'voudrai', translation: 'quererei' },
          { pronoun: 'tu voudras', form: 'voudras', translation: 'quererás' },
          { pronoun: 'il / elle voudra', form: 'voudra', translation: 'quererá' },
          { pronoun: 'nous voudrons', form: 'voudrons', translation: 'quereremos' },
          { pronoun: 'vous voudrez', form: 'voudrez', translation: 'quererão' },
          { pronoun: 'ils / elles voudront', form: 'voudront', translation: 'quererão' }
        ]
      }
    }
  },
  {
    id: 'pouvoir',
    infinitive: 'pouvoir',
    translation: 'poder',
    difficulty: 'A2',
    quickExplanation: 'Um verbo modal crucial para expressar capacidade, possibilidade ou pedir permissão ("Puis-je...?"). Apresenta forte alternância de radical.',
    patternsAndIrregularities: [
      'No presente, usa desinências em "x" no singular (je peux, tu peux) e alterna o radical para "peuv-" na 3ª do plural (ils peuvent).',
      'Apresenta a forma formal interrogativa invertida "puis-je ?" (em vez de "peux-je ?") em conversas formais.',
      'No Passé Composé, o seu particípio passado é "pu".',
      'No futuro, o radical torna-se "pourr-" com duplo "r" (je pourrai, tu pourras), oriundo da síncope histórica do infinitivo.'
    ],
    tenses: {
      present: {
        name: 'Presente',
        frenchName: 'Présent',
        forms: [
          { pronoun: 'je', form: 'peux', translation: 'posso' },
          { pronoun: 'tu', form: 'peux', translation: 'podes' },
          { pronoun: 'il / elle', form: 'peut', translation: 'pode' },
          { pronoun: 'nous', form: 'pouvons', translation: 'podemos' },
          { pronoun: 'vous', form: 'pouvez', translation: 'podeis (vós)' },
          { pronoun: 'ils / elles', form: 'peuvent', translation: 'podem' }
        ]
      },
      passé_composé: {
        name: 'Passado Composto',
        frenchName: 'Passé Composé',
        forms: [
          { pronoun: 'j’ai', form: 'pu', translation: 'pude / consegui' },
          { pronoun: 'tu as', form: 'pu', translation: 'pudeste / conseguiste' },
          { pronoun: 'il / elle a', form: 'pu', translation: 'pôde / conseguiu' },
          { pronoun: 'nous avons', form: 'pu', translation: 'pudemos / conseguimos' },
          { pronoun: 'vous avez', form: 'pu', translation: 'pudestes / conseguistes' },
          { pronoun: 'ils / elles ont', form: 'pu', translation: 'puderam / conseguiram' }
        ]
      },
      imparfait: {
        name: 'Pretérito Imperfeito',
        frenchName: 'Imparfait',
        forms: [
          { pronoun: 'je', form: 'pouvais', translation: 'podia' },
          { pronoun: 'tu', form: 'pouvais', translation: 'podias' },
          { pronoun: 'il / elle', form: 'pouvait', translation: 'podia' },
          { pronoun: 'nous', form: 'pouvions', translation: 'podíamos' },
          { pronoun: 'vous', form: 'pouviez', translation: 'podíeis' },
          { pronoun: 'ils / elles', form: 'pouvaient', translation: 'podiam' }
        ]
      },
      futur_simple: {
        name: 'Futuro Simples',
        frenchName: 'Futur Simple',
        forms: [
          { pronoun: 'je pourrai', form: 'pourrai', translation: 'poderei' },
          { pronoun: 'tu pourras', form: 'pourras', translation: 'poderás' },
          { pronoun: 'il / elle pourra', form: 'pourra', translation: 'poderá' },
          { pronoun: 'nous pourrons', form: 'pourrons', translation: 'poderemos' },
          { pronoun: 'vous pourrez', form: 'pourrez', translation: 'podereis' },
          { pronoun: 'ils / elles pourront', form: 'pourront', translation: 'poderão' }
        ]
      }
    }
  },
  {
    id: 'devoir',
    infinitive: 'devoir',
    translation: 'dever / ter de',
    difficulty: 'A2',
    quickExplanation: 'Expressa obrigação, necessidade ou probabilidade extrema. Seu radical é altamente alternante (dois-, dev-, doiv-).',
    patternsAndIrregularities: [
      'No presente singular e na 3ª pessoa do plural, o radical torna-se "doiv-" ou "dois-" (je dois, ils doivent).',
      'Nas formas de nós/vós do presente, o radical mantém o "e" original: "dev-" (nous devons, vous devez).',
      'Seu particípio é "dû" (com acento circunflexo para diferenciar do artigo partitivo masculino "du").',
      'No futuro, o radical encurta-se para "devr-" (je devrai, tu devras).'
    ],
    tenses: {
      present: {
        name: 'Presente',
        frenchName: 'Présent',
        forms: [
          { pronoun: 'je', form: 'dois', translation: 'devo / tenho de' },
          { pronoun: 'tu', form: 'dois', translation: 'deves / tens de' },
          { pronoun: 'il / elle', form: 'doit', translation: 'deve / tem de' },
          { pronoun: 'nous', form: 'devons', translation: 'devemos / temos de' },
          { pronoun: 'vous', form: 'devez', translation: 'deveis / tendes de' },
          { pronoun: 'ils / elles', form: 'doivent', translation: 'devem / têm de' }
        ]
      },
      passé_composé: {
        name: 'Passado Composto',
        frenchName: 'Passé Composé',
        forms: [
          { pronoun: 'j’ai', form: 'dû', translation: 'devi / tive de' },
          { pronoun: 'tu as', form: 'dû', translation: 'deveste / tiveste de' },
          { pronoun: 'il / elle a', form: 'dû', translation: 'deveu / teve de' },
          { pronoun: 'nous avons', form: 'dû', translation: 'devemos / tivemos de' },
          { pronoun: 'vous avez', form: 'dû', translation: 'devestes / tivestes de' },
          { pronoun: 'ils / elles ont', form: 'dû', translation: 'deveram / tiveram de' }
        ]
      },
      imparfait: {
        name: 'Pretérito Imperfeito',
        frenchName: 'Imparfait',
        forms: [
          { pronoun: 'je', form: 'devais', translation: 'devia / tinha de' },
          { pronoun: 'tu', form: 'devais', translation: 'devias / tinhas de' },
          { pronoun: 'il / elle', form: 'devait', translation: 'devia / tinha de' },
          { pronoun: 'nous', form: 'devions', translation: 'devíamos / tínhamos de' },
          { pronoun: 'vous', form: 'deviez', translation: 'devíeis / tínheis de' },
          { pronoun: 'ils / elles', form: 'devaient', translation: 'deviam / tinham de' }
        ]
      },
      futur_simple: {
        name: 'Futuro Simples',
        frenchName: 'Futur Simple',
        forms: [
          { pronoun: 'je devrai', form: 'devrai', translation: 'deverei / terei de' },
          { pronoun: 'tu devras', form: 'devras', translation: 'deverás / terás de' },
          { pronoun: 'il / elle devra', form: 'devra', translation: 'deverá / terá de' },
          { pronoun: 'nous devrons', form: 'devrons', translation: 'deveremos / teremos de' },
          { pronoun: 'vous devrez', form: 'devrez', translation: 'devereis / tereis de' },
          { pronoun: 'ils / elles devront', form: 'devront', translation: 'deverão / terão de' }
        ]
      }
    }
  },
  {
    id: 'savoir',
    infinitive: 'savoir',
    translation: 'saber',
    difficulty: 'A2',
    quickExplanation: 'Expressa capacidade intelectual ou conhecimento de um fato ou habilidade. Possui radical em "sai-" no singular e "sav-" no plural do presente.',
    patternsAndIrregularities: [
      'No presente singular, o radical é "sai-" (je sais, tu sais, il sait). No plural, muda para "sav-" (nous savons).',
      'No Passé Composé, seu particípio passado é "su" (eu soube / conheci).',
      'No futuro, inova radical para "saur-" (je saurai, tu sauras...), que soa exatamente igual a "serai" (de être) em francês falado informalmente, o que exige cuidado redobrado.'
    ],
    tenses: {
      present: {
        name: 'Presente',
        frenchName: 'Présent',
        forms: [
          { pronoun: 'je', form: 'sais', translation: 'sei' },
          { pronoun: 'tu', form: 'sais', translation: 'sabes' },
          { pronoun: 'il / elle', form: 'sait', translation: 'sabe' },
          { pronoun: 'nous', form: 'savons', translation: 'sabemos' },
          { pronoun: 'vous', form: 'savez', translation: 'sabeis (vós)' },
          { pronoun: 'ils / elles', form: 'savent', translation: 'sabem' }
        ]
      },
      passé_composé: {
        name: 'Passado Composto',
        frenchName: 'Passé Composé',
        forms: [
          { pronoun: 'j’ai', form: 'su', translation: 'soube' },
          { pronoun: 'tu as', form: 'su', translation: 'soubeste' },
          { pronoun: 'il / elle a', form: 'su', translation: 'soube' },
          { pronoun: 'nous avons', form: 'su', translation: 'soubemos' },
          { pronoun: 'vous avez', form: 'su', translation: 'soubestes' },
          { pronoun: 'ils / elles ont', form: 'su', translation: 'souberam' }
        ]
      },
      imparfait: {
        name: 'Pretérito Imperfeito',
        frenchName: 'Imparfait',
        forms: [
          { pronoun: 'je', form: 'savais', translation: 'sabia' },
          { pronoun: 'tu', form: 'savais', translation: 'sabias' },
          { pronoun: 'il / elle', form: 'savait', translation: 'sabia' },
          { pronoun: 'nous savions', form: 'savions', translation: 'sabíamos' },
          { pronoun: 'vous saviez', form: 'saviez', translation: 'sabíeis' },
          { pronoun: 'ils / elles savaient', form: 'savaient', translation: 'sabiam' }
        ]
      },
      futur_simple: {
        name: 'Futuro Simples',
        frenchName: 'Futur Simple',
        forms: [
          { pronoun: 'je saurai', form: 'saurai', translation: 'saberei' },
          { pronoun: 'tu sauras', form: 'sauras', translation: 'saberás' },
          { pronoun: 'il / elle saura', form: 'saura', translation: 'saberá' },
          { pronoun: 'nous saurons', form: 'saurons', translation: 'saberemos' },
          { pronoun: 'vous saurez', form: 'saurez', translation: 'sabereis' },
          { pronoun: 'ils / elles sauront', form: 'sauront', translation: 'saberão' }
        ]
      }
    }
  },
  {
    id: 'venir',
    infinitive: 'venir',
    translation: 'vir',
    difficulty: 'A2',
    quickExplanation: 'Um verbo de movimento crucial que serve de modelo para vários outros (devenir, revenir). Conjugado com o auxiliar "être" no Passé Composé.',
    patternsAndIrregularities: [
      'No presente singular, o radical é "vien-" (je viens, tu viens, il vient).',
      'Nas formas de nós/vós do presente, o radical é "ven-" (nous venons, vous venez), mas volta a "vien-" com duplo "n" na 3ª do plural (ils viennent).',
      'No Passé Composé, conjuga-se com o auxiliar ÊTRE e seu particípio passado é "venu".',
      'No futuro simples, inova com o radical "viendr-" (je viendrai, tu viendras).'
    ],
    tenses: {
      present: {
        name: 'Presente',
        frenchName: 'Présent',
        forms: [
          { pronoun: 'je', form: 'viens', translation: 'venho' },
          { pronoun: 'tu', form: 'viens', translation: 'vens' },
          { pronoun: 'il / elle', form: 'vient', translation: 'vem' },
          { pronoun: 'nous', form: 'venons', translation: 'vimos' },
          { pronoun: 'vous', form: 'venez', translation: 'vindes (vós)' },
          { pronoun: 'ils / elles', form: 'viennent', translation: 'vêm' }
        ]
      },
      passé_composé: {
        name: 'Passado Composto',
        frenchName: 'Passé Composé',
        forms: [
          { pronoun: 'je suis', form: 'venu(e)', translation: 'vim / cheguei' },
          { pronoun: 'tu es', form: 'venu(e)', translation: 'vieste' },
          { pronoun: 'il / elle est', form: 'venu(e)', translation: 'veio' },
          { pronoun: 'nous sommes', form: 'venu(e)s', translation: 'viemos' },
          { pronoun: 'vous êtes', form: 'venu(e)s', translation: 'viestes' },
          { pronoun: 'ils / elles sont', form: 'venu(e)s', translation: 'vieram' }
        ]
      },
      imparfait: {
        name: 'Pretérito Imperfeito',
        frenchName: 'Imparfait',
        forms: [
          { pronoun: 'je', form: 'venais', translation: 'vinha' },
          { pronoun: 'tu', form: 'venais', translation: 'vinhas' },
          { pronoun: 'il / elle', form: 'venait', translation: 'vinha' },
          { pronoun: 'nous venions', form: 'venions', translation: 'vínhamos' },
          { pronoun: 'vous veniez', form: 'veniez', translation: 'vínheis' },
          { pronoun: 'ils / elles venaient', form: 'venaient', translation: 'vinham' }
        ]
      },
      futur_simple: {
        name: 'Futuro Simples',
        frenchName: 'Futur Simple',
        forms: [
          { pronoun: 'je viendrai', form: 'viendrai', translation: 'virei' },
          { pronoun: 'tu viendras', form: 'viendras', translation: 'virás' },
          { pronoun: 'il / elle viendra', form: 'viendra', translation: 'virá' },
          { pronoun: 'nous viendrons', form: 'viendrons', translation: 'viremos' },
          { pronoun: 'vous viendrez', form: 'viendrez', translation: 'vireis' },
          { pronoun: 'ils / elles viendront', form: 'viendront', translation: 'virão' }
        ]
      }
    }
  },
  {
    id: 'dire',
    infinitive: 'dire',
    translation: 'dizer',
    difficulty: 'A1',
    quickExplanation: 'Um dos verbos mais comuns do francês. Suas maiores armadilhas residem na forma de "vous" no presente ("vous dites") e em suas desinências plurais.',
    patternsAndIrregularities: [
      'Forma de vós no presente extremamente irregular: "vous dites" (não use "disez"!).',
      'No singular do presente, as formas terminam em "s" e "t" (je dis, tu dis, il dit).',
      'Particípio passado no Passé Composé é "dit".',
      'Radical do imperfeito baseia-se em "dis-" (disais, disais, disait...) de "nous disons".'
    ],
    tenses: {
      present: {
        name: 'Presente',
        frenchName: 'Présent',
        forms: [
          { pronoun: 'je', form: 'dis', translation: 'digo' },
          { pronoun: 'tu', form: 'dis', translation: 'dizes' },
          { pronoun: 'il / elle', form: 'dit', translation: 'diz' },
          { pronoun: 'nous', form: 'disons', translation: 'dizemos' },
          { pronoun: 'vous', form: 'dites', translation: 'dizeis (vós)' },
          { pronoun: 'ils / elles', form: 'disent', translation: 'dizem' }
        ]
      },
      passé_composé: {
        name: 'Passado Composto',
        frenchName: 'Passé Composé',
        forms: [
          { pronoun: 'j’ai', form: 'dit', translation: 'disse' },
          { pronoun: 'tu as', form: 'dit', translation: 'disseste' },
          { pronoun: 'il / elle a', form: 'dit', translation: 'disse' },
          { pronoun: 'nous avons', form: 'dit', translation: 'dissemos' },
          { pronoun: 'vous avez', form: 'dit', translation: 'dissestes' },
          { pronoun: 'ils / elles ont', form: 'dit', translation: 'disseram' }
        ]
      },
      imparfait: {
        name: 'Pretérito Imperfeito',
        frenchName: 'Imparfait',
        forms: [
          { pronoun: 'je', form: 'disais', translation: 'dizia' },
          { pronoun: 'tu', form: 'disais', translation: 'dizias' },
          { pronoun: 'il / elle disait', form: 'disait', translation: 'dizia' },
          { pronoun: 'nous disions', form: 'disions', translation: 'dizíamos' },
          { pronoun: 'vous disiez', form: 'disiez', translation: 'dizíeis' },
          { pronoun: 'ils / elles disaient', form: 'disaient', translation: 'diziam' }
        ]
      },
      futur_simple: {
        name: 'Futuro Simples',
        frenchName: 'Futur Simple',
        forms: [
          { pronoun: 'je dirai', form: 'dirai', translation: 'direi' },
          { pronoun: 'tu diras', form: 'diras', translation: 'dirás' },
          { pronoun: 'il / elle dira', form: 'dira', translation: 'dirá' },
          { pronoun: 'nous dirons', form: 'dirons', translation: 'diremos' },
          { pronoun: 'vous direz', form: 'direz', translation: 'direis' },
          { pronoun: 'ils / elles diront', form: 'diront', translation: 'dirão' }
        ]
      }
    }
  },
  {
    id: 'voir',
    infinitive: 'voir',
    translation: 'ver',
    difficulty: 'A2',
    quickExplanation: 'Possui alternância ortográfica em "y/i" e radical duplo em "rr" no futuro simples.',
    patternsAndIrregularities: [
      'No presente plural, usa "y" para nós/vós (nous voyons, vous voyez) e "i" para eles (ils voient).',
      'No Passé Composé, o seu particípio passado é "vu".',
      'Radical do futuro simples dobra o "r" tornando-se "verr-" (je verrai, tu verrai...), herdado de uma síncope fonética histórica.'
    ],
    tenses: {
      present: {
        name: 'Presente',
        frenchName: 'Présent',
        forms: [
          { pronoun: 'je', form: 'vois', translation: 'vejo' },
          { pronoun: 'tu', form: 'vois', translation: 'vês' },
          { pronoun: 'il / elle', form: 'voit', translation: 'vê' },
          { pronoun: 'nous', form: 'voyons', translation: 'vemos' },
          { pronoun: 'vous', form: 'voyez', translation: 'vedes (vós)' },
          { pronoun: 'ils / elles', form: 'voient', translation: 'vêem' }
        ]
      },
      passé_composé: {
        name: 'Passado Composto',
        frenchName: 'Passé Composé',
        forms: [
          { pronoun: 'j’ai', form: 'vu', translation: 'vi' },
          { pronoun: 'tu as', form: 'vu', translation: 'viste' },
          { pronoun: 'il / elle a', form: 'vu', translation: 'viu' },
          { pronoun: 'nous avons', form: 'vu', translation: 'vimos' },
          { pronoun: 'vous avez', form: 'vu', translation: 'vistes' },
          { pronoun: 'ils / elles ont', form: 'vu', translation: 'viram' }
        ]
      },
      imparfait: {
        name: 'Pretérito Imperfeito',
        frenchName: 'Imparfait',
        forms: [
          { pronoun: 'je', form: 'voyais', translation: 'via' },
          { pronoun: 'tu', form: 'voyais', translation: 'vias' },
          { pronoun: 'il / elle voyait', form: 'voyait', translation: 'via' },
          { pronoun: 'nous voyions', form: 'voyions', translation: 'víamos' },
          { pronoun: 'vous voyiez', form: 'voyiez', translation: 'víeis' },
          { pronoun: 'ils / elles voyaient', form: 'voyaient', translation: 'viam' }
        ]
      },
      futur_simple: {
        name: 'Futuro Simples',
        frenchName: 'Futur Simple',
        forms: [
          { pronoun: 'je verrai', form: 'verrai', translation: 'verei' },
          { pronoun: 'tu verras', form: 'verras', translation: 'verás' },
          { pronoun: 'il / elle verra', form: 'verra', translation: 'verá' },
          { pronoun: 'nous verroms', form: 'verrons', translation: 'veremos' },
          { pronoun: 'vous verrez', form: 'verrez', translation: 'vereis' },
          { pronoun: 'ils / elles verront', form: 'verront', translation: 'verão' }
        ]
      }
    }
  }
];
export const COMMON_TEMPS_GLOSSARIO = {
  presente: 'Exprime ações imediatas ou hábitos.',
  passe_compose: 'Exprime realizações concluídas e fixadas no passado.',
  imparfait: 'Exprime rotinas passadas ou descrições ambientais.',
  futur_simple: 'Exprime eventos futuros e previsões absolutas.'
};
