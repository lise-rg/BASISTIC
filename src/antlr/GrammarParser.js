// Generated from Grammar.g by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import GrammarListener from './GrammarListener.js';
import GrammarVisitor from './GrammarVisitor.js';

const serializedATN = [4,1,60,356,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,1,0,1,0,1,1,1,1,1,1,3,1,48,8,1,1,1,1,1,1,1,3,1,53,8,1,3,1,55,8,1,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,71,8,2,1,2,1,
2,1,2,1,2,1,2,1,2,1,2,3,2,80,8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,90,
8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,3,2,169,8,2,1,2,1,2,1,2,3,2,174,8,2,1,2,3,2,177,
8,2,1,2,1,2,1,2,3,2,182,8,2,1,3,1,3,1,3,5,3,187,8,3,10,3,12,3,190,9,3,1,
4,1,4,1,4,1,4,1,4,3,4,197,8,4,1,5,1,5,1,5,1,5,1,5,3,5,204,8,5,1,6,1,6,1,
6,1,6,3,6,210,8,6,1,7,1,7,1,7,1,7,1,7,3,7,217,8,7,1,8,1,8,1,8,1,8,1,8,3,
8,224,8,8,1,9,1,9,1,9,1,9,1,9,3,9,231,8,9,1,10,1,10,1,10,1,10,1,10,3,10,
238,8,10,1,11,1,11,1,11,3,11,243,8,11,1,12,1,12,1,12,1,12,1,12,3,12,250,
8,12,1,13,1,13,1,13,1,13,1,13,3,13,257,8,13,1,14,1,14,1,14,1,14,1,14,3,14,
264,8,14,1,15,1,15,1,15,3,15,269,8,15,1,16,1,16,1,16,1,16,1,16,1,16,5,16,
277,8,16,10,16,12,16,280,9,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,
17,1,17,1,17,1,17,3,17,294,8,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,
18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,346,
8,18,1,19,1,19,1,19,3,19,351,8,19,1,20,1,20,1,20,1,20,0,1,32,21,0,2,4,6,
8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,0,4,2,0,2,2,24,24,2,0,
7,7,35,39,1,0,40,41,1,0,42,43,389,0,42,1,0,0,0,2,54,1,0,0,0,4,181,1,0,0,
0,6,183,1,0,0,0,8,196,1,0,0,0,10,203,1,0,0,0,12,209,1,0,0,0,14,216,1,0,0,
0,16,223,1,0,0,0,18,230,1,0,0,0,20,237,1,0,0,0,22,242,1,0,0,0,24,249,1,0,
0,0,26,256,1,0,0,0,28,263,1,0,0,0,30,268,1,0,0,0,32,270,1,0,0,0,34,293,1,
0,0,0,36,345,1,0,0,0,38,350,1,0,0,0,40,352,1,0,0,0,42,43,3,2,1,0,43,1,1,
0,0,0,44,47,3,4,2,0,45,46,5,1,0,0,46,48,3,2,1,0,47,45,1,0,0,0,47,48,1,0,
0,0,48,55,1,0,0,0,49,50,3,40,20,0,50,52,5,2,0,0,51,53,3,2,1,0,52,51,1,0,
0,0,52,53,1,0,0,0,53,55,1,0,0,0,54,44,1,0,0,0,54,49,1,0,0,0,55,3,1,0,0,0,
56,57,5,3,0,0,57,58,5,56,0,0,58,59,5,4,0,0,59,60,3,12,6,0,60,61,5,5,0,0,
61,182,1,0,0,0,62,63,5,6,0,0,63,64,5,56,0,0,64,65,5,7,0,0,65,66,3,18,9,0,
66,67,5,8,0,0,67,70,3,18,9,0,68,69,5,9,0,0,69,71,5,57,0,0,70,68,1,0,0,0,
70,71,1,0,0,0,71,72,1,0,0,0,72,73,3,2,1,0,73,74,5,10,0,0,74,182,1,0,0,0,
75,76,5,11,0,0,76,79,3,40,20,0,77,78,5,1,0,0,78,80,3,2,1,0,79,77,1,0,0,0,
79,80,1,0,0,0,80,182,1,0,0,0,81,82,5,12,0,0,82,182,3,40,20,0,83,84,5,13,
0,0,84,85,3,18,9,0,85,86,5,14,0,0,86,89,3,2,1,0,87,88,5,15,0,0,88,90,3,2,
1,0,89,87,1,0,0,0,89,90,1,0,0,0,90,91,1,0,0,0,91,92,5,16,0,0,92,182,1,0,
0,0,93,94,5,17,0,0,94,95,3,18,9,0,95,96,5,18,0,0,96,97,3,2,1,0,97,98,5,19,
0,0,98,182,1,0,0,0,99,100,5,18,0,0,100,101,3,2,1,0,101,102,5,17,0,0,102,
103,3,18,9,0,103,182,1,0,0,0,104,105,5,20,0,0,105,106,5,4,0,0,106,107,3,
6,3,0,107,108,5,5,0,0,108,182,1,0,0,0,109,110,5,21,0,0,110,111,5,4,0,0,111,
112,3,16,8,0,112,113,5,5,0,0,113,182,1,0,0,0,114,115,5,22,0,0,115,182,5,
57,0,0,116,117,5,23,0,0,117,118,5,4,0,0,118,119,3,18,9,0,119,120,5,24,0,
0,120,121,3,18,9,0,121,122,5,24,0,0,122,123,3,18,9,0,123,124,5,24,0,0,124,
125,3,18,9,0,125,126,5,5,0,0,126,182,1,0,0,0,127,128,5,25,0,0,128,129,5,
4,0,0,129,130,3,18,9,0,130,131,5,24,0,0,131,132,3,18,9,0,132,133,5,24,0,
0,133,134,3,18,9,0,134,135,5,24,0,0,135,136,3,18,9,0,136,137,5,5,0,0,137,
182,1,0,0,0,138,139,5,26,0,0,139,140,5,4,0,0,140,141,3,18,9,0,141,142,5,
24,0,0,142,143,3,18,9,0,143,144,5,24,0,0,144,145,3,18,9,0,145,146,5,5,0,
0,146,182,1,0,0,0,147,148,5,27,0,0,148,149,5,4,0,0,149,150,3,18,9,0,150,
151,5,24,0,0,151,152,3,18,9,0,152,153,5,24,0,0,153,154,3,18,9,0,154,155,
5,5,0,0,155,182,1,0,0,0,156,157,5,28,0,0,157,158,5,4,0,0,158,159,3,18,9,
0,159,160,5,24,0,0,160,161,3,18,9,0,161,162,5,24,0,0,162,163,3,18,9,0,163,
164,5,5,0,0,164,182,1,0,0,0,165,168,5,29,0,0,166,167,5,1,0,0,167,169,3,2,
1,0,168,166,1,0,0,0,168,169,1,0,0,0,169,182,1,0,0,0,170,173,5,30,0,0,171,
172,5,1,0,0,172,174,3,2,1,0,173,171,1,0,0,0,173,174,1,0,0,0,174,182,1,0,
0,0,175,177,5,31,0,0,176,175,1,0,0,0,176,177,1,0,0,0,177,178,1,0,0,0,178,
179,5,56,0,0,179,180,5,7,0,0,180,182,3,18,9,0,181,56,1,0,0,0,181,62,1,0,
0,0,181,75,1,0,0,0,181,81,1,0,0,0,181,83,1,0,0,0,181,93,1,0,0,0,181,99,1,
0,0,0,181,104,1,0,0,0,181,109,1,0,0,0,181,114,1,0,0,0,181,116,1,0,0,0,181,
127,1,0,0,0,181,138,1,0,0,0,181,147,1,0,0,0,181,156,1,0,0,0,181,165,1,0,
0,0,181,170,1,0,0,0,181,176,1,0,0,0,182,5,1,0,0,0,183,188,5,56,0,0,184,185,
5,24,0,0,185,187,3,6,3,0,186,184,1,0,0,0,187,190,1,0,0,0,188,186,1,0,0,0,
188,189,1,0,0,0,189,7,1,0,0,0,190,188,1,0,0,0,191,192,3,34,17,0,192,193,
5,24,0,0,193,194,3,8,4,0,194,197,1,0,0,0,195,197,3,34,17,0,196,191,1,0,0,
0,196,195,1,0,0,0,197,9,1,0,0,0,198,199,3,38,19,0,199,200,5,24,0,0,200,201,
3,10,5,0,201,204,1,0,0,0,202,204,3,38,19,0,203,198,1,0,0,0,203,202,1,0,0,
0,204,11,1,0,0,0,205,206,5,57,0,0,206,207,5,24,0,0,207,210,3,12,6,0,208,
210,5,57,0,0,209,205,1,0,0,0,209,208,1,0,0,0,210,13,1,0,0,0,211,212,3,18,
9,0,212,213,5,24,0,0,213,214,3,14,7,0,214,217,1,0,0,0,215,217,3,18,9,0,216,
211,1,0,0,0,216,215,1,0,0,0,217,15,1,0,0,0,218,219,3,18,9,0,219,220,7,0,
0,0,220,221,3,16,8,0,221,224,1,0,0,0,222,224,3,18,9,0,223,218,1,0,0,0,223,
222,1,0,0,0,224,17,1,0,0,0,225,226,3,20,10,0,226,227,5,32,0,0,227,228,3,
18,9,0,228,231,1,0,0,0,229,231,3,20,10,0,230,225,1,0,0,0,230,229,1,0,0,0,
231,19,1,0,0,0,232,233,3,22,11,0,233,234,5,33,0,0,234,235,3,20,10,0,235,
238,1,0,0,0,236,238,3,22,11,0,237,232,1,0,0,0,237,236,1,0,0,0,238,21,1,0,
0,0,239,240,5,34,0,0,240,243,3,24,12,0,241,243,3,24,12,0,242,239,1,0,0,0,
242,241,1,0,0,0,243,23,1,0,0,0,244,245,3,26,13,0,245,246,7,1,0,0,246,247,
3,24,12,0,247,250,1,0,0,0,248,250,3,26,13,0,249,244,1,0,0,0,249,248,1,0,
0,0,250,25,1,0,0,0,251,252,3,28,14,0,252,253,7,2,0,0,253,254,3,26,13,0,254,
257,1,0,0,0,255,257,3,28,14,0,256,251,1,0,0,0,256,255,1,0,0,0,257,27,1,0,
0,0,258,259,3,30,15,0,259,260,7,3,0,0,260,261,3,28,14,0,261,264,1,0,0,0,
262,264,3,30,15,0,263,258,1,0,0,0,263,262,1,0,0,0,264,29,1,0,0,0,265,266,
5,41,0,0,266,269,3,32,16,0,267,269,3,32,16,0,268,265,1,0,0,0,268,267,1,0,
0,0,269,31,1,0,0,0,270,271,6,16,-1,0,271,272,3,34,17,0,272,278,1,0,0,0,273,
274,10,2,0,0,274,275,5,44,0,0,275,277,3,34,17,0,276,273,1,0,0,0,277,280,
1,0,0,0,278,276,1,0,0,0,278,279,1,0,0,0,279,33,1,0,0,0,280,278,1,0,0,0,281,
282,5,4,0,0,282,283,3,18,9,0,283,284,5,5,0,0,284,294,1,0,0,0,285,294,3,36,
18,0,286,287,5,56,0,0,287,288,5,4,0,0,288,289,3,14,7,0,289,290,5,5,0,0,290,
294,1,0,0,0,291,294,5,56,0,0,292,294,3,38,19,0,293,281,1,0,0,0,293,285,1,
0,0,0,293,286,1,0,0,0,293,291,1,0,0,0,293,292,1,0,0,0,294,35,1,0,0,0,295,
296,5,45,0,0,296,297,5,4,0,0,297,298,3,18,9,0,298,299,5,5,0,0,299,346,1,
0,0,0,300,301,5,46,0,0,301,302,5,4,0,0,302,303,3,18,9,0,303,304,5,5,0,0,
304,346,1,0,0,0,305,306,5,47,0,0,306,307,5,4,0,0,307,308,3,18,9,0,308,309,
5,5,0,0,309,346,1,0,0,0,310,311,5,48,0,0,311,312,5,4,0,0,312,313,3,18,9,
0,313,314,5,5,0,0,314,346,1,0,0,0,315,316,5,49,0,0,316,317,5,4,0,0,317,318,
3,18,9,0,318,319,5,5,0,0,319,346,1,0,0,0,320,321,5,50,0,0,321,322,5,4,0,
0,322,323,3,18,9,0,323,324,5,5,0,0,324,346,1,0,0,0,325,326,5,51,0,0,326,
327,5,4,0,0,327,328,3,18,9,0,328,329,5,5,0,0,329,346,1,0,0,0,330,331,5,52,
0,0,331,332,5,4,0,0,332,333,3,18,9,0,333,334,5,5,0,0,334,346,1,0,0,0,335,
336,5,53,0,0,336,337,5,4,0,0,337,338,3,18,9,0,338,339,5,5,0,0,339,346,1,
0,0,0,340,341,5,54,0,0,341,342,5,4,0,0,342,343,3,18,9,0,343,344,5,5,0,0,
344,346,1,0,0,0,345,295,1,0,0,0,345,300,1,0,0,0,345,305,1,0,0,0,345,310,
1,0,0,0,345,315,1,0,0,0,345,320,1,0,0,0,345,325,1,0,0,0,345,330,1,0,0,0,
345,335,1,0,0,0,345,340,1,0,0,0,346,37,1,0,0,0,347,351,5,57,0,0,348,351,
5,58,0,0,349,351,5,59,0,0,350,347,1,0,0,0,350,348,1,0,0,0,350,349,1,0,0,
0,351,39,1,0,0,0,352,353,5,55,0,0,353,354,5,56,0,0,354,41,1,0,0,0,27,47,
52,54,70,79,89,168,173,176,181,188,196,203,209,216,223,230,237,242,249,256,
263,268,278,293,345,350];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class GrammarParser extends antlr4.Parser {

    static grammarFileName = "Grammar.g";
    static literalNames = [ null, "';'", "':'", "'DIM'", "'('", "')'", "'FOR'", 
                            "'='", "'TO'", "'STEP'", "'FEND'", "'GOTO'", 
                            "'GOSUB'", "'IF'", "'THEN'", "'ELSE'", "'ENDIF'", 
                            "'WHILE'", "'DO'", "'WEND'", "'INPUT'", "'PRINT'", 
                            "'SPC'", "'DRAWLINE'", "','", "'DRAWRECT'", 
                            "'DRAWSQUARE'", "'DRAWCIRLE'", "'DRAWTRIANGLE'", 
                            "'RETURN'", "'END'", "'LET'", "'OR'", "'AND'", 
                            "'NOT'", "'<>'", "'>'", "'>='", "'<'", "'<='", 
                            "'+'", "'-'", "'*'", "'/'", "'^'", "'ABS'", 
                            "'ATN'", "'COS'", "'EXP'", "'INT'", "'LOG'", 
                            "'RND'", "'SIN'", "'SQR'", "'TAN'", "'_'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "ID", "Integer", "String", "Real", "WS" ];
    static ruleNames = [ "start", "statements", "statement", "idList", "valueList", 
                         "constantList", "integerList", "expressionList", 
                         "printList", "expression", "andExp", "notExp", 
                         "compareExp", "addExp", "multExp", "negateExp", 
                         "powerExp", "value", "function", "constant", "label" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = GrammarParser.ruleNames;
        this.literalNames = GrammarParser.literalNames;
        this.symbolicNames = GrammarParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 16:
    	    		return this.powerExp_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    powerExp_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, GrammarParser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.statements();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statements() {
	    let localctx = new StatementsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, GrammarParser.RULE_statements);
	    try {
	        this.state = 54;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case GrammarParser.T__2:
	        case GrammarParser.T__5:
	        case GrammarParser.T__10:
	        case GrammarParser.T__11:
	        case GrammarParser.T__12:
	        case GrammarParser.T__16:
	        case GrammarParser.T__17:
	        case GrammarParser.T__19:
	        case GrammarParser.T__20:
	        case GrammarParser.T__21:
	        case GrammarParser.T__22:
	        case GrammarParser.T__24:
	        case GrammarParser.T__25:
	        case GrammarParser.T__26:
	        case GrammarParser.T__27:
	        case GrammarParser.T__28:
	        case GrammarParser.T__29:
	        case GrammarParser.T__30:
	        case GrammarParser.ID:
	            localctx = new StatementStatementsContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 44;
	            this.statement();
	            this.state = 47;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            if(la_===1) {
	                this.state = 45;
	                this.match(GrammarParser.T__0);
	                this.state = 46;
	                this.statements();

	            }
	            break;
	        case GrammarParser.T__54:
	            localctx = new LabelStatementsContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 49;
	            this.label();
	            this.state = 50;
	            this.match(GrammarParser.T__1);
	            this.state = 52;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	            if(la_===1) {
	                this.state = 51;
	                this.statements();

	            }
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, GrammarParser.RULE_statement);
	    var _la = 0; // Token type
	    try {
	        this.state = 181;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case GrammarParser.T__2:
	            localctx = new DimStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 56;
	            this.match(GrammarParser.T__2);
	            this.state = 57;
	            localctx.id = this.match(GrammarParser.ID);
	            this.state = 58;
	            this.match(GrammarParser.T__3);
	            this.state = 59;
	            localctx.list = this.integerList();
	            this.state = 60;
	            this.match(GrammarParser.T__4);
	            break;
	        case GrammarParser.T__5:
	            localctx = new ForStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 62;
	            this.match(GrammarParser.T__5);
	            this.state = 63;
	            localctx.ident = this.match(GrammarParser.ID);
	            this.state = 64;
	            this.match(GrammarParser.T__6);
	            this.state = 65;
	            this.expression();
	            this.state = 66;
	            this.match(GrammarParser.T__7);
	            this.state = 67;
	            this.expression();
	            this.state = 70;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===GrammarParser.T__8) {
	                this.state = 68;
	                this.match(GrammarParser.T__8);
	                this.state = 69;
	                localctx.step = this.match(GrammarParser.Integer);
	            }

	            this.state = 72;
	            localctx.st = this.statements();
	            this.state = 73;
	            this.match(GrammarParser.T__9);
	            break;
	        case GrammarParser.T__10:
	            localctx = new GotoStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 75;
	            this.match(GrammarParser.T__10);
	            this.state = 76;
	            this.label();
	            this.state = 79;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	            if(la_===1) {
	                this.state = 77;
	                this.match(GrammarParser.T__0);
	                this.state = 78;
	                this.statements();

	            }
	            break;
	        case GrammarParser.T__11:
	            localctx = new GosubStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 81;
	            this.match(GrammarParser.T__11);
	            this.state = 82;
	            this.label();
	            break;
	        case GrammarParser.T__12:
	            localctx = new IfStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 83;
	            this.match(GrammarParser.T__12);
	            this.state = 84;
	            this.expression();
	            this.state = 85;
	            this.match(GrammarParser.T__13);
	            this.state = 86;
	            this.statements();
	            this.state = 89;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===GrammarParser.T__14) {
	                this.state = 87;
	                this.match(GrammarParser.T__14);
	                this.state = 88;
	                this.statements();
	            }

	            this.state = 91;
	            this.match(GrammarParser.T__15);
	            break;
	        case GrammarParser.T__16:
	            localctx = new WhileStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 93;
	            this.match(GrammarParser.T__16);
	            this.state = 94;
	            this.expression();
	            this.state = 95;
	            this.match(GrammarParser.T__17);
	            this.state = 96;
	            this.statements();
	            this.state = 97;
	            this.match(GrammarParser.T__18);
	            break;
	        case GrammarParser.T__17:
	            localctx = new DoWhileStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 99;
	            this.match(GrammarParser.T__17);
	            this.state = 100;
	            this.statements();
	            this.state = 101;
	            this.match(GrammarParser.T__16);
	            this.state = 102;
	            this.expression();
	            break;
	        case GrammarParser.T__19:
	            localctx = new InputStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 104;
	            this.match(GrammarParser.T__19);
	            this.state = 105;
	            this.match(GrammarParser.T__3);
	            this.state = 106;
	            this.idList();
	            this.state = 107;
	            this.match(GrammarParser.T__4);
	            break;
	        case GrammarParser.T__20:
	            localctx = new PrintStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 109;
	            this.match(GrammarParser.T__20);
	            this.state = 110;
	            this.match(GrammarParser.T__3);
	            this.state = 111;
	            this.printList();
	            this.state = 112;
	            this.match(GrammarParser.T__4);
	            break;
	        case GrammarParser.T__21:
	            localctx = new SpcStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 10);
	            this.state = 114;
	            this.match(GrammarParser.T__21);
	            this.state = 115;
	            localctx.arg = this.match(GrammarParser.Integer);
	            break;
	        case GrammarParser.T__22:
	            localctx = new DrawlineStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 11);
	            this.state = 116;
	            this.match(GrammarParser.T__22);
	            this.state = 117;
	            this.match(GrammarParser.T__3);
	            this.state = 118;
	            this.expression();
	            this.state = 119;
	            this.match(GrammarParser.T__23);
	            this.state = 120;
	            this.expression();
	            this.state = 121;
	            this.match(GrammarParser.T__23);
	            this.state = 122;
	            this.expression();
	            this.state = 123;
	            this.match(GrammarParser.T__23);
	            this.state = 124;
	            this.expression();
	            this.state = 125;
	            this.match(GrammarParser.T__4);
	            break;
	        case GrammarParser.T__24:
	            localctx = new DrawrectStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 12);
	            this.state = 127;
	            this.match(GrammarParser.T__24);
	            this.state = 128;
	            this.match(GrammarParser.T__3);
	            this.state = 129;
	            this.expression();
	            this.state = 130;
	            this.match(GrammarParser.T__23);
	            this.state = 131;
	            this.expression();
	            this.state = 132;
	            this.match(GrammarParser.T__23);
	            this.state = 133;
	            this.expression();
	            this.state = 134;
	            this.match(GrammarParser.T__23);
	            this.state = 135;
	            this.expression();
	            this.state = 136;
	            this.match(GrammarParser.T__4);
	            break;
	        case GrammarParser.T__25:
	            localctx = new DrawsquareStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 13);
	            this.state = 138;
	            this.match(GrammarParser.T__25);
	            this.state = 139;
	            this.match(GrammarParser.T__3);
	            this.state = 140;
	            this.expression();
	            this.state = 141;
	            this.match(GrammarParser.T__23);
	            this.state = 142;
	            this.expression();
	            this.state = 143;
	            this.match(GrammarParser.T__23);
	            this.state = 144;
	            this.expression();
	            this.state = 145;
	            this.match(GrammarParser.T__4);
	            break;
	        case GrammarParser.T__26:
	            localctx = new DrawcircleStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 14);
	            this.state = 147;
	            this.match(GrammarParser.T__26);
	            this.state = 148;
	            this.match(GrammarParser.T__3);
	            this.state = 149;
	            this.expression();
	            this.state = 150;
	            this.match(GrammarParser.T__23);
	            this.state = 151;
	            this.expression();
	            this.state = 152;
	            this.match(GrammarParser.T__23);
	            this.state = 153;
	            this.expression();
	            this.state = 154;
	            this.match(GrammarParser.T__4);
	            break;
	        case GrammarParser.T__27:
	            localctx = new DrawtriangleStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 15);
	            this.state = 156;
	            this.match(GrammarParser.T__27);
	            this.state = 157;
	            this.match(GrammarParser.T__3);
	            this.state = 158;
	            this.expression();
	            this.state = 159;
	            this.match(GrammarParser.T__23);
	            this.state = 160;
	            this.expression();
	            this.state = 161;
	            this.match(GrammarParser.T__23);
	            this.state = 162;
	            this.expression();
	            this.state = 163;
	            this.match(GrammarParser.T__4);
	            break;
	        case GrammarParser.T__28:
	            localctx = new ReturnStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 16);
	            this.state = 165;
	            this.match(GrammarParser.T__28);
	            this.state = 168;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	            if(la_===1) {
	                this.state = 166;
	                this.match(GrammarParser.T__0);
	                this.state = 167;
	                this.statements();

	            }
	            break;
	        case GrammarParser.T__29:
	            localctx = new EndStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 17);
	            this.state = 170;
	            this.match(GrammarParser.T__29);
	            this.state = 173;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	            if(la_===1) {
	                this.state = 171;
	                this.match(GrammarParser.T__0);
	                this.state = 172;
	                this.statements();

	            }
	            break;
	        case GrammarParser.T__30:
	        case GrammarParser.ID:
	            localctx = new IdStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 18);
	            this.state = 176;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===GrammarParser.T__30) {
	                this.state = 175;
	                this.match(GrammarParser.T__30);
	            }

	            this.state = 178;
	            localctx.id = this.match(GrammarParser.ID);
	            this.state = 179;
	            this.match(GrammarParser.T__6);
	            this.state = 180;
	            localctx.exp = this.expression();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	idList() {
	    let localctx = new IdListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, GrammarParser.RULE_idList);
	    try {
	        localctx = new ListIdListContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 183;
	        localctx.head = this.match(GrammarParser.ID);
	        this.state = 188;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 184;
	                this.match(GrammarParser.T__23);
	                this.state = 185;
	                localctx.tail = this.idList(); 
	            }
	            this.state = 190;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valueList() {
	    let localctx = new ValueListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, GrammarParser.RULE_valueList);
	    try {
	        this.state = 196;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 191;
	            this.value();
	            this.state = 192;
	            this.match(GrammarParser.T__23);
	            this.state = 193;
	            this.valueList();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 195;
	            this.value();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constantList() {
	    let localctx = new ConstantListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, GrammarParser.RULE_constantList);
	    try {
	        this.state = 203;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 198;
	            this.constant();
	            this.state = 199;
	            this.match(GrammarParser.T__23);
	            this.state = 200;
	            this.constantList();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 202;
	            this.constant();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	integerList() {
	    let localctx = new IntegerListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, GrammarParser.RULE_integerList);
	    try {
	        this.state = 209;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 205;
	            this.match(GrammarParser.Integer);
	            this.state = 206;
	            this.match(GrammarParser.T__23);
	            this.state = 207;
	            this.integerList();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 208;
	            this.match(GrammarParser.Integer);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expressionList() {
	    let localctx = new ExpressionListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, GrammarParser.RULE_expressionList);
	    try {
	        this.state = 216;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 211;
	            this.expression();
	            this.state = 212;
	            this.match(GrammarParser.T__23);
	            this.state = 213;
	            this.expressionList();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 215;
	            this.expression();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	printList() {
	    let localctx = new PrintListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, GrammarParser.RULE_printList);
	    var _la = 0; // Token type
	    try {
	        this.state = 223;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ListPrintListContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 218;
	            localctx.head = this.expression();
	            this.state = 219;
	            localctx.sep = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===GrammarParser.T__1 || _la===GrammarParser.T__23)) {
	                localctx.sep = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 220;
	            localctx.tail = this.printList();
	            break;

	        case 2:
	            localctx = new AtomPrintListContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 222;
	            localctx.atom = this.expression();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, GrammarParser.RULE_expression);
	    try {
	        this.state = 230;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new OpExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 225;
	            localctx.left = this.andExp();
	            this.state = 226;
	            this.match(GrammarParser.T__31);
	            this.state = 227;
	            localctx.right = this.expression();
	            break;

	        case 2:
	            localctx = new AtomExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 229;
	            localctx.atom = this.andExp();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	andExp() {
	    let localctx = new AndExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, GrammarParser.RULE_andExp);
	    try {
	        this.state = 237;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new OpAndExpContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 232;
	            localctx.left = this.notExp();
	            this.state = 233;
	            this.match(GrammarParser.T__32);
	            this.state = 234;
	            localctx.right = this.andExp();
	            break;

	        case 2:
	            localctx = new AtomAndExpContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 236;
	            localctx.atom = this.notExp();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	notExp() {
	    let localctx = new NotExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, GrammarParser.RULE_notExp);
	    try {
	        this.state = 242;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case GrammarParser.T__33:
	            localctx = new OpNotExpContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 239;
	            this.match(GrammarParser.T__33);
	            this.state = 240;
	            localctx.expr = this.compareExp();
	            break;
	        case GrammarParser.T__3:
	        case GrammarParser.T__40:
	        case GrammarParser.T__44:
	        case GrammarParser.T__45:
	        case GrammarParser.T__46:
	        case GrammarParser.T__47:
	        case GrammarParser.T__48:
	        case GrammarParser.T__49:
	        case GrammarParser.T__50:
	        case GrammarParser.T__51:
	        case GrammarParser.T__52:
	        case GrammarParser.T__53:
	        case GrammarParser.ID:
	        case GrammarParser.Integer:
	        case GrammarParser.String:
	        case GrammarParser.Real:
	            localctx = new AtomNotExpContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 241;
	            localctx.atom = this.compareExp();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	compareExp() {
	    let localctx = new CompareExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, GrammarParser.RULE_compareExp);
	    var _la = 0; // Token type
	    try {
	        this.state = 249;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new OpCompareExpContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 244;
	            localctx.left = this.addExp();
	            this.state = 245;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===GrammarParser.T__6 || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (GrammarParser.T__34 - 35)) | (1 << (GrammarParser.T__35 - 35)) | (1 << (GrammarParser.T__36 - 35)) | (1 << (GrammarParser.T__37 - 35)) | (1 << (GrammarParser.T__38 - 35)))) !== 0))) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 246;
	            localctx.right = this.compareExp();
	            break;

	        case 2:
	            localctx = new AtomCompareExpContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 248;
	            localctx.atom = this.addExp();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	addExp() {
	    let localctx = new AddExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, GrammarParser.RULE_addExp);
	    var _la = 0; // Token type
	    try {
	        this.state = 256;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new OpAddExpContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 251;
	            localctx.left = this.multExp();
	            this.state = 252;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===GrammarParser.T__39 || _la===GrammarParser.T__40)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 253;
	            localctx.right = this.addExp();
	            break;

	        case 2:
	            localctx = new AtomAddExpContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 255;
	            localctx.atom = this.multExp();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multExp() {
	    let localctx = new MultExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, GrammarParser.RULE_multExp);
	    var _la = 0; // Token type
	    try {
	        this.state = 263;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new OpMultExpContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 258;
	            localctx.left = this.negateExp();
	            this.state = 259;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===GrammarParser.T__41 || _la===GrammarParser.T__42)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 260;
	            localctx.right = this.multExp();
	            break;

	        case 2:
	            localctx = new AtomMultExpContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 262;
	            localctx.atom = this.negateExp();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	negateExp() {
	    let localctx = new NegateExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, GrammarParser.RULE_negateExp);
	    try {
	        this.state = 268;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case GrammarParser.T__40:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 265;
	            this.match(GrammarParser.T__40);
	            this.state = 266;
	            this.powerExp(0);
	            break;
	        case GrammarParser.T__3:
	        case GrammarParser.T__44:
	        case GrammarParser.T__45:
	        case GrammarParser.T__46:
	        case GrammarParser.T__47:
	        case GrammarParser.T__48:
	        case GrammarParser.T__49:
	        case GrammarParser.T__50:
	        case GrammarParser.T__51:
	        case GrammarParser.T__52:
	        case GrammarParser.T__53:
	        case GrammarParser.ID:
	        case GrammarParser.Integer:
	        case GrammarParser.String:
	        case GrammarParser.Real:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 267;
	            this.powerExp(0);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	powerExp(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new PowerExpContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 32;
	    this.enterRecursionRule(localctx, 32, GrammarParser.RULE_powerExp, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new AtomPowerExpContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 271;
	        localctx.atom = this.value();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 278;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new OpPowerExpContext(this, new PowerExpContext(this, _parentctx, _parentState));
	                localctx.left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_powerExp);
	                this.state = 273;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 274;
	                this.match(GrammarParser.T__43);
	                this.state = 275;
	                localctx.right = this.value(); 
	            }
	            this.state = 280;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,23,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, GrammarParser.RULE_value);
	    try {
	        this.state = 293;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ExprValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 281;
	            this.match(GrammarParser.T__3);
	            this.state = 282;
	            localctx.expr = this.expression();
	            this.state = 283;
	            this.match(GrammarParser.T__4);
	            break;

	        case 2:
	            localctx = new FunctionValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 285;
	            localctx.func = this.function_();
	            break;

	        case 3:
	            localctx = new ArrayValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 286;
	            localctx.array = this.match(GrammarParser.ID);
	            this.state = 287;
	            this.match(GrammarParser.T__3);
	            this.state = 288;
	            localctx.index = this.expressionList();
	            this.state = 289;
	            this.match(GrammarParser.T__4);
	            break;

	        case 4:
	            localctx = new IDValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 291;
	            localctx.id = this.match(GrammarParser.ID);
	            break;

	        case 5:
	            localctx = new ConstValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 292;
	            localctx.constv = this.constant();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	function_() {
	    let localctx = new FunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, GrammarParser.RULE_function);
	    try {
	        this.state = 345;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case GrammarParser.T__44:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 295;
	            this.match(GrammarParser.T__44);
	            this.state = 296;
	            this.match(GrammarParser.T__3);
	            this.state = 297;
	            this.expression();
	            this.state = 298;
	            this.match(GrammarParser.T__4);
	            break;
	        case GrammarParser.T__45:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 300;
	            this.match(GrammarParser.T__45);
	            this.state = 301;
	            this.match(GrammarParser.T__3);
	            this.state = 302;
	            this.expression();
	            this.state = 303;
	            this.match(GrammarParser.T__4);
	            break;
	        case GrammarParser.T__46:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 305;
	            this.match(GrammarParser.T__46);
	            this.state = 306;
	            this.match(GrammarParser.T__3);
	            this.state = 307;
	            this.expression();
	            this.state = 308;
	            this.match(GrammarParser.T__4);
	            break;
	        case GrammarParser.T__47:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 310;
	            this.match(GrammarParser.T__47);
	            this.state = 311;
	            this.match(GrammarParser.T__3);
	            this.state = 312;
	            this.expression();
	            this.state = 313;
	            this.match(GrammarParser.T__4);
	            break;
	        case GrammarParser.T__48:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 315;
	            this.match(GrammarParser.T__48);
	            this.state = 316;
	            this.match(GrammarParser.T__3);
	            this.state = 317;
	            this.expression();
	            this.state = 318;
	            this.match(GrammarParser.T__4);
	            break;
	        case GrammarParser.T__49:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 320;
	            this.match(GrammarParser.T__49);
	            this.state = 321;
	            this.match(GrammarParser.T__3);
	            this.state = 322;
	            this.expression();
	            this.state = 323;
	            this.match(GrammarParser.T__4);
	            break;
	        case GrammarParser.T__50:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 325;
	            this.match(GrammarParser.T__50);
	            this.state = 326;
	            this.match(GrammarParser.T__3);
	            this.state = 327;
	            this.expression();
	            this.state = 328;
	            this.match(GrammarParser.T__4);
	            break;
	        case GrammarParser.T__51:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 330;
	            this.match(GrammarParser.T__51);
	            this.state = 331;
	            this.match(GrammarParser.T__3);
	            this.state = 332;
	            this.expression();
	            this.state = 333;
	            this.match(GrammarParser.T__4);
	            break;
	        case GrammarParser.T__52:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 335;
	            this.match(GrammarParser.T__52);
	            this.state = 336;
	            this.match(GrammarParser.T__3);
	            this.state = 337;
	            this.expression();
	            this.state = 338;
	            this.match(GrammarParser.T__4);
	            break;
	        case GrammarParser.T__53:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 340;
	            this.match(GrammarParser.T__53);
	            this.state = 341;
	            this.match(GrammarParser.T__3);
	            this.state = 342;
	            this.expression();
	            this.state = 343;
	            this.match(GrammarParser.T__4);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constant() {
	    let localctx = new ConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, GrammarParser.RULE_constant);
	    try {
	        this.state = 350;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case GrammarParser.Integer:
	            localctx = new ConstIntContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 347;
	            this.match(GrammarParser.Integer);
	            break;
	        case GrammarParser.String:
	            localctx = new ConstStringContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 348;
	            this.match(GrammarParser.String);
	            break;
	        case GrammarParser.Real:
	            localctx = new ConstRealContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 349;
	            this.match(GrammarParser.Real);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	label() {
	    let localctx = new LabelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, GrammarParser.RULE_label);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 352;
	        this.match(GrammarParser.T__54);
	        this.state = 353;
	        this.match(GrammarParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

GrammarParser.EOF = antlr4.Token.EOF;
GrammarParser.T__0 = 1;
GrammarParser.T__1 = 2;
GrammarParser.T__2 = 3;
GrammarParser.T__3 = 4;
GrammarParser.T__4 = 5;
GrammarParser.T__5 = 6;
GrammarParser.T__6 = 7;
GrammarParser.T__7 = 8;
GrammarParser.T__8 = 9;
GrammarParser.T__9 = 10;
GrammarParser.T__10 = 11;
GrammarParser.T__11 = 12;
GrammarParser.T__12 = 13;
GrammarParser.T__13 = 14;
GrammarParser.T__14 = 15;
GrammarParser.T__15 = 16;
GrammarParser.T__16 = 17;
GrammarParser.T__17 = 18;
GrammarParser.T__18 = 19;
GrammarParser.T__19 = 20;
GrammarParser.T__20 = 21;
GrammarParser.T__21 = 22;
GrammarParser.T__22 = 23;
GrammarParser.T__23 = 24;
GrammarParser.T__24 = 25;
GrammarParser.T__25 = 26;
GrammarParser.T__26 = 27;
GrammarParser.T__27 = 28;
GrammarParser.T__28 = 29;
GrammarParser.T__29 = 30;
GrammarParser.T__30 = 31;
GrammarParser.T__31 = 32;
GrammarParser.T__32 = 33;
GrammarParser.T__33 = 34;
GrammarParser.T__34 = 35;
GrammarParser.T__35 = 36;
GrammarParser.T__36 = 37;
GrammarParser.T__37 = 38;
GrammarParser.T__38 = 39;
GrammarParser.T__39 = 40;
GrammarParser.T__40 = 41;
GrammarParser.T__41 = 42;
GrammarParser.T__42 = 43;
GrammarParser.T__43 = 44;
GrammarParser.T__44 = 45;
GrammarParser.T__45 = 46;
GrammarParser.T__46 = 47;
GrammarParser.T__47 = 48;
GrammarParser.T__48 = 49;
GrammarParser.T__49 = 50;
GrammarParser.T__50 = 51;
GrammarParser.T__51 = 52;
GrammarParser.T__52 = 53;
GrammarParser.T__53 = 54;
GrammarParser.T__54 = 55;
GrammarParser.ID = 56;
GrammarParser.Integer = 57;
GrammarParser.String = 58;
GrammarParser.Real = 59;
GrammarParser.WS = 60;

GrammarParser.RULE_start = 0;
GrammarParser.RULE_statements = 1;
GrammarParser.RULE_statement = 2;
GrammarParser.RULE_idList = 3;
GrammarParser.RULE_valueList = 4;
GrammarParser.RULE_constantList = 5;
GrammarParser.RULE_integerList = 6;
GrammarParser.RULE_expressionList = 7;
GrammarParser.RULE_printList = 8;
GrammarParser.RULE_expression = 9;
GrammarParser.RULE_andExp = 10;
GrammarParser.RULE_notExp = 11;
GrammarParser.RULE_compareExp = 12;
GrammarParser.RULE_addExp = 13;
GrammarParser.RULE_multExp = 14;
GrammarParser.RULE_negateExp = 15;
GrammarParser.RULE_powerExp = 16;
GrammarParser.RULE_value = 17;
GrammarParser.RULE_function = 18;
GrammarParser.RULE_constant = 19;
GrammarParser.RULE_label = 20;

class StartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_start;
    }

	statements() {
	    return this.getTypedRuleContext(StatementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterStart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitStart(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitStart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_statements;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class StatementStatementsContext extends StatementsContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	statements() {
	    return this.getTypedRuleContext(StatementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterStatementStatements(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitStatementStatements(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitStatementStatements(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.StatementStatementsContext = StatementStatementsContext;

class LabelStatementsContext extends StatementsContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	statements() {
	    return this.getTypedRuleContext(StatementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterLabelStatements(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitLabelStatements(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitLabelStatements(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.LabelStatementsContext = LabelStatementsContext;

class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_statement;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class EndStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	statements() {
	    return this.getTypedRuleContext(StatementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterEndStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitEndStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitEndStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.EndStatementContext = EndStatementContext;

class DrawlineStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterDrawlineStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitDrawlineStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitDrawlineStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.DrawlineStatementContext = DrawlineStatementContext;

class SpcStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.arg = null; // Token;
        super.copyFrom(ctx);
    }

	Integer() {
	    return this.getToken(GrammarParser.Integer, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterSpcStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitSpcStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitSpcStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.SpcStatementContext = SpcStatementContext;

class DimStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.id = null; // Token;
        this.list = null; // IntegerListContext;
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(GrammarParser.ID, 0);
	};

	integerList() {
	    return this.getTypedRuleContext(IntegerListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterDimStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitDimStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitDimStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.DimStatementContext = DimStatementContext;

class ForStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.ident = null; // Token;
        this.step = null; // Token;
        this.st = null; // StatementsContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	ID() {
	    return this.getToken(GrammarParser.ID, 0);
	};

	statements() {
	    return this.getTypedRuleContext(StatementsContext,0);
	};

	Integer() {
	    return this.getToken(GrammarParser.Integer, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterForStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitForStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitForStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.ForStatementContext = ForStatementContext;

class DrawtriangleStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterDrawtriangleStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitDrawtriangleStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitDrawtriangleStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.DrawtriangleStatementContext = DrawtriangleStatementContext;

class IfStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	statements = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementsContext);
	    } else {
	        return this.getTypedRuleContext(StatementsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitIfStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitIfStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.IfStatementContext = IfStatementContext;

class ReturnStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	statements() {
	    return this.getTypedRuleContext(StatementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterReturnStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitReturnStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitReturnStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.ReturnStatementContext = ReturnStatementContext;

class GotoStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	statements() {
	    return this.getTypedRuleContext(StatementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterGotoStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitGotoStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitGotoStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.GotoStatementContext = GotoStatementContext;

class WhileStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	statements() {
	    return this.getTypedRuleContext(StatementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterWhileStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitWhileStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitWhileStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.WhileStatementContext = WhileStatementContext;

class PrintStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	printList() {
	    return this.getTypedRuleContext(PrintListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterPrintStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitPrintStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitPrintStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.PrintStatementContext = PrintStatementContext;

class GosubStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterGosubStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitGosubStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitGosubStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.GosubStatementContext = GosubStatementContext;

class IdStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.id = null; // Token;
        this.exp = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(GrammarParser.ID, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterIdStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitIdStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitIdStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.IdStatementContext = IdStatementContext;

class InputStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	idList() {
	    return this.getTypedRuleContext(IdListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterInputStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitInputStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitInputStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.InputStatementContext = InputStatementContext;

class DrawcircleStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterDrawcircleStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitDrawcircleStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitDrawcircleStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.DrawcircleStatementContext = DrawcircleStatementContext;

class DoWhileStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	statements() {
	    return this.getTypedRuleContext(StatementsContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterDoWhileStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitDoWhileStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitDoWhileStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.DoWhileStatementContext = DoWhileStatementContext;

class DrawrectStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterDrawrectStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitDrawrectStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitDrawrectStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.DrawrectStatementContext = DrawrectStatementContext;

class DrawsquareStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterDrawsquareStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitDrawsquareStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitDrawsquareStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.DrawsquareStatementContext = DrawsquareStatementContext;

class IdListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_idList;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ListIdListContext extends IdListContext {

    constructor(parser, ctx) {
        super(parser);
        this.head = null; // Token;
        this.tail = null; // IdListContext;
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(GrammarParser.ID, 0);
	};

	idList = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdListContext);
	    } else {
	        return this.getTypedRuleContext(IdListContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterListIdList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitListIdList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitListIdList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.ListIdListContext = ListIdListContext;

class ValueListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_valueList;
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	valueList() {
	    return this.getTypedRuleContext(ValueListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterValueList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitValueList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitValueList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConstantListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_constantList;
    }

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	constantList() {
	    return this.getTypedRuleContext(ConstantListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterConstantList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitConstantList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitConstantList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IntegerListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_integerList;
    }

	Integer() {
	    return this.getToken(GrammarParser.Integer, 0);
	};

	integerList() {
	    return this.getTypedRuleContext(IntegerListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterIntegerList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitIntegerList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitIntegerList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_expressionList;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	expressionList() {
	    return this.getTypedRuleContext(ExpressionListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterExpressionList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitExpressionList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitExpressionList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrintListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_printList;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ListPrintListContext extends PrintListContext {

    constructor(parser, ctx) {
        super(parser);
        this.head = null; // ExpressionContext;
        this.sep = null; // Token;
        this.tail = null; // PrintListContext;
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	printList() {
	    return this.getTypedRuleContext(PrintListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterListPrintList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitListPrintList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitListPrintList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.ListPrintListContext = ListPrintListContext;

class AtomPrintListContext extends PrintListContext {

    constructor(parser, ctx) {
        super(parser);
        this.atom = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterAtomPrintList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitAtomPrintList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitAtomPrintList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.AtomPrintListContext = AtomPrintListContext;

class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AtomExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.atom = null; // AndExpContext;
        super.copyFrom(ctx);
    }

	andExp() {
	    return this.getTypedRuleContext(AndExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterAtomExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitAtomExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitAtomExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.AtomExpressionContext = AtomExpressionContext;

class OpExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // AndExpContext;
        this.right = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	andExp() {
	    return this.getTypedRuleContext(AndExpContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterOpExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitOpExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitOpExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.OpExpressionContext = OpExpressionContext;

class AndExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_andExp;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AtomAndExpContext extends AndExpContext {

    constructor(parser, ctx) {
        super(parser);
        this.atom = null; // NotExpContext;
        super.copyFrom(ctx);
    }

	notExp() {
	    return this.getTypedRuleContext(NotExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterAtomAndExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitAtomAndExp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitAtomAndExp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.AtomAndExpContext = AtomAndExpContext;

class OpAndExpContext extends AndExpContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // NotExpContext;
        this.right = null; // AndExpContext;
        super.copyFrom(ctx);
    }

	notExp() {
	    return this.getTypedRuleContext(NotExpContext,0);
	};

	andExp() {
	    return this.getTypedRuleContext(AndExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterOpAndExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitOpAndExp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitOpAndExp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.OpAndExpContext = OpAndExpContext;

class NotExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_notExp;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AtomNotExpContext extends NotExpContext {

    constructor(parser, ctx) {
        super(parser);
        this.atom = null; // CompareExpContext;
        super.copyFrom(ctx);
    }

	compareExp() {
	    return this.getTypedRuleContext(CompareExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterAtomNotExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitAtomNotExp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitAtomNotExp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.AtomNotExpContext = AtomNotExpContext;

class OpNotExpContext extends NotExpContext {

    constructor(parser, ctx) {
        super(parser);
        this.expr = null; // CompareExpContext;
        super.copyFrom(ctx);
    }

	compareExp() {
	    return this.getTypedRuleContext(CompareExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterOpNotExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitOpNotExp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitOpNotExp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.OpNotExpContext = OpNotExpContext;

class CompareExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_compareExp;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AtomCompareExpContext extends CompareExpContext {

    constructor(parser, ctx) {
        super(parser);
        this.atom = null; // AddExpContext;
        super.copyFrom(ctx);
    }

	addExp() {
	    return this.getTypedRuleContext(AddExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterAtomCompareExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitAtomCompareExp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitAtomCompareExp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.AtomCompareExpContext = AtomCompareExpContext;

class OpCompareExpContext extends CompareExpContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // AddExpContext;
        this.op = null; // Token;
        this.right = null; // CompareExpContext;
        super.copyFrom(ctx);
    }

	addExp() {
	    return this.getTypedRuleContext(AddExpContext,0);
	};

	compareExp() {
	    return this.getTypedRuleContext(CompareExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterOpCompareExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitOpCompareExp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitOpCompareExp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.OpCompareExpContext = OpCompareExpContext;

class AddExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_addExp;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AtomAddExpContext extends AddExpContext {

    constructor(parser, ctx) {
        super(parser);
        this.atom = null; // MultExpContext;
        super.copyFrom(ctx);
    }

	multExp() {
	    return this.getTypedRuleContext(MultExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterAtomAddExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitAtomAddExp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitAtomAddExp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.AtomAddExpContext = AtomAddExpContext;

class OpAddExpContext extends AddExpContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // MultExpContext;
        this.op = null; // Token;
        this.right = null; // AddExpContext;
        super.copyFrom(ctx);
    }

	multExp() {
	    return this.getTypedRuleContext(MultExpContext,0);
	};

	addExp() {
	    return this.getTypedRuleContext(AddExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterOpAddExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitOpAddExp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitOpAddExp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.OpAddExpContext = OpAddExpContext;

class MultExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_multExp;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class OpMultExpContext extends MultExpContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // NegateExpContext;
        this.op = null; // Token;
        this.right = null; // MultExpContext;
        super.copyFrom(ctx);
    }

	negateExp() {
	    return this.getTypedRuleContext(NegateExpContext,0);
	};

	multExp() {
	    return this.getTypedRuleContext(MultExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterOpMultExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitOpMultExp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitOpMultExp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.OpMultExpContext = OpMultExpContext;

class AtomMultExpContext extends MultExpContext {

    constructor(parser, ctx) {
        super(parser);
        this.atom = null; // NegateExpContext;
        super.copyFrom(ctx);
    }

	negateExp() {
	    return this.getTypedRuleContext(NegateExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterAtomMultExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitAtomMultExp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitAtomMultExp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.AtomMultExpContext = AtomMultExpContext;

class NegateExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_negateExp;
    }

	powerExp() {
	    return this.getTypedRuleContext(PowerExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterNegateExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitNegateExp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitNegateExp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PowerExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_powerExp;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class OpPowerExpContext extends PowerExpContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // PowerExpContext;
        this.right = null; // ValueContext;
        super.copyFrom(ctx);
    }

	powerExp() {
	    return this.getTypedRuleContext(PowerExpContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterOpPowerExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitOpPowerExp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitOpPowerExp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.OpPowerExpContext = OpPowerExpContext;

class AtomPowerExpContext extends PowerExpContext {

    constructor(parser, ctx) {
        super(parser);
        this.atom = null; // ValueContext;
        super.copyFrom(ctx);
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterAtomPowerExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitAtomPowerExp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitAtomPowerExp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.AtomPowerExpContext = AtomPowerExpContext;

class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_value;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ConstValueContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.constv = null; // ConstantContext;
        super.copyFrom(ctx);
    }

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterConstValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitConstValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitConstValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.ConstValueContext = ConstValueContext;

class ExprValueContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.expr = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterExprValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitExprValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitExprValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.ExprValueContext = ExprValueContext;

class FunctionValueContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.func = null; // FunctionContext;
        super.copyFrom(ctx);
    }

	function_() {
	    return this.getTypedRuleContext(FunctionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterFunctionValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitFunctionValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitFunctionValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.FunctionValueContext = FunctionValueContext;

class ArrayValueContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.array = null; // Token;
        this.index = null; // ExpressionListContext;
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(GrammarParser.ID, 0);
	};

	expressionList() {
	    return this.getTypedRuleContext(ExpressionListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterArrayValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitArrayValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitArrayValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.ArrayValueContext = ArrayValueContext;

class IDValueContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.id = null; // Token;
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(GrammarParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterIDValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitIDValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitIDValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.IDValueContext = IDValueContext;

class FunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_function;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterFunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitFunction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitFunction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_constant;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ConstStringContext extends ConstantContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	String() {
	    return this.getToken(GrammarParser.String, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterConstString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitConstString(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitConstString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.ConstStringContext = ConstStringContext;

class ConstIntContext extends ConstantContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Integer() {
	    return this.getToken(GrammarParser.Integer, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterConstInt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitConstInt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitConstInt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.ConstIntContext = ConstIntContext;

class ConstRealContext extends ConstantContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Real() {
	    return this.getToken(GrammarParser.Real, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterConstReal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitConstReal(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitConstReal(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.ConstRealContext = ConstRealContext;

class LabelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_label;
    }

	ID() {
	    return this.getToken(GrammarParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterLabel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitLabel(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitLabel(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




GrammarParser.StartContext = StartContext; 
GrammarParser.StatementsContext = StatementsContext; 
GrammarParser.StatementContext = StatementContext; 
GrammarParser.IdListContext = IdListContext; 
GrammarParser.ValueListContext = ValueListContext; 
GrammarParser.ConstantListContext = ConstantListContext; 
GrammarParser.IntegerListContext = IntegerListContext; 
GrammarParser.ExpressionListContext = ExpressionListContext; 
GrammarParser.PrintListContext = PrintListContext; 
GrammarParser.ExpressionContext = ExpressionContext; 
GrammarParser.AndExpContext = AndExpContext; 
GrammarParser.NotExpContext = NotExpContext; 
GrammarParser.CompareExpContext = CompareExpContext; 
GrammarParser.AddExpContext = AddExpContext; 
GrammarParser.MultExpContext = MultExpContext; 
GrammarParser.NegateExpContext = NegateExpContext; 
GrammarParser.PowerExpContext = PowerExpContext; 
GrammarParser.ValueContext = ValueContext; 
GrammarParser.FunctionContext = FunctionContext; 
GrammarParser.ConstantContext = ConstantContext; 
GrammarParser.LabelContext = LabelContext; 
