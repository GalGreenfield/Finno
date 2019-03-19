import React from 'react'

import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import { primaryColor, secondaryColor } from '../../../style/colors.js';

import IconButton from "@material-ui/core/IconButton";
import { fade } from "@material-ui/core/styles/colorManipulator";

//#region Icons
import AddIcon from '@material-ui/icons/Add';
import FindReplace from '@material-ui/icons/FindReplace';
//#endregion


const styles = {

    modifyWordPartButton__Container: {
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
    modifyWordPartButton: {
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
    modifyWordPartButton__Icon: {
        fill: secondaryColor['main'],
    },

    hideModifyWordPartButton: {
        opacity: 0,
        transition: 'opacity 250ms',
    },

}

class ModifyWordPartButton extends React.Component {

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

        if (this.props.action==='replace') {
            return (

                <div
                    className={classes.modifyWordPartButton__Container}    
                    onMouseEnter={this.onMouseEnterHandler}
                    onMouseLeave={this.onMouseLeaveHandler}
                >
                    
                    <IconButton
                        className={
                            `${classes.modifyWordPartButton} ${this.state.isHovered ? '' : classes.hideModifyWordPartButton}`
                        } centerRipple={false}
                        onClick={this.props.handleClickOpen}
                    >   
                        <FindReplace className={classes.modifyWordPartButton__Icon}/>
                    </IconButton>
                    
                    {this.props.children}
                </div>
    
            );
        }
        

        if (this.props.action==='add') {
            return (

                <div
                    onMouseEnter={this.onMouseEnterHandler}
                    onMouseLeave={this.onMouseLeaveHandler}
                    className={classes.modifyWordPartButton__Container}
                >
                    
                    <IconButton
                        className={classNames(
                            classes.modifyWordPartButton,
                            this.state.isHovered ? '' : classes.hideModifyWordPartButton
                        )}
                        centerRipple={false}
                        onClick={this.props.handleClickOpen}
                    >
                        {<AddIcon className={classes.modifyWordPartButton__Icon}/>}
                        
                    </IconButton>
                    
                    {this.props.children}
                </div>

            );
        }

    }
    
        
    

}


export default withStyles(styles)(ModifyWordPartButton);