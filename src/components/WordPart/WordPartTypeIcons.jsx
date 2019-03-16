import React from "react";

//#region Styles Imports
import { withStyles } from "@material-ui/core/styles";
import classNames from 'classnames';
import { primaryColor, secondaryColor } from '../../style/colors';
//#endregion

//#region Icons Imports

//#region Grammatical Number Icons
import { ReactComponent as SingularIcon } from '../../style/icons/grammatical-numbers/singular-icon.svg';
import { ReactComponent as PluralIcon } from '../../style/icons/grammatical-numbers/plural-icon.svg';
//#endregion

//#region Stem Icons
import { ReactComponent as StemIcon } from '../../style/icons/stems/stem-icon.svg';
import { ReactComponent as TranslationIcon } from '../../style/icons/stems/translation-icon.svg';
//#endregion

//#region Suffix Icons
import { ReactComponent as SuffixIcon } from '../../style/icons/suffixes/suffix-icon.svg';
//#endregion

import Tooltip from '@material-ui/core/Tooltip';

//#endregion

const styles = theme => ({

  wordPartTypeIconsContainer: {
    display: 'flex',
    padding: '0 8px',
  },
  wordPartTypeIcon: {
    height: '20px',
    padding: '12px 8px',
    "& > path": {
      fill: primaryColor[200],
    }
  },
  //Might not be necessary - keep only if I support stems with no meaning
  wordPartTypeIconDisabled: {
    "& > path": {
      fill: secondaryColor[600],
    }
  },
  popper: {
    marginTop: '-7.5px',
    fontSize: '1rem',
    backgroundColor: primaryColor[300],
  },
});

//WordPart wordPartType icons
function WordPartTypeIcons(props) { 

  const { classes } = props;
  
  //TODO: make this work, maybe need to convert this component to a class that extends React.Component for that.  
  function grammaticalNumberIcon(grammaticalNumber) {
    if(props.WordPart__props.grammaticalNumber==='singular') {
      return (
        <Tooltip
          title={'singular'}
          classes={{ tooltip: classes.popper }}
          placement="bottom"
          PopperProps={{ disablePortal: true }}
        >
          <SingularIcon className={classes.wordPartTypeIcon} />
        </Tooltip>
      );
    }
    if(props.WordPart__props.grammaticalNumber==='plural') {
      return (
        <Tooltip
          title={'plural'}
          classes={{ tooltip: classes.popper }}
          placement="bottom"
          PopperProps={{ disablePortal: true }}
        >
          <PluralIcon className={classes.wordPartTypeIcon} />
        </Tooltip>
      );
    }
    if(props.WordPart__props.grammaticalNumber==='uncountable') {
      return (
        <Tooltip
          title={'uncountable'}
          classes={{ tooltip: classes.popper }}
          placement="bottom"
          PopperProps={{ disablePortal: true }}
        >
          Uncountable //TODO: replace with icon
        </Tooltip>
      );
    }
  }

  if (props.WordPart__props.wordPartType === 'stem') {    

    return (

      <div className={classes.wordPartTypeIconsContainer}>

        <Tooltip
          title={props.WordPart__props.wordPartType}
          placement="bottom"
          classes={{ tooltip: classes.popper }}
          PopperProps={{ disablePortal: true }}
        >
          <StemIcon className={classes.wordPartTypeIcon} />
        </Tooltip>

        {grammaticalNumberIcon(props.WordPart__props.grammaticalNumber)}

        {
          props.WordPart__props.hasOwnProperty('translation')
          ? (
              <Tooltip
                title={props.WordPart__props.translation}
                classes={{ tooltip: classes.popper }}
                placement="bottom"
                PopperProps={{ disablePortal: true }}
              >
                  <TranslationIcon className={classes.wordPartTypeIcon} />
              </Tooltip>
          )
          //Might not be necessary: keep only if I support stems with no meaning
          : <TranslationIcon className={classNames(classes.wordPartTypeIcon, classes.wordPartTypeIconDisabled)} /> 
        }

      </div>
    );
  }
  
  if (props.WordPart__props.wordPartType === 'suffix') {
    
    //TODO return icons based on wordPartType *and* based on the rest of the available properties (grammaticalNumber/grammaticalCase)
    return (
      <div className={classes.wordPartTypeIconsContainer}>
        <Tooltip
            title={props.WordPart__props.wordPartType}
            placement="bottom"
            classes={{ tooltip: classes.popper }}
            PopperProps={{ disablePortal: true }}
          >
            <SuffixIcon className={classes.wordPartTypeIcon} />
        </Tooltip>

        {
          props.WordPart__props.hasOwnProperty('grammaticalNumber')
          ? grammaticalNumberIcon(props.WordPart__props.grammaticalNumber)
          : ''
        }

      </div>
    );
  }
  
}

export default withStyles(styles)(WordPartTypeIcons);