export { Visitor };
import { VariableDict } from './variableDict.js';
import { DrawOutput } from './drawing.js';

import GrammarVisitor from './antlr/GrammarVisitor.js';

var drawLoopInterval;

class Visitor extends GrammarVisitor {


  constructor(labelDict) {
    super();

    this.currentType = 'none';

    this.currentArray = null;
    this.indexArray = [];

    this.varDict = new VariableDict();
    this.labelDict = labelDict;
    this.drawOut = new DrawOutput();

    this.drawLoop = null;
    this.drawLoopInterval = null;
  }


  /**
   * prints an error message and halts the execution of the interpreter
   * @param {string} msg
   */
  abort(msg) {
    this.printConsole('Error: ' + msg);
    throw new Error(msg);
  }

  /**
   * prints a warning message
   * @param {string} msg 
   */
  warning(msg) {
    this.printConsole('Warning: ' + msg);
  }

  /**
   * prints text to the console
   * @param {string} msg
   * @param {boolean} nl prints a newline after the message if set to true
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
   * throws an error if the last evaluated expression / ID / constant is not a number (i.e. integer or real)
   */
  checkNumber() {
    if (this.currentType !== 'integer' && this.currentType !== 'real' && this.currentType !== 'boolean')
      this.abort('number expected but got ' + this.currentType + ' instead.');
  }

  /**
   * throws an error if the last evaluated expression is not an integer
   */
  checkInteger() {
    if (this.currentType !== 'integer')
      this.abort('integer expected but got ' + this.currentType + ' instead.')
  }

  /**
   * throws an error if the last evaluated expression is not a boolean
   */
  checkBoolean() {
    if (this.currentType !== 'boolean')
      this.abort('boolean expected but got ' + this.currentType + ' instead.');
  }

  /**
   * throws an error if given label does not exist
   * @param {string} name 
   */
  checkLabel(name) {
    if (!this.labelDict.contains(name)) {
      this.abort('Could not find label ' + name + '.');
    }
  }

  /**
   * assigns a new value to a cell in an array stored in varDict. Index and subindices are stored in indexArray.
   * @param {string} name 
   * @param {integer} value 
   */
  assignAtIndex(name, value) {

    this.checkVariableDeclared(name);
    let arr = this.varDict.getValue(name);
    this.assignAtIndexRec(arr, [...this.indexArray].reverse(), value);
    this.indexArray = [];
  }

  assignAtIndexRec(array, indices, value) {

    let index = indices.pop();

    if (index < 0 || index >= array.length)
      this.abort('index out of bounds \'(' + this.indexArray + ')\'.');

    if (indices.length === 0) {

      if (array[index].constructor.name === 'Array')
        this.abort('missing indices \'(' + this.indexArray + ')\'.');

      array[index] = value;
      return;
    }

    if (array[index].constructor.name !== 'Array')
      this.abort('extraneous indices \'(' + this.indexArray + ')\'.');

    this.assignAtIndexRec(array[index], indices, value);
  }

  updateDrawing() {
    this.visit(this.drawLoop);
  }

  /**
  *************************************************************************
  * Implementation of GrammarVisitor interface
  * ***********************************************************************
   */

  visitStart(ctx) {
    let date = new Date();
    this.printConsole('--- Interpretation Started. ---');

    if (ctx.main !== null) {
      this.visit(ctx.main);
    }

    clearInterval(drawLoopInterval);

    this.drawLoop = ctx.drawloop;
    if (this.drawLoop !== null) {
      drawLoopInterval = setInterval(this.updateDrawing.bind(this), 20);
    }
  }

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
    this.visit(this.labelDict.getNode(label));
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

    if (!this.varDict.contains(name)) {
      type = this.currentType;
      this.varDict.add(name, type, value);
      return;
    }

