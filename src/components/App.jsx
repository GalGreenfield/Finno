import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';

const styles = {
    App: {
        display: Grid,
    }
}

function App() {
    
    const { classes } = this.props;

    return (
        <div className={classes.App}>
        </div>
    );

}

export default withStyles(styles)(App);