import antlr4 from 'antlr4';
export { BasicErrorListener };

class BasicErrorListener extends antlr4.error.ErrorListener {

  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
      throw("Syntax error: line " + line + ":" + column + " " + msg);
  }
}