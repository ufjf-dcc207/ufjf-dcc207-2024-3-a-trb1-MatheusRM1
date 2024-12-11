type BlocoTuplaType = [string, AlternativasTuplaType[]];
type AlternativasTuplaType = [string, boolean];

const Questoes: BlocoTuplaType[] = [
  [
    " Qual foi a primeira cidade revelada no jogo? ",
    [
        ["StrawBerryw" ,false],
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
    "Qual é a gangue Rival da gangue dos personagens principais? ",
    [
        ["O'Driscolls" ,true],
        ["Pinkertons" ,false],
        ["Saqueadores de Lemoyne" ,false],
    ]
  ],
  [
    "Qual é a classe que, em todos os jogos, que é perfeita para começar qualquer build?",
    [
        ["StrawBerry" ,false],
        ["Rhodes" ,false],
        ["Valentine" ,true],
        ["BlackWater" ,false],
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
