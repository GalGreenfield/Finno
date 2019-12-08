// eslint-disable-next-line no-unused-var
	
/* #region Imports */

/* #region React */
import React from 'react';
/* #endregion */

/* #region Keys for Components */
import { generate as generateKey } from 'shortid';
/* #endregion */

/* #region Component Contents */
	/* #region Cards */
	import Card from "@material-ui/core/Card";
	import CardContent from "@material-ui/core/CardContent";
	import CardActions from "@material-ui/core/CardActions";
/* #endregion */
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
import WordPart from './WordPart';
/* #endregion */

/* #endregion */

/* #region Theme */
const styles = theme => (	
	{
		WordPart__card__container: {
			display: "flex",
		},

		CompoundBase__roots_cards__container: {
			height: "25vh",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: primaryColor["main"],
			padding: "8px 32px",
		},

		/* WordPart__text: {
			textRendering: "optimizeLegibility",
			fontSize: "6.75rem",
			lineHeight: "unset",
			color: secondaryColor["main"],
		}, */

		/* WordPart__role__container: {
			padding: "unset",
			display: "flex",
			justifyContent: "center",
		}, */

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
//A word base made of multiple stems
class CompoundBase extends React.Component {
  constructor(props) {
		super(props);
		//think of what to do here
  }
  render() {

    const { classes } = this.props;

		return (
			<CardContent className={classes.CompoundBase__roots_cards__container}>
				<Typography
					className={classes.WordPart__text}
					color="textPrimary"
					align="center"
				>
					{this.props.text}
				</Typography>
			</CardContent>
		);
	}
}
/* #endregion */

export default withStyles(styles)(CompoundBase);