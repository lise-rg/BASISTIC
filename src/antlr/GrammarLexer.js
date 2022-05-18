// Generated from Grammar.g by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,4,22,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,
1,0,1,1,1,1,1,2,4,2,15,8,2,11,2,12,2,16,1,3,1,3,1,3,1,3,0,0,4,1,1,3,2,5,
3,7,4,1,0,2,1,0,48,57,3,0,9,10,13,13,32,32,22,0,1,1,0,0,0,0,3,1,0,0,0,0,
5,1,0,0,0,0,7,1,0,0,0,1,9,1,0,0,0,3,11,1,0,0,0,5,14,1,0,0,0,7,18,1,0,0,0,
9,10,5,43,0,0,10,2,1,0,0,0,11,12,5,45,0,0,12,4,1,0,0,0,13,15,7,0,0,0,14,
13,1,0,0,0,15,16,1,0,0,0,16,14,1,0,0,0,16,17,1,0,0,0,17,6,1,0,0,0,18,19,
7,1,0,0,19,20,1,0,0,0,20,21,6,3,0,0,21,8,1,0,0,0,2,0,16,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class GrammarLexer extends antlr4.Lexer {

    static grammarFileName = "Grammar.g";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'+'", "'-'" ];
	static symbolicNames = [ null, null, null, "INTEGER", "WS" ];
	static ruleNames = [ "T__0", "T__1", "INTEGER", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

GrammarLexer.EOF = antlr4.Token.EOF;
GrammarLexer.T__0 = 1;
GrammarLexer.T__1 = 2;
GrammarLexer.INTEGER = 3;
GrammarLexer.WS = 4;



