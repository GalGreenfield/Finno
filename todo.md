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
  in `Visual Studio Code`'s `settings.js`, uncomment `//"terminal.integrated.shellArgs.windows": "bash"`

<br>

### App Logic

#### I THINK I MIGHT HAVE FOUND SOMETING THAT WOULD DO THE LOGIC FOR ME AND I'D BE ABLE TO USE IT AS AN API!!!
##### http://www2.lingsoft.fi/cgi-bin/fintwol


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


I'll need to think how to implement various WordPart types (suffiex, stems, etc.) - what properties they will have and how will this/these object be structured in relation to `WordType`.

### Todo: 
- [ ] Pass **all** props of `WordPart` to `Word` to be able to use stem `WordParts`'s `translation` property to render the stem's meaning in English
- [ ] Decide whether I want to have (a `meaning` prop for stem `WordPart`s and a `type` prop for suffix `WordPart`s) or have a `meaning` prop for both.

<br>

## Style/design

- [x] Figure out how to be able to fully import and render the SVG logo.
- [ ] ~~Design a `Grid` element in `index.js`~~
- [x] Design a grid in `App.jsx`
- [ ] Refine the grid in `App.jsx` so the cards look bigger, but still have "good" ratios (maybe look at Material UI specifications to find such ratios)
- [x] Create a `colors` palette component based on the Material Design color palette that I've created.
- [ ] Style and structure the `WordPart`  component to fit the mockup

### Icons

 Create/get icons for:
- [x] Suffix
- [x] Stem (word stem)
- [x] Singular
- [x] Plural

  Grammatical cases - add as you learn more grammatical cases from the book:
  - [ ] test

<br>

## Data Sources

- [x] Find a website that contains easy-to-request Finnish words <!--with conjugations-->
      https://en.wiktionary.org/wiki/User:Matthias_Buchmeier/fi-en-k

<br>

## Finnish Deconstruction (App Logic)

  - [ ] Create a list of all consonant gradations (include psuedo-code terms of when they're apply)
  - [ ] Decide if I'll go with the definition for consonant gradation rules by the book (Finnish: An Essential Grammar) or by Wikipedia

<!---
## Deployment

### Production
--->
