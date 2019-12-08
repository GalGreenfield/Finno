import React from "react";
import PropTypes from "prop-types";

import { generate as generateKey } from 'shortid'

import { withStyles } from "@material-ui/core/styles";
import { primaryColor, secondaryColor } from "../../../style/colors";
import { fade } from "@material-ui/core/styles/colorManipulator";

import ReplaceStemDialog from "./ReplaceStemDialog";

import ModifyWordPartButton from "./ModifyWordPartButton";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

import DialogContent from "@material-ui/core/DialogContent";

import { Grid, Cell } from "styled-css-grid";

//#region Suffixes Icons Imports
//todo: import all suffix icons once I have them all 
import { ReactComponent as SuffixIcon } from "../../../style/icons/suffixes/suffix-icon.svg";
import { ReactComponent as AllativeIcon } from "../../../style/icons/suffixes/allative-icon.svg";
import { ReactComponent as InessiveIcon } from "../../../style/icons/suffixes/inessive-icon.svg";
//#endregion
import SuffixToSelectButton from "./SuffixToSelectButton";

import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";

import DialogActions from "@material-ui/core/DialogActions";

const styles = theme => ({
	suffixIcon: {
		width: "48px",
		height: "48px",
		fill: primaryColor["main"],
	},
});

class SelectSuffixToModify extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
		};

		this.handleClickOpen = this.handleClickOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	render() {

		const { classes } = this.props;		

		
		//todo: add an MUI `Badge` to each cell, and put an icon in the `badgeContent` property of the `Badge`

		const dummy_suffix_button = (
			<SuffixToSelectButton suffixType="Allative">
				<SuffixIcon
				className={classes.suffixIcon}
				key ={generateKey()} />
			</SuffixToSelectButton>
		);

		/* #region Dummy Content Generation */
		//todo: once I have suffixes for all the icons, replace the array with an object whose elements have properties: `suffixType`, `suffixIconName`,
		//todo: after creating the object, replace below the interation over the array with iteration over the object to use the object's element's properties
		const dummy_suffix_buttons = [

			<SuffixToSelectButton suffixType="Allative">
				<AllativeIcon className={classes.suffixIcon} />
			</SuffixToSelectButton>,
			
			<SuffixToSelectButton suffixType="Inessive">
				<InessiveIcon className={classes.suffixIcon} />
			</SuffixToSelectButton>,

			dummy_suffix_button,
			dummy_suffix_button,
			dummy_suffix_button,
			dummy_suffix_button,
			dummy_suffix_button,
			dummy_suffix_button,
			dummy_suffix_button,
			dummy_suffix_button,
			dummy_suffix_button,
			dummy_suffix_button,
			dummy_suffix_button,
			dummy_suffix_button,
		];
		/* #endregion */

		return (
			<React.Fragment>
				<ModifyWordPartButton
					action={this.props.action}
					handleClickOpen={this.handleClickOpen}
				/>

				<Dialog
					fullWidth={true}
					maxWidth="md"
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">Select Suffix</DialogTitle>

					<DialogContent>
						<Grid gap={"0px"} columns={5} rows={3}>
							{
								dummy_suffix_buttons.map(
									dummy_suffix_button => {
										return (
											<Cell
												style={{
													height: "fit-content",
													justifySelf: "center",
													alignSelf: "center",
												}}
											>
												{dummy_suffix_button}
											</Cell>
										)
									}
								)
							}
						</Grid>
					</DialogContent>

					<DialogActions>
						<Button onClick={this.handleClose} color="primary">
							Cancel
						</Button>

						<Button onClick={this.handleClose} color="primary" autoFocus>
							Add
						</Button>
					</DialogActions>
				</Dialog>
			</React.Fragment>
		);
	
	}
}

SelectSuffixToModify.propTypes = {
	action: PropTypes.oneOf(["add"]).isRequired,
}

export default withStyles(styles)(SelectSuffixToModify);
