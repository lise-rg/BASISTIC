export { Visitor };
import { VariableDict } from './variableDict.js';
import GrammarVisitor from './antlr/GrammarVisitor.js';

var outputArea = document.getElementById('output-area');

function printConsole(msg) {
  outputArea.value += msg + '\n';
}

class Visitor extends GrammarVisitor {

  constructor() {
    super();

    this.currentType = '';
    this.currentNumber = 0;
    this.currentString = '';

    this.varDict = new VariableDict();
  }

  abort(msg) {
    alert('Error: ' + msg);
  }

  visitStart(ctx) {
    let date = new Date();
    let time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    printConsole('Execution started - ' + time);
    this.visitChildren(ctx);
    printConsole('Done.');
  }

  visitNumber(ctx) {
    this.currentNumber = parseInt(ctx.value.text);
  }

  visitInitialization(ctx) {
    let name = ctx.ident.text;
    let value = this.visit(ctx.value);
    let type = 'nothing';

    if (this.varDict.contains(name))
      this.abort('variable ' + name + ' has already been declared.');

    this.varDict.add(name, type, value);
  }

  visitAssignement(ctx) {
    let name = ctx.ident.text;
    let value = this.visit(ctx.value);

    if (!this.varDict.contains(name))
      this.abort('variable ' + name + ' has not been declared.');

    this.varDict.assign(name, value);
  }

  visitPrintExpr(ctx) {
    let arg = this.visit(ctx.argExpr);
    printConsole(arg);
  }

  visitPrintIdent(ctx) {
    let arg = ctx.argIdent.text;

    if (!this.varDict.contains(arg))
      this.abort('variable ' + arg + ' has not been declared.');

    printConsole(arg + ' = ' + this.varDict.getValue(arg));
  }

  visitAddExpr(ctx) {
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
    return this.visit(ctx.atom);
  }

  visitIdentExpr(ctx) {
    let ident = ctx.ident.text;
    if (!this.varDict.contains(ident))
      this.abort('variable ' + ident + ' has not been declared.');
    return this.varDict.getValue(ident)
  }

  visitIfcond(ctx) {
    let cond = this.visit(ctx.cond);
    if (cond == 1)
      this.visit(ctx.ifInstructions);
    else
      this.visit(ctx.elseInstructions);
  }

  visitCondition(ctx) {
    let left = this.visit(ctx.left);
    let right = this.visit(ctx.right);
    let op = ctx.op.text;

    switch (op) {
      case '<':
        if (left < right) return 1;
        break;
      case '>':
        if (left > right) return 1;
        break;
      case '<=':
        if (left <= right) return 1;
        break;
      case '>=':
        if (left >= right) return 1;
        break;
      case '==':
        if (left == right) return 1;
        break;
      case '!=':
        if (left != right) return 1;
        break;
    }

    return 0;
  }

  visitNumber(ctx) {
    let value = ctx.value.text;
    if (value.includes('.'))
      return parseFloat(value);
    else
      return parseInt(value);
  }
}
