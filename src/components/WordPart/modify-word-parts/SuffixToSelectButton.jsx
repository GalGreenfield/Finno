
import React from 'react';

import { withStyles } from "@material-ui/core/styles";
import { primaryColor, secondaryColor } from "../../../style/colors";
import { fade } from "@material-ui/core/styles/colorManipulator";

import ButtonBase from '@material-ui/core/ButtonBase';

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

  suffixName: {
    marginTop: '8px',
    color: primaryColor['main'],
  },

  suffixIcon :{
    width: '48px',
    height: '48px',
    fill: primaryColor['main'],
  }

});

class SelectSuffix extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        isSelected: false,
      }
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.setState(
        { isSelected: !this.state.isSelected }, 
          () => {} /*console.log(this.state)*/
      );
    }
    
    render() {
      
      const {classes} = this.props;

      return (

        <ButtonBase
          centerRipple={true}
          TouchRippleProps={
            {}
          }
          className={classes.suffixIconButton}
        >
          {this.props.children}
        </ButtonBase>

      );

    }

}

export default withStyles(styles)(SelectSuffix);