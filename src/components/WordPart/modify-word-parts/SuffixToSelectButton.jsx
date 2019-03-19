
import React from 'react';

import { withStyles } from "@material-ui/core/styles";
import classNames from 'classnames';
import { primaryColor, secondaryColor } from "../../../style/colors";
import { fade } from "@material-ui/core/styles/colorManipulator";

import ButtonBase from '@material-ui/core/ButtonBase';

import Typography from '@material-ui/core/Typography';

const styles = theme => ({

  suffixIconButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  suffixIconButton :{
    height: '125px',
    width: '125px',
    borderRadius: '100%',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
      backgroundColor: fade(primaryColor['main'], theme.palette.action.hoverOpacity),
    },
    transition: theme.transitions.create(['background-color'], {
      duration: theme.transitions.duration.short,
    }),
  },

  suffixIcon: {
    width: '48px',
    height: '48px',
    fill: primaryColor['main'],
  },
  SuffixIconButton__text: {
    marginTop: '8px',
    color: primaryColor['main'],
  },

  selected: {
    backgroundColor: fade(primaryColor['main'], 0.14), //0.14 is the value of the default `theme.palette.action.selected` value
    transition: theme.transitions.create(['background-color'], {
      duration: theme.transitions.duration.short,
    }),
  }

});

class SelectSuffix extends React.Component {

    constructor(props) {
      super(props);
      this.suffixType = this.props.suffixType;
      this.state = {
        isSelected: false,
      }
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.setState(
        { isSelected: !(this.state.isSelected) }, 
        () => {} 
      );
    }
    
    render() {
      
      const {classes} = this.props;

      return (

        <ButtonBase
          onClick={this.handleClick}
          centerRipple={true}
          className={classNames(
            classes.suffixIconButton,
            this.state.isSelected ? classes.selected : '',
          )}
        >
          {this.props.children}
          <Typography className={classes.SuffixIconButton__text}>
            {this.props.suffixType}
          </Typography>
        </ButtonBase>

      );

    }

}

export default withStyles(styles)(SelectSuffix);