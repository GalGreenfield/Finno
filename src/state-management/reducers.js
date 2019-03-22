import { action_types } from './actions'

import deconstructWord from '../word-deconstruction/deconstructWord'

import Word from '../components/Word';

//State Object
/*
{
  wordParts: [
    1st_wordPart,
    2nd_wordPart,
    etc.
  ]
}
*/

/*
I'm defining an initial deconstruction of the "autoissa" word example (no other word is supported at the moment) just to see how reducers work
I haven't decided yet on an initial state for the app/`Word`.
*/

/*
const initial_state = {
  wordParts: deconstructWord("autoissa")
}
*/
const initial_state = {
  ...Word
}

//todo: since `word.stem` and `word.suffixes` are linked to word.wordParts`, think how I update `wordParts` when either the `stem` or `suffixes` are updated

function word(state = initial_state, action) {  

  //todo: Maybe change the `switch` and its `case`s to `if`s and `else`s (maybe `else if`s) - google comparison of `switch` vs. `if` to re-read some comparison
  switch (action.type) {

    //todo: consider replacing Object.assign here with `spread()`: https://redux.js.org/recipes/using-object-spread-operator

    case action_types.REPLACE_STEM: 
      return Object.assign(
        {},
        state,
        { stem: action.stem } //I'll learn later how to get a value for the translation (I plan to use Google API/FINTWOL, so udpdate with an API call)
      );
      
    case action_types.ADD_SUFFIX:
      
      return Object.assign(
        {},
        state, {
        wordParts: [
          ...state.wordParts,
          action.suffix
        ]
      })

    default:
      return state

  }

}

export default word;