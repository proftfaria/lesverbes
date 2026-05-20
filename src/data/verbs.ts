import { Verb } from '../types';

export const PRELOADED_VERBS: Verb[] = [
  {
    id: 'etre',
    infinitive: 'être',
    translation: 'ser / estar',
    group: '3e',
    auxiliary: 'avoir',
    regular: false,
    difficulty: 'A1',
    explanation: 'O verbo mais importante em francês. É irregular em todos os tempos e serve como verbo auxiliar para formar o Passé Composé de verbos de movimento e reflexivos.',
    tenses: {
      present: {
        name: 'Presente',
        frenchName: 'Présent',
        description: 'Usado para expressar estados atuais, verdades gerais ou ações em progresso.',
        forms: [
          { pronoun: 'je', form: 'suis', translation: 'eu sou / estou' },
          { pronoun: 'tu', form: 'es', translation: 'tu és / estás' },
          { pronoun: 'il / elle', form: 'est', translation: 'ele/ela é / está' },
          { pronoun: 'nous', form: 'sommes', translation: 'nós somos / estamos' },
          { pronoun: 'vous', form: 'êtes', translation: 'vós sois / estais (você é/está, vocês são/estão)' },
          { pronoun: 'ils / elles', form: 'sont', translation: 'eles/elas são / estão' }
        ],
        example: { french: "Je suis à la maison aujourd'hui.", portuguese: "Eu estou em casa hoje." }
      },
      passé_composé: {
        name: 'Passado Composto',
        frenchName: 'Passé Composé',
        description: 'Expressa uma ação completada no passado. Conjugado com o auxiliar "avoir" + o particípio "été".',
        forms: [
          { pronoun: "j'ai", form: 'été', translation: 'eu fui / estive' },
          { pronoun: 'tu as', form: 'été', translation: 'tu foste / estiveste' },
          { pronoun: 'il / elle a', form: 'été', translation: 'ele/ela foi / esteve' },
          { pronoun: 'nous avons', form: 'été', translation: 'nós fomos / estivemos' },
          { pronoun: 'vous avez', form: 'été', translation: 'vós fostes / estivestes (vocês foram)' },
          { pronoun: 'ils / elles ont', form: 'été', translation: 'eles/elas foram / estiveram' }
        ],
        example: { french: "J'ai été surpris de sa réponse.", portuguese: "Eu fui surpreendido / estive surpreso com a resposta dele." }
      },
      imparfait: {
        name: 'Pretérito Imperfeito',
        frenchName: 'Imparfait',
        description: 'Descreve estados do passado, hábitos ou ações contínuas no passado.',
        forms: [
          { pronoun: 'j’étais', form: 'étais', translation: 'eu era / estava' },
          { pronoun: 'tu étais', form: 'étais', translation: 'tu eras / estavas' },
          { pronoun: 'il / elle était', form: 'était', translation: 'ele/ela era / estava' },
          { pronoun: 'nous étions', form: 'étions', translation: 'nós éramos / estávamos' },
          { pronoun: 'vous étiez', form: 'étiez', translation: 'vocês eram / estavam' },
          { pronoun: 'ils / elles étaient', form: 'étaient', translation: 'eles/elas eram / estavam' }
        ],
        example: { french: "Quand j'étais enfant, j'étais très timide.", portuguese: "Quando eu era criança, eu era muito tímido." }
      },
      futur_simple: {
        name: 'Futuro Simples',
        frenchName: 'Futur Simple',
        description: 'Usado para expressar eventos futuros planejados ou esperados.',
        forms: [
          { pronoun: 'je serai', form: 'serai', translation: 'eu serei / estarei' },
          { pronoun: 'tu seras', form: 'seras', translation: 'tu serás / estarás' },
          { pronoun: 'il / elle sera', form: 'sera', translation: 'ele/ela será / estará' },
          { pronoun: 'nous serons', form: 'serons', translation: 'nós seremos / estaremos' },
          { pronoun: 'vous serez', form: 'serez', translation: 'vocês serão / estarão' },
          { pronoun: 'ils / elles seront', form: 'seront', translation: 'eles/elas serão / estarão' }
        ],
        example: { french: "Demain, je serai à Paris para le travail.", portuguese: "Amanhã, eu estarei em Paris para o trabalho." }
      },
      conditionnel: {
        name: 'Condicional Presente',
        frenchName: 'Conditionnel Présent',
        description: 'Expressa hipótese, desejo, cortesia ou ação dependente de uma condição.',
        forms: [
          { pronoun: 'je serais', form: 'serais', translation: 'eu seria / estaria' },
          { pronoun: 'tu serais', form: 'serais', translation: 'tu serias / estarias' },
          { pronoun: 'il / elle serait', form: 'serait', translation: 'ele/ela seria / estaria' },
          { pronoun: 'nous serions', form: 'serions', translation: 'nós seríamos / estaríamos' },
          { pronoun: 'vous seriez', form: 'seriez', translation: 'vocês seriam / estariam' },
          { pronoun: 'ils / elles seraient', form: 'seraient', translation: 'eles/elas seriam / estariam' }
        ],
        example: { french: "Si j'avais le temps, je serais ravi de vous aider.", portuguese: "Se eu tivesse tempo, eu estaria encantado em ajudar vocês." }
      },
      subjonctif: {
        name: 'Subjuntivo Presente',
        frenchName: 'Subjonctif Présent',
        description: 'Expressa dúvida, necessidade, emoção ou desejo. Introduzido por "que".',
        forms: [
          { pronoun: 'que je sois', form: 'sois', translation: 'que eu seja / esteja' },
          { pronoun: 'que tu sois', form: 'sois', translation: 'que tu sejas / estejas' },
          { pronoun: 'qu’il / elle soit', form: 'soit', translation: 'que ele/ela seja / esteja' },
          { pronoun: 'que nous soyons', form: 'soyons', translation: 'que nós sejamos / estejamos' },
          { pronoun: 'que vous soyez', form: 'soyez', translation: 'que vocês sejam / estejam' },
          { pronoun: 'qu’ils / elles soient', form: 'soient', translation: 'que eles/elas sejam / estejam' }
        ],
        example: { french: "Il faut que je sois prêt à l'heure.", portuguese: "É preciso que eu esteja pronto na hora." }
      }
    },
    examples: [
      { pronoun: 'je', french: 'Je suis fatigué ce soir.', portuguese: 'Eu estou cansado esta noite.' },
      { pronoun: 'tu', french: 'Tu es très intelligent.', portuguese: 'Tu és muito inteligente.' },
      { pronoun: 'il / elle', french: 'Il est content de son trabalho.', portuguese: 'Ele está contente com o seu trabalho.' },
      { pronoun: 'nous', french: 'Nous sommes Français.', portuguese: 'Nós somos franceses.' },
      { pronoun: 'vous', french: 'Vous êtes prêts pour le voyage ?', portuguese: 'Vocês estão prontos para a viagem?' },
      { pronoun: 'ils / elles', french: 'Elles sont au café du coin.', portuguese: 'Elas estão no café da esquina.' }
    ]
  },
  {
    id: 'avoir',
    infinitive: 'avoir',
    translation: 'ter / haver',
    group: '3e',
    auxiliary: 'avoir',
    regular: false,
    difficulty: 'A1',
    explanation: 'O segundo verbo mais crucial. É o auxiliar para a grande maioria dos verbos em francês no Passé Composé. Possui formas bastante irregulares.',
    tenses: {
      present: {
        name: 'Presente',
        frenchName: 'Présent',
        description: 'Expressa posse, idade, necessidades básicas ou sensações.',
        forms: [
          { pronoun: 'j’ai', form: 'ai', translation: 'eu tenho' },
          { pronoun: 'tu as', form: 'as', translation: 'tu tens' },
          { pronoun: 'il / elle a', form: 'a', translation: 'ele/ela tem' },
          { pronoun: 'nous avons', form: 'avons', translation: 'nós temos' },
          { pronoun: 'vous avez', form: 'avez', translation: 'vocês têm' },
          { pronoun: 'ils / elles ont', form: 'ont', translation: 'eles/elas têm' }
        ],
        example: { french: "J'ai un livre très intéressant à lire.", portuguese: "Eu tenho um livro muito interessante para ler." }
      },
      passé_composé: {
        name: 'Passado Composto',
        frenchName: 'Passé Composé',
        description: 'Ação terminada no passado. Auxiliar "avoir" + "eu" (particípio de avoir).',
        forms: [
          { pronoun: 'j’ai eu', form: 'eu', translation: 'eu tive' },
          { pronoun: 'tu as eu', form: 'eu', translation: 'tu tiveste' },
          { pronoun: 'il / elle a eu', form: 'eu', translation: 'ele/ela teve' },
          { pronoun: 'nous avons eu', form: 'eu', translation: 'nós tivemos' },
          { pronoun: 'vous avez eu', form: 'eu', translation: 'vocês tiveram' },
          { pronoun: 'ils / elles ont eu', form: 'eu', translation: 'eles/elas tiveram' }
        ],
        example: { french: "J'ai eu beaucoup de chance hier.", portuguese: "Eu tive muita sorte ontem." }
      },
      imparfait: {
        name: 'Pretérito Imperfeito',
        frenchName: 'Imparfait',
        description: 'Expressa states ou posses habituais no passado.',
        forms: [
          { pronoun: 'j’avais', form: 'avais', translation: 'eu tinha' },
          { pronoun: 'tu avais', form: 'avais', translation: 'tu tinhas' },
          { pronoun: 'il / elle avait', form: 'avait', translation: 'ele/ela tinha' },
          { pronoun: 'nous avions', form: 'avions', translation: 'nós tínhamos' },
          { pronoun: 'vous aviez', form: 'aviez', translation: 'vocês tinham' },
          { pronoun: 'ils / elles avaient', form: 'avaient', translation: 'eles/elas tinham' }
        ],
        example: { french: "À l'époque, j'avais une voiture rouge.", portuguese: "Naquela época, eu tinha um carro vermelho." }
      },
      futur_simple: {
        name: 'Futuro Simples',
        frenchName: 'Futur Simple',
        description: 'Usado para posses ou estados que ocorrerão no futuro.',
        forms: [
          { pronoun: 'j’aurai', form: 'aurai', translation: 'eu terei' },
          { pronoun: 'tu auras', form: 'auras', translation: 'tu terás' },
          { pronoun: 'il / elle aura', form: 'aura', translation: 'ele/ela terá' },
          { pronoun: 'nous aurons', form: 'aurons', translation: 'nós teremos' },
          { pronoun: 'vous aurez', form: 'aurez', translation: 'vocês terão' },
          { pronoun: 'ils / elles auront', form: 'auront', translation: 'eles/elas terão' }
        ],
        example: { french: "La semana prochaine, j'aurai mon diplôme.", portuguese: "Na próxima semana, eu terei o meu diploma." }
      },
      conditionnel: {
        name: 'Condicional Presente',
        frenchName: 'Conditionnel Présent',
        description: 'Expressa desejo de posse, hipótese ou pedido polido para ter algo ("Je voudrais avoir...").',
        forms: [
          { pronoun: 'j’aurais', form: 'aurais', translation: 'eu teria' },
          { pronoun: 'tu aurais', form: 'aurais', translation: 'tu terias' },
          { pronoun: 'il / elle aurait', form: 'aurait', translation: 'ele/ela teria' },
          { pronoun: 'nous aurions', form: 'aurions', translation: 'nós teríamos' },
          { pronoun: 'vous auriez', form: 'auriez', translation: 'vocês teriam' },
          { pronoun: 'ils / elles auraient', form: 'auraient', translation: 'eles/elas teriam' }
        ],
        example: { french: "Si j'étais riche, j'aurais une grande maison.", portuguese: "Si eu fosse rico, eu teria uma casa grande." }
      },
      subjonctif: {
        name: 'Subjuntivo Presente',
        frenchName: 'Subjonctif Présent',
        description: 'Usado frequentemente com locuções de vontade ou dúvida como "Il faut que..." (É necessário que...).',
        forms: [
          { pronoun: 'que j’aie', form: 'aie', translation: 'que eu tenha' },
          { pronoun: 'que tu aies', form: 'aies', translation: 'que tu tenhas' },
          { pronoun: 'qu’il / elle ait', form: 'ait', translation: 'que ele/ela tenha' },
          { pronoun: 'que nous ayons', form: 'ayons', translation: 'que nós tenhamos' },
          { pronoun: 'que vous ayez', form: 'ayez', translation: 'que vocês tenham' },
          { pronoun: 'qu’ils / elles aient', form: 'aient', translation: 'que eles/elas tenham' }
        ],
        example: { french: "Il est important que tu aies de la patience.", portuguese: "É importante que tu tenhas paciência." }
      }
    },
    examples: [
      { pronoun: 'je', french: 'J’ai vingt-cinq ans.', portuguese: 'Eu tenho vinte e cinco anos.' },
      { pronoun: 'tu', french: 'Tu as faim ?', portuguese: 'Tu tens fome ?' },
      { pronoun: 'il / elle', french: 'Elle a un chien adorable.', portuguese: 'Ela tem um cão adorável.' },
      { pronoun: 'nous', french: 'Nous avons besoin d’aide.', portuguese: 'Nós temos necessidade de ajuda (precisamos de ajuda).' },
      { pronoun: 'vous', french: 'Vous avez de la chance.', portuguese: 'Vocês têm sorte (você tem sorte).' },
      { pronoun: 'ils / elles', french: 'Ils ont beaucoup d’amis.', portuguese: 'Eles têm muitos amigos.' }
    ]
  },
  {
    id: 'parler',
    infinitive: 'parler',
    translation: 'falar',
    group: '1er',
    auxiliary: 'avoir',
    regular: true,
    difficulty: 'A1',
    explanation: 'Verbo do primeiro grupo (-er). Segue o padrão regular absoluto. É o modelo perfeito para estudar mais de 90% dos verbos franceses.',
    tenses: {
      present: {
        name: 'Presente',
        frenchName: 'Présent',
        description: 'Retira-se o "-er" e adicionam-se as desinências: -e, -es, -e, -ons, -ez, -ent.',
        forms: [
          { pronoun: 'je', form: 'parle', translation: 'eu falo' },
          { pronoun: 'tu', form: 'parles', translation: 'tu falas' },
          { pronoun: 'il / elle', form: 'parle', translation: 'ele/ela fala' },
          { pronoun: 'nous', form: 'parlons', translation: 'nós falamos' },
          { pronoun: 'vous', form: 'parlez', translation: 'vocês falam' },
          { pronoun: 'ils / elles', form: 'parlent', translation: 'eles/elas falam' }
        ],
        example: { french: "Je parle français avec mes amis.", portuguese: "Eu falo francês com os meus amigos." }
      },
      passé_composé: {
        name: 'Passado Composto',
        frenchName: 'Passé Composé',
        description: 'Formado com "avoir" + o particípio regular "parlé".',
        forms: [
          { pronoun: 'j’ai', form: 'parlé', translation: 'eu falei' },
          { pronoun: 'tu as', form: 'parlé', translation: 'tu falaste' },
          { pronoun: 'il / elle a', form: 'parlé', translation: 'ele/ela falou' },
          { pronoun: 'nous avons', form: 'parlé', translation: 'nós falamos' },
          { pronoun: 'vous avez', form: 'parlé', translation: 'vocês falaram' },
          { pronoun: 'ils / elles ont', form: 'parlé', translation: 'eles/elas falaram' }
        ],
        example: { french: "Hier, j'ai parlé avec mon directeur.", portuguese: "Ontem, eu falei com o meu diretor." }
      },
      imparfait: {
        name: 'Pretérito Imperfeito',
        frenchName: 'Imparfait',
        description: 'Forma-se sobre o radical de "nous" no presente (parl-) + -ais, -ais, -ait, -ions, -iez, -aient.',
        forms: [
          { pronoun: 'je', form: 'parlais', translation: 'eu falava' },
          { pronoun: 'tu', form: 'parlais', translation: 'tu falavas' },
          { pronoun: 'il / elle', form: 'parlait', translation: 'ele/ela falava' },
          { pronoun: 'nous', form: 'parlions', translation: 'nós falávamos' },
          { pronoun: 'vous', form: 'parliez', translation: 'vocês falavam' },
          { pronoun: 'ils / elles avaient', form: 'parlaient', translation: 'eles/elas falavam' }
        ],
        example: { french: "Quand j'étais petit, je parlais beaucoup.", portuguese: "Quando eu era pequeno, eu falava muito." }
      },
      futur_simple: {
        name: 'Futuro Simples',
        frenchName: 'Futur Simple',
        description: 'Forma-se com o infinitivo completo "parler" + -ai, -as, -a, -ons, -ex, -ont.',
        forms: [
          { pronoun: 'je', form: 'parlerai', translation: 'eu falarei' },
          { pronoun: 'tu', form: 'parleras', translation: 'tu falarás' },
          { pronoun: 'il / elle', form: 'parlera', translation: 'ele/ela falará' },
          { pronoun: 'nous', form: 'parlerons', translation: 'nós falaremos' },
          { pronoun: 'vous', form: 'parlerez', translation: 'vocês falarão' },
          { pronoun: 'ils / elles seront', form: 'parleront', translation: 'eles/elas falarão' }
        ],
        example: { french: "Demain, je parlerai au client.", portuguese: "Amanhã, eu falarei com o cliente." }
      },
      conditionnel: {
        name: 'Condicional Presente',
        frenchName: 'Conditionnel Présent',
        description: 'Radical do futuro (parler-) + desinências do imperfeito.',
        forms: [
          { pronoun: 'je', form: 'parlerais', translation: 'eu falaria' },
          { pronoun: 'tu', form: 'parlerais', translation: 'tu falarias' },
          { pronoun: 'il / elle', form: 'parlerait', translation: 'ele/ela falaria' },
          { pronoun: 'nous', form: 'parlerions', translation: 'nós falaríamos' },
          { pronoun: 'vous', form: 'parleriez', translation: 'vocês falariam' },
          { pronoun: 'ils / elles seraient', form: 'parleraient', translation: 'eles/elas falariam' }
        ],
        example: { french: "Si j'avais le temps, je parlerais avec toi.", portuguese: "Se eu tivesse tempo, eu falaria com você." }
      },
      subjonctif: {
        name: 'Subjuntivo Presente',
        frenchName: 'Subjonctif Présent',
        description: 'Formado sobre o radical "parl-", adicionando -e, -es, -e, -ions, -iez, -ent.',
        forms: [
          { pronoun: 'que je', form: 'parle', translation: 'que eu fale' },
          { pronoun: 'que tu', form: 'parles', translation: 'que tu fales' },
          { pronoun: 'qu’il / elle', form: 'parle', translation: 'que ele/ela fale' },
          { pronoun: 'que nous', form: 'parlions', translation: 'que nós falemos' },
          { pronoun: 'que vous', form: 'parliez', translation: 'que vocês falem' },
          { pronoun: 'qu’ils / elles soient', form: 'parlent', translation: 'que eles/elas falem' }
        ],
        example: { french: "Il faut que je parle à Paul.", portuguese: "É preciso que eu fale com o Paul." }
      }
    },
    examples: [
      { pronoun: 'je', french: 'Je parle français et portugais.', portuguese: 'Eu falo francês e português.' },
      { pronoun: 'tu', french: 'Tu parles fort ce matin.', portuguese: 'Tu falas alto esta manhã.' },
      { pronoun: 'il / elle', french: 'Il parle souvent à son professeur.', portuguese: 'Ele fala frequentemente com o seu professor.' },
      { pronoun: 'nous', french: 'Nous parlons de notre projet.', portuguese: 'Nós falamos do nosso projeto.' },
      { pronoun: 'vous', french: 'Vous parlez trop vite.', portuguese: 'Vocês falam rápido demais (você fala rápido demais).' },
      { pronoun: 'ils / elles', french: 'Elles parlent de la nouvelle chanson.', portuguese: 'Elas falam sobre a nova canção.' }
    ]
  },
  {
    id: 'finir',
    infinitive: 'finir',
    translation: 'terminar / acabar',
    group: '2e',
    auxiliary: 'avoir',
    regular: true,
    difficulty: 'A2',
    explanation: 'O verbo modelo clássico do segundo grupo (-ir). O grande diferencial gramatical dos verbos deste grupo é o infixo "-iss-" no plural do presente, imperfeito e subjuntivo.',
    tenses: {
      present: {
        name: 'Presente',
        frenchName: 'Présent',
        description: 'Desinências de singular: -is, -is, -it. Plural: -issons, -issez, -issent.',
        forms: [
          { pronoun: 'je', form: 'finis', translation: 'eu termino' },
          { pronoun: 'tu', form: 'finis', translation: 'tu terminas' },
          { pronoun: 'il / elle', form: 'finit', translation: 'ele/ela termina' },
          { pronoun: 'nous', form: 'finissons', translation: 'nós terminamos' },
          { pronoun: 'vous', form: 'finissez', translation: 'vocês terminam' },
          { pronoun: 'ils / elles', form: 'finissent', translation: 'eles/elas terminam' }
        ],
        example: { french: "Je finis le rapport aujourd'hui.", portuguese: "Eu termino o relatório hoje." }
      },
      passé_composé: {
        name: 'Passado Composto',
        frenchName: 'Passé Composé',
        description: 'Utiliza o auxiliar "avoir" + o particípio "fini".',
        forms: [
          { pronoun: 'j’ai', form: 'fini', translation: 'eu terminei' },
          { pronoun: 'tu as', form: 'fini', translation: 'tu terminaste' },
          { pronoun: 'il / elle a', form: 'fini', translation: 'ele/ela terminou' },
          { pronoun: 'nous avons', form: 'fini', translation: 'nós terminamos' },
          { pronoun: 'vous avez', form: 'fini', translation: 'vocês terminaram' },
          { pronoun: 'ils / elles ont', form: 'fini', translation: 'eles/elas terminaram' }
        ],
        example: { french: "Hier soir, j'ai fini mon livre.", portuguese: "Ontem à noite, eu terminei meu livro." }
      },
      imparfait: {
        name: 'Pretérito Imperfeito',
        frenchName: 'Imparfait',
        description: 'Radical "finiss-" + desinências normais.',
        forms: [
          { pronoun: 'je', form: 'finissais', translation: 'eu terminava' },
          { pronoun: 'tu', form: 'finissais', translation: 'tu terminavas' },
          { pronoun: 'il / elle', form: 'finissait', translation: 'ele/ela terminava' },
          { pronoun: 'nous', form: 'finissions', translation: 'nós terminávamos' },
          { pronoun: 'vous', form: 'finissiez', translation: 'vocês terminavam' },
          { pronoun: 'ils / elles', form: 'finissaient', translation: 'eles/elas terminavam' }
        ],
        example: { french: "À cette époque, je finissais tard.", portuguese: "Naquela época, eu terminava tarde." }
      },
      futur_simple: {
        name: 'Futuro Simples',
        frenchName: 'Futur Simple',
        description: 'Infinitivo "finir" + -ai, -as, -a, -ons, -ez, -ont.',
        forms: [
          { pronoun: 'je', form: 'finirai', translation: 'eu terminarei' },
          { pronoun: 'tu', form: 'finiras', translation: 'tu terminarás' },
          { pronoun: 'il / elle', form: 'finira', translation: 'ele/ela terminará' },
          { pronoun: 'nous', form: 'finirons', translation: 'nós terminaremos' },
          { pronoun: 'vous', form: 'finirez', translation: 'vocês terminarão' },
          { pronoun: 'ils / elles', form: 'finiront', translation: 'eles/elas terminarão' }
        ],
        example: { french: "Dans dix minutes, je finirai mes devoirs.", portuguese: "Em dez minutos, terminarei meus deveres." }
      },
      conditionnel: {
        name: 'Condicional Presente',
        frenchName: 'Conditionnel Présent',
        description: 'Radical "finir-" + desinências de imperfeito.',
        forms: [
          { pronoun: 'je', form: 'finirais', translation: 'eu terminaria' },
          { pronoun: 'tu', form: 'finirais', translation: 'tu terminarias' },
          { pronoun: 'il / elle', form: 'finirait', translation: 'ele/ela terminaria' },
          { pronoun: 'nous', form: 'finirions', translation: 'nós terminaríamos' },
          { pronoun: 'vous', form: 'finiriez', translation: 'vocês terminariam' },
          { pronoun: 'ils / elles', form: 'finiraient', translation: 'eles/elas terminariam' }
        ],
        example: { french: "Si j'avais du temps, je finirais ce projet.", portuguese: "Se eu tivesse tempo, eu terminaria este projeto." }
      },
      subjonctif: {
        name: 'Subjuntivo Presente',
        frenchName: 'Subjonctif Présent',
        description: 'Baseia-se no plural "finiss-" + desinências ordinárias.',
        forms: [
          { pronoun: 'que je', form: 'finisse', translation: 'que eu termine' },
          { pronoun: 'que tu', form: 'finisses', translation: 'que tu termines' },
          { pronoun: 'qu’il / elle', form: 'finisse', translation: 'que ele/ela termine' },
          { pronoun: 'que nous', form: 'finissions', translation: 'que nós terminemos' },
          { pronoun: 'que vous', form: 'finissiez', translation: 'que vocês terminem' },
          { pronoun: 'qu’ils / elles', form: 'finissent', translation: 'que eles/elas terminem' }
        ],
        example: { french: "Il faut que je finisse ce travail.", portuguese: "É preciso que eu termine este trabalho." }
      }
    },
    examples: [
      { pronoun: 'je', french: 'Je finis mes devoirs à 18h.', portuguese: 'Eu termino os meus deveres às 18h.' },
      { pronoun: 'tu', french: 'Est-ce que tu finis ton repas ?', portuguese: 'Tu estás a acabar a tua refeição ?' },
      { pronoun: 'il / elle', french: 'Il finit son projet cette semaine.', portuguese: 'Ele termina o seu projeto esta semana.' },
      { pronoun: 'nous', french: 'Nous finissons de peindre la maison.', portuguese: 'Nós terminamos de pintar a casa.' },
      { pronoun: 'vous', french: 'Vous finissez quand ?', portuguese: 'Vocês terminam quando?' },
      { pronoun: 'ils / elles', french: 'Elles finissent toujours premières.', portuguese: 'Elas terminam sempre em primeiro lugar.' }
    ]
  },
  {
    id: 'aller',
    infinitive: 'aller',
    translation: 'ir',
    group: '3e', 
    auxiliary: 'être', // Takes être
    regular: false,
    difficulty: 'A1',
    explanation: 'Embora termine em "-er", pertence ao 3º grupo por ser extremamente irregular. Auxiliar no Passé Composé é "être" (l’accord du participe é obrigatório!). Essencial para o Futuro Próximo (Aller + Infinitivo).',
    tenses: {
      present: {
        name: 'Presente',
        frenchName: 'Présent',
        description: 'Altamente irregular. Três radicais diferentes (va-, all-, i-).',
        forms: [
          { pronoun: 'je', form: 'vais', translation: 'eu vou' },
          { pronoun: 'tu', form: 'vas', translation: 'tu vais' },
          { pronoun: 'il / elle', form: 'va', translation: 'ele/ela vai' },
          { pronoun: 'nous', form: 'allons', translation: 'nós vamos' },
          { pronoun: 'vous', form: 'allez', translation: 'vocês vão' },
          { pronoun: 'ils / elles', form: 'vont', translation: 'eles/elas vão' }
        ],
        example: { french: "Je vais au bureau chaque matin.", portuguese: "Eu vou ao escritório todas as manhãs." }
      },
      passé_composé: {
        name: 'Passado Composto',
        frenchName: 'Passé Composé',
        description: 'Formado com "être" + particípio "allé/allée/allés/allées". Lembre-se de concordar em gênero/número com o sujeito!',
        forms: [
          { pronoun: 'je suis', form: 'allé(e)', translation: 'eu fui / estive' },
          { pronoun: 'tu es', form: 'allé(e)', translation: 'tu foste / estiveste' },
          { pronoun: 'il / elle est', form: 'allé(e)', translation: 'ele/ela foi' },
          { pronoun: 'nous sommes', form: 'allé(e)s', translation: 'nós fomos' },
          { pronoun: 'vous êtes', form: 'allé(e)s', translation: 'vocês foram' },
          { pronoun: 'ils / elles sont', form: 'allé(e)s', translation: 'eles/elas foram' }
        ],
        example: { french: "Hier, elle est allée au cinéma.", portuguese: "Ontem, ela foi ao cinema." }
      },
      imparfait: {
        name: 'Pretérito Imperfeito',
        frenchName: 'Imparfait',
        description: 'Radical "all-" + desinências clássicas.',
        forms: [
          { pronoun: 'j’allais', form: 'allais', translation: 'eu ia' },
          { pronoun: 'tu allais', form: 'allais', translation: 'tu ias' },
          { pronoun: 'il / elle allait', form: 'allait', translation: 'ele/ela ia' },
          { pronoun: 'nous allions', form: 'allions', translation: 'nós íamos' },
          { pronoun: 'vous alliez', form: 'alliez', translation: 'vocês iam' },
          { pronoun: 'ils / elles allaient', form: 'allaient', translation: 'eles/elas iam' }
        ],
        example: { french: "Pendant mon enfance, j'allais à la plage.", portuguese: "Durante a minha infância, eu ia à praia." }
      },
      futur_simple: {
        name: 'Futuro Simples',
        frenchName: 'Futur Simple',
        description: 'Usa um radical totalmente novo "ir-".',
        forms: [
          { pronoun: 'j’irai', form: 'irai', translation: 'eu irei' },
          { pronoun: 'tu iras', form: 'iras', translation: 'tu irás' },
          { pronoun: 'il / elle ira', form: 'ira', translation: 'ele/ela irá' },
          { pronoun: 'nous irons', form: 'irons', translation: 'nós iremos' },
          { pronoun: 'vous irez', form: 'irez', translation: 'vocês irão' },
          { pronoun: 'ils / elles iront', form: 'iront', translation: 'eles/elas irão' }
        ],
        example: { french: "L'année prochaine, j'irai au Canada.", portuguese: "No próximo ano, irei ao Canadá." }
      },
      conditionnel: {
        name: 'Condicional Presente',
        frenchName: 'Conditionnel Présent',
        description: 'Radical do futuro "ir-" + desinências do imperfeito.',
        forms: [
          { pronoun: 'j’irais', form: 'irais', translation: 'eu iria' },
          { pronoun: 'tu irais', form: 'irais', translation: 'tu irias' },
          { pronoun: 'il / elle irait', form: 'irait', translation: 'ele/ela iria' },
          { pronoun: 'nous irions', form: 'irions', translation: 'nós iríamos' },
          { pronoun: 'vous iriez', form: 'iriez', translation: 'vocês iriam' },
          { pronoun: 'ils / elles iraient', form: 'iraient', translation: 'eles/elas iriam' }
        ],
        example: { french: "Si j'étais libre, j'irais avec plaisir.", portuguese: "Se eu estivesse livre, iria com prazer." }
      },
      subjonctif: {
        name: 'Subjuntivo Presente',
        frenchName: 'Subjonctif Présent',
        description: 'Radicais "aill-" (singular e plural 3ªp) e "all-" (nous e vous).',
        forms: [
          { pronoun: 'que j’aille', form: 'aille', translation: 'que eu vá' },
          { pronoun: 'que tu ailles', form: 'ailles', translation: 'que tu vás' },
          { pronoun: 'qu’il / elle aille', form: 'aille', translation: 'que ele/ela vá' },
          { pronoun: 'que nous allions', form: 'allions', translation: 'que nós vamos (subj.)' },
          { pronoun: 'que vous alliez', form: 'alliez', translation: 'que vocês vão (subj.)' },
          { pronoun: 'qu’ils / elles aillent', form: 'aillent', translation: 'que eles/elas vão' }
        ],
        example: { french: "Il faut que j'y aille tout de suite.", portuguese: "É preciso que eu vá lá imediatamente." }
      }
    },
    examples: [
      { pronoun: 'je', french: 'Je vais au supermarché.', portuguese: 'Eu vou ao supermercado.' },
      { pronoun: 'tu', french: 'Tu vas à l’école à pied ?', portuguese: 'Tu vais para a escola a pé?' },
      { pronoun: 'il / elle', french: 'Il va bien aujourd’hui.', portuguese: 'Ele vai bem (está bem) hoje.' },
      { pronoun: 'nous', french: 'Nous allons au cinéma ce soir.', portuguese: 'Nós vamos ao cinema esta noite.' },
      { pronoun: 'vous', french: 'Où allez-vous ?', portuguese: 'Para onde ides? (Para onde vocês vão? / Para onde o senhor/a senhora vai?)' },
      { pronoun: 'ils / elles', french: 'Elles vont partir en vacances.', portuguese: 'Elles vont partir de férias.' }
    ]
  },
  {
    id: 'faire',
    infinitive: 'faire',
    translation: 'fazer / praticar',
    group: '3e',
    auxiliary: 'avoir',
    regular: false,
    difficulty: 'A2',
    explanation: 'Verbo altamente irregular do terceiro grupo. Serve para inúmeras expressões idiomáticas em francês (clima, esportes, atividades quotidianas). A forma de "vous" no presente ("vous faites") é um erro comum de iniciantes.',
    tenses: {
      present: {
        name: 'Presente',
        frenchName: 'Présent',
        description: 'Possui desinências muito irregulares no plural (nous faisons, vous faites, ils font).',
        forms: [
          { pronoun: 'je', form: 'fais', translation: 'eu faço' },
          { pronoun: 'tu', form: 'fais', translation: 'tu fazes' },
          { pronoun: 'il / elle', form: 'fait', translation: 'ele/ela faz' },
          { pronoun: 'nous', form: 'faisons', translation: 'nós fazemos (pronunciado "fe-zon")' },
          { pronoun: 'vous', form: 'faites', translation: 'vocês fazem (vós fazeis)' },
          { pronoun: 'ils / elles', form: 'font', translation: 'eles/elas fazem' }
        ],
        example: { french: "Je fais mes devoirs de français.", portuguese: "Eu faço os meus deveres de francês." }
      },
      passé_composé: {
        name: 'Passado Composto',
        frenchName: 'Passé Composé',
        description: 'Auxiliar "avoir" + o particípio irregular "fait".',
        forms: [
          { pronoun: 'j’ai', form: 'fait', translation: 'eu fiz' },
          { pronoun: 'tu as', form: 'fait', translation: 'tu fizeste' },
          { pronoun: 'il / elle a', form: 'fait', translation: 'ele/ela fez' },
          { pronoun: 'nous avons', form: 'fait', translation: 'nós fizemos' },
          { pronoun: 'vous avez', form: 'fait', translation: 'vocês fizeram' },
          { pronoun: 'ils / elles ont', form: 'fait', translation: 'eles/elas fizeram' }
        ],
        example: { french: "Hier, nous avons fait un gâteau.", portuguese: "Ontem, nós fizemos um bolo." }
      },
      imparfait: {
        name: 'Pretérito Imperfeito',
        frenchName: 'Imparfait',
        description: 'Radical de nous no presente "fais-" + desinências normais.',
        forms: [
          { pronoun: 'je', form: 'faisais', translation: 'eu fazia' },
          { pronoun: 'tu', form: 'faisais', translation: 'tu fazias' },
          { pronoun: 'il / elle', form: 'faisait', translation: 'ele/ela fazia' },
          { pronoun: 'nous', form: 'faisions', translation: 'nós fazíamos' },
          { pronoun: 'vous', form: 'faisiez', translation: 'vocês faziam' },
          { pronoun: 'ils / elles faisaient', form: 'faisaient', translation: 'eles/elas fazem (imp.)' }
        ],
        example: { french: "Quand j'étais jeune, je faisais de la natation.", portuguese: "Quando eu era jovem, eu praticava natação." }
      },
      futur_simple: {
        name: 'Futuro Simples',
        frenchName: 'Futur Simple',
        description: 'Usa o radical "fer-" + -ai, -as, -a, -ons, -ez, -ont.',
        forms: [
          { pronoun: 'je', form: 'ferai', translation: 'eu farei' },
          { pronoun: 'tu', form: 'feras', translation: 'tu farás' },
          { pronoun: 'il / elle', form: 'fera', translation: 'ele/ela fará' },
          { pronoun: 'nous', form: 'ferons', translation: 'nós faremos' },
          { pronoun: 'vous', form: 'ferez', translation: 'vocês farão' },
          { pronoun: 'ils / elles feront', form: 'feront', translation: 'eles/elas farão' }
        ],
        example: { french: "Demain, il fera beau chez nous.", portuguese: "Amanhã, fará bom tempo em nossa casa." }
      },
      conditionnel: {
        name: 'Condicional Presente',
        frenchName: 'Conditionnel Présent',
        description: 'Radical "fer-" + as desinências do imperfeito.',
        forms: [
          { pronoun: 'je', form: 'ferais', translation: 'eu faria' },
          { pronoun: 'tu', form: 'ferais', translation: 'tu farias' },
          { pronoun: 'il / elle', form: 'ferait', translation: 'ele/ela faria' },
          { pronoun: 'nous', form: 'ferions', translation: 'nós faríamos' },
          { pronoun: 'vous', form: 'feriez', translation: 'vocês fariam' },
          { pronoun: 'ils / elles feraient', form: 'feraient', translation: 'eles/elas fariam' }
        ],
        example: { french: "Si j'avais le temps, je ferais un voyage.", portuguese: "Se eu tivesse tempo, eu faria uma viagem." }
      },
      subjonctif: {
        name: 'Subjuntivo Presente',
        frenchName: 'Subjonctif Présent',
        description: 'Usa o radical especial "fass-" + desinências habituais.',
        forms: [
          { pronoun: 'que je', form: 'fasse', translation: 'que eu faça' },
          { pronoun: 'que tu', form: 'fasses', translation: 'que tu faças' },
          { pronoun: 'qu’il / elle', form: 'fasse', translation: 'que ele/ela faça' },
          { pronoun: 'que nous', form: 'fassions', translation: 'que nós façamos' },
          { pronoun: 'que vous', form: 'fassiez', translation: 'que vocês façam' },
          { pronoun: 'qu’ils / elles fassent', form: 'fassent', translation: 'que eles/elas façam' }
        ],
        example: { french: "Il faut que je fasse attention.", portuguese: "É preciso que eu preste atenção." }
      }
    },
    examples: [
      { pronoun: 'je', french: 'Je fais du sport tous les jours.', portuguese: 'Eu pratico desporto todos os dias.' },
      { pronoun: 'tu', french: 'Tu fais la vaisselle ?', portuguese: 'Tu lavas a louça?' },
      { pronoun: 'il / elle', french: 'Il fait beau aujourd’hui.', portuguese: 'Está bom tempo hoje (lit: Faz bonito hoje).' },
      { pronoun: 'nous', french: 'Nous faisons une promenade.', portuguese: 'Nós damos uma caminhada.' },
      { pronoun: 'vous', french: 'Qu’est-ce que vous faites ?', portuguese: 'O que é que vocês fazem? (O que está a fazer?)' },
      { pronoun: 'ils / elles', french: 'Ils font beaucoup d’erreurs.', portuguese: 'Eles cometem muitos erros.' }
    ]
  }
];

