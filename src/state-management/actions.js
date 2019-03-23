
//todo: put each action in its own file and import them all in this file

//#region Action Types
const REPLACE_STEM = "REPLACE_STEM";
const ADD_SUFFIX = "ADD_SUFFIX"
export const action_types = {
  'REPLACE_STEM': REPLACE_STEM,
  'ADD_SUFFIX': ADD_SUFFIX
};
//#endregion

//#region Action Creators

//action to replace stem
export function replaceStem(stem) {

  return {  
    type: action_types.REPLACE_STEM,
    stem //not sure if this is the data of the stem in the state tree or the one I want to update with
  }
}

//action to add suffix
export function addSuffix(suffix) {
  return {
    type: action_types.ADD_SUFFIX,
    suffix //not sure if this is the data of the suffix in the state tree, or the one I want to add to a the `Word`'s `wordParts` array property.
  }
}