//Grammatical cases suffixes

//Information taken from: https://www.wikiwand.com/en/Finnish_noun_cases

const grammatical_cases_suffixes = { //there aren't only suffiex, according to the book :( //TODO: just follow the book
    
    //#region Grammatical
    'nominative': '',
    'genitive': 'n',
    'accusative': [ '', 'n' ],
    'partitive': [ '(t)a, (t)ä' ] //'t' before a/ä is optional? TODO: learn later. //TODO: There are more in the book ( Finnish: An Essential Grammar) - add them
    //#endregion
    ,

    //#region Locative
    'inessive': [ 'ssa', 'ssä' ],
    'elative': [ 'sta' ],
    'illative': [ 'an', 'en',  ]
    
    //#endregion
    ,
    
}