import React from "react";
import Proproles from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

/*For the word role*/
import Tooltip from "@material-ui/core/Tooltip";
import SvgIcon from "@material-ui/core/SvgIcon";

import { primaryColor, secondaryColor } from '../style/colors';

//#region roles & roles Icons Imports
import { ReactComponent as TranslationIcon } from '../style/icons/translation-icon.svg';
import { ReactComponent as SuffixIcon } from '../style/icons/suffix-icon.svg';
//#endregion


/*Todo: remove unnecessary imports*/


const styles = {
  WordPart: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: '24px'
  },
  WordPart__cardContent: {
    padding: '0px !important',
  },
  WordPart__text: {
    fontSize: "4.5rem"
  },
  WordPart__role: {
    color: primaryColor[300],
    textAlign: 'center', //todo: replace IF I switch `WordPart` symbols to icons (currently: full textual description)
    display: 'flex',
    flexDirection: 'column',
  }
};

//Todo: maybe sometime later export into its own component 
function RoleIcon(WordPart__props) {
  if (WordPart == 'stem') {
    return (
      WordPart__props.hasOwnProperty('translation')
      ? <TranslationIcon style={{'height':'32px'}}/>
      : <TranslationIcon style={{'height':'32px', fill:'gray'}} />
    );
    
  }
  if (WordPart__props.role == 'suffix') {
    return <SuffixIcon style={{'height':'32px', fill: 'blue'}}/>
  }
}

function WordPart(props) {
  const { classes } = props;

  return (
    <Card className={classes.WordPart} key={props.key}>
      <CardContent className={classes.WordPart__cardContent}>
        <Typography
          className={classes.WordPart__text}
          color="textPrimary"
          align="center"
          gutterBottom
        >
          {props.text}
        </Typography>
        {/*word role */}

        {/*If I can get icons for all word roles, change the following from typography to some icon structure*/}
        <Typography className={classes.WordPart__role} color="textSecondary">
          {props.role}
          {RoleIcon(props)}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(WordPart);