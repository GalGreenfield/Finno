# **TODO**s

<br>

## App Structure

- [x] Enable using folders either inside the `src` folder or outside of it

- [ ] Start creating a UML diagram of the structure of the app
      Words come from a dictionary that has the following characteristics:

  - Has a category property (for filtering words based on category)
  - Is alphabetically ordered

<br>

### Working Environment

#### Terminal
 - [ ] In `zsh`, find a way to get a correct path to `antigen.zsh` and add the path to `~/.zshrc`
 - [ ] Using `nvm`, install the latest version of `Node.js` (`arch 64`).
- [ ] In `Visual Studio Code`, revert the terminal back to `bash`: 
  in `Visual Studio Code`'s `settings.js`, uncomment `//"terminal.grated.shellArgs.windows": "bash"`

<br>

### App Logic

#### I THINK I MIGHT HAVE FOUND SOMETING THAT WOULD DO THE LOGIC FOR ME AND I'D BE ABLE TO USE IT AS AN API!!!
##### http://www2.lingsoft.fi/cgi-bin/fintwol

#### For a word to be constructed, a `stem` property is required.

  `Word` $\in$ the dictionary has the following properties:

  - `text` - the text of the word
  - `type` (noun/verb,adjective, etc.)
  - `categories` (that the word belongs to)
  - Note: word deconstruction will be functional - and for now, will deconstruct the word to its `stem` and `suffixes`

  `Word` 
  : a parent element of component `WordPart` and is built of at least one `WordPart` components
  - [ ] Add a `stem` property to `Word`. Finnish inflections are 1-way functions, for deconstructing a given word, a stem is required.

  `WordPart`
  : a child element of `Word`. Properties:

  - `text` (is deconstructed from its parent `Word`)
  - `type` (stem, suffix, etc.)
  - [x] Fix word part (text) alignment

- [x] I'll need to think how to implement various WordPart types (suffiex, stems, etc.) - what properties they will have and how will this/these object be structured in relation to `WordType`.

### State Management (with Redux)

#### Keep reading on Redux, and change once I have a better understanding (correct mistakes if there are any):

#### Things I'll need to do to update a `Word`:

For updating the `stem` property:


