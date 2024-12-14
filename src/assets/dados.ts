type BlocoTuplaType = [string, AlternativasTuplaType[]];
type AlternativasTuplaType = [string, boolean];

const Questoes: BlocoTuplaType[] = [
  [
    " Qual foi a primeira cidade revelada no jogo? ",
    [
        ["StrawBerry" ,false],
        ["Rhodes" ,false],
        ["Valentine" ,true],
        ["BlackWater" ,false],
    ]
  ],
  [
    " Em que ano se passa a trama do jogo? ",
    [
        ["1894" ,false],
        ["1899" ,true],
        ["1948" ,false],
        ["1985" ,false],
    ]
  ],
  [
    "Quem era Gavin? ",
    [
        ["Um pistoleiro lendário que escondeu um tesouro" ,false],
        ["Uma pessoa da imaginação de um homem chamado Nigel" ,true],
        ["Eu ainda to procurando ele, você viu o Gavin?" ,false],
        ["Um membro importante da guangue Van Der Linde" ,false],
    ]
  ],
  [
    "Qual dessas ações lhe dá honra positiva? ?",
    [
        ["Se vestir bem" ,false],
        ["Comprar algo caro de uma loja geral" ,false],
        ["Pescar peixes e jogar eles de volta" ,true],
        ["Sair de perto de acampamentos de guagues inimigas" ,false],
    ]
  ],
  [
    "Quem é o lider da gangue aliada no jogo?",
    [
        ["Dutch Van Der Linde" ,true],
        ["Micah Bell" , false],
        ["Colm O'Driscoll" ,false],
        ["Angelo Bronte" ,false],
    ]
  ],
];

export default Questoes;
