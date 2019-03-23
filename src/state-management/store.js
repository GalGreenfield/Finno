import { createStore } from 'redux';

import { replaceStem, addSuffix } from './actions';
import app from './reducers';

//todo: consdier adding a state from the server `window.STATE_FROM_SERVER` if I expand the app to have server capabilities and server-requiring features
const store = createStore(app);

console.log(`Initial Redux store state:`);
console.log(store.getState());

//log any change to the store
const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(replaceStem("I'm a stem")) //updates the stem successfully
store.dispatch(addSuffix("I'm a suffix that was added")) //adds a suffix succesfully

export default store;