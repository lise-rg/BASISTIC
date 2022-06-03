import antlr4 from 'antlr4';
import GrammarLexer from './antlr/GrammarLexer.js';
import GrammarParser from './antlr/GrammarParser.js';
import { Visitor } from './visitor.js';
import { Listener } from './listener.js';
import { BasicErrorListener } from './errorListener.js';
import { OutputConsole } from './console.js';
import { KeyboardListener } from './keyboardListener.js';
import Prism from './../modules/prism/prism.js';
import CodeFlask from 'codeflask';
import FileSaver from './../modules/file-saver/FileSaver.js';

var visitor, listener;
var outConsole = new OutputConsole('output-area');
var keyboardListener = new KeyboardListener();


//Wait for the document to be loaded and ready
window.onload = function () {

  const flask = new CodeFlask('#input-area',
    {
      language: 'basic', lineNumbers: true,
      highlighter: Prism.highlightElement,
      defaultTheme: false
    });
  flask.addLanguage('basic', Prism.languages.basic);

  // Clean the console 
  clean();

  document.addEventListener('keydown', (e)=>keyboardListener.updatePressedKeys(e));
  document.addEventListener('keyup', (e)=>keyboardListener.updateReleasedKeys(e))

  // Attach a listener on the "Run" button (of the interpreter)
  $('#run-button').click(
    function () {

      // Clean the output area
      clean();

      // Generates the AST
      let input = flask.getCode();
      let chars = new antlr4.InputStream(input);
      let lexer = new GrammarLexer(chars);
      let tokens = new antlr4.CommonTokenStream(lexer);
      let parser = new GrammarParser(tokens);
      parser.removeErrorListeners();
      parser.addErrorListener(new BasicErrorListener(outConsole));
      let tree;

      try {
        tree = parser.start();
      } catch (error) {
        outConsole.print(error);
        return;
      }

      // Creates the Listener and generates the labels' dictionnary
      listener = new Listener(outConsole);
      antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

      // Creates the Visitor and starts the interpretation
      visitor = new Visitor(listener.getLabelDict(), outConsole, keyboardListener);
      visitor.visit(tree);
    }
  );

  $('#stop-button').click(
    function () {

      //Stops the interpretation
      visitor.stop();

      outConsole.print('Stopped.');
    }
  );

  // Attach a listener on the "Upload file" button
  $('#import-button').change(
    function (filelist) {
      const file = $('#import-button').get(0).files[0];
      let fileRd = new FileReader();

      fileRd.readAsText(file);

      fileRd.onload = function () {
        flask.updateCode(fileRd.result)
      }
    }
  );

  // Attach a listener on the "Save" button
  $('#save-button').click(
    function () {
      let codeContent = flask.getCode();
      let codeType = "text/plain;charset=utf-8";
      let codeName = "program.txt"

      if ($('#import-button').get(0).files.length > 0) {
        codeName = $('#import-button').get(0).files[0].name;
      }

      let blob = new Blob([codeContent],{ type: codeType });

      FileSaver.saveAs(blob, codeName);
    }
  );
}

// Clean the IO interface
function clean() {
  $('#output-area').val('');
  $('#draw-output').get(0).width = $('#draw-output').get(0).width;
}
