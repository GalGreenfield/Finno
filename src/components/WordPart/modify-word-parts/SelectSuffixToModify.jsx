import React from "react";
import PropTypes from 'prop-types';

import { withStyles } from "@material-ui/core/styles";
import { primaryColor, secondaryColor } from "../../../style/colors";

import ReplaceStemDialog from "./ReplaceStemDialog";
import AddSuffixDialog from './AddSuffixDialog';

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

	//todo: extract dialogs into independent files, maybe in `modify-word-parts` create a directory `actions` and put the files there
	render() {

		if (this.props.action === "replace") {
			return <ReplaceStemDialog action={this.props.action} />;
		}

		if (this.props.action === "add") {
			return <AddSuffixDialog action={this.props.action} />;
		}
	}
}

SelectSuffixToModify.propTypes = {
	action: PropTypes.instanceOf(['replce, add']).isRequired,
};


export default withStyles(styles)(SelectSuffixToModify);
