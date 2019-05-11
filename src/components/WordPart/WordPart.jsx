import React from "react";

import { withStyles } from "@material-ui/core/styles";
import { primaryColor, secondaryColor } from '../../style/colors';

//#region Card imports
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
//#endregion

import SelectSuffixToModify from "./modify-word-parts/SelectSuffixToModify";

import Typography from "@material-ui/core/Typography";

import WordPartTypeIcons from './WordPartTypeIcons';
import { oneOf } from "prop-types";


const styles = theme => ({

  WordPart__card__container: {
    display: 'flex',
  },

  WordPart: {
  },

  WordPart__text__container: {
    height: '25vh',
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

});

class WordPart extends React.Component {
  constructor(props) {
    super(props);
    this.wordPartType = this.props.wordPartType;
    this.getModifyWordPartActionType = this.getModifyWordPartActionType.bind(this);
    this.modifyAction = this.getModifyWordPartActionType();
  }

  getModifyWordPartActionType() {
    let modifyAction = '';

    if (this.wordPartType === 'suffix') {
      return modifyAction = 'add';
    }

    if (this.props.wordPartType === 'stem') {
      return modifyAction = 'replace';
    }

  }

  render() {
  
    const { classes } = this.props;

    return (
      <div className={classes.WordPart__card__container}>

        <Card
          className={classes.WordPart}
          key={this.props.key}
        >

          <CardContent className={classes.WordPart__text__container}>
          
            <Typography
              className={classes.WordPart__text}
              color="textPrimary"
              align="center"
            >  
              {this.props.text}
            </Typography>

          </CardContent>
          
          <CardActions
            disableActionSpacing={true}
            className={classes.WordPart__role__container}
          >
            <WordPartTypeIcons WordPart__props={this.props} />
          </CardActions>

        </Card>

        <SelectSuffixToModify action={this.modifyAction} />

      </div>
    );
  }

}

WordPart.propTypes = {
  wordPartType: oneOf(['stem','suffix']).isRequired,
};

export default withStyles(styles)(WordPart);