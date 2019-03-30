import React from "react";

import { withStyles } from "@material-ui/core/styles";

import WordPart from "./WordPart/WordPart";

//import deconstructWord from '../word-deconstruction/deconstructWord'

//#region Redux->Component Mapping Imports
import { connect } from "react-redux";
import {
	replaceStem,
	addSuffix,
} from "../state-management/actions";
import deconstructWord from "../word-deconstruction/deconstructWord";
//#endregion

/*TODO: build more word construction/deconstruction functions such as `conjugate`
 that conjugates a word based on a given conjugation (that uses grammartical rules)*/

const styles = {
	word: {
		display: "flex",
		"& > :not(:last-child)": {
			marginRight: "8px",
		},
	},
	text: {
		fontSize: "1.75rem",
	},
};

//to do: modify based on the `TODO.md` specifications
class Word extends React.Component {
	constructor(props) {
		super(props);
		
		//need to eventually get it from the Redux store, that it will be inserted into via the word search form input in the appbar
		this.text = this.props.text;

		//needs to get the value from the store instead
		//this.wordParts = deconstructWord(this.text)
		
		/* console.log(`Word.props:`)
		console.log(this.props); */

		// this.wordParts = this.props.wordParts;

    // #region might not be needed */
    
		/* this.state = {
			wordParts: this.wordParts,
			stem: this.stem,
    } */
    
		// #endregion
	}

	/*
  Maybe I should get it from the store? Although the stem is always an element of wordParts. Is this unecessary?
  It could be useful for referencing, though, compared to accessing it via wordParts every time I need a word's stem.
  */
	/* get stem() {
		return this.wordParts.find(wordPart => {
			if (wordPart.wordPartType === "stem") {
				return wordPart;
			}
		});
	} */

	render() {
		const { classes } = this.props;

		////Create and populate dynamically `WordPart` component from this.wordParts
		const wordPartsCards = this.props.wordParts.map((wordPartProps, index) => {
			return <WordPart {...wordPartProps} key={index} />;
		});

		return (
			<div className={classes.word}>
				{wordPartsCards}
			</div>
		);
	}

	componentWillReceiveProps() {
		this.render();
	}

	 
}

//Redux mapStateToProps

//is suppose to map the word state object in the Redux store to the Word component
const mapStateToProps = store_state => {
	// eslint-disable-next-line default-casec
	
	console.log('store_state.word');
	console.log(store_state.word);

	return store_state.word;
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		replaceStem: stem => dispatch(replaceStem(ownProps.stem)),
		addSuffix: suffix => dispatch(addSuffix(ownProps.wordParts)),
	};
};

// eslint-disable-next-line no-unused-vars
const WordStoreSubscriber = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Word);

//todo: add a propType for `stem` and `wordParts`

//todo: Figure out a way to export the state of `Word` such that Redux could use it for the `initial_state` of the `store`.
export default withStyles(styles)(WordStoreSubscriber);
