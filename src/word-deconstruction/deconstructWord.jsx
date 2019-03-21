export default function deconstructWord(word) {
    /*Replace logic below later to support words based on grammar rules*/
    if (word.match(/autoissa/i)) {
      const wordParts = [
        { text: 'auto', wordPartType: 'stem', translation: 'car', grammaticalNumber: 'singular'},
        { text: 'i', wordPartType: 'suffix', grammaticalNumber: 'plural'},
        { text: 'ssa', wordPartType: 'suffix', grammaticalCase: 'inessive'}
      ];
      return wordParts;
    }
    else return `Requested word ${word} is not supported at the moment.`;
}