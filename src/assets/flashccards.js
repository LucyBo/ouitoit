const flashcards = [
  {
    id: '9',
    createdAdd: '2020-12-15T15:41:56.400Z',
    category: 'JavaScript',
    style: 'br-sentence',
    question: 'Is this sentence true or false? If you pass null or undefined as a this binding parameter to call, apply, or bind, those values are effectively ignored, and instead the default binding rule applies to the invocation',
    answer: ' \n ## It\'s true! \n If you pass null or undefined as a this binding parameter to call, apply, or bind, those values are effectively ignored, and instead the default binding rule applies to the invocation'
  },
  {
    id: '8',
    createdAdd: '2020-12-15T15:41:56.400Z',
    category: 'JavaScript',
    style: 'code',
    question: 'How to get random integer between 1 to 10 in JS?',
    answer: 'Math.floor(Math.random() * 10) + 1'
  },
  {
    id: '7',
    createdAdd: '2020-12-15T15:41:56.400Z',
    category: 'JavaScript',
    style: 'sentence',
    question: 'What does hoisting mean? ',
    answer: 'Hoisting is JavaScript\'s default behavior of moving declarations to the top. In JavaScript, a variable can be declared after it has been used. In other words; a variable can be used before it has been declared.'
  },
  {
    id: '6',
    createdAdd: '2020-12-09T19:01:32.717Z',
    category: 'JavaScript',
    style: 'bullets',
    question: 'What are the 3 different keywords used in JavaScript to declare variables?',
    answer: 'VAR, LET and CONST'
  },
  {
    id: '5',
    createdAdd: '2020-12-09T18:58:20.894Z',
    category: 'JavaScript',
    style: 'code',
    question: 'How to write single line comment in JS?',
    answer: 'Single line comments start with //. Any text between // and the end of the line will be ignored by JavaScript (will not be executed).'
  },
  {
    id: '4',
    createdAdd: '2020-12-09T18:53:43.049Z',
    category: 'JavaScript',
    style: 'sentence',
    question: 'How to come out of the current loop entirely in JavaScript?',
    answer: 'By using: break. Break terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.'
  },
  {
    id: '3',
    createdAdd: '2020-12-09T18:30:05.196Z',
    category: 'JavaScript',
    style: 'sentence',
    question: 'Is JavaScript a case sensitive language?',
    answer: 'Thats true! All JavaScript identifiers are case sensitive. The variables lastName and lastname, are two different variables. Beware: JavaScript does not interpret VAR or Var as the keyword var. Fun fact: ☝  You can use in your code Unicode block symbols like this coffee ☕️ as variables definitions.'
  },
  {
    id: '2',
    createdAdd: '2020-12-01T13:26:17.308Z',
    category: 'JavaScript',
    style: 'sentence',
    question: 'What is the main difference in using constructor function or the literal notation objects?',
    answer: 'The main difference is that one or more key-value pairs can be included in a literal declaration, while for constructed objects, properties must be added one at a time.'
  },
  {
    id: '1',
    createdAdd: '2020-12-01T13:11:37.542Z',
    category: 'Data and Structure',
    style: 'bullets',
    question: 'List 7 primitive data types in JavaScript',
    answer: 'Boolean | Null | Undefined | Number | BigInt | String | Symbol'
  }
]

export default flashcards
