const { Linter, SourceCode } = require('eslint');

let code = new SourceCode('var foo = bar;', ast);

const linter = new Linter();

const messages = linter.verify('console.log(abc)', {
   extends: ['airbnb-base'],
   rules: {},
});
console.log(messages);
