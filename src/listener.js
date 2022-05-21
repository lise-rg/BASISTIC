import GrammarListener from "./antlr/GrammarListener";
import { LabelDict } from "./labelDict.js";
export { Listener };

class Listener extends GrammarListener {
  constructor() {
    super();
    this.labelDict = new LabelDict();
  }

  getLabelDict() {
    return this.labelDict;
  }

  enterLabelStatements(ctx) {
    let label = ctx.getChild(0).getText();
    let statements = ctx.getChild(2);
    this.labelDict.add(label, statements);
  }
}