import React from "react";

import { withStyles } from "@material-ui/core/styles";
import { primaryColor, secondaryColor } from "../../../style/colors";

import ModifyWordPartButton from "./ModifyWordPartButton";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

import DialogContent from "@material-ui/core/DialogContent";

import { Grid, Cell } from "styled-css-grid";
//#region Suffixes Icons Imports


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

class ReplaceStemDialog extends React.Component {
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
		
		return (
			<React.Fragment>
				<ModifyWordPartButton
					action={this.props.action}
					handleClickOpen={this.handleClickOpen}
				/>

				<Dialog
					fullWidth={true}
					maxWidth="xs"
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">
						Replace stem
					</DialogTitle>

					<form>
						
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
								</Cell>
							</Grid>
						</DialogContent>

						<DialogActions>

							<Button onClick={this.handleClose} color="primary">
								Cancel
							</Button>

							<Button
								name="replace_stem"
								type="submit"
								color="primary"
							>
								Replace
							</Button>

						</DialogActions>
						
						</form>

				</Dialog>
			</React.Fragment>
		);	
	}

}

ReplaceStemDialog.propTypes = {
	action: 'replace'.isRequired //todo: check prop-types supports providing hard-coded values
}

export default withStyles(styles)(ReplaceStemDialog);
