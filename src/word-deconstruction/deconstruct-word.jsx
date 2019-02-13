import React from 'react';

import Stem from '../components/WordPart/Suffix.jsx';
import Suffix from '../components/WordPart/Suffix.jsx';

export default function deconstructWord(word) {
    /*Replace logic below later to support words based on grammar rules*/
    if (word.match(/autoissa/i)) {
      const wordParts = [
        { text: "auto", role: "stem", translation: "car"},
        //new Stem({ text: "auto", translation: "car"}), //todo: do with React composition instead
        { text: "i", role: "suffix", /*grammaticalCase="plural"*/},
        { text: "ssa", role: "suffix", /*grammaticalCase="inessive"*/}
      ];
      return wordParts;
    }
    else return `Requested word ${word} is not supported at the moment.`;
}