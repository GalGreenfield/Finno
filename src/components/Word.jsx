import React from "react";

import { withStyles } from "@material-ui/core/styles";

import WordPart from "./WordPart/WordPart";

import deconstructWord from '../word-deconstruction/deconstructWord'

/*TODO: build more word construction/deconstruction functions such as `conjugate`
 that conjugates a word based on a given conjugation (that uses grammartical rules)*/

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

//to do: modify based on the `TODO.md` specifications
class Word extends React.Component {
  constructor(props) {
    super(props);
    this.text = props.text;
    this.wordParts = deconstructWord(props.text);
    
    this.state = {
      wordParts: this.wordParts,
      stem: this.stem,
    }
  }

  get stem () {
    return this.wordParts.find(
      (wordPart) => {
        if (wordPart.wordPartType==='stem') {
          return wordPart
        }
      }
    )
  }

  //suffxies - I don't think I really need that
  /*
  get suffixes () { 
    return this.wordParts.filter(
      wordPart => wordPart.type==='suffix'
    );
  }
  */

  render() {

    const { classes } = this.props;

    //Create and populate dynamically `WordPart` component from this.wordParts
    const wordPartsCards = this.wordParts.map(
      (wordPartProps, index) => {
        return <WordPart {...wordPartProps} key={index} />;
    });

    return (
      <div className={classes.word}>
        {wordPartsCards}
      </div>);
  }
}

//todo: Figure out a way to export the state of `Word` such that Redux could use it for the `initial_state` of the `store`.
export default withStyles(styles)(Word);

//todo: add a propType for `stem` and `wordParts`