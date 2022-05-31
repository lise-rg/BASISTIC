import GrammarListener from "./antlr/GrammarListener";
import { LabelDict } from "./labelDict.js";
export { Listener };

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
    document.getElementById('output-area').value += msg + '\n';
  }

  getLabelDict() {
    return this.labelDict;
  }

  enterSubroutines(ctx) {
    let label = ctx.lb.getText();
    let statements = ctx.st;

    if (this.labelDict.contains(label))
      this.abort('label ' + label + ' used more than once.');
      
    this.labelDict.add(label, statements);
  }
}