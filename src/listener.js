import GrammarListener from "./antlr/GrammarListener";
import { LabelDict } from "./labelDict.js";
export { Listener };

class Listener extends GrammarListener {
  constructor(outConsole) {
    super();
    this.labelDict = new LabelDict();
    this.outConsole = outConsole;
  }

  /**
   * prints an error message and halts the execution of the interpreter
   * @param {string} msg
   */
   abort(msg) {
    this.outConsole.print('Error: ' + msg);
    throw new Error();
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