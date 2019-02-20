import React from "react";

import { withStyles } from "@material-ui/core/styles";

import WordPart from "./WordPart/WordPart.jsx";

import deconstructWord from '../word-deconstruction/deconstructWord.jsx';

/*todo: build more word construction/deconstruction functions such as `conjugate`
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

//to do: modify based on the `todo.md` specifications
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

      (wordPartProps, index) => {

        //to do: check if the index really is unique
        return <WordPart {...wordPartProps} key={index} />;
        
      }
      
    );

    return (
      <div className={classes.word}>
        {wordPartsCards}
      </div>);
  }
}

export default withStyles(styles)(Word);
