import antlr4 from 'antlr4';
import GrammarLexer from './antlr/GrammarLexer.js';
import GrammarParser from './antlr/GrammarParser.js';
import { Visitor } from './visitor.js';


//Wait for the document to be loaded and ready
window.onload = function () {
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

      // Creates the Visitor and starts the interpretation
      let visitor = new Visitor();
      visitor.visit(tree);
    }
  );

  // Attach a listener on the "OK" button (of the console)
  $('#console-button').click(
    function () {
      let input = $('#console').val();
      if (input == null || input.length < 1)
        return;
      $('#output-area').val($('#output-area').val() + input + '\n');
      $('#console').val('');
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
  $('#console').val('');

  $('#draw-output').get(0).width = $('#draw-output').get(0).width;
}
