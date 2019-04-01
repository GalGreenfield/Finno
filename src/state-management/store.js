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

/*//log any change to the store
const unsubscribe = store.subscribe(() => console.log(store.getState()))
*/

//adds a suffix succesfully
/* #region  Add a test suffix */
store.dispatch(
  addSuffix(
    {
      wordPartType: 'suffix',
      text: 'kin'
    }
  )
);
/* #endregion */

//updates the stem succesfully
store.dispatch(
  replaceStem(
    { 
      wordPartType: 'stem',
      text: 'kirja'
    }
  )
);

//console.log(store.getState());


export default store;