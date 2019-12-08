/* #region Imports */

/* #region React */
import React from "react";
/* #endregion */

import '../globals';

/* #region WordPart */
import WordPart from "./WordPart/WordPart";
/* #endregion */

//#region Redux->Component Mapping
import { connect } from "react-redux";
import { replaceStem, addSuffix } from "../state-management/actions";
//#endregion
/* #region Style */
import { withStyles } from "@material-ui/core/styles";
/* #endregion */

/* #endregion */

const styles = theme => (
		{
		word: {
			display: "flex",
			"& > :not(:last-child)": {
				marginRight: "8px",
			},
		},
		text: {
			fontSize: "1.75rem",
		},
	}
);

//to do: modify stemd on the `TODO.md` specifications
/* #region Component */
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
					<WordPart key={index} id={index} {...wordPartProps} />
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
/* #endregion */

/* #region Connect Component ⟷ Redux Store */
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

export default withStyles(styles)(WordStoreSubscriber);