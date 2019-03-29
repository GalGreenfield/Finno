import { createStore } from 'redux';

import {
  replaceStem,
  addSuffix
} from './actions';

import {
  app,
  initial_state
} from './reducers';

//todo: consdier adding a state from the server `window.STATE_FROM_SERVER` if I expand the app to have server capabilities and server-requiring features
const store = createStore(
  app,
  initial_state,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(`Initial Redux store state:`);
console.log(store.getState());

//log any change to the store
const unsubscribe = store.subscribe(() => console.log(store.getState()))


store.dispatch(replaceStem("I'm a stem")) //doesn't updates the stem successfully

//console.log(store.getState());

// store.dispatch(addSuffix("I'm a suffix that was added")) //doesn't adds a suffix succesfully

export default store;