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
    this.stem = this.wordParts.find(
      (wordPart) => {
        if (wordPart.wordPartType==='stem') {
          return wordPart
        }
      }
    )
    this.state = {
      wordParts: this.wordParts,
      stem: this.stem,

      // I put the stem of the word as the first element of wordParts (in deconstructWord), but I should give them an `order_in_word` property which can change (in th case of suffixes), so using splice(1) here to get it should eventually be changed, and I could also remove this.stem from wordParts to get the rest of the wordParts
      //todo: change it when I have an `order_in_word` property for wordPart elements (`deconstructWord` should create them with that and assign values to them with that. Also, WordPart components should probably have that prop)
      suffixes: this.wordParts.slice(1)
    }
  }

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