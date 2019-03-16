import React from 'react';


export default function deconstructWord(word) {
    /*Replace logic below later to support words based on grammar rules*/
    if (word.match(/autoissa/i)) {
      const wordParts = [
        { text: 'auto', wordPartType: 'stem', translation: 'car', grammaticalCase:'nominal', grammaticalNumber: 'singular'},
        { text: 'i', wordPartType: 'suffix', grammaticalCategory: 'number', grammaticalNumber: 'plural'},
        { text: 'ssa', wordPartType: 'suffix', grammaticalCategory: 'case', grammaticalCase: 'inessive'},
      ];
      return wordParts;
    }
    else return `Requested word ${word} is not supported at the moment.`;
}