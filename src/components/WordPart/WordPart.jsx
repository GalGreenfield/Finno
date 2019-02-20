import React from "react";

import { withStyles } from "@material-ui/core/styles";

//#region Card imports
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
//#endregion

import AddWordPartButton from '../modify-word/AddWordPartButton.jsx';

import Typography from "@material-ui/core/Typography";

/*For the word role*/
//import Tooltip from "@material-ui/core/Tooltip";

import { primaryColor, secondaryColor } from '../../style/colors';

import WordPartTypeIcons from './WordPartTypeIcons.jsx';


/*Todo: remove unnecessary imports*/


const styles = {

  WordPart__card__container: {
    display: 'flex',
  },

  WordPart: {
  },

  WordPart__text__container: {
    height: '20vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: primaryColor['main'],
    padding: '24px',
  },

  WordPart__text: {
    fontSize: "6.75rem",
    lineHeight: 'unset',
    color: secondaryColor['main']
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

  const { classes } = props;

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


      <AddWordPartButton />

    </div>

  );
}


export default withStyles(styles)(WordPart);