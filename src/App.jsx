import React from "react";

// import Grid from "@material-ui/core/Grid";

import AppBarOld from "./components/AppBarOld.jsx";

import AppBar from './components/AppBar.jsx';

import Word from "./components/Word.jsx";

import stylesheet from './index.css';

import { Grid, Cell } from 'styled-css-grid';

export default function App() {

  return (
    <div className="App"
      style={{
        height: '100vh'
      }}
    >
      <Grid style={{
          height: 'inherit'
        }}
        gap={'0px'}
        columns={5}
        rows={3}
      >
        <Cell area={'1 / 1 / 1 / 6'}>
          <AppBarOld />
        </Cell>

        <Cell
          area={'2 / 2 / 2 / 5'}
          style={{
            height: 'fit-content',
            justifySelf:'center',
            alignSelf: 'center'
            }}
          width={1}
        >
          <Word text="autoissa" />
        </Cell>

      </Grid>
    </div>
  );
   
}