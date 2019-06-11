export default function deconstructWord(word) {
    /*Replace logic below later to support words stemd on grammar rules*/
    if (word.match(/autoissa/i)) {
      const wordParts = [
        { text: 'auto', partOfSpeech: 'stem', translation: 'car', grammaticalNumber: 'singular'},
        { text: 'i', partOfSpeech: 'suffix', grammaticalNumber: 'plural'},
        { text: 'ssa', partOfSpeech: 'suffix', grammaticalCase: 'inessive'}
      ];
      return wordParts;
    }
    else return `Requested word ${word} is not supported at the moment.`; //maybe relplace the string with throwing a new Error
}