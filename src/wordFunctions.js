/* #region Consts */
const axios = require('axios');

/* #region API Reuqest Consts */
const api_key = process.env.REACT_APP_API_KEY;
const base_url = 'https://api.lingsoft.fi/lmc'
const language_code = 'fi';
/* #endregion */

/* #region Create Axios Instance Configuration */
const axios_instance = axios.create(
  {
    baseURL: base_url,
    headers: {
      'Content-Type': 'application/json',
      apiKey: api_key
    }
  }
);
/* #endregion */

/* #endregion */

//maps my tags to 
/**
 *Maps LMC `analyze` function text tokens `tags` elements into my tags naming convention
 * @param {object} tags
 */
function mapTags(tags) {
  //todo: wait for Lingsoft's support give me a mapping with meanings for the tags, and based on the meanings, write mapping for my own naming conventions
}

/**
 *Sends a word's text into LMC's `analyze` function to morphologically analyze it
 * @param {string} word
 */
export function analyzeWord(word) {
  axios_instance.request({
      method: 'post',
      url: '/analyze',
      data: {
        language: language_code,
        //domain //not sending it - defaults to the language's default domain
        text: word.text /* todo: replace with the word's text */ ,
        options: {
          JsonSenses: true,
          RawBase: true,
          UseCg: true //Use categorial grammar diambiguation
        }
      }
    })
    .then(
      (response) => {

        let stem = response.data.json.tokens[0].readings[0].base;
        let tags = response.data.json.tokens[0].readings[0].tags;

        let analyzedWord = {
          text: word.text,
          stem: stem,
          grammaticalProperties: tags
        };

        console.log(analyzedWord);

        return analyzedWord;
        
      }
    );
}

/*
export function generatorWord(word_stem) {

}
*/


//curl request that works:
/* https://api.lingsoft.fi/lmc/analyze -H 'Content-Type: application/json' -H 'apikey: b4tsK94aqPSSpl4PVnFfJ9SDQNgsG9tg' 
-d '{ "language" : "fi", "text": "Minun söpö koirat" }' */