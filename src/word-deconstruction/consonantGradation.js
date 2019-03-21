export default function GradiateConsonant(to_gradiate) {

    //#region ==Rules, Types and Examples==
    /*
    
    ==Quantitative Gradation==
    Strong	Weak	Example
    pp	p	pappi : papit, lamppu : lamput
    tt	t	katto : katot, kortti : kortit
    kk	k	pukki : pukit, pankki : pankit
    

    ==Qualitiative Gradation==
    Strong	Weak	Example	Notes
    p	v	läpi : lävet	
    t	d	katu : kadut	
    k	∅	pako : paot	
    v	puku : puvut, kyky : kyvyt	In the combinations -uku- and -yky-.
    j	jälki : jäljet, kurki : kurjet	When followed by e and preceded by h, l or r.
    
    ==Assimilative Gradation==
    Strong	Weak	Example
    mp	mm	kampi : kammet
    nt	nn	lentos : lennot
    lt	ll	kielto : kiellot
    rt	rr	parta : parrat
    nk/ŋk/	ng/ŋː/	kenkä : kengät
    
    ==Non-Native Gradations== //Note: there may be more
    Strong	Weak	Example
    bb	b	lobbaan : lobata
    gg	g	bloggaan : blogata
    
    */
   //#endregion

    const consonant_gradiation_cases = {

        //quantitative gradation
        'pp': 'p',
        'tt': 't',
        'kk': 'k',

        //qualitative gradation
        'p': 'v',
        't': 'd',
        'k': [
             '',
             'v', //condition: `to_gradiate`=='uku' || 'yky'
             'j'  /*
                    condition:
                    letter_after `to_gradiate` == e 
                    &&
                    `letter_before` `to_gradiate` == 'h' || 'l' || 'r'
                  */

        ],
        /*
        The 'k' case can also be defined in a simpler structure, by separating the cases.
        Look at the book (Finnish: An Essential Grammar) page 29, for separated cases
        */

        //assimilative gradation
        'mp': 'mm',
        'nt': 'nn',
        'nk': 'ng',
        'lt': 'll',
        'rt': 'rr',


    };

    const gradiated_ending = '';

    return gradiated_ending;
}