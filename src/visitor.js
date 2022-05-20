export { Visitor };
import { VariableDict } from './variableDict.js';
import { DrawOutput } from './drawing.js';
import GrammarVisitor from './antlr/GrammarVisitor.js';

var outputArea = document.getElementById('output-area');

class Visitor extends GrammarVisitor {

  constructor() {
    super();
    this.varDict = new VariableDict();
    this.drawOut = new DrawOutput();
  }

  abort(msg) {
    alert('Error: ' + msg);
    throw new Error();
  }

  printConsole(msg) {
    outputArea.value += msg + '\n';
  }

  // TODO

  /* 
  ** visitConstant (Integer, Real, String)
  ** updates this.currentType and returns the constant's value
  */
}
