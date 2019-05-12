import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { primaryColor, secondaryColor } from "../../../style/colors";

import ReplaceStemDialog from "./ReplaceStemDialog";
import AddSuffixDialog from "./AddSuffixDialog";

const styles = theme => ({
	suffixIcon: {
		width: "48px",
		height: "48px",
		fill: primaryColor["main"],
	},
});

class SelectSuffixToModify extends React.Component {

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

		if (this.props.action === "replace") {
			return(
				<ReplaceStemDialog
				action={this.props.action}
				key={this.props.key}/>
			);
		}
		
		if (this.props.action === "add") {
			return (
				<AddSuffixDialog
					action={this.props.action}
					key={this.props.key} 
				/>
			);
		}
	}
}

/* SelectSuffixToModify.propTypes = {
	//todo: fix why I'm getting an error about not supplying a correct `action` value - `WordPart` shoudld supply either
	action: PropTypes.oneOf(["replce", "add"]).isRequired,
}; */

export default withStyles(styles)(SelectSuffixToModify);
