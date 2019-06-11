/* #region Consts */
const axios = require('axios');

/* #region API Request Consts */
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.lingsoft.fi/lmc'
const LANGUAGE_CODE = 'fi';
const DOMAIN = 'Standard+Generator'
/* #endregion */

/* #region Create Axios Instance Configuration */
const axios_instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    apiKey: API_KEY
  }
});
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
 * Sends a word's text to LMC's `analyze` function to morphologically analyze it
 * @param {string} word_text the actual word to be analyzed
 */
async function analyzeWord(word_text) {
  /* #region Send to LMC's `analyze` function */
  return await axios_instance.request({
      method: 'post',
      url: '/analyze',
      data: {
        language: LANGUAGE_CODE,
        //domain //not sending it - defaults to the language's default domain
        text: word_text,
        options: {
          JsonSenses: true,
          RawBase: true,
          UseCg: true //Use categorial grammar diambiguation
        }
      }
    })
    /* #endregion */
  /* #region Process Response */
    .then(
      (response) => {

        let word_readings = response.data.json.tokens[0].readings[0];

        let analyzed_word = {
          text: word_text,
          base: word_readings.base,
          tags: word_readings.tags
        };
        return analyzed_word;

      }
    )
    /* #region Handle `(s) */
    .catch(
      (error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      }
    )
  /* #endregion */
  /* #endregion */
}

/**
 * Sends a word's stem and grammatical properties tags to generate a word (conjugation from the stem)
 * @param {string} word_base the word base to conjugate
 * @param {object} grammatical_properties_tag the grammatical properties tags to conjugate `word_base` by
 */
async function generateWord(word_text, grammatical_properties_tags) {
  /* #region Send to LMC's `analyze` function */
  return await axios_instance.request({
    method: 'post',
    url: '/generate',
    data: {
      domain: DOMAIN,
      generatorInput: { 
        base: word_text,
        tags: grammatical_properties_tags,
        rawTags: ""
      }
    }
  })
  /* #endregion */
  /* #region Process Response */
  .then(
    (response) => {
      return response.data.generatorOutput;
    }
  )
  /* #region Handle Error(s) */
    .catch(
      (error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      }
    )
  /* #endregion */
  /* #endregion */
  /* endregion */
}

async function conjugateWord(word_text) {
  let analyzed_word = await analyzeWord(word_text);
  console.log(analyzed_word);
}

export {
  analyzeWord,
  generateWord,
  conjugateWord
};