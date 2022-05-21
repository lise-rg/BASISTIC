import GrammarListener from "./antlr/GrammarListener";
import { LabelDict } from "./labelDict.js";
export { Listener };

var outputArea = document.getElementById('output-area');

class Listener extends GrammarListener {
  constructor() {
    super();
    this.labelDict = new LabelDict();
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
   printConsole(msg) {
    outputArea.value += msg + '\n';
  }

  getLabelDict() {
    return this.labelDict;
  }

  enterLabelStatements(ctx) {
    let label = ctx.getChild(0).getText();
    let statements = ctx.getChild(2);

    if (this.labelDict.contains(label))
      this.abort('label ' + label + ' used more than once.');
      
    this.labelDict.add(label, statements);
  }
}