/* #region Imports */
import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { primaryColor, secondaryColor } from "../../../style/colors";

import ModifyWordPartButton from "./ModifyWordPartButton";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

import DialogContent from "@material-ui/core/DialogContent";

import { Grid, Cell } from "styled-css-grid";

import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";

import DialogActions from "@material-ui/core/DialogActions";

import { Field, reduxForm } from "redux-form";

/* #endregion */

const styles = theme => ({
	suffixIcon: {
		width: "48px",
		height: "48px",
		fill: primaryColor["main"],
	},
});

class ReplaceStemDialog extends React.Component {
	
	/* #region Constructor */
	constructor(props) {
		super(props);
		this.key = this.props.key;

		this.state = {
			open: false,
		};

		this.handleClickOpen = this.handleClickOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}
	/* #endregion */

	/* #region Handlers */
	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};
	/* #endregion */

	render() {

		const { handleSubmit } = this.props;

		/* const new_stem_text_input (field) => (
			<TextField
				id="standard-search"
				label="Stem"
				type="search"
				autoFocus={true}
				fullWidth={true}
			/>
		); */

		const renderField = (field) => (
			<div className="input-row">
				<input {...field.input} type="text"/>
				{field.meta.touched && field.meta.error &&
				 <span className="error">{field.meta.error}</span>}
			</div>
		);

		return (
			<div id='replace_stem_dialog'>
				<ModifyWordPartButton
					action={this.props.action}
					handleClickOpen={this.handleClickOpen}
				/>
				<form>
				<Dialog
					fullWidth={true}
					maxWidth="xs"
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">Replace stem</DialogTitle>

					<DialogContent>
							<Grid columns={1} rows={1}>
								<Cell
									style={{
										height: "fit-content",
										justifySelf: "center",
										alignSelf: "center",
									}}
								>
									<TextField
										id="standard-search"
										label="Stem"
										type="search"
										autoFocus={true}
										fullWidth={true}
									/>
									{/* <Field
										name="firstName"
										component="input"
										type="text"
										placeholder="First Name"
									/> */}
								</Cell>
							</Grid>
					</DialogContent>

					<DialogActions>
						<Button onClick={this.handleClose} color="primary">
							Cancel
						</Button>

						<Button name="replace_stem" type="submit" color="primary">
							Replace
						</Button>
					</DialogActions>
				</Dialog>
				</form>
			</div>
		);
	}
}

ReplaceStemDialog.propTypes = {
	//action: PropTypes.oneOf(["replace"]).isRequired,
	action: PropTypes.oneOf(["replace"]).isRequired,
};

/* #region Turn the class into a `reduxForm` */

// Create new, "configured" function
ReplaceStemDialog = reduxForm({
	form: "replace_stem_dialog",
})(
	// Evaluate it for `ReplaceStemDialog` component (class above)
	ReplaceStemDialog,
);

/* #endregion */

export default withStyles(styles)(ReplaceStemDialog);