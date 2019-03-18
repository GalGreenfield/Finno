import React from 'react'

import { withStyles } from "@material-ui/core/styles";

import { primaryColor, secondaryColor } from '../../../style/colors.js';

import IconButton from "@material-ui/core/IconButton";
import { fade } from "@material-ui/core/styles/colorManipulator";
import AddIcon from '@material-ui/icons/Add';
import Fade from '@material-ui/core/Fade';

import { Hidden } from '@material-ui/core';

import classNames from 'classnames';


const styles = {

    addWordPartButton__Container: {
        height: '100%',
        //width: '48px',
        
        width: '24px',
        overflow: 'hidden',

        display: 'flex',
        alignItems: 'center',
        marginLeft: '-19px',
        
        transition: 'width 250ms ease-in-out',

        '&:hover': {
            width: '48px',
            transition: 'width 250ms ease-in-out',
        }
        
    },
    addWordPartButton: {
        marginTop: '-20px',
        padding: '8px',
        borderRadius: '100%',
        backgroundColor: primaryColor['400'],
        '&:hover': {
            backgroundColor: fade(primaryColor['300'], 1),
        },
        opacity: 1,
        transition: 'opacity 250ms',
    },
    addWordPartButton__Icon: {
        fill: secondaryColor['main'],
    },

    hideAddWordPartButton: {
        opacity: 0,
        transition: 'opacity 250ms',
    },

}

class AddWordPartButton extends React.Component {

    constructor(props) {
        
        super(props);
        this.state = {

            isHovered: false,
        };

        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
    } 

    onMouseEnterHandler() {
        this.setState(
            {isHovered: true},
            () => {
                //console.log(this.state.isHovered);
            }
        );
    }
    
    onMouseLeaveHandler() {
        this.setState(
            {isHovered: false},
            () => {
                //console.log(this.state.isHovered);
            }
        );
    }
    
    
    render() {
        
        const { classes } = this.props;

        return (

            <div
                onMouseEnter={this.onMouseEnterHandler}
                onMouseLeave={this.onMouseLeaveHandler}
                className={classes.addWordPartButton__Container}
            >
                
                <IconButton
                    className={
                        `${classes.addWordPartButton} ${this.state.isHovered ? '' : classes.hideAddWordPartButton}`
                    } centerRipple={false}
                >
                    {<AddIcon className={classes.addWordPartButton__Icon}/>}
                </IconButton>
                
                {this.props.children}
            </div>

        );
        
    }

}


export default withStyles(styles)(AddWordPartButton);