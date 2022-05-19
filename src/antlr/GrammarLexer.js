// Generated from Grammar.g by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,10,64,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,1,1,1,1,1,1,1,1,1,
2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,4,7,44,8,7,
11,7,12,7,45,1,7,1,7,4,7,50,8,7,11,7,12,7,51,3,7,54,8,7,1,8,4,8,57,8,8,11,
8,12,8,58,1,9,1,9,1,9,1,9,0,0,10,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,
19,10,1,0,3,1,0,48,57,2,0,65,90,97,122,3,0,9,10,13,13,32,32,67,0,1,1,0,0,
0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,
0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,1,21,1,0,0,0,3,23,1,0,0,0,5,27,
1,0,0,0,7,29,1,0,0,0,9,36,1,0,0,0,11,38,1,0,0,0,13,40,1,0,0,0,15,43,1,0,
0,0,17,56,1,0,0,0,19,60,1,0,0,0,21,22,5,59,0,0,22,2,1,0,0,0,23,24,5,118,
0,0,24,25,5,97,0,0,25,26,5,114,0,0,26,4,1,0,0,0,27,28,5,61,0,0,28,6,1,0,
0,0,29,30,5,112,0,0,30,31,5,114,0,0,31,32,5,105,0,0,32,33,5,110,0,0,33,34,
5,116,0,0,34,35,5,40,0,0,35,8,1,0,0,0,36,37,5,41,0,0,37,10,1,0,0,0,38,39,
5,43,0,0,39,12,1,0,0,0,40,41,5,45,0,0,41,14,1,0,0,0,42,44,7,0,0,0,43,42,
1,0,0,0,44,45,1,0,0,0,45,43,1,0,0,0,45,46,1,0,0,0,46,53,1,0,0,0,47,49,5,
46,0,0,48,50,7,0,0,0,49,48,1,0,0,0,50,51,1,0,0,0,51,49,1,0,0,0,51,52,1,0,
0,0,52,54,1,0,0,0,53,47,1,0,0,0,53,54,1,0,0,0,54,16,1,0,0,0,55,57,7,1,0,
0,56,55,1,0,0,0,57,58,1,0,0,0,58,56,1,0,0,0,58,59,1,0,0,0,59,18,1,0,0,0,
60,61,7,2,0,0,61,62,1,0,0,0,62,63,6,9,0,0,63,20,1,0,0,0,5,0,45,51,53,58,
1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class GrammarLexer extends antlr4.Lexer {

    static grammarFileName = "Grammar.g";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "';'", "'var'", "'='", "'print('", "')'", 
                         "'+'", "'-'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          "NB", "IDENT", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "NB", "IDENT", "WS" ];

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
GrammarLexer.T__2 = 3;
GrammarLexer.T__3 = 4;
GrammarLexer.T__4 = 5;
GrammarLexer.T__5 = 6;
GrammarLexer.T__6 = 7;
GrammarLexer.NB = 8;
GrammarLexer.IDENT = 9;
GrammarLexer.WS = 10;



