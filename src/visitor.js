export { Visitor };
import { VariableDict } from './variableDict.js';
import { DrawOutput } from './drawing.js';

import GrammarVisitor from './antlr/GrammarVisitor.js';

class Visitor extends GrammarVisitor {


  constructor(labelDict) {
    super();

    this.currentType = 'none';

    this.varDict = new VariableDict();
    this.labelDict = labelDict;
    this.drawOut = new DrawOutput();
  }


  /**
   * prints an error message and halts the execution of the interpreter
   * @param {string} msg
   */
  abort(msg) {
    this.printConsole('Error: ' + msg);
    throw new Error();
  }

  /**
   * prints text to the console
   * @param {string} msg
   */
  printConsole(msg, nl = true) {
    document.getElementById('output-area').value += msg;
    if (nl)
      document.getElementById('output-area').value += '\n';
  }

  /**
   * returns 1 if bool is true, 0 otherwise
   * @param {boolean} bool 
   */
  evalBool(bool) {
    if (bool)
      return 1;
    return 0;
  }

  /**
   * throws an error if given variable hasn't been declared
   * @param {string} name 
   */
  checkVariableDeclared(name) {
    if (!this.varDict.contains(name))
      this.abort('variable ' + name + ' has not been declared.');
  }

  /**
   * thrown an error if the last evaluated expression / ID / constant is not a number (i.e. integer or real)
   */
  checkNumber() {
    if (this.currentType != 'integer' && this.currentType != 'real')
      this.abort('number expected but got ' + this.currentType + ' instead.');
  }

  checkLabel(name) {
    if (!this.labelDict.contains(name)) {
      this.abort('Could not find label ' + name + '.');
    }
  }

  // TODO

  /**
   * Statements
   */

  visitGotoStatement(ctx) {
    let label = ctx.getChild(1).getText();
    this.checkLabel(label);
    this.visit(this.labelDict.getNode(label));
  }

  visitListPrintList(ctx) {
    let head = this.visit(ctx.head);
    let separator = ctx.sep.text;
    this.printConsole(head, separator === ',');
    let tail = this.visit(ctx.tail);
  }

  visitAtomPrintList(ctx) {
    let atom = this.visit(ctx.atom);
    this.printConsole(atom);
  }

  /**
   * typeExp functions
   * Return the value of all expressions and throw an error if incompatible types are met
   */

  /**
   * expression (aka "orExp")
   * returns a logical or (||) with booleans, and a bitwise and (|) with numbers
   */

  visitOpExpression(ctx) {
    let left = this.visit(ctx.left);
    this.checkNumber();
    let right = this.visit(ctx.right);
    this.checkNumber();

    return left | right;
  }

  visitAtomExpression(ctx) {
    return this.visit(ctx.atom);
  }

  /**
   * andExp
   * returns a logical and (&&) with booleans, and a bitwise and (&) with numbers
   */

  visitOpAndExp(ctx) {
    let left = this.visit(ctx.left);
    this.checkNumber();
    let right = this.visit(ctx.right);
    this.checkNumber();

    return left & right;
  }

  visitAtomAndtExp(ctx) {
    return this.visit(ctx.atom);
  }

  /**
   * notExp
   * returns 1 if arg <= 0, 0 otherwise
   */

  visitNotExp(ctx) {
    if (ctx.getChildCount() === 2) {
      let arg = this.visit(ctx.getChild(1));
      this.checkNumber();
      if (arg <= 0)
        return 1;
      else
        return 0;
    }
    else {
      return this.visit(ctx.getChild(0));
    }
  }

  /**
   * compareExp
   */

  visitOpCompareExp(ctx) {
    let left = this.visit(ctx.left);
    this.checkNumber();
    let right = this.visit(ctx.right);
    this.checkNumber();

    let op = ctx.op.text;

    switch (op) {
      case '=':
        return this.evalBool(left === right);
      case '<>':
        return this.evalBool(left !== right);
      case '>':
        return this.evalBool(left > right);
      case '>=':
        return this.evalBool(left >= right);
      case '<':
        return this.evalBool(left < right);
      case '<=':
        return this.evalBool(left <= right);
      default:
        this.abort(op + ' is not a valid operation.');
    }
  }