export const GRAMMAR_LESSONS = [
  {
    id: 'les-groupes',
    category: 'groups',
    title: 'Os 3 Grupos de Verbos',
    description: 'Como são divididos os verbos franceses e por que isso importa.',
    content: `Em francês, todos os verbos são classificados em três grandes grupos baseados nas suas terminações do infinitivo. Essa tipologia dita quão regular ou previsível será a conjugação do verbo.

### 1º Grupo (-ER): Os Verbos Regulares por Excelência
Este é o maior grupo do francês, englobando mais de 90% dos verbos (exemplos: *parler, habiter, manger, aimer*). A única grande exceção é o verbo *aller*, que apesar da terminação pertence ao 3º grupo devido à sua extrema irregularidade.
* **Radical:** Remove-se a terminação "-er". Exemplo: *parl-* para o verbo *parler*.
* **Desinências do Presente:** **-e, -es, -e, -ons, -ez, -ent**.

### 2º Grupo (-IR): Os Regulares com Infixo "-iss-"
Este grupo é composto por verbos regulares que terminam em "-ir" e cujo gerúndio termina em "-issant" (exemplos: *finir, choisir, réussir*).
* **Particularidade:** No plural de vários tempos (Presente, Imperfeito, Subjuntivo), adiciona-se o elemento **-iss-** entre o radical e a desinência.
* **Desinências do Presente:** **-is, -is, -it, -issons, -issez, -issent**.

### 3º Grupo: Os Irregulares, Defetivos e Auxiliares
Aqui encontramos tudo o que resta: verbos terminados em **-re** (*vendre, prendre*), verbos em **-oir** (*vouloir, pouvoir, devoir*), verbos em **-ir** não regulares no gerúndio (*venir, partir*), o verbo *aller*, e os dois gigantes auxiliares: *être* e *avoir*.
* Cada verbo ou subfamília neste grupo possui radicais ou padrões de desinência próprios. Eles requerem estudo dedicado, mas são os de uso mais frequente no dia a dia!`
  },
  {
    id: 'les-auxiliaires',
    category: 'auxiliaries',
    title: 'Escolha do Auxiliar (Être vs Avoir)',
    description: 'A regra fundamental para formar tempos compostos como o Passé Composé.',
    content: `Os tempos compostos em francês (como o *Passé Composé*, *Plus-que-parfait*, etc.) necessitam de um verbo auxiliar conjugado seguido pelo particípio passado do verbo principal. O maior dilema para os estudantes é escolher se o auxiliar será **avoir** ou **être**.

### 1. O Padrão: Auxiliar "Avoir"
A gigantesca maioria dos verbos franceses (cerca de 97%) usa o auxiliar **avoir**. Quando usamos *avoir*, o particípio passado em regra **não concorda** com o sujeito (embora existam exceções avançadas com o objeto direto vindo antes).
* Exemplo: *J'ai mangé* (Eu comi); *Nous avons parlé* (Nós falamos).

### 2. A Exceção Importante: Auxiliar "Être"
Usamos o auxiliar **être** em apenas dois cenários específicos:

#### A) Os Verbos Reflexivos e Pronominais
Qualquer verbo que seja precedido de *se* ou *s'* (como *se lever, s'appeler, se doucher*).
* Exemplo: *Je me suis levé* (Eu levantei-me).

#### B) Os 14 Verbos de Movimento e Mudança de Estado
Existe uma lista clássica de verbos intransitivos de deslocação no espaço ou transição vital que usam *être*. Eles são frequentemente lembrados pela metáfora da "Maison d'Être" (A Casa do Ser):
1. **aller / venir** (ir / vir)
2. **entrer / sortir** (entrar / sair)
3. **arriver / partir** (chegar / ir embora)
4. **monter / descendre** (subir / descer)
5. **naître / mourir** (nascer / morrer)
6. **passer** (passar - quando intransitivo)
7. **rester** (permanecer, ficar)
8. **retourner** (retornar, voltar)
9. **tomber** (cair)
10. ...e os seus derivados (ex: *revenir, redevenir*).

### CRÍTICO: O Acordo do Particípio Passado (L'accord du Participe Passé)
Quando o auxiliar é **être**, o particípio passado do verbo **DEVE concordar em gênero (masculino/feminino) e número (singular/plural)** com o sujeito da frase.
* Masculino Singular: *Il est allé*
* Feminino Singular: *Elle est allé**e*** (adiciona-se "-e")
* Masculino Plural: *Ils sont allé**s*** (adiciona-se "-s")
* Feminino Plural: *Elles sont allé**es*** (adiciona-se "-es")`
  },
  {
    id: 'les-temps',
    category: 'tenses',
    title: 'Visão Geral de Tempos e Modos',
    description: 'Quando utilizar cada um dos tempos e modos no francês quotidiano.',
    content: `Dominar a conjugação francesa de forma natural requer saber exatamente *quando* empregar cada tempo. Abaixo está um sumário prático de uso:

### 1. Présent (Presente do Indicativo)
Usa-se para expressar estados do momento, hábitos diários ou verdades intemporais.
* *Je parle français.* (Falo francês - agora ou habitualmente).

### 2. Passé Composé (Passado Composto)
É o tempo do passado mais usado na conversação civilizada. Equivale ao pretérito perfeito simples do português, referindo-se a uma ação pontual e concluída no passado.
* *J'ai visité Paris en 2024.* (Eu visitei Paris em 2024).

### 3. Imparfait (Pretérito Imperfeito)
Usado para descrições de cenários passados, hábitos passados ou situações em andamento no passado que foram interrompidas.
* *Quand j'étais petit, je jouais au football.* (Quando eu era pequeno, jogava futebol).

### 4. Futur Simple (Futuro Simples)
Refere-se a decisões formais do amanhã, promessas, previsões do tempo ou eventos que vão ocorrer a longo prazo.
* *Demain, il pleuvra.* (Amanhã choverá). Para o dia a dia, os franceses preferem o *Futur Proche* (aller + infinitivo, ex: *je vais manger*).

### 5. Conditionnel Présent (Condicional Presente)
Expressa cortesia extrema (*Je voudrais* - eu gostaria), desejos profundos, ou cenários hipotéticos dependentes de uma condição.
* *Si j’avais le temps, je ferais du yoga.* (Se eu tivesse tempo, faria yoga).

### 6. Subjonctif Présent (Subjuntivo Presente)
O modo da subjetividade, dúvida, obrigação ou emoção. Quase sempre vem introduzido pela conjunção "que".
* *Il faut que vous sachiez la vérité.* (É preciso que vós saibais a verdade).`
  }
];
