export default [
  {
    id: '20',
    createdAdd: '2021-01-05T13:24:50.955Z',
    category: 'HTML',
    style: 'br-sentence',
    question: '### What is semantic markup?',
    answer: 'Semantic markup - this primarily means that separate HTML elements need to have their distinguishable structural roles. According to the definition of W3C “a semantic element clearly describes its meaning to both the browser and the developer”.'
  },
  {
    id: '19',
    createdAdd: '2021-01-05T13:24:50.955Z',
    category: 'CSS',
    style: 'br-sentence',
    question: '### What are pseudo-classes in CSS? ',
    answer: 'A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s). For example, **:hover** can be used to change a button\'s color when the user\'s pointer hovers over it.'
  },
  {
    id: '18',
    createdAdd: '2021-01-05T13:24:50.955Z',
    category: 'CSS',
    style: 'br-sentence',
    question: '### What are CSS Sprites?',
    answer: 'CSS Sprites are a means of combining multiple images into a single image file for use on a website, to help with performance. While the total image size (sometimes) goes up with sprites, several images are loaded with a single HTTP request so browsers can limit the number of concurrent requests.'
  },
  {
    id: '17',
    createdAdd: '2021-01-05T13:24:50.955Z',
    category: 'CSS',
    style: 'code text-left',
    question: '### What is the simplest usage of CSS animation',
    answer: '`.element {` \n &nbsp; &nbsp; `animation: pulse 5s infinite; ` \n `}` \n`@keyframes pulse {` \n  &nbsp; &nbsp; `0% {` \n &nbsp; &nbsp; &nbsp; &nbsp;  `background-color: blue;` \n &nbsp; &nbsp; `}`\n &nbsp; &nbsp;  `100% {`\n &nbsp; &nbsp; &nbsp; &nbsp; `background-color: red;`\n &nbsp; &nbsp; `}` \n `}`'
  },
  {
    id: '16',
    createdAdd: '2021-01-05T13:24:50.955Z',
    category: 'Angular',
    style: 'br-sentence',
    question: '### What is NPM',
    answer: 'NPM is the JavaScript node package manager, typically abbreviated in all lowercase as npm, is the default method for managing packages in the Node.js runtime environment. It relies upon a command line client and a database made up of public and premium packages known as the the npm registry.'
  },
  {
    id: '15',
    createdAdd: '2021-01-05T13:24:50.955Z',
    category: 'Angular',
    style: 'br-sentence',
    question: '### Ovbservable vs Promise - which one is eager? Which one is lazy?',
    answer: '### Promise - eager \n ### Observable - lazy '
  },
  {
    id: '14',
    createdAdd: '2021-01-05T13:24:50.955Z',
    category: 'HTML',
    style: 'br-sentence',
    question: '### List 5 examples of inline elements',
    answer: '`<a> <br> <button> <code> <img> <input> <label> <map> <span> <textarea> <time> <var> `'
  },
  {
    id: '13',
    createdAdd: '2021-01-05T13:24:50.955Z',
    category: 'HTML',
    style: 'br-sentence',
    question: '### List 5 examples of block elements',
    answer: '`<canvas> <div> <footer> <form> <h1>-<h6> <header>  <hr>  <li>  <nav> <ol> <p> <section> <table> <ul>  <video>`'
  },
  {
    id: '12',
    createdAdd: '2021-01-05T13:24:50.955Z',
    category: 'JavaScript',
    style: 'br-sentence',
    question: '### What is the difference between block-levels and inline elements? ',
    answer: 'A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can). An inline element does not start on a new line and it only takes up as much width as necessary.'
  },
  {
    id: '11',
    createdAdd: '2020-12-17T11:49:11.715Z',
    category: 'JavaScript',
    style: 'br-sentence',
    question: '### Choose one false answer \n A) this binding has nothing to do with where a function is declared \n B) this binding has everything to do with the manner in which the function is called. \n C) this refers to the function itself \n D) This is a special keyword that is automatically defined for each function\'s scope.',
    answer: ' \n A) this binding has nothing to do with where a function is declared \n B) this binding has everything to do with the manner in which the function is called. \n **C) this refers to the function itself** **-FALSE**\n D) This is a special keyword that is automatically defined for each function\'s scope.'
  },
  {
    id: '10',
    createdAdd: '2020-12-17T11:49:11.715Z',
    category: 'JavaScript',
    style: 'br-sentence',
    question: '### Choose one true answer \n A) this binding has nothing to do with where a function is declared \n B) this refers to the function itself. \n C) this does refer to a function’s lexical scope \n D) this is a mechanism that somehow refers to the scope of a function.',
    answer: ' **A) this binding has nothing to do with where a function is declared** **-TRUE** \n B) this refers to the function itself. \n C) this does refer to a function’s lexical scope \n D) this is a mechanism that somehow refers to the scope of a function.'
  },
  {
    id: '9',
    createdAdd: '2020-12-15T15:41:56.400Z',
    category: 'JavaScript',
    style: 'br-sentence',
    question: '### Is this sentence true or false? \n If you pass null or undefined as a this binding parameter to call, apply, or bind, those values are effectively ignored, and instead the default binding rule applies to the invocation',
    answer: ' \n ### It\'s true! \n If you pass null or undefined as a this binding parameter to call, apply, or bind, those values are effectively ignored, and instead the default binding rule applies to the invocation'
  },
  {
    id: '8',
    createdAdd: '2020-12-15T15:41:56.400Z',
    category: 'JavaScript',
    style: 'code',
    question: '### How to get a random integer between 1 to 10 in JS?',
    answer: 'Math.floor(Math.random() * 10) + 1'
  },
  {
    id: '7',
    createdAdd: '2020-12-15T15:41:56.400Z',
    category: 'JavaScript',
    style: 'sentence',
    question: '### What does hoisting mean? ',
    answer: 'Hoisting is JavaScript\'s default behavior of moving declarations to the top. In JavaScript, a variable can be declared after it has been used. In other words; a variable can be used before it has been declared.'
  },
  {
    id: '6',
    createdAdd: '2020-12-09T19:01:32.717Z',
    category: 'JavaScript',
    style: 'bullets',
    question: '### What are the 3 different keywords used in JavaScript to declare variables?',
    answer: ' ## VAR \n ## LET \n ## CONST'
  },
  {
    id: '5',
    createdAdd: '2020-12-09T18:58:20.894Z',
    category: 'JavaScript',
    style: 'sentence',
    question: '### How to write a single line comment in JS?',
    answer: 'Single line comments start with // \n Any text between // and the end of the line will be ignored by JavaScript (will not be executed).'
  },
  {
    id: '4',
    createdAdd: '2020-12-09T18:53:43.049Z',
    category: 'JavaScript',
    style: 'sentence',
    question: '### How to come out of the current loop entirely in JavaScript?',
    answer: 'By using: **break** \n Break terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.'
  },
  {
    id: '3',
    createdAdd: '2020-12-09T18:30:05.196Z',
    category: 'JavaScript',
    style: 'sentence',
    question: '### Is JavaScript a case sensitive language?',
    answer: '### Thats true! \n All JavaScript identifiers are case sensitive. The variables lastName and lastname, are two different variables. \n Beware: JavaScript does not interpret VAR or Var as the keyword var. \n Fun fact: ☝  You can use in your code Unicode block symbols like this coffee ☕️ as variables definitions.'
  },
  {
    id: '2',
    createdAdd: '2020-12-01T13:26:17.308Z',
    category: 'JavaScript',
    style: 'sentence',
    question: '### What is the main difference in using constructor function or the literal notation objects?',
    answer: 'The main difference is that one or more key-value pairs can be included in a literal declaration, while for constructed objects, properties must be added one at a time.'
  },
  {
    id: '1',
    createdAdd: '2020-12-01T13:11:37.542Z',
    category: 'Data and Structure',
    style: 'bullets',
    question: '### List 7 primitive data types in JavaScript',
    answer: '### Boolean \n ### Null \n ### Undefined \n ### Number \n ### BigInt \n ### String \n ### Symbol'
  }
]
