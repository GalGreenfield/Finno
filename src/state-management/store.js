import {
  createStore
} from 'redux';

import {
  allReducers,
  initial_store_state
} from './reducers';

import {
  replaceStem,
  addSuffix
} from './actions';


//todo: consdier adding a state from the server `window.STATE_FROM_SERVER` if I expand the app to have server capabilities and server-requiring features
const store = createStore(
  allReducers,
  initial_store_state,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(`Initial Redux store state:`);
console.log(store.getState());

//log any change to the store
const unsubscribe = store.subscribe(() => console.log(store.getState()))

//doesn't updates the stem successfully
 store.dispatch(
  replaceStem(
    { wordPartType: 'stem', text: 'test_stem_2' }
  )
); 

//console.log(store.getState());

//adds a suffix succesfully
/* #region  Add a test */
store.dispatch(
  addSuffix({
    wordPartType: 'suffix',
    text: 'test_suffix_2'
  })
);
/* #endregion */


export default store;