  visitAtomCompareExp(ctx) {
    return this.visit(ctx.atom);
  }

  /**
   * addExp
   */

  visitOpAddExp(ctx) {
    let left = this.visit(ctx.left);
    this.checkNumber();
    let right = this.visit(ctx.right);
    this.checkNumber();

    let op = ctx.op.text;
    switch (op) {
      case '+':
        return left + right;
      case '-':
        return left - right;
      default:
        this.abort(op + ' is not a valid operation.');
    }
  }

  visitAtomAddExp(ctx) {
    return this.visit(ctx.atom);
  }

  /**
   * multExp
   */

  visitOpMultExp(ctx) {
    let left = this.visit(ctx.left);
    this.checkNumber();
    let right = this.visit(ctx.right);
    this.checkNumber();

    let op = ctx.op.text;
    switch (op) {
      case '*':
        return left * right;
      case '/':
        return left / right;
      default:
        this.abort(op + ' is not a valid operation.');
    }
  }

  visitAtomMultExp(ctx) {
    return this.visit(ctx.atom);
  }

  /**
   * negateExp
   */

  visitNegateExp(ctx) {
    if (ctx.getChildCount() === 2) {
      let ret = -(this.visit(ctx.getChild(1)));
      this.checkNumber();
      return ret;
    }
    else
      return this.visit(ctx.getChild(0));
  }

  /**
   * powerExp
   */

  visitOpPowerExp(ctx) {
    let left = this.visit(ctx.left);
    this.checkNumber();
    let right = this.visit(ctx.right);
    this.checkNumber();

    return Math.pow(left, right);
  }

  visitAtomPowerExp(ctx) {
    return this.visit(ctx.atom);
  }

  /*
  ** visitValue
  ** returns the value of the expression / ID / constant
  */

  visitExprValue(ctx) {
    return this.visit(ctx.expr);
  }

  visitIDValue(ctx) {
    let id = ctx.id.text;
    this.checkVariableDeclared(id);
    this.currentType = this.varDict.getType(id);
    return this.varDict.getValue(id);
  }

  visitConstValue(ctx) {
    return this.visit(ctx.constv);
  }

  /**
   * Drawing functions
   */

  visitDrawlineStatement(ctx) {
    this.drawOut.drawLine(
      this.visit(ctx.getChild(2)),
      this.visit(ctx.getChild(4)),
      this.visit(ctx.getChild(6)),
      this.visit(ctx.getChild(8))
    );
  }

  visitDrawrectStatement(ctx) {
    this.drawOut.drawRectangle(
      this.visit(ctx.getChild(2)), 
      this.visit(ctx.getChild(4)), 
      this.visit(ctx.getChild(6)),
      this.visit(ctx.getChild(8))
      );
  }

  visitDrawsquareStatement(ctx) {
    this.drawOut.drawSquare(
      this.visit(ctx.getChild(2)), 
      this.visit(ctx.getChild(4)), 
      this.visit(ctx.getChild(6))
      );
  }

  visitDrawcircleStatement(ctx) {
    this.drawOut.drawCircle(
      this.visit(ctx.getChild(2)),
      this.visit(ctx.getChild(4)),
      this.visit(ctx.getChild(6))
    );
  }

  visitDrawtriangleStatement(ctx) {
    this.drawOut.drawTriangle(
      this.visit(ctx.getChild(2)),
      this.visit(ctx.getChild(4)),
      this.visit(ctx.getChild(6))
    );
  }

  /* 
  ** visitConstant (Integer, Real, String)
  ** updates this.currentType and returns the constant's value
  */

  visitConstInt(ctx) {
    this.currentType = 'integer';
    return parseInt(ctx.getChild(0).getText());
  }

  visitConstReal(ctx) {
    this.currentType = 'real';
    return parseFloat(ctx.getChild(0).getText());
  }

  visitConstString(ctx) {
    this.currentType = 'string';
    let str = ctx.getChild(0).getText();
    str = str.substring(1, str.length - 1); // Removes the quotation marks
    return str;
  }

}
