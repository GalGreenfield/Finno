import React from "react";
import ReactDOM from "react-dom";

import store from './state-management/store';

import App from './App.jsx';

import { analyzeWord, generateWord, conjugateWord } from './wordFunctions';

const renderApp = () => {
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);    


  //todo: change name to "conjugateWord"
  async function test(word_text) {
    
    let analyzed_word = await analyzeWord(word_text);
    console.log('analyzed_word');
    console.log(analyzed_word);
    
    let original_tags = analyzed_word.tags;

    let tags_to_assign = {
      Number: 'PL',
      Clitic: 'CL-kin'
      
    };

    let updated_tags = Object.assign(original_tags, tags_to_assign);
    console.log('updated_tags:');
    console.log(updated_tags);

    let generated_word = await generateWord(analyzed_word.text, updated_tags);
    console.log('generated_word:')
    console.log(generated_word);
  }
  //test('auto');

  async function test2(word_text) {
    
    let analyzed_word = await analyzeWord(word_text);
    console.log('analyzed_word');
    console.log(analyzed_word);
    
    let original_tags = analyzed_word.tags;

    var tags_to_assign = {
      // Number: 'SG',
      Clitic: 'CL-kin'
      
    };

    let updated_tags = Object.assign({}, original_tags, tags_to_assign);
    console.log('updated_tags:');
    console.log(updated_tags);

    /*
    todo:
     • Keep *only* the tags of a word that are required for using the `generate` LMC endpoint
     • If tags_to_assign contains tags (check by object keys) that are not in the required tags, add them
     
     • keep the required tags
    */
    
    /* var updated_tags;
    Object.keys(tags_to_assign).forEach(
      (grammatical_property) =>
        if(original_tags)
    ); */

    console.log('analyzed_word.text:');
    console.log(analyzed_word.text);


    var generated_word;
    
    // Keeping a variable about whether the word's base is compound or note just in case I need it
    // todo: ask in the API's support in what cases I need to send a the text of a word and in what cases I need to send the base in order for the generate endpoint to work
    var is_word_base_compound;
    (analyzed_word.base.includes('#') || analyzed_word.base.includes('¦')) 
    ? is_word_base_compound = true
    : is_word_base_compound = false

    is_word_base_compound
    ? generated_word = await generateWord(analyzed_word.text, updated_tags)
    : generated_word = await generateWord(analyzed_word.base, updated_tags)
    
    console.log('generated_word:')
    console.log(generated_word);
  }
  test2('Lentokonesuihkuturbiinimoottoriapumekaanikkoaliupseerioppilas')
  //   
  
};

store.subscribe(renderApp);
renderApp();