export { Visitor };
import { VariableDict } from './variableDict.js';
import { DrawOutput } from './drawing.js';

import GrammarVisitor from './antlr/GrammarVisitor.js';

class Visitor extends GrammarVisitor {


  constructor(labelDict) {
    super();

    this.currentType = 'none';

    this.currentArray = null;

    this.varDict = new VariableDict();
    this.labelDict = labelDict;
    this.drawOut = new DrawOutput();

    this.subroutines = 0;
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
    if (this.varDict.contains(name))
      this.abort('array ' + name + ' already declared.');

    let arr = [];
    this.currentArray = arr;
    this.visit(ctx.list);
    this.varDict.add(name, 'array', arr);
    console.table(arr);
  }

  visitListIntegerList(ctx) {
    let head = parseInt(ctx.head.text);
    let tail = ctx.tail;

    let tmp;

    for (let i = 0; i < head; i++) {
      tmp = this.currentArray;
      this.currentArray[i] = [];
      this.currentArray = this.currentArray[i];
      this.visit(tail);
      this.currentArray = tmp;
    }

    return;
  }

  visitAtomIntegerList(ctx) {
    let atom = parseInt(ctx.atom.text);

    for (let i = 0; i < atom; i++) {
      this.currentArray[i] = 0;
    }

    return;
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
    if (ctx.step !== null) step = parseInt(ctx.step.text);

    for (let i = parseInt(value); i < end; i = i + step) {
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
    this.subroutines++;
    this.visit(this.labelDict.getNode(label));
  }

  visitReturnStatement(ctx) {
    if (this.subroutines > 0)
      this.subroutines--;
    else
      this.abort('Extraneous RETURN. No calling point could be found.');
    return;
  }

  visitIfStatement(ctx) {
    let cond = this.visit(ctx.getChild(1));
    this.checkNumber();

    if (cond == 1) this.visit(ctx.getChild(3));
    else if (ctx.getChild(5) !== null) this.visit(ctx.getChild(5));
  }

  visitWhileStatement(ctx) {
    let cond = this.visit(ctx.getChild(1));
    this.checkNumber();

    while (cond > 0) {
      this.visit(ctx.getChild(3));
      cond = this.visit(ctx.getChild(1));
    }
  }

  visitDoWhileStatement(ctx) {
    let cond = 0;

    do {
      this.visit(ctx.getChild(1));
      cond = this.visit(ctx.getChild(3));
      this.checkNumber();
    } while (cond === 1)
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
      case 'PGCD' :
        let exprb = this.visit(ctx.getChild(4));
        this.checkNumber();
        return this.pgcd(expr,exprb)
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

  /***************************************************************************************************/
  /***		Logical functions                                                                        ***/
  /***************************************************************************************************/

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

  visitAtomAndExp(ctx) {
    return this.visit(ctx.atom);
  }

  /**
   * notExp
   * returns 1 if arg <= 0, 0 otherwise
   */

  visitOpNotExp(ctx) {
    let expr = this.visit(ctx.expr);
    if (expr <= 0)
      return 1;
    else
      return 0;
  }

  visitAtomNotExp(ctx) {
    return this.visit(ctx.atom);
  }

  /***************************************************************************************************/
  /***		Comparaison functions                                                                    ***/
  /***************************************************************************************************/

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

  /***************************************************************************************************/
  /***		Mathematical functions                                                                   ***/
  /***************************************************************************************************/

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

  visitOpNegateExp(ctx) {
    let expr = this.visit(ctx.expr);
    this.checkNumber();
    return -expr;
  }

  visitAtomNegateExp(ctx) {
    return this.visit(ctx.atom);
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


  /***************************************************************************************************/
  /***		Name                                                                                     ***/
  /***************************************************************************************************/

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

  visitArrayValue(ctx) {
    let id = ctx.array.text;
    this.checkVariableDeclared(id);
    this.currentType = this.varDict.getType(id);
    this.currentArray = this.varDict.getValue(id);
    return this.visit(ctx.index);
  }

  visitListExpressionList(ctx) {
    let head = this.visit(ctx.head);
    this.checkNumber();
    let tail = ctx.tail;

    if (this.currentArray.constructor.name !== 'Array') {
      this.abort('invalid number of indices');
    }

    if (head < 0 || head >= this.currentArray.length) {
      this.abort('index out of bounds (' + head + ')')
    }

    this.currentArray = this.currentArray[head];

    return this.visit(tail);
  }

  visitAtomExpressionList(ctx) {
    let atom = this.visit(ctx.atom);
    this.checkNumber();

    if (this.currentArray.constructor.name !== 'Array' ||
      this.currentArray[atom].constructor.name === 'Array') {
      this.abort('invalid number of indices');
    }

    if (atom < 0 || atom >= this.currentArray.length) {
      this.abort('index out of bounds (' + atom + ')');
    }

    return this.currentArray[atom];
  }

  visitConstValue(ctx) {
    return this.visit(ctx.constv);
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

  /**
  * Drawing functions
  */

  visitDrawlineStatement(ctx) {

    let x1 = this.visit(ctx.getChild(2));
    checkNumber();
    let y1 = this.visit(ctx.getChild(4));
    checkNumber();
    let x2 = this.visit(ctx.getChild(6));
    checkNumber();
    let y2 = this.visit(ctx.getChild(8));
    checkNumber();

    if(Number.isNaN(x1)) { this.abort('x1 is not a number.'); }
    if(Number.isNaN(y1)) { this.abort('y1 is not a number.'); }
    if(Number.isNaN(x2)) { this.abort('x2 is not a number.'); }
    if(Number.isNaN(y2)) { this.abort('y2 is not a number.'); }

    this.drawOut.drawLine(x1, y1, x2, y2);
  }

  /**
  * checks the types and passes the values to the DrawOutput class to draw the rectangle
  * @param {type} ctx context of the current call
  */
  visitDrawrectStatement(ctx) {

    var x = parseInt(this.visit(ctx.getChild(2)), 10);
    var y = parseInt(this.visit(ctx.getChild(4)), 10);
    var width = parseInt(this.visit(ctx.getChild(6)), 10);
    var height = parseInt(this.visit(ctx.getChild(8)), 10);

    if(Number.isNaN(x)) { this.abort('x is not a number.'); }
    if(Number.isNaN(y)) { this.abort('y is not a number.'); }
    if(Number.isNaN(width)) { this.abort('width is not a number.'); }
    if(Number.isNaN(height)) { this.abort('height is not a number.'); }

    this.drawOut.drawRectangle(x, y, width, height);
  }

  /**
  * checks the types and passes the values to the DrawOutput class to draw the square
  * @param {type} ctx context of the current call
  */
  visitDrawsquareStatement(ctx) {

    var x = parseInt(this.visit(ctx.getChild(2)), 10);
    var y = parseInt(this.visit(ctx.getChild(4)), 10);
    var size = parseInt(this.visit(ctx.getChild(6)), 10);

    if(Number.isNaN(x)) { this.abort('x is not a number.'); }
    if(Number.isNaN(y)) { this.abort('y is not a number.'); }
    if(Number.isNaN(size)) { this.abort('size is not a number.'); }

    this.drawOut.drawSquare(x, y, size);
  }

  /**
  * checks the types and passes the values to the DrawOutput class to draw the circle
  * @param {type} ctx context of the current call
  */
  visitDrawcircleStatement(ctx) {

    let x = this.visit(ctx.getChild(2));
    checkNumber();
    let y = this.visit(ctx.getChild(4));
    checkNumber();
    let radius = this.visit(ctx.getChild(6));
    checkNumber();

    if(Number.isNaN(x)) { this.abort('x is not a number.'); }
    if(Number.isNaN(y)) { this.abort('y is not a number.'); }
    if(Number.isNaN(radius)) { this.abort('radius is not a number.'); }

    this.drawOut.drawCircle(x, y, radius);
  }

  /**
  * checks the types and passes the values to the DrawOutput class to draw the triangle
  * @param {type} ctx context of the current call
  */
  visitDrawtriangleStatement(ctx) {

    let x = this.visit(ctx.getChild(2));
    checkNumber();
    let y = this.visit(ctx.getChild(4));
    checkNumber();
    let size = this.visit(ctx.getChild(6));
    checkNumber();

    this.drawOut.drawTriangle(parseInt(x, 10), parseInt(y, 10), parseInt(size, 10));
  }


  /***************************************************************************************************/
  /***		Secondary function                                                                       ***/
  /***************************************************************************************************/
  pgcd(a,b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {
       var tmp = a; 
       a = b; 
       b = tmp;
    }
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
  }
}