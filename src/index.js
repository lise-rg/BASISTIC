import antlr4 from 'antlr4';
import GrammarLexer from './antlr/GrammarLexer.js';
import GrammarParser from './antlr/GrammarParser.js';
import { Visitor } from './visitor.js';

var input;
var chars;
var lexer;
var tokens;
var parser;
var visitor;
var tree;

window.run = function () {
  
  // Generates the AST
  input = document.getElementById('input-area').value;
  chars = new antlr4.InputStream(input);
  lexer = new GrammarLexer(chars);
  tokens = new antlr4.CommonTokenStream(lexer);
  parser = new GrammarParser(tokens);
  tree = parser.start();

  // Creates the Visitor and starts the interpretation
  visitor = new Visitor();
  visitor.visit(tree);
}

