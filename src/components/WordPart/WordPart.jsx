import React from "react";

import { withStyles } from "@material-ui/core/styles";

//#region Card imports
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
//#endregion

import Typography from "@material-ui/core/Typography";

/*For the word role*/
//import Tooltip from "@material-ui/core/Tooltip";

import { primaryColor, secondaryColor } from '../../style/colors';

import RoleIcons from './RoleIcons.jsx';


/*Todo: remove unnecessary imports*/


const styles = {
  WordPart: {
  },
  WordPart__text__container: {
    backgroundColor: primaryColor['main'],
    padding: '24px',
  },
  WordPart__text: {
    fontSize: "4.5rem",
    color: secondaryColor['main']
  },
  WordPart__role__container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '16px'
  },
  WordPart__role__icon: {
    height: '24px',
  },
  WordPart__role__text: {
    color: primaryColor[300],
    display: 'flex',
    flexDirection: 'column',
  },

};

function WordPart(props) {

  const { classes } = props;

  return (

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
        <RoleIcons WordPart__props={props}/>
      </CardActions>

    </Card>

  );
}

export default withStyles(styles)(WordPart);