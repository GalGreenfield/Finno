import React from "react";

import { withStyles } from "@material-ui/core/styles";

import WordPart from "./WordPart.jsx";

/*todo: build more word construction/deconstruction functions such as `conjugate`
 that conjugates a word based on a given conjugation (that uses grammartical rules)*/
function deconstructWord(word) {
  /*Replace logic below later to support words based on grammar rules*/
  if (word.match(/autoissa/i)) {
    const wordParts = [
      { text: "auto", role: "stem", translation: "car"},
      { text: "i", role: "suffix" },
      { text: "ssa", role: "suffix" }
    ];
    return wordParts;
  } else return `Requested word ${word} is not supported at the moment.`;
}

const styles = {
  word: {
    display: "flex",
    "& > :not(:last-child)": {
      marginRight: "8px"
    }
  },
  text: {
    fontSize: "1.75rem"
  }
};

//todo: modify based on the `todo.md` specifications
class Word extends React.Component {
  constructor(props) {
    super(props);
    this.text = props.text;
    this.wordParts = deconstructWord(props.text);
  }

  render() {

    const { classes } = this.props;
    //Create and populate dynamically `WordPart` component from this.wordParts
    const wordPartsCards = this.wordParts.map(

      (wordPart, index) => {
        
        var wordPartProps = {
          text: wordPart.text,
          role: wordPart.role,
          key: index
        }
        if (wordPart.hasOwnProperty('translation')) {
          wordPartProps['translation'] = this.props.trasnlation;
        } 

        return <WordPart {...wordPartProps} />;
        
    });

    return (
      <div className={classes.word}>
        {wordPartsCards}
      </div>);
  }
}

export default withStyles(styles)(Word);
