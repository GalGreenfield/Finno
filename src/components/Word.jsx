import React from "react";

import { withStyles } from "@material-ui/core/styles";

import WordPart from "./WordPart/WordPart";

//import deconstructWord from '../word-deconstruction/deconstructWord'

//#region Redux->Component Mapping Imports
import { connect } from 'react-redux'
import { 
  action_types,
  replaceStem,
  addSuffix 
} from '../state-management/actions';
import deconstructWord from "../word-deconstruction/deconstructWord";
//#endregion

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
    
    //needs to get the value from the store instead  
    this.wordParts = deconstructWord(this.text)
    
    this.state = {
      wordParts: this.wordParts,
      stem: this.stem,  
    }
  }

  get stem () {
    return this.wordParts.find(
      (wordPart) => {
        if (wordPart.wordPartType==='stem') {
          return wordPart;
        }
      }
    )
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

//Redux mapStateToProps

//is suppose to map the word state object in the Redux store to the Word component
const mapStateToProps = state => {
  // eslint-disable-next-line default-casec
  return {
    word: state.word
  }
}

const mapDispatchToProps = dispatch => (
  {
    replaceStem: (stem) => dispatch(replaceStem(stem)),
    addSuffix: (suffix) => dispatch(addSuffix(suffix))
  }
)


// eslint-disable-next-line no-unused-vars
const WordStoreSubscriber = connect(
  mapStateToProps,
  mapDispatchToProps
)
(Word);

//todo: add a propType for `stem` and `wordParts`

//todo: Figure out a way to export the state of `Word` such that Redux could use it for the `initial_state` of the `store`.
export default withStyles(styles)(WordStoreSubscriber);

