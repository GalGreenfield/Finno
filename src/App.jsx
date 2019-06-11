/* #region Imports */
import React from "react";

//#region State Management with Redux
import { Provider } from "react-redux";
import store from "./state-management/store";
//#endregion

import AppBarOld from "./components/AppBarOld.jsx";

import AppBar from "./components/AppBar.jsx";

import Word from "./components/Word.jsx";

import stylesheet from "./index.css";

import { Grid, Cell } from "styled-css-grid";
/* #endregion */

import { Field } from 'redux-form';

import request from 'request';

export default function App() {

	return (
		<Provider store={store}>
			<div
				className="App"
				style={{
					height: "100vh",
				}}
			>
				<Grid
					style={{
						height: "inherit",
					}}
					gap={"0px"}
					columns={5}
					rows={3}
				>
					<Cell area={"1 / 1 / 1 / 6"}>
						<AppBarOld />
					</Cell>

					<Cell
						area={"2 / 2 / 2 / 5"}
						style={{
							height: "fit-content",
							justifySelf: "center",
							alignSelf: "center",
						}}
						width={1}
					>
						<Word text="autoissa" />
					</Cell>
				</Grid>
			</div>
		</Provider>
	);
	
}
