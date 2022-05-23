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

  visitDimStatement(ctx) {
    let name = ctx.id.text;
    let type = 'list';
    let list = this.visit(ctx.list);

    this.varDict.add(name, type, list);
  }

  visitEndStatement(ctx) {
    // TODO
    this.printConsole('Done');
  }

  visitForStatement(ctx) {
    let name = ctx.id.text;
    let value = this.visit(ctx.getChild(3));
    if(this.currentType != 'integer') this.abort('Not an integer.');
    
    this.varDict.add(name, 'integer', value);
    
    let end = ctx.getChild(5);
    if(this.currentType != 'integer') this.abort('Not an integer.');
    
    let step = parseInt(ctx.step.getText());
    
    for(let i = value; i < end; i += step) {
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
    // TODO
  }

  visitOnGotoStatement(ctx) {
    let cond = this.visit(ctx.getChild(1));
    if(this.currentType != 'boolean') this.abort('Not a valid condition.');

    if(cond == 1) {
      let label = ctx.getChild(3).getText();
      this.checkLabel(label);
      this.visit(this.labelDict.getNode(label));
    }
  }

  visitOnGosubStatement(ctx) {
    let cond = this.visit(ctx.getChild(1));
    if(this.currentType != 'boolean') this.abort('Not a valid condition.');

    if (cond == 1){
      
    }
    // TODO
  }
  
  visitIfStatement(ctx) {
    let cond = this.visit(ctx.getChild(1));
    if(this.currentType != 'boolean') this.abort('Not a valid condition.');

    if (cond == 1) this.visit(ctx.getChild(3));
    else if(ctx.getChild(5) != null) this.visit(ctx.getChild(5));
  }

  visitWhileStatement(ctx) {
    let cond = this.visit(ctx.getChild(1));
    if(this.currentType != 'boolean') this.abort('Not a valid condition.');

    while(cond == 1) {
      this.visit(ctx.getChild(3));
      cond = this.visit(ctx.getChild(1));
    }
  }

  visitDoWhileStatement(ctx) {
    let cond;
    if(this.currentType != 'boolean') this.abort('Not a valid condition.');

    do {
      this.visit(ctx.getChild(1));
      cond = this.visit(ctx.getChild(1));
    } while(cond == 1)
  }

  visitInputStatement(ctx) {
    this.visit(ctx.getChild(1));
  }

  // visitPrintStatement(ctx) {
  //   this.visit(ctx.getChild(0));
  // }

  visitSpcStatement(ctx) {
    let value = parseInt(ctx.value.getText());
    let spc = "";

    for(let i = 0; i < value; i++) {
      spc += " ";
    }

    this.printConsole(spc);
  }

  visitReturnStatement(ctx) {
    // TODO
  }

  visitIdStatement(ctx) {
    let name = ctx.id.text;
    let type = '';
    let value = this.visit(ctx.exp);
    
    if(this.varDict.contains(name)) { 
      type = this.varDict.getType(name);
      if(type == this.currentType) this.varDict.assign(name, value);
      else this.abort('Incorrect type for variable ' + name)
    }
    else {
      type = this.currentType;
      this.varDict.add(name, type, value);
    }
  }

  visitAbsFunction(ctx) {
    let value = ctx.expr(0);
    if(this.currentType != 'integer') this.abort('Not an integer.');
    return Math.abs(value);
  }

  visitAtnFunction(ctx) {
    let value = ctx.expr(0);
    if(this.currentType != 'real' || this.currentType != 'integer') this.abort('Not an number.');
    return Math.atan(value);
  }

  visitCosFunction(ctx) {
    let value = ctx.expr(0);
    if(this.currentType != 'real' || this.currentType != 'integer') this.abort('Not an number.');
    return Math.cos(value);
  }

  visitExpFunction(ctx) {
    let value = ctx.expr(0);
    if(this.currentType != 'real' || this.currentType != 'integer') this.abort('Not an number.');
    return Math.exp(value);
  }

  visitIntFunction(ctx) {
    let value = ctx.expr(0);
    if(this.currentType != 'real' || this.currentType != 'integer') this.abort('Not an number.');
    return Math.floor(value);
  }

  visitLogFunction(ctx) {
    let value = ctx.expr(0);
    if(this.currentType != 'real' || this.currentType != 'integer') this.abort('Not an number.');
    return Math.log(value);
  }
  
  visitRndFunction(ctx) {
    let value = ctx.expr(0);
    if(this.currentType != 'integer') this.abort('Not an integer.');
    return Math.floor(Math.random() * value);
  }

  visitSinFunction(ctx) {
    let value = ctx.expr(0);
    if(this.currentType != 'real' || this.currentType != 'integer') this.abort('Not an number.');
    return Math.sin(value);
  }

  visitSqrFunction(ctx) {
    let value = ctx.getChild(0);
    if(this.currentType != 'real' || this.currentType != 'integer') this.abort('Not an number.');
    return Math.sqrt(value);
  }

  visitTanFunction(ctx) {
    let value = ctx.expr(0);
    if(this.currentType != 'real' || this.currentType != 'integer') this.abort('Not an number.');
    return Math.tan(value);
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

  visitFunctionValue(ctx) {
    return this.visit(ctx.func);
  }

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