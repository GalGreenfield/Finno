import { action_types } from './actions'

import deconstructWord from '../word-deconstruction/deconstructWord';

import Word from '../components/Word';

/*
I'm defining an initial deconstruction of the "autoissa" word example (no other word is supported at the moment) just to see how reducers work
I haven't decided yet on an initial store_state for the whole app or just specifically for the `Word` that's presented in the middle of the screen.
*/
const initial_store_state = {
  word: {
    //wordParts: deconstructWord("autoissa"),
    wordParts: [
      { wordPartType: 'stem', text: 'test_stem' },
      { wordPartType: 'suffix', text: 'test_suffix' }
    ],
    /* get stem() {
      return this.wordParts[0]
    }, */
    stem: { wordPartType: 'stem', text: 'test_stem' }
    
  }
}


//todo: since `word.stem` and `word.suffixes` are linked to word.wordParts`, think how I update `wordParts` when either the `stem` or `suffixes` are updated
//reducer function
function allReducers(store_state = initial_store_state, action) {

  //todo: Maybe change the `switch` and its `case`s to `if`s and `else`s (maybe `else if`s) - google comparison of `switch` vs. `if` to re-read some comparison
  switch (action.type) {

    case action_types.REPLACE_STEM:

      return {
        ...store_state,
        word: {
          wordParts: store_state.word.wordParts,
          stem: action.stem
        }
      }
      
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

export { allReducers, initial_store_state };