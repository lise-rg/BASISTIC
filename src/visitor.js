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
      document.getElementById('output-area').scrollTop = document.getElementById('output-area').scrollHeight;
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
    if (this.currentType !== 'integer' && this.currentType !== 'real' && this.currentType !== 'boolean')
      this.abort('number expected but got ' + this.currentType + ' instead.');
  }

  checkBoolean() {
    if (this.currentType !== 'boolean')
      this.abort('boolean expected but got ' + this.currentType + ' instead.');
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

  visitDimStatement(ctx) {
    let name = ctx.ident.text;
    let type = 'list';
    let list = this.visit(ctx.list);

    this.varDict.add(name, type, list);
  }

  visitEndStatement(ctx) {
    this.printConsole('Done');
    return;
  }

  visitForStatement(ctx) {
    let name = ctx.ident.text;
    let value = this.visit(ctx.getChild(3));
    this.checkNumber();

    if (!this.varDict.contains(name))
      this.varDict.add(name, this.currentType, value);
    else {
      if (this.currentType !== this.varDict.getType(name))
        this.abort('Cannot assign \'' + this.currentType + '\' value to ' +
          name + ' with \'' + this.varDict.getType(name) + '\' type.');
    }

    let end = this.visit(ctx.getChild(5));
    this.checkNumber();

    let step = 1;
    if(ctx.step !== null) step = parseInt(ctx.step.text);

    alert("value : " + value + "  --  end : " + end + "  --  step : " + step);
    for (let i = value; i < end; i = i + step) {
      this.varDict.assign(name, i);
      this.visit(ctx.st);
    }
  }

  visitGotoStatement(ctx) {
    let label = ctx.getChild(1).getText();
    this.checkLabel(label);
    this.visit(this.labelDict.getNode(label));
  }

  visitGosubStatement(ctx) {
    let label = ctx.getChild(1).getText();
    this.checkLabel(label);
    this.visit(this.labelDict.getNode(label));
  }

  visitReturnStatement(ctx) {
    return;
  }

  visitIfStatement(ctx) {
    let cond = this.visit(ctx.getChild(1));
    this.checkBoolean();

    if (cond == 1) this.visit(ctx.getChild(3));
    else if (ctx.getChild(5) !== null) this.visit(ctx.getChild(5));
  }

  visitWhileStatement(ctx) {
    let cond = this.visit(ctx.getChild(1));
    this.checkBoolean();

    while (cond == 1) {
      this.visit(ctx.getChild(3));
      cond = this.visit(ctx.getChild(1));
    }
  }

  visitDoWhileStatement(ctx) {
    let cond;
    this.checkBoolean();

    do {
      this.visit(ctx.getChild(1));
      cond = this.visit(ctx.getChild(1));
    } while (cond == 1)
  }

  visitSpcStatement(ctx) {
    let value = this.visit(ctx.val);
    let spc = '';

    for (let i = 0; i < value; i++) {
      spc += ' ';
    }

    this.printConsole(spc);
  }

  visitIdStatement(ctx) {
    let name = ctx.ident.text;
    let type = '';
    let value = this.visit(ctx.exp);

    if (this.varDict.contains(name)) {
      type = this.varDict.getType(name);
      if (type == this.currentType) this.varDict.assign(name, value);
      else this.abort('Incorrect type for variable ' + name)
    }
    else {
      type = this.currentType;
      this.varDict.add(name, type, value);
    }
  }

  visitFunction(ctx) {
    let func = ctx.getChild(0).getText();
    let expr = this.visit(ctx.getChild(2));
    this.checkNumber();

    switch (func) {
      case 'ABS':
        return Math.abs(expr);
      case 'ATN':
        return Math.atan(expr);
      case 'COS':
        return Math.cos(expr);
      case 'EXP':
        return Math.exp(expr);
      case 'INT':
        return Math.floor(expr);
      case 'LN':
        return Math.log(expr);
      case 'RND':
        return Math.floor(Math.random() * expr);
      case 'SIN':
        return Math.sin(expr);
      case 'SQR':
        return Math.sqrt(expr);
      case 'TAN':
        return Math.tan(expr);
      case 'LOG':
        return Math.log10(expr);
      default:
        this.abort('Unknown function ' + func + '.');
    }
  }

  visitListIdList(ctx) {
    let head = ctx.head.text;
    let tail = ctx.tail;

    this.checkVariableDeclared(head);

    let userinpt = '';

    while (true) {
      userinpt = prompt(head + ' = ?');
      if (userinpt === null || userinpt === '')
        continue;

      switch (this.varDict.getType(head)) {
        case 'integer':
          if (!userinpt.match('[0-9]+')) {
            alert('Integer expected.');
            continue;
          }
          this.varDict.assign(head, parseInt(userinpt));
          break;
        case 'real':
          if (!userinpt.match('[0-9]+(.[0-9]+)?')) {
            alert('Real expected.');
            continue;
          }
          this.varDict.assign(head, parseFloat(userinpt));
          break;
        case 'string':
          this.varDict.assign(head, userinpt);
          break;
        default:
          alert('Cannot reassign value for variables with type \'' + this.varDict.getType(head) + '\'.');
          continue;
      }

      break;
    }

    if (tail !== null)
      this.visit(tail);
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

    this.currentType = 'boolean';

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

      this.currentType = 'boolean';

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

    this.currentType = 'boolean';

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

  visitFunctionValue(ctx) {
    return this.visit(ctx.func);
  }

  visitIDValue(ctx) {
    let id = ctx.ident.text;
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

    var x1 = parseInt(this.visit(ctx.getChild(2)), 10);
    var y1 = parseInt(this.visit(ctx.getChild(4)), 10);
    var x2 = parseInt(this.visit(ctx.getChild(6)), 10);
    var y2 = parseInt(this.visit(ctx.getChild(8)), 10);

    if (Number.isNaN(x1)) { this.abort('x1 is not a number.'); }
    if (Number.isNaN(y1)) { this.abort('y1 is not a number.'); }
    if (Number.isNaN(x2)) { this.abort('x2 is not a number.'); }
    if (Number.isNaN(y2)) { this.abort('y2 is not a number.'); }

    this.drawOut.drawLine(x1, y1, x2, y2);
  }

  visitDrawrectStatement(ctx) {

    var x = parseInt(this.visit(ctx.getChild(2)), 10);
    var y = parseInt(this.visit(ctx.getChild(4)), 10);
    var width = parseInt(this.visit(ctx.getChild(6)), 10);
    var height = parseInt(this.visit(ctx.getChild(8)), 10);

    if (Number.isNaN(x)) { this.abort('x is not a number.'); }
    if (Number.isNaN(y)) { this.abort('y is not a number.'); }
    if (Number.isNaN(width)) { this.abort('width is not a number.'); }
    if (Number.isNaN(height)) { this.abort('height is not a number.'); }

    this.drawOut.drawRectangle(x, y, width, height);
  }

  visitDrawsquareStatement(ctx) {

    var x = parseInt(this.visit(ctx.getChild(2)), 10);
    var y = parseInt(this.visit(ctx.getChild(4)), 10);
    var size = parseInt(this.visit(ctx.getChild(6)), 10);

    if (Number.isNaN(x)) { this.abort('x is not a number.'); }
    if (Number.isNaN(y)) { this.abort('y is not a number.'); }
    if (Number.isNaN(size)) { this.abort('size is not a number.'); }

    this.drawOut.drawSquare(x, y, size);
  }

  visitDrawcircleStatement(ctx) {

    var x = parseInt(this.visit(ctx.getChild(2)), 10);
    var y = parseInt(this.visit(ctx.getChild(4)), 10);
    var radius = parseInt(this.visit(ctx.getChild(6)), 10);

    if (Number.isNaN(x)) { this.abort('x is not a number.'); }
    if (Number.isNaN(y)) { this.abort('y is not a number.'); }
    if (Number.isNaN(radius)) { this.abort('radius is not a number.'); }

    this.drawOut.drawCircle(x, y, radius);
  }

  visitDrawtriangleStatement(ctx) {

    var x = parseInt(this.visit(ctx.getChild(2)), 10);
    var y = parseInt(this.visit(ctx.getChild(4)), 10);
    var size = parseInt(this.visit(ctx.getChild(6)), 10);

    if (Number.isNaN(x)) { this.abort('x is not a number.'); }
    if (Number.isNaN(y)) { this.abort('y is not a number.'); }
    if (Number.isNaN(size)) { this.abort('size is not a number.'); }

    this.drawOut.drawTriangle(x, y, size);
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