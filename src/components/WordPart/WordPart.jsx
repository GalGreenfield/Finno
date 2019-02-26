import React from "react";

import { withStyles } from "@material-ui/core/styles";
import { primaryColor, secondaryColor } from '../../style/colors';

//#region Card imports
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
//#endregion

import AddWordPartButton from '../modify-word/ModifyWordPartButton';
import SelectSuffixToModify from '../modify-word/SelectSuffixToModify';

import Typography from "@material-ui/core/Typography";

/*For the word role*/
//import Tooltip from "@material-ui/core/Tooltip";


import WordPartTypeIcons from './WordPartTypeIcons';

import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import ModifyWordPartButton from "../modify-word/ModifyWordPartButton";


/*Todo: remove unnecessary imports*/


const styles = {

  WordPart__card__container: {
    display: 'flex',
  },

  WordPart: {
  },

  WordPart__text__container: {
    height: '22.5vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: primaryColor['main'],
    padding: '24px 32px',
  },

  WordPart__text: {
    textRendering: 'optimizeLegibility',
    fontSize: "6.75rem",
    lineHeight: 'unset',
    color: secondaryColor['main'],
  },

  WordPart__role__container: {
    padding: 'unset',
    display: 'flex',
    justifyContent: 'center',
  },

  WordPart__role__icon: {
    height: '24px',
    padding: '12px'
  },

  WordPart__role__text: {
    color: primaryColor[300],
    display: 'flex',
  },

};

function WordPart(props) {

  function getModifyWordPartActionType() {
    var action = '';
    if (props.wordPartType==='suffix') {
      return action='add';
    }
    if (props.wordPartType==='stem') {
      return action='replace';
    }
  }

  const { classes } = props;

  const action = getModifyWordPartActionType();

  if (props.wordPartType==='stem') {

    return (

      <div className={classes.WordPart__card__container}>

        <Card className={classes.WordPart} key={props.key}>

          <CardContent className={classes.WordPart__text__container}>
            
            <Typography
              className={classes.WordPart__text}
              color="textPrimary"
              align="center"
            >
              {props.text}
            </Typography>

          </CardContent>
          
          <CardActions disableActionSpacing={true} className={classes.WordPart__role__container}>
            <WordPartTypeIcons WordPart__props={props}/>
          </CardActions>

        </Card>

        <ModifyWordPartButton action={action}/>
        
      </div>

    );

  }

  if (props.wordPartType==='suffix') {

    return (

      <div className={classes.WordPart__card__container}>

        <Card className={classes.WordPart} key={props.key}>

          <CardContent className={classes.WordPart__text__container}>
            
            <Typography
              className={classes.WordPart__text}
              color="textPrimary"
              align="center"
            >
              {props.text}
            </Typography>

          </CardContent>
          
          <CardActions disableActionSpacing={true} className={classes.WordPart__role__container}>
            <WordPartTypeIcons WordPart__props={props}/>
          </CardActions>

        </Card>

        <SelectSuffixToModify action={action}/>
        
      </div>

    );

  }

}


export default withStyles(styles)(WordPart);