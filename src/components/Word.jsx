import React from "react";
import Proproles from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
        return <WordPart text={wordPart.text} role={wordPart.role} key={index} 
        />; //Todo: pass wordPart props with spread and then put a key
    });

    return <div className={classes.word}>{wordPartsCards}</div>;
  }
}

export default withStyles(styles)(Word);
