import React from "react";

import { withStyles } from "@material-ui/core/styles";

import WordPart from "./WordPart/WordPart";

//import deconstructWord from '../word-deconstruction/deconstructWord'

//#region Redux->Component Mapping Imports
import { connect } from "react-redux";
import { replaceStem, addSuffix } from "../state-management/actions";
//#endregion

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

//to do: modify stemd on the `TODO.md` specifications
class Word extends React.Component {

	get stem() {
		return this.props.wordParts[0]; //In Finnish, the stem is always the first word part of word
	}

	render() {

		const { classes } = this.props;

		//Create and populate dynamically `WordPart` component from this.props.wordParts
		const wordPartsCards = this.props.wordParts.map(
			(wordPartProps, index) => {
				return (
					<WordPart key={index} {...wordPartProps} />
				);
			}
		);

		return (
			<div className={classes.word}>
				{wordPartsCards}
			</div>
		);
	}
}

/* #region Connect Component to the Redux Store */
const mapStateToProps = (store_state, ownProps) => {
	return store_state.word;
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		replaceStem: stem => dispatch(replaceStem(ownProps.stem)),
		addSuffix: suffix => dispatch(addSuffix(ownProps.wordParts)),
	};
};

const WordStoreSubscriber = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Word);

/* #endregion */
//todo: add a propType for `stem` and `wordParts`

//todo: Figure out a way to export the state of `Word` such that Redux could use it for the `initial_state` of the `store`.
export default withStyles(styles)(WordStoreSubscriber);