- [ ] Create a an action with properties:
  [ ] wordPartType: `stem` (maybe I need to update **here** all the stem's properties (`transation`, `grammatical_number`, etc.?))
- [ ] Create a reducer that:
  - [ ] Takes the submitted text (stem to replace) from the stem replacement dialog search
  - [ ] ~~Calls the action~~ it's done in the Redux store
  - [ ] Updates the action's state with the the submitted text's value

For Updating suffix(es):
- [ ] Create a an action that:
  - [ ] Saves the order of selection (might require a state of its own)
  - [ ] Outputs the order of selection of suffixes and the suffix object to add
- [ ] Create an reducer that:
  - [ ] Takes the first-selected suffix
  - [x] Adds that suffix to the end of the `Word`
  
  Note: check if it re-renders the word. If it doesn't, check if I need to re-render it somehow, maybe with the `Word` components' `componentDidMount()` function.

- [x] Make the store and reducers work with the following store state structure:
  ```
    store: {
      word: {
        stem,
        wordParts
      }
    }
  ```

#### Desired dynamic app behavior with Redux - progress:
- [x] The `Word` component is initialized with the initial state of the Redux store
- [ ] The `Word` component gets re-rendered on change of the properties of the store it uses (by actions getting dispatched)
  
#### Todo:
- [ ] Figure out a way to export the state of `Word` such that Redux could use it for the `initial_state` of the `store` while still exporting `Word` with  JSS's `withStyles` (so JSS could style it).

## Todos 

- [x] Pass **all** props of `WordPart` to `Word` to be able to use stem `WordParts`'s `translation` property to render the stem's meaning in English
- [ ] Decide whether I want to have (a `meaning` prop for stem `WordPart`s and a `type` prop for suffix `WordPart`s) or have a `meaning` prop for both
- [ ] ~~Decide if I want for for Word to render `Suffix` and other WordParts (specialized classes/components) or render `WordPart` components instead~~

- [ ] ~~Make `WordPart` components render WordPart components based on role (`Suffix`, `Stem`)~~
- [ ] Finish converting `Word`'s wordPart input elements into components (`Suffix`, `Stem`)

<br>

## Style/design

- [x] Figure out how to be able to fully import and render the SVG logo.
- [ ] ~~Design a `Grid` element in `index.js`~~
- [x] Design a grid in `App.jsx`
- [ ] ~~Refine the grid in `App.jsx` so the cards look bigger, but still have "good" ratios (maybe look at Material UI specifications to find such ratios)~~
- [x] Create a `colors` palette component based on the Material Design color palette that I've created.
- [x] Style and structure the `WordPart` component to fit the mockup  using the Material-UI `CardContent` and `CardActions` components.
- [ ] Learn how to and apply: change the mobile appbar's (at `AppBarOld.jsx`) mobile pop-up menu's backgrond color to some hue of `primaryColor`.
- [ ] Solve size scaling issues of a `Word.jsx` component due to being wide (positioning inside the `App.jsx`'s grid) - might require a change of         
`WordPart`'s style.
- [ ] Move the search bar in `AppBarOld.jsx` to the right of the appbar, adjacent to the kebab menu icon.
- [ ] learn how to and apply: change the color of Ripple effect for the `ButtonBase`s of the suffixes in `SuffixToSelectButton.jsx`.
- [ ] Integrate a custom scrollbar for `SuffixToModify.jsx`'s `DialogContent`. Check out `npm` package `react-custom-scrollbar`.
- [ ] Make the `WordPart` cards draggable up-down a bit (on the y-axis) until a critical distance:
    - Gradiently become more opaque as the near the critical distance (in relation to rest position)
    - When released at >= critical distance or greater they are removed

### Icons

- [ ] Create an `Icons` component and export from it multiple icons
- [ ] In `WordPart`, import multiple icons from `Icons`, put them inside a `div` container and give them (except for last one) a `margin-right`

 Create/get icons for WordParts:

  WordPart Type:
  - [x] Suffix
  - [x] Stem (word stem)
  
  Grammatical Number:
  - [x] Singular
  - [x] Plural
  - [ ] Uncountable

  Grammatical cases - add as you learn more grammatical cases from the book:
  - [ ] Nominative (base form) - TODO: think if I want an icon for that
  - [ ] Genetive
  - [ ] Accusative
  - [ ] Partitive
  - [ ] Inessive
  - [ ] Elative
  - [x] Adessive
  - [ ] Ablative
  - [x] Allative
  - [ ] Essive
  - [ ] Translative
  - [ ] Comitative
  - [ ] Instructive

  Maybe add - Grammatical Role:
  - [ ] Verb
  - [ ] Noun
  - [ ] Adjective

<br>

## Data Sources

- [ ] Find a website that contains easy-to-request Finnish words 
  - Will probably not us this: ~~https://en.wiktionary.org/wiki/User:Matthias_Buchmeier/fi-en-k~~
  - Currently in talks with Lingsoft for their tool at http://www2.lingsoft.fi/cgi-bin/fintwol

<br>

## Finnish Deconstruction (App Logic)

- [ ] Create a list of all consonant gradations (include psuedo-code terms of when they're apply)
- [ ] Decide if I'll go with the definition for consonant gradation rules by the book (Finnish: An Essential Grammar) or by Wikipedia

<br>

## Code 
 - [ ] In __all__ components: check where the `render()` function/content of the function if the component is functional returns a `<div>` as a wrapper, and if a container is not necessary, wrap the content instead with a `React.Fragment`.

## Deployment

- [ ] Deploy the app to [Heroku](https://dashboard.heroku.com/apps/finno/deploy/heroku-git)
- [ ] When I start needing server functionality, migrate to `Sails.js`. [How to](https://medium.com/@larsbs/how-to-use-react-as-a-template-engine-in-sails-js-bb6b22c7dba6)

<br>

<!--- 
### Production
--->

## Bugs

 - [ ] In the `modify-word-parts` components, find where React tries to recognize the `handleClickOpen` prop on a DOM element and fails, and fix it.

<br>

## Minimal Viable Project goals:

- Be able to deconstruct (preferably) any word in the Finnish language and display its words parts with icons + tooltips for the following properties of each word part:
  - Word part type - stem/suffix <br>
  If has grammatical number:
  - Grammatical number <br>
  If suffix: <br>
  - Grammatical case <br>
  If Stem: <br>
  - Translation