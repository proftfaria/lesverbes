import { Verb } from '../types';

export const OFFLINE_VERBS_DB: Record<string, Verb> = {
  prendre: {
    id: 'prendre',
    infinitive: 'prendre',
    translation: 'tomar / pegar',
    group: '3e',
    auxiliary: 'avoir',
    regular: false,
    difficulty: 'A2',
    explanation: 'Verbo altamente comum do 3º grupo. Possui alteração no radical: perde o "d" nas formas plurais do presente e duplica o "n" na terceira do plural (ils prennent).',
    tenses: {
      present: {
        name: 'Presente',
        frenchName: 'Présent',
        description: 'Desinências de singular: -s, -s, -t. Plural: -ons, -ez, -ent com perda e alteração de radical.',
        forms: [
          { pronoun: 'je', form: 'prends', translation: 'eu tomo / pego' },
          { pronoun: 'tu', form: 'prends', translation: 'tu tomas / pegas' },
          { pronoun: 'il / elle', form: 'prend', translation: 'ele/ela toma / pega' },
          { pronoun: 'nous', form: 'prenons', translation: 'nós tomamos / pegamos' },
          { pronoun: 'vous', form: 'prenez', translation: 'vocês tomam / pegam' },
          { pronoun: 'ils / elles', form: 'prennent', translation: 'eles/elas tomam / pegam' }
        ]
      },
      passé_composé: {
        name: 'Passado Composto',
        frenchName: 'Passé Composé',
        description: 'Formado com "avoir" + o particípio irregular "pris".',
        forms: [
          { pronoun: 'j’ai', form: 'pris', translation: 'eu tomei' },
          { pronoun: 'tu as', form: 'pris', translation: 'tu tomaste' },
          { pronoun: 'il / elle a', form: 'pris', translation: 'ele/ela tomou' },
          { pronoun: 'nous avons', form: 'pris', translation: 'nós tomámos' },
          { pronoun: 'vous avez', form: 'pris', translation: 'vocês tomaram' },
          { pronoun: 'ils / elles ont', form: 'pris', translation: 'eles/elas tomaram' }
        ]
      },
      imparfait: {
        name: 'Pretérito Imperfeito',
        frenchName: 'Imparfait',
        description: 'Formado a partir do radical de nous no presente (pren-) + as desinências.',
        forms: [
          { pronoun: 'je', form: 'prenais', translation: 'eu tomava' },
          { pronoun: 'tu', form: 'prenais', translation: 'tu tomavas' },
          { pronoun: 'il / elle', form: 'prenait', translation: 'ele/ela tomava' },
          { pronoun: 'nous', form: 'prenions', translation: 'nós tomávamos' },
          { pronoun: 'vous', form: 'preniez', translation: 'vocês tomavam' },
          { pronoun: 'ils / elles', form: 'prenaient', translation: 'eles/elas tomavam' }
        ]
      },
      futur_simple: {
        name: 'Futuro Simples',
        frenchName: 'Futur Simple',
        description: 'Radical "prendr-" + -ai, -as, -a, -ons, -ez, -ont.',
        forms: [
          { pronoun: 'je', form: 'prendrai', translation: 'eu tomarei' },
          { pronoun: 'tu', form: 'prendras', translation: 'tu tomarás' },
          { pronoun: 'il / elle', form: 'prendra', translation: 'ele/ela tomará' },
          { pronoun: 'nous', form: 'prendrons', translation: 'nós tomaremos' },
          { pronoun: 'vous', form: 'prendrez', translation: 'vocês tomarão' },
          { pronoun: 'ils / elles', form: 'prendront', translation: 'eles/elas tomarão' }
        ]
      },
      conditionnel: {
        name: 'Condicional Presente',
        frenchName: 'Conditionnel Présent',
        description: 'Radical do futuro "prendr-" + desinências do imperfeito.',
        forms: [
          { pronoun: 'je', form: 'prendrais', translation: 'eu tomaria' },
          { pronoun: 'tu', form: 'prendrais', translation: 'tu tomarias' },
          { pronoun: 'il / elle', form: 'prendrait', translation: 'ele/ela tomaria' },
          { pronoun: 'nous', form: 'prendrions', translation: 'nós tomaríamos' },
          { pronoun: 'vous', form: 'prendriez', translation: 'vocês tomariam' },
          { pronoun: 'ils / elles', form: 'prendraient', translation: 'eles/elas tomariam' }
        ]
      },
      subjonctif: {
        name: 'Subjuntivo Presente',
        frenchName: 'Subjonctif Présent',
        description: 'Radicais alternados "prenn-" (sg, ils) e "pren-" (nous, vous).',
        forms: [
          { pronoun: 'que je', form: 'prenne', translation: 'que eu tome' },
          { pronoun: 'que tu', form: 'prennes', translation: 'que tu tomes' },
          { pronoun: 'qu’il / elle', form: 'prenne', translation: 'que ele/ela tome' },
          { pronoun: 'que nous', form: 'prenions', translation: 'que nós tomemos' },
          { pronoun: 'que vous', form: 'preniez', translation: 'que vocês tomem' },
          { pronoun: 'qu’ils / elles prennent', form: 'prennent', translation: 'que eles/elas tomem' }
        ]
      }
    },
    examples: [
      { pronoun: 'je', french: 'Je prends un café le matin.', portuguese: 'Eu tomo um café pela manhã.' },
      { pronoun: 'tu', french: 'Tu prends le train de midi ?', portuguese: 'Tu pegas o trem de meio-dia?' },
      { pronoun: 'il / elle', french: 'Elle prend soin de sa sœur.', portuguese: 'Ela toma conta da irmã dela.' },
      { pronoun: 'nous', french: 'Nous prenons le bus.', portuguese: 'Nós pegamos o ônibus.' },
      { pronoun: 'vous', french: 'Vous prenez des vacances bientôt ?', portuguese: 'Vocês tiram férias em breve?' },
      { pronoun: 'ils / elles', french: 'Ils prennent leur temps.', portuguese: 'Eles levam seu tempo (não têm pressa).' }
    ]
  },
  venir: {
    id: 'venir',
    infinitive: 'venir',
    translation: 'vir',
    group: '3e',
    auxiliary: 'être',
    regular: false,
    difficulty: 'A2',
    explanation: 'Verbo de movimento do 3º grupo (usa o auxiliar être no passado). Alterna radical radicalmente (viens, ven-, vienn-). Essencial também para o passado recente (venir de + infinitivo).',
    tenses: {
      present: {
        name: 'Presente',
        frenchName: 'Présent',
        description: 'Alternança de radical entre je/tu/il (vien-), nous/vous (ven-) e ils (vienn-).',
        forms: [
          { pronoun: 'je', form: 'viens', translation: 'eu venho' },
          { pronoun: 'tu', form: 'viens', translation: 'tu vens' },
          { pronoun: 'il / elle', form: 'vient', translation: 'ele/ela vem' },
          { pronoun: 'nous', form: 'venons', translation: 'nós vimos' },
          { pronoun: 'vous', form: 'venez', translation: 'vocês vêm' },
          { pronoun: 'ils / elles', form: 'viennent', translation: 'eles/elas vêm' }
        ]
      },
      passé_composé: {
        name: 'Passado Composto',
        frenchName: 'Passé Composé',
        description: 'Usado com o auxiliar "être" + particípio "venu(e)(s)". Exige acordo de gênero/número.',
        forms: [
          { pronoun: 'je suis', form: 'venu(e)', translation: 'eu vim / estive' },
          { pronoun: 'tu es', form: 'venu(e)', translation: 'tu vieste' },
          { pronoun: 'il / elle est', form: 'venu(e)', translation: 'ele/ela veio' },
          { pronoun: 'nous sommes', form: 'venu(e)s', translation: 'nós viemos' },
          { pronoun: 'vous êtes', form: 'venu(e)s', translation: 'vocês vieram' },
          { pronoun: 'ils / elles sont', form: 'venu(e)s', translation: 'eles/elas vieram' }
        ]
      },
      imparfait: {
        name: 'Pretérito Imperfeito',
        frenchName: 'Imparfait',
        description: 'Radical de nous no presente (ven-) + desinências normais.',
        forms: [
          { pronoun: 'je', form: 'venais', translation: 'eu vinha' },
          { pronoun: 'tu', form: 'venais', translation: 'tu vinhas' },
          { pronoun: 'il / elle', form: 'venait', translation: 'ele/ela vinha' },
          { pronoun: 'nous', form: 'venions', translation: 'nós vínhamos' },
          { pronoun: 'vous', form: 'veniez', translation: 'vocês vinham' },
          { pronoun: 'ils / elles', form: 'venaient', translation: 'eles/elas vinham' }
        ]
      },
      futur_simple: {
        name: 'Futuro Simples',
        frenchName: 'Futur Simple',
        description: 'Tem um radical inovado: "viendr-" + desinências.',
        forms: [
          { pronoun: 'je', form: 'viendrai', translation: 'eu virei' },
          { pronoun: 'tu', form: 'viendras', translation: 'tu virás' },
          { pronoun: 'il / elle', form: 'viendra', translation: 'ele/ela virá' },
          { pronoun: 'nous', form: 'viendrons', translation: 'nós viremos' },
          { pronoun: 'vous', form: 'viendrez', translation: 'vocês virão' },
          { pronoun: 'ils / elles', form: 'viendront', translation: 'eles/elas virão' }
        ]
      },
      conditionnel: {
        name: 'Condicional Presente',
        frenchName: 'Conditionnel Présent',
        description: 'Radical "viendr-" + desinências de imperfeito.',
        forms: [
          { pronoun: 'je', form: 'viendrais', translation: 'eu viria' },
          { pronoun: 'tu', form: 'viendrais', translation: 'tu virias' },
          { pronoun: 'il / elle', form: 'viendrait', translation: 'ele/ela viria' },
          { pronoun: 'nous', form: 'viendrions', translation: 'nós viríamos' },
          { pronoun: 'vous', form: 'viendriez', translation: 'vocês viriam' },
          { pronoun: 'ils / elles', form: 'viendraient', translation: 'eles/elas viriam' }
        ]
      },
      subjonctif: {
        name: 'Subjuntivo Presente',
        frenchName: 'Subjonctif Présent',
        description: 'Estruturação baseada no radical dual vienn/ven- + desinências.',
        forms: [
          { pronoun: 'que je', form: 'vienne', translation: 'que eu venha' },
          { pronoun: 'que tu', form: 'viennes', translation: 'que tu venhas' },
          { pronoun: 'qu’il / elle', form: 'vienne', translation: 'que ele/ela venha' },
          { pronoun: 'que nous', form: 'venions', translation: 'que nós venhamos' },
          { pronoun: 'que vous', form: 'veniez', translation: 'que vocês venham' },
          { pronoun: 'qu’ils / elles viennent', form: 'viennent', translation: 'que eles/elas venham' }
        ]
      }
    },
    examples: [
      { pronoun: 'je', french: 'Je viens de Lisbonne.', portuguese: 'Eu venho de Lisboa.' },
      { pronoun: 'tu', french: 'Tu viens avec nous ce soir ?', portuguese: 'Tu vens connosco esta noite?' },
      { pronoun: 'il / elle', french: 'Il vient toujours en retard.', portuguese: 'Ele vem sempre atrasado.' },
      { pronoun: 'nous', french: 'Nous venons de finir notre repas.', portuguese: 'Nós acabamos de terminar a nossa refeição (passado recente).' },
      { pronoun: 'vous', french: 'D’où venez-vous ?', portuguese: 'De onde vem você? / De onde vêm vocês?' },
      { pronoun: 'ils / elles', french: 'Elles viennent nous rendre visite.', portuguese: 'Elas vêm visitar-nos.' }
    ]
  },
  vouloir: {
    id: 'vouloir',
    infinitive: 'vouloir',
    translation: 'querer',
    group: '3e',
    auxiliary: 'avoir',
    regular: false,
    difficulty: 'A2',
    explanation: 'Expressa vontade ou desejo. Altamente irregular, substitui vogais no radical (veut, voul-, veul-). O condicional "Je voudrais" é o mais usado para solicitações polidas.',
    tenses: {
      present: {
        name: 'Presente',
        frenchName: 'Présent',
        description: 'Típicas desinências de radical irregular em x, x, t: -veux, -veux, -veut.',
        forms: [
          { pronoun: 'je', form: 'veux', translation: 'eu quero' },
          { pronoun: 'tu', form: 'veux', translation: 'tu queres' },
          { pronoun: 'il / elle', form: 'veut', translation: 'ele/ela quer' },
          { pronoun: 'nous', form: 'voulons', translation: 'nós queremos' },
          { pronoun: 'vous', form: 'voulez', translation: 'vocês querem' },
          { pronoun: 'ils / elles', form: 'veulent', translation: 'eles/elas querem' }
        ]
      },
      passé_composé: {
        name: 'Passado Composto',
        frenchName: 'Passé Composé',
        description: 'Formado com "avoir" + o particípio "voulu".',
        forms: [
          { pronoun: 'j’ai', form: 'voulu', translation: 'eu quis' },
          { pronoun: 'tu as', form: 'voulu', translation: 'tu quiseste' },
          { pronoun: 'il / elle a', form: 'voulu', translation: 'ele/ela quis' },
          { pronoun: 'nous avons', form: 'voulu', translation: 'nós quisemos' },
          { pronoun: 'vous avez', form: 'voulu', translation: 'vocês quiseram' },
          { pronoun: 'ils / elles ont', form: 'voulu', translation: 'eles/elas quiseram' }
        ]
      },
      imparfait: {
        name: 'Pretérito Imperfeito',
        frenchName: 'Imparfait',
        description: 'Radical "voul-" + desinências normais.',
        forms: [
          { pronoun: 'je', form: 'voulais', translation: 'eu queria' },
          { pronoun: 'tu', form: 'voulais', translation: 'tu querias' },
          { pronoun: 'il / elle', form: 'voulait', translation: 'ele/ela queria' },
          { pronoun: 'nous', form: 'voulions', translation: 'nós queríamos' },
          { pronoun: 'vous', form: 'vouliez', translation: 'vocês queriam' },
          { pronoun: 'ils / elles voulaient', form: 'voulaient', translation: 'eles/elas queriam' }
        ]
      },
      futur_simple: {
        name: 'Futuro Simples',
        frenchName: 'Futur Simple',
        description: 'Radical "voudr-" + -ai, -as, -a, -ons, -ez, -ont.',
        forms: [
          { pronoun: 'je', form: 'voudrai', translation: 'eu quererei' },
          { pronoun: 'tu', form: 'voudras', translation: 'tu quererás' },
          { pronoun: 'il / elle', form: 'voudra', translation: 'ele/ela quererá' },
          { pronoun: 'nous', form: 'voudrons', translation: 'nós quereremos' },
          { pronoun: 'vous', form: 'voudrez', translation: 'vocês quererão' },
          { pronoun: 'ils / elles voudront', form: 'voudront', translation: 'eles/elas quererão' }
        ]
      },
      conditionnel: {
        name: 'Condicional Presente',
        frenchName: 'Conditionnel Présent',
        description: 'Radical "voudr-" + desinências de imperfeito. Muito usado no quotidiano.',
        forms: [
          { pronoun: 'je', form: 'voudrais', translation: 'eu gostaria / quereria' },
          { pronoun: 'tu', form: 'voudrais', translation: 'tu gostarias' },
          { pronoun: 'il / elle', form: 'voudrait', translation: 'ele/ela gostaria' },
          { pronoun: 'nous', form: 'voudrions', translation: 'nós gostaríamos' },
          { pronoun: 'vous', form: 'voudriez', translation: 'vocês gostariam' },
          { pronoun: 'ils / elles voudraient', form: 'voudraient', translation: 'eles/elas gostariam' }
        ]
      },
      subjonctif: {
        name: 'Subjuntivo Presente',
        frenchName: 'Subjonctif Présent',
        description: 'Mudança radical para "veuill-" no singular e ils; "voul-" em nous e vous.',
        forms: [
          { pronoun: 'que je', form: 'veuille', translation: 'que eu queira' },
          { pronoun: 'que tu', form: 'veuilles', translation: 'que tu queiras' },
          { pronoun: 'qu’il / elle', form: 'veuille', translation: 'que ele/ela queira' },
          { pronoun: 'que nous', form: 'voulions', translation: 'que nós queiramos' },
          { pronoun: 'que vous', form: 'vouliez', translation: 'que vocês queiram' },
          { pronoun: 'qu’ils / elles veuillent', form: 'veuillent', translation: 'que eles/elas queiram' }
        ]
      }
    },
    examples: [
      { pronoun: 'je', french: 'Je voudrais commander un verre d’eau.', portuguese: 'Eu gostaria de pedir um copo de água.' },
      { pronoun: 'tu', french: 'Qu’est-ce que tu veux faire ce soir ?', portuguese: 'O que tu queres fazer esta noite?' },
      { pronoun: 'il / elle', french: 'Il veut acheter une nouvelle voiture.', portuguese: 'Ele quer comprar um carro novo.' },
      { pronoun: 'nous', french: 'Nous voulons apprendre le français.', portuguese: 'Nós queremos aprender francês.' },
      { pronoun: 'vous', french: 'Voulez-vous danser avec moi ?', portuguese: 'Quer dançar comigo? / Vocês querem dançar comigo?' },
      { pronoun: 'ils / elles', french: 'Ils ne veulent pas manger de viande.', portuguese: 'Eles não querem comer carne.' }
    ]
  },
  pouvoir: {
    id: 'pouvoir',
    infinitive: 'pouvoir',
    translation: 'poder / ser capaz de',
    group: '3e',
    auxiliary: 'avoir',
    regular: false,
    difficulty: 'A2',
    explanation: 'Verbo modal essencial francês para exprimir capacidade ou permissão. Comporta-se de modo parecido com vouloir, no entanto com radicais em "peux" e "pu-".',
    tenses: {
      present: {
        name: 'Presente',
        frenchName: 'Présent',
        description: 'Singular em x, x, t: peux, peux, peut. Nous/vous com "pou-"; ils com "peu-".',
        forms: [
          { pronoun: 'je', form: 'peux', translation: 'eu posso' },
          { pronoun: 'tu', form: 'peux', translation: 'tu podes' },
          { pronoun: 'il / elle', form: 'peut', translation: 'ele/ela pode' },
          { pronoun: 'nous', form: 'pouvons', translation: 'nós podemos' },
          { pronoun: 'vous', form: 'pouvez', translation: 'vocês podem' },
          { pronoun: 'ils / elles', form: 'peuvent', translation: 'eles/elas podem' }
        ]
      },
      passé_composé: {
        name: 'Passado Composto',
        frenchName: 'Passé Composé',
        description: 'Auxiliar "avoir" e particípio curto "pu".',
        forms: [
          { pronoun: 'j’ai', form: 'pu', translation: 'eu pude / consegui' },
          { pronoun: 'tu as', form: 'pu', translation: 'tu pudeste' },
          { pronoun: 'il / elle a', form: 'pu', translation: 'ele/ela pôde' },
          { pronoun: 'nous avons', form: 'pu', translation: 'nós pudemos / conseguimos' },
          { pronoun: 'vous avez', form: 'pu', translation: 'vocês puderam' },
          { pronoun: 'ils / elles ont', form: 'pu', translation: 'eles/elas puderam' }
        ]
      },
      imparfait: {
        name: 'Pretérito Imperfeito',
        frenchName: 'Imparfait',
        description: 'Radical "pouv-" + desinências normais.',
        forms: [
          { pronoun: 'je', form: 'pouvais', translation: 'eu podia' },
          { pronoun: 'tu', form: 'pouvais', translation: 'tu podias' },
          { pronoun: 'il / elle', form: 'pouvait', translation: 'ele/ela podia' },
          { pronoun: 'nous', form: 'pouvions', translation: 'nós podíamos' },
          { pronoun: 'vous', form: 'pouviez', translation: 'vocês podiam' },
          { pronoun: 'ils / elles pouvaient', form: 'pouvaient', translation: 'eles/elas podiam' }
        ]
      },
      futur_simple: {
        name: 'Futuro Simples',
        frenchName: 'Futur Simple',
        description: 'Inova o radical em "pourr-" com duas letras r!',
        forms: [
          { pronoun: 'je', form: 'pourrai', translation: 'eu poderei' },
          { pronoun: 'tu', form: 'pourras', translation: 'tu poderás' },
          { pronoun: 'il / elle', form: 'pourra', translation: 'ele/ela poderá' },
          { pronoun: 'nous', form: 'pourrons', translation: 'nós poderemos' },
          { pronoun: 'vous', form: 'pourrez', translation: 'vocês poderão' },
          { pronoun: 'ils / elles pourront', form: 'pourront', translation: 'eles/elas poderão' }
        ]
      },
      conditionnel: {
        name: 'Condicional Presente',
        frenchName: 'Conditionnel Présent',
        description: 'Radical duplo "pourr-" + desinências do imperfeito.',
        forms: [
          { pronoun: 'je', form: 'pourrais', translation: 'eu poderia' },
          { pronoun: 'tu', form: 'pourrais', translation: 'tu poderias' },
          { pronoun: 'il / elle', form: 'pourrait', translation: 'ele/ela poderia' },
          { pronoun: 'nous', form: 'pourrions', translation: 'nós poderíamos' },
          { pronoun: 'vous', form: 'pourriez', translation: 'vocês poderiam' },
          { pronoun: 'ils / elles pourraient', form: 'pourraient', translation: 'eles/elas poderiam' }
        ]
      },
      subjonctif: {
        name: 'Subjuntivo Presente',
        frenchName: 'Subjonctif Présent',
        description: 'Ganha um radical especialíssimo "puiss-" similar ao espanhol/português "possa".',
        forms: [
          { pronoun: 'que je', form: 'puisse', translation: 'que eu possa' },
          { pronoun: 'que tu', form: 'puisses', translation: 'que tu possas' },
          { pronoun: 'qu’il / elle', form: 'puisse', translation: 'que ele/ela possa' },
          { pronoun: 'que nous', form: 'puissions', translation: 'que nós possamos' },
          { pronoun: 'que vous', form: 'puissiez', translation: 'que vocês possam' },
          { pronoun: 'qu’ils / elles puissent', form: 'puissent', translation: 'que eles/elas possam' }
        ]
      }
    },
    examples: [
      { pronoun: 'je', french: 'Je peux parler français.', portuguese: 'Eu posso falar francês.' },
      { pronoun: 'tu', french: 'Est-ce que tu peux m’aider ?', portuguese: 'Tu podes me ajudar?' },
      { pronoun: 'il / elle', french: 'Elle peut nager très vite.', portuguese: 'Ela consegue nadar muito rápido.' },
      { pronoun: 'nous', french: 'Nous pouvons rester ici.', portuguese: 'Nós podemos ficar aqui.' },
      { pronoun: 'vous', french: 'Pouvez-vous fermer la porte ?', portuguese: 'Pode fechar a porta? / Vocês podem fechar a porta?' },
      { pronoun: 'ils / elles', french: 'Ils peuvent venir ce soir.', portuguese: 'Eles podem vir esta noite.' }
    ]
  },
  devoir: {
    id: 'devoir',
    infinitive: 'devoir',
    translation: 'dever / ter de',
    group: '3e',
    auxiliary: 'avoir',
    regular: false,
    difficulty: 'B1',
    explanation: 'Verbo modal que exprime obrigação ou necessidade absoluta. Radicais muito diversificados (dois / dev / doiv). O particípio passado carrega um acento circunflexo (dû) para diferenciar de "du".',
    tenses: {
      present: {
        name: 'Presente',
        frenchName: 'Présent',
        description: 'Singular: dois, dois, doit. Plural: devons, devez, doivent com alteração profunda.',
        forms: [
          { pronoun: 'je', form: 'dois', translation: 'eu devo / tenho de' },
          { pronoun: 'tu', form: 'dois', translation: 'tu deves' },
          { pronoun: 'il / elle', form: 'doit', translation: 'ele/ela deve' },
          { pronoun: 'nous', form: 'devons', translation: 'nós devemos' },
          { pronoun: 'vous', form: 'devez', translation: 'vocês devem' },
          { pronoun: 'ils / elles', form: 'doivent', translation: 'eles/elas devem' }
        ]
      },
      passé_composé: {
        name: 'Passado Composto',
        frenchName: 'Passé Composé',
        description: 'Auxiliar "avoir" + o particípio "dû" (com acento circunflexo distintivo!).',
        forms: [
          { pronoun: 'j’ai', form: 'dû', translation: 'eu devia / tive de' },
          { pronoun: 'tu as', form: 'dû', translation: 'tu tiveste de' },
          { pronoun: 'il / elle a', form: 'dû', translation: 'ele/ela teve de' },
          { pronoun: 'nous avons', form: 'dû', translation: 'nós tivemos de' },
          { pronoun: 'vous avez', form: 'dû', translation: 'vocês tiveram de' },
          { pronoun: 'ils / elles ont', form: 'dû', translation: 'eles/elas tiveram de' }
        ]
      },
      imparfait: {
        name: 'Pretérito Imperfeito',
        frenchName: 'Imparfait',
        description: 'Radical "dev-" + desinências normais.',
        forms: [
          { pronoun: 'je', form: 'devais', translation: 'eu devia' },
          { pronoun: 'tu', form: 'devais', translation: 'tu devias' },
          { pronoun: 'il / elle', form: 'devait', translation: 'ele/ela devia' },
          { pronoun: 'nous', form: 'devions', translation: 'nós devíamos' },
          { pronoun: 'vous', form: 'deviez', translation: 'vocês deviam' },
          { pronoun: 'ils / elles devaient', form: 'devaient', translation: 'eles/elas deviam' }
        ]
      },
      futur_simple: {
        name: 'Futuro Simples',
        frenchName: 'Futur Simple',
        description: 'Radical "devr-" + as desinências.',
        forms: [
          { pronoun: 'je', form: 'devrai', translation: 'eu deverei' },
          { pronoun: 'tu', form: 'devras', translation: 'tu deverás' },
          { pronoun: 'il / elle', form: 'devra', translation: 'ele/ela deverá' },
          { pronoun: 'nous', form: 'devrons', translation: 'nós deveremos' },
          { pronoun: 'vous', form: 'devrez', translation: 'vocês deverão' },
          { pronoun: 'ils / elles devront', form: 'devront', translation: 'eles/elas deverão' }
        ]
      },
      conditionnel: {
        name: 'Condicional Presente',
        frenchName: 'Conditionnel Présent',
        description: 'Radical "devr-" + desinências do imperfeito. Usado para conselhos suaves ("tu devrais...").',
        forms: [
          { pronoun: 'je', form: 'devrais', translation: 'eu deveria' },
          { pronoun: 'tu', form: 'devrais', translation: 'tu deverias' },
          { pronoun: 'il / elle', form: 'devrait', translation: 'ele/ela deveria' },
          { pronoun: 'nous', form: 'devrions', translation: 'nós deveríamos' },
          { pronoun: 'vous', form: 'devriez', translation: 'vocês deveriam' },
          { pronoun: 'ils / elles devraient', form: 'devraient', translation: 'eles/elas deveriam' }
        ]
      },
      subjonctif: {
        name: 'Subjuntivo Presente',
        frenchName: 'Subjonctif Présent',
        description: 'Divisão de radicais entre "doiv-" e "dev-".',
        forms: [
          { pronoun: 'que je', form: 'doive', translation: 'que eu deva' },
          { pronoun: 'que tu', form: 'doives', translation: 'que tu devas' },
          { pronoun: 'qu’il / elle', form: 'doive', translation: 'que ele/ela deva' },
          { pronoun: 'que nous', form: 'devions', translation: 'que nós devamos' },
          { pronoun: 'que vous', form: 'deviez', translation: 'que vocês devam' },
          { pronoun: 'qu’ils / elles doivent', form: 'doivent', translation: 'que eles/elas devam' }
        ]
      }
    },
    examples: [
      { pronoun: 'je', french: 'Je dois étudier ce soir.', portuguese: 'Eu devo estudar esta noite.' },
      { pronoun: 'tu', french: 'Tu dois faire attention.', portuguese: 'Tu tens de prestar atenção.' },
      { pronoun: 'il / elle', french: 'Il doit partir immédiatement.', portuguese: 'Ele deve ir embora de imediato.' },
      { pronoun: 'nous', french: 'Nous devons respecter la loi.', portuguese: 'Nós devemos respeitar a lei.' },
      { pronoun: 'vous', french: 'Vous devez finir ce travail.', portuguese: 'Vocês têm de terminar este trabalho.' },
      { pronoun: 'ils / elles', french: 'Elles doivent arriver tard.', portuguese: 'Elas devem chegar mais tarde.' }
    ]
  },
  voir: {
    id: 'voir',
    infinitive: 'voir',
    translation: 'ver / enxergar',
    group: '3e',
    auxiliary: 'avoir',
    regular: false,
    difficulty: 'A2',
    explanation: 'Verbo irregular frequente. Substitui a letra "i" por "y" no plural do presente e ganha um r extra no futuro (verrai).',
    tenses: {
      present: {
        name: 'Presente',
        frenchName: 'Présent',
        description: 'Note a troca de "i" por "y" em nous e vous: voyons, voyez.',
        forms: [
          { pronoun: 'je', form: 'vois', translation: 'eu vejo' },
          { pronoun: 'tu', form: 'vois', translation: 'tu vês' },
          { pronoun: 'il / elle', form: 'voit', translation: 'ele/ela vê' },
          { pronoun: 'nous', form: 'voyons', translation: 'nós vemos' },
          { pronoun: 'vous', form: 'voyez', translation: 'vocês veem' },
          { pronoun: 'ils / elles', form: 'voient', translation: 'eles/elas veem' }
        ]
      },
      passé_composé: {
        name: 'Passado Composto',
        frenchName: 'Passé Composé',
        description: 'Conjugado com "avoir" e particípio "vu".',
        forms: [
          { pronoun: 'j’ai', form: 'vu', translation: 'eu vi' },
          { pronoun: 'tu as', form: 'vu', translation: 'tu viste' },
          { pronoun: 'il / elle a', form: 'vu', translation: 'ele/ela viu' },
          { pronoun: 'nous avons', form: 'vu', translation: 'nós vimos' },
          { pronoun: 'vous avez', form: 'vu', translation: 'vocês viram' },
          { pronoun: 'ils / elles ont', form: 'vu', translation: 'eles/elas viram' }
        ]
      },
      imparfait: {
        name: 'Pretérito Imperfeito',
        frenchName: 'Imparfait',
        description: 'Radical voy- + desinências normais.',
        forms: [
          { pronoun: 'je', form: 'voyais', translation: 'eu via' },
          { pronoun: 'tu', form: 'voyais', translation: 'tu vias' },
          { pronoun: 'il / elle', form: 'voyait', translation: 'ele/ela via' },
          { pronoun: 'nous', form: 'voyions', translation: 'nós víamos' },
          { pronoun: 'vous', form: 'voyiez', translation: 'vocês viam' },
          { pronoun: 'ils / elles voyaient', form: 'voyaient', translation: 'eles/elas viam' }
        ]
      },
      futur_simple: {
        name: 'Futuro Simples',
        frenchName: 'Futur Simple',
        description: 'Importante: ganha r-duplo: "verr-"!',
        forms: [
          { pronoun: 'je', form: 'verrai', translation: 'eu verei' },
          { pronoun: 'tu', form: 'verras', translation: 'tu verás' },
          { pronoun: 'il / elle', form: 'verra', translation: 'ele/ela verá' },
          { pronoun: 'nous', form: 'verrons', translation: 'nós veremos' },
          { pronoun: 'vous', form: 'verrez', translation: 'vocês verão' },
          { pronoun: 'ils / elles verront', form: 'verront', translation: 'eles/elas verão' }
        ]
      },
      conditionnel: {
        name: 'Condicional Presente',
        frenchName: 'Conditionnel Présent',
        description: 'Radical "verr-" + desinências do imperfeito.',
        forms: [
          { pronoun: 'je', form: 'verrais', translation: 'eu veria' },
          { pronoun: 'tu', form: 'verrais', translation: 'tu verias' },
          { pronoun: 'il / elle', form: 'verrait', translation: 'ele/ela veria' },
          { pronoun: 'nous', form: 'verrions', translation: 'nós veríamos' },
          { pronoun: 'vous', form: 'verriez', translation: 'vocês veriam' },
          { pronoun: 'ils / elles verraient', form: 'verraient', translation: 'eles/elas veriam' }
        ]
      },
      subjonctif: {
        name: 'Subjuntivo Presente',
        frenchName: 'Subjonctif Présent',
        description: 'Usa "voi-" (sg, ils) e "voy-" (nous, vous) + terminações padrão.',
        forms: [
          { pronoun: 'que je', form: 'voie', translation: 'que eu veja' },
          { pronoun: 'que tu', form: 'voies', translation: 'que tu vejas' },
          { pronoun: 'qu’il / elle', form: 'voie', translation: 'que ele/ela veja' },
          { pronoun: 'que nous', form: 'voyions', translation: 'que nós vejamos' },
          { pronoun: 'que vous', form: 'voyiez', translation: 'que vocês vejam' },
          { pronoun: 'qu’ils / elles voient', form: 'voient', translation: 'que eles/elas vejam' }
        ]
      }
    },
    examples: [
      { pronoun: 'je', french: 'Je vois un oiseau bleu no jardin.', portuguese: 'Eu vejo um pássaro azul no jardim.' },
      { pronoun: 'tu', french: 'Tu vois ce que je veux dire ?', portuguese: 'Tu vês o que eu quero dizer?' },
      { pronoun: 'il / elle', french: 'Elle voit son médecin à 15h.', portuguese: 'Ela vê o médico dela às 15h.' },
      { pronoun: 'nous', french: 'Nous voyons de grands changements aqui.', portuguese: 'Nós vemos grandes mudanças aqui.' },
      { pronoun: 'vous', french: 'Voyez-vous la différence ?', portuguese: 'Vê a diferença? / Vocês veem a diferença?' },
      { pronoun: 'ils / elles', french: 'Ils voient un film ce soir.', portuguese: 'Eles assistem (veem) um filme esta noite.' }
    ]
  },
  savoir: {
    id: 'savoir',
    infinitive: 'savoir',
    translation: 'saber (informações/habilidades)',
    group: '3e',
    auxiliary: 'avoir',
    regular: false,
    difficulty: 'A2',
    explanation: 'Verbo de ação cognitiva. Possui o radical irregular "sai-" no singular, "sav-" nas formas plurais do presente e "sau-" no futuro e condicional.',
    tenses: {
      present: {
        name: 'Presente',
        frenchName: 'Présent',
        description: 'Diferenciação clara entre singular (sais) e plural (savons).',
        forms: [
          { pronoun: 'je', form: 'sais', translation: 'eu sei' },
          { pronoun: 'tu', form: 'sais', translation: 'tu sabes' },
          { pronoun: 'il / elle', form: 'sait', translation: 'ele/ela sabe' },
          { pronoun: 'nous', form: 'savons', translation: 'nós sabemos' },
          { pronoun: 'vous', form: 'savez', translation: 'vocês sabem' },
          { pronoun: 'ils / elles', form: 'savent', translation: 'eles/elas sabem' }
        ]
      },
      passé_composé: {
        name: 'Passado Composto',
        frenchName: 'Passé Composé',
        description: 'Usado com "avoir" + particípio "su". Significa normalmente "descobri".',
        forms: [
          { pronoun: 'j’ai', form: 'su', translation: 'eu soube / descobri' },
          { pronoun: 'tu as', form: 'su', translation: 'tu soubeste' },
          { pronoun: 'il / elle a', form: 'su', translation: 'ele/ela soube' },
          { pronoun: 'nous avons', form: 'su', translation: 'nós soubemos' },
          { pronoun: 'vous avez', form: 'su', translation: 'vocês souberam' },
          { pronoun: 'ils / elles ont', form: 'su', translation: 'eles/elas souberam' }
        ]
      },
      imparfait: {
        name: 'Pretérito Imperfeito',
        frenchName: 'Imparfait',
        description: 'Radical "sav-" + desinências habituais.',
        forms: [
          { pronoun: 'je', form: 'savais', translation: 'eu sabia' },
          { pronoun: 'tu', form: 'savais', translation: 'tu sabias' },
          { pronoun: 'il / elle', form: 'savait', translation: 'ele/ela sabia' },
          { pronoun: 'nous', form: 'savions', translation: 'nós sabíamos' },
          { pronoun: 'vous', form: 'saviez', translation: 'vocês sabiam' },
          { pronoun: 'ils / elles savaient', form: 'savaient', translation: 'eles/elas sabiam' }
        ]
      },
      futur_simple: {
        name: 'Futuro Simples',
        frenchName: 'Futur Simple',
        description: 'Inova o radical em "saur-" + terminações.',
        forms: [
          { pronoun: 'je', form: 'saurai', translation: 'eu saberei' },
          { pronoun: 'tu', form: 'sauras', translation: 'tu saberás' },
          { pronoun: 'il / elle', form: 'saura', translation: 'ele/ela saberá' },
          { pronoun: 'nous', form: 'saurons', translation: 'nós saberemos' },
          { pronoun: 'vous', form: 'saurez', translation: 'vocês saberão' },
          { pronoun: 'ils / elles sauront', form: 'sauront', translation: 'eles/elas saberão' }
        ]
      },
      conditionnel: {
        name: 'Condicional Presente',
        frenchName: 'Conditionnel Présent',
        description: 'Radical "saur-" + terminações do imperfeito.',
        forms: [
          { pronoun: 'je', form: 'saurais', translation: 'eu saberia' },
          { pronoun: 'tu', form: 'saurais', translation: 'tu saberias' },
          { pronoun: 'il / elle', form: 'saurait', translation: 'ele/ela saberia' },
          { pronoun: 'nous', form: 'saurions', translation: 'nós saberíamos' },
          { pronoun: 'vous', form: 'sauriez', translation: 'vocês saberiam' },
          { pronoun: 'ils / elles sauraient', form: 'sauraient', translation: 'eles/elas saberia' }
        ]
      },
      subjonctif: {
        name: 'Subjuntivo Presente',
        frenchName: 'Subjonctif Présent',
        description: 'Radical especial "sach-" em todas as formas (sache, sachons).',
        forms: [
          { pronoun: 'que je', form: 'sache', translation: 'que eu saiba' },
          { pronoun: 'que tu', form: 'saches', translation: 'que tu saibas' },
          { pronoun: 'qu’il / elle', form: 'sache', translation: 'que ele/ela saiba' },
          { pronoun: 'que nous', form: 'sachions', translation: 'que nós saibamos' },
          { pronoun: 'que vous', form: 'sachiez', translation: 'que vocês saibam' },
          { pronoun: 'qu’ils / elles sachent', form: 'sachent', translation: 'que eles/elas saibam' }
        ]
      }
    },
    examples: [
      { pronoun: 'je', french: 'Je sais nager depuis l’âge de cinq ans.', portuguese: 'Eu sei nadar desde os cinco anos de idade.' },
      { pronoun: 'tu', french: 'Est-ce que tu sais où est la gare ?', portuguese: 'Tu sabes onde fica a estação?' },
      { pronoun: 'il / elle', french: 'Il sait parler trois langues.', portuguese: 'Ele sabe falar três línguas.' },
      { pronoun: 'nous', french: 'Nous savons tout sur cette histoire.', portuguese: 'Nós sabemos tudo sobre esta história.' },
      { pronoun: 'vous', french: 'Savez-vous jouer du piano ?', portuguese: 'Sabe tocar piano? / Vocês sabem jogar piano?' },
      { pronoun: 'ils / elles', french: 'Ils savent ce qu’ils doivent faire.', portuguese: 'Eles sabem o que devem fazer.' }
    ]
  },
  dire: {
    id: 'dire',
    infinitive: 'dire',
    translation: 'dizer / falar',
    group: '3e',
    auxiliary: 'avoir',
    regular: false,
    difficulty: 'A1',
    explanation: 'Um dos verbos mais frequentes. Atenção máxima à forma de "vous" no presente: "vous dites" (não "vous disez").',
    tenses: {
      present: {
        name: 'Presente',
        frenchName: 'Présent',
        description: 'Irregularidade principal na segunda pessoa do plural: "vous dites".',
        forms: [
          { pronoun: 'je', form: 'dis', translation: 'eu digo' },
          { pronoun: 'tu', form: 'dis', translation: 'tu dizes' },
          { pronoun: 'il / elle', form: 'dit', translation: 'ele/ela diz' },
          { pronoun: 'nous', form: 'disons', translation: 'nós dizemos' },
          { pronoun: 'vous', form: 'dites', translation: 'vocês dizem' },
          { pronoun: 'ils / elles', form: 'disent', translation: 'eles/elas dizem' }
        ]
      },
      passé_composé: {
        name: 'Passado Composto',
        frenchName: 'Passé Composé',
        description: 'Usado com "avoir" e particípio "dit".',
        forms: [
          { pronoun: 'j’ai', form: 'dit', translation: 'eu disse' },
          { pronoun: 'tu as', form: 'dit', translation: 'tu disseste' },
          { pronoun: 'il / elle a', form: 'dit', translation: 'ele/ela disse' },
          { pronoun: 'nous avons', form: 'dit', translation: 'nós dissemos' },
          { pronoun: 'vous avez', form: 'dit', translation: 'vocês disseram' },
          { pronoun: 'ils / elles ont', form: 'dit', translation: 'eles/elas disseram' }
        ]
      },
      imparfait: {
        name: 'Pretérito Imperfeito',
        frenchName: 'Imparfait',
        description: 'Radical "dis-" + desinências normais.',
        forms: [
          { pronoun: 'je', form: 'disais', translation: 'eu dizia' },
          { pronoun: 'tu', form: 'disais', translation: 'tu dizias' },
          { pronoun: 'il / elle', form: 'disait', translation: 'ele/ela dizia' },
          { pronoun: 'nous', form: 'disions', translation: 'nós dizíamos' },
          { pronoun: 'vous', form: 'disiez', translation: 'vocês diziam' },
          { pronoun: 'ils / elles disaient', form: 'disaient', translation: 'eles/elas diziam' }
        ]
      },
      futur_simple: {
        name: 'Futuro Simples',
        frenchName: 'Futur Simple',
        description: 'Infinitivo sem "e": radical "dir-" + terminações.',
        forms: [
          { pronoun: 'je', form: 'dirai', translation: 'eu direi' },
          { pronoun: 'tu', form: 'diras', translation: 'tu dirás' },
          { pronoun: 'il / elle', form: 'dira', translation: 'ele/ela dirá' },
          { pronoun: 'nous', form: 'dirons', translation: 'nós diremos' },
          { pronoun: 'vous', form: 'direz', translation: 'vocês dirão' },
          { pronoun: 'ils / elles diront', form: 'diront', translation: 'eles/elas dirão' }
        ]
      },
      conditionnel: {
        name: 'Condicional Presente',
        frenchName: 'Conditionnel Présent',
        description: 'Radical "dir-" + desinências do imperfeito.',
        forms: [
          { pronoun: 'je', form: 'dirais', translation: 'eu diria' },
          { pronoun: 'tu', form: 'dirais', translation: 'tu dirias' },
          { pronoun: 'il / elle', form: 'dirait', translation: 'ele/ela diria' },
          { pronoun: 'nous', form: 'dirions', translation: 'nós diríamos' },
          { pronoun: 'vous', form: 'diriez', translation: 'vocês diriam' },
          { pronoun: 'ils / elles diraient', form: 'diraient', translation: 'eles/elas diriam' }
        ]
      },
      subjonctif: {
        name: 'Subjuntivo Presente',
        frenchName: 'Subjonctif Présent',
        description: 'Radical "dis-" em todas as pessoas + desinências usuais.',
        forms: [
          { pronoun: 'que je', form: 'dise', translation: 'que eu diga' },
          { pronoun: 'que tu', form: 'dises', translation: 'que tu digas' },
          { pronoun: 'qu’il / elle', form: 'dise', translation: 'que ele/ela diga' },
          { pronoun: 'que nous', form: 'disions', translation: 'que nós digamos' },
          { pronoun: 'que vous', form: 'disiez', translation: 'que vocês digam' },
          { pronoun: 'qu’ils / elles disent', form: 'disent', translation: 'que eles/elas digam' }
        ]
      }
    },
    examples: [
      { pronoun: 'je', french: 'Je dis la vérité.', portuguese: 'Eu digo a verdade.' },
      { pronoun: 'tu', french: 'Qu’est-ce que tu dis ?', portuguese: 'O que estás a dizer?' },
      { pronoun: 'il / elle', french: 'Il dit bonjour à tout le monde.', portuguese: 'Ele diz olá para todo o mundo.' },
      { pronoun: 'nous', french: 'Nous disons oui à l’invitation.', portuguese: 'Nós dizemos sim ao convite.' },
      { pronoun: 'vous', french: 'Vous dites toujours cela !', portuguese: 'Vocês dizem sempre isso!' },
      { pronoun: 'ils / elles', french: 'Elles disent qu’elles vont venir.', portuguese: 'Elas dizem que vão vir.' }
    ]
  }
};
