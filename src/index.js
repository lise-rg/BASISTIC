import antlr4 from 'antlr4';
import GrammarLexer from './antlr/GrammarLexer.js';
import GrammarParser from './antlr/GrammarParser.js';
import GrammarListener from './antlr/GrammarListener.js';
import GrammarVisitor from './antlr/GrammarVisitor.js';

var input;
var chars;
var lexer;
var tokens;
var parser;
var visitor;
var tree;
var result;

window.run = function () {

  // Génération de l'arbre de syntaxe abstraite avec le parser
  input = document.getElementById('input-area').value;
  chars = new antlr4.InputStream(input);
  lexer = new GrammarLexer(chars);
  tokens = new antlr4.CommonTokenStream(lexer);
  parser = new GrammarParser(tokens);
  tree = parser.start();

  // Création du Visitor de l'AST
  visitor = new Visitor();
  visitor.visit(tree);
  
  return result;
}

class Visitor extends GrammarVisitor {
  constructor() {
    super();
    this.count = 0;
  }

  visitStart(ctx) {
    result = this.visitChildren(ctx);
  }

  visitOpExpr(ctx) {
    let left = this.visit(ctx.left);
    let right = this.visit(ctx.right);
    let op = ctx.op.text;

    switch (op) {
      case '+':
        return left + right;
      case '-':
        return left - right;
    }
  }

  visitAtomExpr(ctx) {
    return parseInt(ctx.atom.text);
  }
}