import { combineReducers } from 'redux';

import { action_types } from './actions';
import { reducer as formReducer } from 'redux-form';

import deconstructWord from '../word-deconstruction/deconstructWord';

/*
I'm defining an initial deconstruction of the "autoissa" word example (no other word is supported at the moment) just to see how reducers work
I haven't decided yet on an initial store_state for the whole app or just specifically for the `Word` that's presented in the middle of the screen.
*/
const initial_store_state = {
  word: {
    wordParts: deconstructWord("autoissa"),
    /* wordParts: [
      { wordPartType: 'stem', text: 'test_stem' },
      { wordPartType: 'suffix', text: 'test_suffix' }
    ], */
    /* get stem() {
      this.wordParts.find(
        wordPart => {
          if (wordPart.wordPartType==='stem') {
            return wordPart;
          }
        }
      )
    } */
    /* get stem() {
      return this.wordParts[0]
    }, */
    
    
  }
}

//maybe change its name once I have more reducers with more clear roles
function allReducers(store_state = initial_store_state, action) {

  //todo: Maybe change the `switch` and its `case`s to `if`s and `else`s (maybe `else if`s) - google comparison of `switch` vs. `if` to re-read some comparison
  switch (action.type) {

    case action_types.REPLACE_STEM:

      return {
        ...store_state,
        word: {
          wordParts: [action.stem, ...store_state.word.wordParts.slice(1)],
        }
      };
      
    case action_types.ADD_SUFFIX:
    return {
      ...store_state,
      word: {
        wordParts: [...store_state.word.wordParts, action.suffix],
        stem: store_state.word.stem
      }
    }

    default:
      return store_state

  }

}

const rootReducer = combineReducers({
  allReducers: allReducers,
  form: formReducer
}); 

export { allReducers, initial_store_state };