

/* #region Imports */

/* #region React */
import React from 'react';
/* #endregion */

/* #region Type Checking */
import { oneOf } from "prop-types";
/* #endregion */

/* #region Keys for Components */
import { generate as generateKey } from 'shortid';
/* #endregion */

/* #region WordPart Cards */
/* #region Card */
import Card from "@material-ui/core/Card";
/* #endregion */

/* #region Card Content */
import CardContent from "@material-ui/core/CardContent";
import CompoundBase from './CompoundBase';
/* #endregion */

import CardActions from "@material-ui/core/CardActions";

/* #region Typography */
import Typography from "@material-ui/core/Typography";
/* #endregion */
/* #region Suffixes */
import SelectSuffixToModify from "./modify-word-parts/SelectSuffixToModify";
/* #endregion */
/* #region Icons */
import WordPartTypeIcons from "./WordPartTypeIcons";
/* #endregion */
/* #endregion */

/* #region Style */
import { withStyles } from "@material-ui/core/styles";
import { primaryColor, secondaryColor } from "../../style/colors";
/* #endregion */

/* #endregion */


/* #region Theme */
const styles = theme => (
	{
		WordPart__card__container: {
			display: "flex",
		},

		WordPart__text__container: {
			height: "25vh",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: primaryColor["main"],
			padding: "24px 32px",
		},

		WordPart__text: {
			textRendering: "optimizeLegibility",
			fontSize: "6.75rem",
			lineHeight: "unset",
			color: secondaryColor["main"],
		},

		WordPart__role__container: {
			padding: "unset",
			display: "flex",
			justifyContent: "center",
		},

		WordPart__role__icon: {
			height: "24px",
			padding: "12px",
		},

		WordPart__role__text: {
			color: primaryColor[300],
			display: "flex",
		},
	}
);
/* #endregion */

/* #region Component Class */
class WordPart extends React.Component {

	/* #region Constructor */
	constructor(props) {
		super(props);
		this.partOfSpeech = this.props.partOfSpeech;

		this.getModifyWordPartActionType = this.getModifyWordPartActionType.bind(this);
		this.modifyAction = this.getModifyWordPartActionType();

	}
	/* #endregion */

	/* #region Methods */
	isSuffix() {
		return this.partOfSpeech === 'suffix'
	}

	isStem() {
		return this.partOfSpeech === 'stem'
	}

	getModifyWordPartActionType() {

		let modifyAction = '';

		if (this.isSuffix(this.partOfSpeech)) {
			return (modifyAction = 'add');
		}

		if (this.partOfSpeech === 'stem') {
			return (modifyAction = 'replace');
		}

	}

	isCompoundStem() {
		if (this.isStem() && this.props.hasOwnProperty('variant')) {
			return (this.props.variant === 'compound');
		}
		return false;
	}
	/* #endregion */



	//a function only for stems, maybe create a class just for stems

	render() {

		const { classes } = this.props;

		return (

			<div className={classes.WordPart__card__container}>
				<Card className={classes.WordPart} key={generateKey()}>
					{/* #region Card Content */
					this.isCompoundStem()
					? (
						<CompoundBase {...this.props}>
						</CompoundBase>
					)
					: (
						<CardContent className={classes.WordPart__text__container}>
							<Typography
								className={classes.WordPart__text}
								color="textPrimary"
								align="center"
							>
							{this.props.text}
						</Typography>
					</CardContent>
					)
					
					/* #endregion */
					}
					
					

					<CardActions
						disableActionSpacing={true}
						className={classes.WordPart__role__container}
					>
						<WordPartTypeIcons WordPart__props={this.props} />
					</CardActions>
				</Card>

				<SelectSuffixToModify action={this.modifyAction} key={generateKey()} />
			</div>
		);
	}
}
/* #endregion */

/* #region Type Checking */
WordPart.propTypes = {
	partOfSpeech: oneOf(["stem", "suffix"]).isRequired,
};
/* #endregion */

/* #region Export Component */
export default withStyles(styles)(WordPart);
/* #endregion */
