import antlr4 from 'antlr4';
import GrammarLexer from './antlr/GrammarLexer.js';
import GrammarParser from './antlr/GrammarParser.js';
import { Visitor } from './visitor.js';
import { Listener } from './listener.js';

var visitor, listener;

//Wait for the document to be loaded and ready
window.onload = function () {

  editAreaLoader.init({
    id: "input-area", syntax: "Basic", start_highlight: true,
    allow_toggle: false, toolbar: ''
  });

  // Clean the console 
  clean();

  // Attach a listener on the "Run" button (of the interpreter)
  $('#run-button').click(
    function () {

      // Clean the output area
      clean();

      // Generates the AST
      let input = $('#input-area').val();
      let chars = new antlr4.InputStream(input);
      let lexer = new GrammarLexer(chars);
      let tokens = new antlr4.CommonTokenStream(lexer);
      let parser = new GrammarParser(tokens);
      let tree = parser.start();

      // Creates the Listener and generates the labels' dictionnary
      listener = new Listener();
      antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
      // Creates the Visitor and starts the interpretation
      visitor = new Visitor(listener.getLabelDict());
      visitor.visit(tree);
    }
  );

  // Attach a listener on the "Upload file" button
  $('#import-button').change(
    function (filelist) {
      const file = $('#import-button').get(0).files[0];
      let fileRd = new FileReader();

      fileRd.readAsText(file);

      fileRd.onload = function () {
        $('#input-area').value = fileRd.result;
      }
    }
  );
}

// Clean the IO interface
function clean() {
  $('#output-area').val('');

  $('#draw-output').get(0).width = $('#draw-output').get(0).width;
}