    type = this.varDict.getType(name);
    if (((this.currentType === 'real' || this.currentType === 'integer') &&
      (type === 'real' || type === 'integer')) || type === this.currentType)
      this.varDict.assign(name, value);
    else
      this.abort('Incorrect type for variable ' + name);
  }

  visitArrayStatement(ctx) {
    let name = ctx.array.text;
    let value = this.visit(ctx.exp);
    this.checkInteger();

    this.visit(ctx.index);

    this.assignAtIndex(name, value);
  }

  visitFunction(ctx) {
    let func = ctx.getChild(0).getText();
    let expr = this.visit(ctx.getChild(2));
    this.checkNumber();
    switch (func.toUpperCase()) {
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
      case 'PGCD':
        let exprb = this.visit(ctx.getChild(4));
        this.checkNumber();
        return this.pgcd(expr, exprb);
      default:
        this.abort('Unknown function ' + func + '.');
    }
  }

  visitListIdList(ctx) {
    let head = ctx.idhead.text;
    let tail = ctx.idtail;

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

  visitArrayIdList(ctx) {
    let head = ctx.arrayhead.text;
    let tail = ctx.arraytail;

    this.checkVariableDeclared(head);

    this.visit(ctx.index);

    let userinpt = '';

    while (true) {
      userinpt = prompt(head + '(' + this.indexArray + ') = ?');
      if (userinpt === null || userinpt === '')
        continue;


      if (!userinpt.match('[0-9]+')) {
        alert('Integer expected.');
        continue;
      }

      this.assignAtIndex(head, parseInt(userinpt));

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
   * modExp
   */

  visitOpModExp(ctx) {
    let left = this.visit(ctx.left);
    this.checkNumber();
    let right = this.visit(ctx.right);
    this.checkNumber();

    return left % right;
  }

  visitAtomModExp(ctx) {
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

    // Get the index array (array containing the n indices of the nd array)
    this.visit(ctx.index);

    let arr = this.varDict.getValue(id);
    let index;
    for (let i = 0; i < this.indexArray.length; i++) {
      index = this.indexArray[i];
      if (index < 0 || index >= arr.length)
        this.abort('index out of bounds \'(' + this.indexArray + ')\'.');

      if (arr.constructor.name !== 'Array') {
        this.abort('extraneous indices in \'' + id + '(' + this.indexArray + ')\'.');
      }

      arr = arr[index];
    }

    if (arr.constructor.name === 'Array') {
      this.abort('missing indices in \'' + id + '(' + this.indexArray + ')\'.')
    }

    this.indexArray = [];

    return arr;
  }

  visitListExpressionList(ctx) {
    let head = this.visit(ctx.head);
    this.checkInteger();
    let tail = ctx.tail;

    this.indexArray.push(head);

    this.visit(tail);
  }

  visitAtomExpressionList(ctx) {
    let atom = this.visit(ctx.atom);
    this.checkInteger();

    this.indexArray.push(atom);
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

  /***************************************************************************************************/
  /***		Drawing functions                                                                        ***/
  /***************************************************************************************************/

  visitDrawlineStatement(ctx) {

    let x1 = parseInt(this.visit(ctx.getChild(2)), 10);
    let y1 = parseInt(this.visit(ctx.getChild(4)), 10);
    let x2 = parseInt(this.visit(ctx.getChild(6)), 10);
    let y2 = parseInt(this.visit(ctx.getChild(8)), 10);

    if (Number.isNaN(x1)) { this.abort('x1 is not a number.'); }
    if (Number.isNaN(y1)) { this.abort('y1 is not a number.'); }
    if (Number.isNaN(x2)) { this.abort('x2 is not a number.'); }
    if (Number.isNaN(y2)) { this.abort('y2 is not a number.'); }

    this.drawOut.drawLine(x1, y1, x2, y2);
  }

  /**
  * checks the types and passes the values to the DrawOutput class to draw the rectangle
  * @param {type} ctx context of the current call
  */
  visitDrawrectStatement(ctx) {

    let x = parseInt(this.visit(ctx.getChild(2)), 10);
    let y = parseInt(this.visit(ctx.getChild(4)), 10);
    let width = parseInt(this.visit(ctx.getChild(6)), 10);
    let height = parseInt(this.visit(ctx.getChild(8)), 10);
    let color = String(this.visit(ctx.getChild(10)));

    if (Number.isNaN(x)) { this.abort('x is not a number.'); }
    if (Number.isNaN(y)) { this.abort('y is not a number.'); }
    if (Number.isNaN(width)) { this.abort('width is not a number.'); }
    if (Number.isNaN(height)) { this.abort('height is not a number.'); }

    this.drawOut.drawRectangle(x, y, width, height, color);
  }

  /**
  * checks the types and passes the values to the DrawOutput class to draw the square
  * @param {type} ctx context of the current call
  */
  visitDrawsquareStatement(ctx) {

    let x = parseInt(this.visit(ctx.getChild(2)), 10);
    let y = parseInt(this.visit(ctx.getChild(4)), 10);
    let size = parseInt(this.visit(ctx.getChild(6)), 10);
    let color = String(this.visit(ctx.getChild(8)));

    if (Number.isNaN(x)) { this.abort('x is not a number.'); }
    if (Number.isNaN(y)) { this.abort('y is not a number.'); }
    if (Number.isNaN(size)) { this.abort('size is not a number.'); }

    this.drawOut.drawSquare(x, y, size, color);
  }

  /**
  * checks the types and passes the values to the DrawOutput class to draw the circle
  * @param {type} ctx context of the current call
  */
  visitDrawcircleStatement(ctx) {

    let x = parseInt(this.visit(ctx.getChild(2)), 10);
    let y = parseInt(this.visit(ctx.getChild(4)), 10);
    let radius = parseInt(this.visit(ctx.getChild(6)), 10);
    let color = String(this.visit(ctx.getChild(8)));

    if (Number.isNaN(x)) { this.abort('x is not a number.'); }
    if (Number.isNaN(y)) { this.abort('y is not a number.'); }
    if (Number.isNaN(radius)) { this.abort('radius is not a number.'); }

    this.drawOut.drawCircle(x, y, radius, color);
  }

  /**
  * checks the types and passes the values to the DrawOutput class to draw the triangle
  * @param {type} ctx context of the current call
  */
  visitDrawtriangleStatement(ctx) {

    let x = parseInt(this.visit(ctx.getChild(2)), 10);
    let y = parseInt(this.visit(ctx.getChild(4)), 10);
    let size = parseInt(this.visit(ctx.getChild(6)), 10);
    let color = String(this.visit(ctx.getChild(8)));

    if (Number.isNaN(x)) { this.abort('x is not a number.'); }
    if (Number.isNaN(y)) { this.abort('y is not a number.'); }
    if (Number.isNaN(size)) { this.abort('size is not a number.'); }

    this.drawOut.drawTriangle(x, y, size, color);
  }

  /**
   * checks the selected range to be cleared and passes the values to the DrawOutput class to clear the canvas
   * @param {type} ctx context of the current call
   */
  visitDrawclearStatement(ctx) {

    let range = String(this.visit(ctx.getChild(2)));

    switch (range) {
      case 'none':
        break;

      case 'all':
      case 'top':
      case 'bottom':
      case 'half-left':
      case 'half-right':
      case 'top-left':
      case 'top-right':
      case 'bottom-left':
      case 'bottom-right':
        this.drawOut.drawClear(range);
        break;

      default:
        this.abort(range + ' is not a recognized range to clear.');
        break;
    }
  }

  /**
   * checks the selected area to be cleared and passes the values to the DrawOutput class to clear the canvas
   * @param {type} ctx context of the current call
   */
  visitDrawclearareaStatement(ctx) {

    let x1 = parseInt(this.visit(ctx.getChild(2)), 10);
    let y1 = parseInt(this.visit(ctx.getChild(4)), 10);
    let x2 = parseInt(this.visit(ctx.getChild(6)), 10);
    let y2 = parseInt(this.visit(ctx.getChild(8)), 10);

    if (Number.isNaN(x1)) { this.abort('x1 is not a number.'); }
    if (Number.isNaN(y1)) { this.abort('y1 is not a number.'); }
    if (Number.isNaN(x2)) { this.abort('x2 is not a number.'); }
    if (Number.isNaN(y2)) { this.abort('y2 is not a number.'); }


    this.drawOut.drawClearArea(x1, y1, x2, y2);
  }

  /***************************************************************************************************/
  /***		Secondary function                                                                       ***/
  /***************************************************************************************************/
  pgcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {
      var tmp = a;
      a = b;
      b = tmp;
    }
    while (true) {
      if (b === 0) return a;
      a %= b;
      if (a === 0) return b;
      b %= a;
    }
  }
}