import {
  action_types
} from './actions'

import deconstructWord from '../word-deconstruction/deconstructWord';

import Word from '../components/Word';

/*
I'm defining an initial deconstruction of the "autoissa" word example (no other word is supported at the moment) just to see how reducers work
I haven't decided yet on an initial state for the app/`Word`.
*/
var initial_state = {
  word: {
    wordParts: deconstructWord("autoissa"),
    get stem() {
      return this.wordParts[0]
    }
  }
}


//todo: since `word.stem` and `word.suffixes` are linked to word.wordParts`, think how I update `wordParts` when either the `stem` or `suffixes` are updated

function app(state = initial_state, action) {

  //todo: Maybe change the `switch` and its `case`s to `if`s and `else`s (maybe `else if`s) - google comparison of `switch` vs. `if` to re-read some comparison
  switch (action.type) {

    //todo: consider replacing Object.assign here with `spread()`: https://redux.js.org/recipes/using-object-spread-operator

    case action_types.REPLACE_STEM:
      return {
        ...state.word,
        stem: action.stem
      }
      
    case action_types.ADD_SUFFIX:
      return {
        ...state.word,
        suffix: action.suffix
      }

    default:
      return state

  }

}

//const app = word; //if more reducers are needed to be added, change the definition of `app` to use Redux's `combineReducers` function.

export default app ;