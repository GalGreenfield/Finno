import React from "react";

import { withStyles } from "@material-ui/core/styles";
import { primaryColor, secondaryColor } from "../../../style/colors";
import { fade } from "@material-ui/core/styles/colorManipulator";

import ModifyWordPartButton from "./ModifyWordPartButton";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

import DialogContent from "@material-ui/core/DialogContent";

import { Grid, Cell } from 'styled-css-grid';
//#region Suffixes Icons Imports
import { ReactComponent as SuffixIcon } from '../../../style/icons/suffixes/suffix-icon.svg';
import { ReactComponent as AllativeIcon } from '../../../style/icons/suffixes/allative-icon.svg'
import { ReactComponent as InessiveIcon } from '../../../style/icons/suffixes/inessive-icon.svg';
//#endregion
import SuffixToSelectButton from './SuffixToSelectButton';

import Button from "@material-ui/core/Button";

import DialogActions from "@material-ui/core/DialogActions";



const styles = theme => ({

  suffixIcon :{
    width: '48px',
    height: '48px', 
    fill: primaryColor['main'],
  }
  
});

class SelectSuffixToModify extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      open: false
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

    return (
      <React.Fragment>
        <ModifyWordPartButton
          action={this.props.action}
          handleClickOpen={this.handleClickOpen}
        />

        <Dialog
          fullWidth={true}
          maxWidth='md'
      
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >

          <DialogTitle id="alert-dialog-title">
            Select Suffix
          </DialogTitle>

          <DialogContent>

            <Grid
              gap={'0px'}
              columns={5}
              rows={3}
            >
            
              <Cell
                style={{
                  height: 'fit-content',
                  justifySelf:'center',
                  alignSelf: 'center'
                }}
                
              >
                <SuffixToSelectButton>
                  <SuffixIcon className={classes.suffixIcon} />
                </SuffixToSelectButton>
              </Cell>
              
              <Cell
                style={{
                  height: 'fit-content',
                  justifySelf:'center',
                  alignSelf: 'center'
                }}
                
              >
                <SuffixToSelectButton>
                  <SuffixIcon className={classes.suffixIcon} />
                </SuffixToSelectButton>
              </Cell>
              
              <Cell
                style={{
                  height: 'fit-content',
                  justifySelf:'center',
                  alignSelf: 'center'
                }}
                
              >
                <SuffixToSelectButton>
                  <SuffixIcon className={classes.suffixIcon} />
                </SuffixToSelectButton>
              </Cell>
              
              <Cell
                style={{
                  height: 'fit-content',
                  justifySelf:'center',
                  alignSelf: 'center'
                }}
                
              >
                <SuffixToSelectButton>
                  <SuffixIcon className={classes.suffixIcon} />
                </SuffixToSelectButton>
              </Cell>
              
              <Cell
                style={{
                  height: 'fit-content',
                  justifySelf:'center',
                  alignSelf: 'center'
                }}
                
              >
                <SuffixToSelectButton>
                  <SuffixIcon className={classes.suffixIcon} />
                </SuffixToSelectButton>
              </Cell>
              
              <Cell
                style={{
                  height: 'fit-content',
                  justifySelf:'center',
                  alignSelf: 'center'
                }}
                
              >
                <SuffixToSelectButton>
                  <SuffixIcon className={classes.suffixIcon} />
                </SuffixToSelectButton>
              </Cell>
              
              <Cell
                style={{
                  height: 'fit-content',
                  justifySelf:'center',
                  alignSelf: 'center'
                }}
                
              >
                <SuffixToSelectButton>
                  <SuffixIcon className={classes.suffixIcon} />
                </SuffixToSelectButton>
              </Cell>
              
              <Cell
                style={{
                  height: 'fit-content',
                  justifySelf:'center',
                  alignSelf: 'center'
                }}
                
              >
                <SuffixToSelectButton>
                  <SuffixIcon className={classes.suffixIcon} />
                </SuffixToSelectButton>
              </Cell>
              
              <Cell
                style={{
                  height: 'fit-content',
                  justifySelf:'center',
                  alignSelf: 'center'
                }}
                
              >
                <SuffixToSelectButton>
                  <SuffixIcon className={classes.suffixIcon} />
                </SuffixToSelectButton>
              </Cell>
              
              <Cell
                style={{
                  height: 'fit-content',
                  justifySelf:'center',
                  alignSelf: 'center'
                }}
                
              >
                <SuffixToSelectButton>
                  <SuffixIcon className={classes.suffixIcon} />
                </SuffixToSelectButton>
              </Cell>
              
              <Cell
                style={{
                  height: 'fit-content',
                  justifySelf:'center',
                  alignSelf: 'center'
                }}
                
              >
                <SuffixToSelectButton>
                  <SuffixIcon className={classes.suffixIcon} />
                </SuffixToSelectButton>
              </Cell>
              
              <Cell
                style={{
                  height: 'fit-content',
                  justifySelf:'center',
                  alignSelf: 'center'
                }}
                
              >
                <SuffixToSelectButton>
                  <SuffixIcon className={classes.suffixIcon} />
                </SuffixToSelectButton>
              </Cell>
              
              <Cell
                style={{
                  height: 'fit-content',
                  justifySelf:'center',
                  alignSelf: 'center'
                }}
                
              >
                <SuffixToSelectButton>
                  <SuffixIcon className={classes.suffixIcon} />
                </SuffixToSelectButton>
              </Cell>
              
              <Cell
                style={{
                  height: 'fit-content',
                  justifySelf:'center',
                  alignSelf: 'center'
                }}
                
              >
                <SuffixToSelectButton>
                  <SuffixIcon className={classes.suffixIcon} />
                </SuffixToSelectButton>
              </Cell>
              
              <Cell
                style={{
                  height: 'fit-content',
                  justifySelf:'center',
                  alignSelf: 'center'
                }}
                
              >
                <SuffixToSelectButton>
                  <SuffixIcon className={classes.suffixIcon} />
                </SuffixToSelectButton>
              </Cell>

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

export default withStyles(styles)(SelectSuffixToModify);
