import React from "react";

//#region Styles Imports
import { withStyles } from "@material-ui/core/styles";
import classNames from 'classnames';
import { primaryColor, secondaryColor } from '../../style/colors';
//#endregion

//#region Icons Imports
import { ReactComponent as TranslationIcon } from '../../style/icons/translation-icon.svg';
import { ReactComponent as SuffixIcon } from '../../style/icons/suffix-icon.svg';
import { ReactComponent as StemIcon } from '../../style/icons/stem-icon.svg';
//#endregion

const styles = {
  roleIconsContainer: {
    padding: '16px',
    "& > :not(:last-child)": {
      marginRight: '8px'
    }
  },
  roleIcon: {
    height: '24px',
    "& > path": {
      fill: primaryColor[200],
    }
  },
  //Might not be necessary - keep only if I support stems with no meaning
  roleIconDisabled: {
    "& > path": {
      fill: secondaryColor[600],
    }
  }
  
};

//WordPart role icons
function RoleIcons(props) { 

  const { classes } = props;
  
  if (props.WordPart__props.role === 'stem') {
    return (
      <div className={classes.roleIconsContainer}>
        <StemIcon className={classes.roleIcon} />
        {
          
          props.WordPart__props.hasOwnProperty('translation')
          ? <TranslationIcon className={classes.roleIcon} />
          //Might not be necessary: keep only if I support stems with no meaning
          : <TranslationIcon 
              className={classNames(classes.roleIcon, classes.roleIconDisabled)} 
            /> 
        }
      </div>
    );
  }

  if (props.WordPart__props.role === 'suffix') {
    return (
      <div className={classes.roleIconsContainer}>
        <SuffixIcon className={classes.roleIcon} />
      </div>
    );
  }

}

export default withStyles(styles)(RoleIcons);