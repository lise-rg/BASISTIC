// Generated from Grammar.g by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import GrammarListener from './GrammarListener.js';
import GrammarVisitor from './GrammarVisitor.js';

const serializedATN = [4,1,56,258,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,1,
0,1,0,1,1,1,1,1,1,3,1,46,8,1,1,1,1,1,1,1,3,1,51,8,1,3,1,53,8,1,1,2,1,2,1,
2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,70,8,2,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,3,2,79,8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,99,8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,144,
8,2,1,3,1,3,1,3,1,3,3,3,150,8,3,1,4,1,4,1,4,1,4,1,4,3,4,157,8,4,1,5,1,5,
1,5,1,5,1,5,3,5,164,8,5,1,6,1,6,1,6,1,6,3,6,170,8,6,1,7,1,7,1,7,1,7,1,7,
3,7,177,8,7,1,8,1,8,1,8,1,8,1,8,3,8,184,8,8,1,9,1,9,1,9,1,9,1,9,3,9,191,
8,9,1,10,1,10,1,10,1,10,1,10,3,10,198,8,10,1,11,1,11,1,11,3,11,203,8,11,
1,12,1,12,1,12,1,12,1,12,3,12,210,8,12,1,13,1,13,1,13,1,13,1,13,3,13,217,
8,13,1,14,1,14,1,14,1,14,1,14,3,14,224,8,14,1,15,1,15,1,15,3,15,229,8,15,
1,16,1,16,1,16,1,16,1,16,1,16,5,16,237,8,16,10,16,12,16,240,9,16,1,17,1,
17,1,17,1,17,1,17,1,17,3,17,248,8,17,1,18,1,18,1,18,3,18,253,8,18,1,19,1,
19,1,19,1,19,0,1,32,20,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,
36,38,0,4,2,0,2,2,37,37,2,0,8,8,41,45,1,0,46,47,1,0,48,49,286,0,40,1,0,0,
0,2,52,1,0,0,0,4,143,1,0,0,0,6,149,1,0,0,0,8,156,1,0,0,0,10,163,1,0,0,0,
12,169,1,0,0,0,14,176,1,0,0,0,16,183,1,0,0,0,18,190,1,0,0,0,20,197,1,0,0,
0,22,202,1,0,0,0,24,209,1,0,0,0,26,216,1,0,0,0,28,223,1,0,0,0,30,228,1,0,
0,0,32,230,1,0,0,0,34,247,1,0,0,0,36,252,1,0,0,0,38,254,1,0,0,0,40,41,3,
2,1,0,41,1,1,0,0,0,42,45,3,4,2,0,43,44,5,1,0,0,44,46,3,2,1,0,45,43,1,0,0,
0,45,46,1,0,0,0,46,53,1,0,0,0,47,48,3,38,19,0,48,50,5,2,0,0,49,51,3,2,1,
0,50,49,1,0,0,0,50,51,1,0,0,0,51,53,1,0,0,0,52,42,1,0,0,0,52,47,1,0,0,0,
53,3,1,0,0,0,54,55,5,3,0,0,55,56,5,52,0,0,56,57,5,4,0,0,57,58,3,12,6,0,58,
59,5,5,0,0,59,144,1,0,0,0,60,144,5,6,0,0,61,62,5,7,0,0,62,63,5,52,0,0,63,
64,5,8,0,0,64,65,3,18,9,0,65,66,5,9,0,0,66,69,3,18,9,0,67,68,5,10,0,0,68,
70,5,53,0,0,69,67,1,0,0,0,69,70,1,0,0,0,70,71,1,0,0,0,71,72,3,2,1,0,72,73,
5,11,0,0,73,144,1,0,0,0,74,75,5,12,0,0,75,78,3,38,19,0,76,77,5,1,0,0,77,
79,3,2,1,0,78,76,1,0,0,0,78,79,1,0,0,0,79,144,1,0,0,0,80,81,5,13,0,0,81,
144,3,38,19,0,82,83,5,14,0,0,83,84,3,18,9,0,84,85,5,12,0,0,85,86,3,38,19,
0,86,144,1,0,0,0,87,88,5,14,0,0,88,89,3,18,9,0,89,90,5,13,0,0,90,91,3,38,
19,0,91,144,1,0,0,0,92,93,5,15,0,0,93,94,3,18,9,0,94,95,5,16,0,0,95,98,3,
2,1,0,96,97,5,17,0,0,97,99,3,2,1,0,98,96,1,0,0,0,98,99,1,0,0,0,99,144,1,
0,0,0,100,101,5,18,0,0,101,102,3,18,9,0,102,103,5,19,0,0,103,104,3,2,1,0,
104,105,5,20,0,0,105,144,1,0,0,0,106,107,5,19,0,0,107,108,3,4,2,0,108,109,
5,21,0,0,109,110,3,18,9,0,110,144,1,0,0,0,111,112,5,22,0,0,112,144,3,6,3,
0,113,114,5,23,0,0,114,144,3,16,8,0,115,116,5,24,0,0,116,144,5,53,0,0,117,
118,5,25,0,0,118,144,3,6,3,0,119,120,5,26,0,0,120,144,3,18,9,0,121,122,5,
27,0,0,122,144,3,18,9,0,123,124,5,28,0,0,124,144,3,18,9,0,125,126,5,29,0,
0,126,144,3,18,9,0,127,128,5,30,0,0,128,144,3,18,9,0,129,130,5,31,0,0,130,
144,3,18,9,0,131,132,5,32,0,0,132,144,3,18,9,0,133,134,5,33,0,0,134,144,
3,18,9,0,135,136,5,34,0,0,136,144,3,18,9,0,137,138,5,35,0,0,138,144,3,18,
9,0,139,144,5,36,0,0,140,141,5,52,0,0,141,142,5,8,0,0,142,144,3,18,9,0,143,
54,1,0,0,0,143,60,1,0,0,0,143,61,1,0,0,0,143,74,1,0,0,0,143,80,1,0,0,0,143,
82,1,0,0,0,143,87,1,0,0,0,143,92,1,0,0,0,143,100,1,0,0,0,143,106,1,0,0,0,
143,111,1,0,0,0,143,113,1,0,0,0,143,115,1,0,0,0,143,117,1,0,0,0,143,119,
1,0,0,0,143,121,1,0,0,0,143,123,1,0,0,0,143,125,1,0,0,0,143,127,1,0,0,0,
143,129,1,0,0,0,143,131,1,0,0,0,143,133,1,0,0,0,143,135,1,0,0,0,143,137,
1,0,0,0,143,139,1,0,0,0,143,140,1,0,0,0,144,5,1,0,0,0,145,146,5,52,0,0,146,
147,5,37,0,0,147,150,3,6,3,0,148,150,5,52,0,0,149,145,1,0,0,0,149,148,1,
0,0,0,150,7,1,0,0,0,151,152,3,34,17,0,152,153,5,37,0,0,153,154,3,8,4,0,154,
157,1,0,0,0,155,157,3,34,17,0,156,151,1,0,0,0,156,155,1,0,0,0,157,9,1,0,
0,0,158,159,3,36,18,0,159,160,5,37,0,0,160,161,3,10,5,0,161,164,1,0,0,0,
162,164,3,36,18,0,163,158,1,0,0,0,163,162,1,0,0,0,164,11,1,0,0,0,165,166,
5,53,0,0,166,167,5,37,0,0,167,170,3,12,6,0,168,170,5,53,0,0,169,165,1,0,
0,0,169,168,1,0,0,0,170,13,1,0,0,0,171,172,3,18,9,0,172,173,5,37,0,0,173,
174,3,14,7,0,174,177,1,0,0,0,175,177,3,18,9,0,176,171,1,0,0,0,176,175,1,
0,0,0,177,15,1,0,0,0,178,179,3,18,9,0,179,180,7,0,0,0,180,181,3,16,8,0,181,
184,1,0,0,0,182,184,3,18,9,0,183,178,1,0,0,0,183,182,1,0,0,0,184,17,1,0,
0,0,185,186,3,20,10,0,186,187,5,38,0,0,187,188,3,18,9,0,188,191,1,0,0,0,
189,191,3,20,10,0,190,185,1,0,0,0,190,189,1,0,0,0,191,19,1,0,0,0,192,193,
3,22,11,0,193,194,5,39,0,0,194,195,3,20,10,0,195,198,1,0,0,0,196,198,3,22,
11,0,197,192,1,0,0,0,197,196,1,0,0,0,198,21,1,0,0,0,199,200,5,40,0,0,200,
203,3,24,12,0,201,203,3,24,12,0,202,199,1,0,0,0,202,201,1,0,0,0,203,23,1,
0,0,0,204,205,3,26,13,0,205,206,7,1,0,0,206,207,3,24,12,0,207,210,1,0,0,
0,208,210,3,26,13,0,209,204,1,0,0,0,209,208,1,0,0,0,210,25,1,0,0,0,211,212,
3,28,14,0,212,213,7,2,0,0,213,214,3,26,13,0,214,217,1,0,0,0,215,217,3,28,
14,0,216,211,1,0,0,0,216,215,1,0,0,0,217,27,1,0,0,0,218,219,3,30,15,0,219,
220,7,3,0,0,220,221,3,28,14,0,221,224,1,0,0,0,222,224,3,30,15,0,223,218,
1,0,0,0,223,222,1,0,0,0,224,29,1,0,0,0,225,226,5,47,0,0,226,229,3,32,16,
0,227,229,3,32,16,0,228,225,1,0,0,0,228,227,1,0,0,0,229,31,1,0,0,0,230,231,
6,16,-1,0,231,232,3,34,17,0,232,238,1,0,0,0,233,234,10,2,0,0,234,235,5,50,
0,0,235,237,3,34,17,0,236,233,1,0,0,0,237,240,1,0,0,0,238,236,1,0,0,0,238,
239,1,0,0,0,239,33,1,0,0,0,240,238,1,0,0,0,241,242,5,4,0,0,242,243,3,18,
9,0,243,244,5,5,0,0,244,248,1,0,0,0,245,248,5,52,0,0,246,248,3,36,18,0,247,
241,1,0,0,0,247,245,1,0,0,0,247,246,1,0,0,0,248,35,1,0,0,0,249,253,5,53,
0,0,250,253,5,54,0,0,251,253,5,55,0,0,252,249,1,0,0,0,252,250,1,0,0,0,252,
251,1,0,0,0,253,37,1,0,0,0,254,255,5,51,0,0,255,256,5,52,0,0,256,39,1,0,
0,0,23,45,50,52,69,78,98,143,149,156,163,169,176,183,190,197,202,209,216,
223,228,238,247,252];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class GrammarParser extends antlr4.Parser {

    static grammarFileName = "Grammar.g";
    static literalNames = [ null, "';'", "':'", "'DIM'", "'('", "')'", "'END'", 
                            "'FOR'", "'='", "'TO'", "'STEP'", "'FEND'", 
                            "'GOTO'", "'GOSUB'", "'ON'", "'IF'", "'THEN'", 
                            "'ELSE'", "'WHILE'", "'DO'", "'WEND'", "'LOOP WHILE'", 
                            "'INPUT'", "'PRINT'", "'SPC'", "'READ'", "'ABS'", 
                            "'ATN'", "'COS'", "'EXP'", "'INT'", "'LOG'", 
                            "'RND'", "'SIN'", "'SQR'", "'TAN'", "'RETURN'", 
                            "','", "'OR'", "'AND'", "'NOT'", "'<>'", "'>'", 
                            "'>='", "'<'", "'<='", "'+'", "'-'", "'*'", 
                            "'/'", "'^'", "'_'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, "ID", "Integer", "String", 
                             "Real", "WS" ];
    static ruleNames = [ "start", "statements", "statement", "idList", "valueList", 
                         "constantList", "integerList", "expressionList", 
                         "printList", "expression", "andExp", "notExp", 
                         "compareExp", "addExp", "multExp", "negateExp", 
                         "powerExp", "value", "constant", "label" ];

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
	        this.state = 40;
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
	    var _la = 0; // Token type
	    try {
	        this.state = 52;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case GrammarParser.T__2:
	        case GrammarParser.T__5:
	        case GrammarParser.T__6:
	        case GrammarParser.T__11:
	        case GrammarParser.T__12:
	        case GrammarParser.T__13:
	        case GrammarParser.T__14:
	        case GrammarParser.T__17:
	        case GrammarParser.T__18:
	        case GrammarParser.T__21:
	        case GrammarParser.T__22:
	        case GrammarParser.T__23:
	        case GrammarParser.T__24:
	        case GrammarParser.T__25:
	        case GrammarParser.T__26:
	        case GrammarParser.T__27:
	        case GrammarParser.T__28:
	        case GrammarParser.T__29:
	        case GrammarParser.T__30:
	        case GrammarParser.T__31:
	        case GrammarParser.T__32:
	        case GrammarParser.T__33:
	        case GrammarParser.T__34:
	        case GrammarParser.T__35:
	        case GrammarParser.ID:
	            localctx = new StatementStatementsContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 42;
	            this.statement();
	            this.state = 45;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            if(la_===1) {
	                this.state = 43;
	                this.match(GrammarParser.T__0);
	                this.state = 44;
	                this.statements();

	            }
	            break;
	        case GrammarParser.T__50:
	            localctx = new LabelStatementsContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 47;
	            this.label();
	            this.state = 48;
	            this.match(GrammarParser.T__1);
	            this.state = 50;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__2) | (1 << GrammarParser.T__5) | (1 << GrammarParser.T__6) | (1 << GrammarParser.T__11) | (1 << GrammarParser.T__12) | (1 << GrammarParser.T__13) | (1 << GrammarParser.T__14) | (1 << GrammarParser.T__17) | (1 << GrammarParser.T__18) | (1 << GrammarParser.T__21) | (1 << GrammarParser.T__22) | (1 << GrammarParser.T__23) | (1 << GrammarParser.T__24) | (1 << GrammarParser.T__25) | (1 << GrammarParser.T__26) | (1 << GrammarParser.T__27) | (1 << GrammarParser.T__28) | (1 << GrammarParser.T__29) | (1 << GrammarParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (GrammarParser.T__31 - 32)) | (1 << (GrammarParser.T__32 - 32)) | (1 << (GrammarParser.T__33 - 32)) | (1 << (GrammarParser.T__34 - 32)) | (1 << (GrammarParser.T__35 - 32)) | (1 << (GrammarParser.T__50 - 32)) | (1 << (GrammarParser.ID - 32)))) !== 0)) {
	                this.state = 49;
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
	        this.state = 143;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new DimStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 54;
	            this.match(GrammarParser.T__2);
	            this.state = 55;
	            this.match(GrammarParser.ID);
	            this.state = 56;
	            this.match(GrammarParser.T__3);
	            this.state = 57;
	            this.integerList();
	            this.state = 58;
	            this.match(GrammarParser.T__4);
	            break;

	        case 2:
	            localctx = new EndStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 60;
	            this.match(GrammarParser.T__5);
	            break;

	        case 3:
	            localctx = new ForStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 61;
	            this.match(GrammarParser.T__6);
	            this.state = 62;
	            this.match(GrammarParser.ID);
	            this.state = 63;
	            this.match(GrammarParser.T__7);
	            this.state = 64;
	            this.expression();
	            this.state = 65;
	            this.match(GrammarParser.T__8);
	            this.state = 66;
	            this.expression();
	            this.state = 69;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===GrammarParser.T__9) {
	                this.state = 67;
	                this.match(GrammarParser.T__9);
	                this.state = 68;
	                this.match(GrammarParser.Integer);
	            }

	            this.state = 71;
	            this.statements();
	            this.state = 72;
	            this.match(GrammarParser.T__10);
	            break;

	        case 4:
	            localctx = new GotoStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 74;
	            this.match(GrammarParser.T__11);
	            this.state = 75;
	            this.label();
	            this.state = 78;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	            if(la_===1) {
	                this.state = 76;
	                this.match(GrammarParser.T__0);
	                this.state = 77;
	                this.statements();

	            }
	            break;

	        case 5:
	            localctx = new GosubStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 80;
	            this.match(GrammarParser.T__12);
	            this.state = 81;
	            this.label();
	            break;

	        case 6:
	            localctx = new OnGotoStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 82;
	            this.match(GrammarParser.T__13);
	            this.state = 83;
	            this.expression();
	            this.state = 84;
	            this.match(GrammarParser.T__11);
	            this.state = 85;
	            this.label();
	            break;

	        case 7:
	            localctx = new OnGosubStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 87;
	            this.match(GrammarParser.T__13);
	            this.state = 88;
	            this.expression();
	            this.state = 89;
	            this.match(GrammarParser.T__12);
	            this.state = 90;
	            this.label();
	            break;

	        case 8:
	            localctx = new IfStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 92;
	            this.match(GrammarParser.T__14);
	            this.state = 93;
	            this.expression();
	            this.state = 94;
	            this.match(GrammarParser.T__15);
	            this.state = 95;
	            this.statements();
	            this.state = 98;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	            if(la_===1) {
	                this.state = 96;
	                this.match(GrammarParser.T__16);
	                this.state = 97;
	                this.statements();

	            }
	            break;

	        case 9:
	            localctx = new WhileStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 100;
	            this.match(GrammarParser.T__17);
	            this.state = 101;
	            this.expression();
	            this.state = 102;
	            this.match(GrammarParser.T__18);
	            this.state = 103;
	            this.statements();
	            this.state = 104;
	            this.match(GrammarParser.T__19);
	            break;

	        case 10:
	            localctx = new DoWhileStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 10);
	            this.state = 106;
	            this.match(GrammarParser.T__18);
	            this.state = 107;
	            this.statement();
	            this.state = 108;
	            this.match(GrammarParser.T__20);
	            this.state = 109;
	            this.expression();
	            break;

	        case 11:
	            localctx = new InputStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 11);
	            this.state = 111;
	            this.match(GrammarParser.T__21);
	            this.state = 112;
	            this.idList();
	            break;

	        case 12:
	            localctx = new PrintStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 12);
	            this.state = 113;
	            this.match(GrammarParser.T__22);
	            this.state = 114;
	            this.printList();
	            break;

	        case 13:
	            localctx = new SpcStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 13);
	            this.state = 115;
	            this.match(GrammarParser.T__23);
	            this.state = 116;
	            this.match(GrammarParser.Integer);
	            break;

	        case 14:
	            localctx = new ReadStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 14);
	            this.state = 117;
	            this.match(GrammarParser.T__24);
	            this.state = 118;
	            this.idList();
	            break;

	        case 15:
	            localctx = new AbsStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 15);
	            this.state = 119;
	            this.match(GrammarParser.T__25);
	            this.state = 120;
	            this.expression();
	            break;

	        case 16:
	            localctx = new AtnStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 16);
	            this.state = 121;
	            this.match(GrammarParser.T__26);
	            this.state = 122;
	            this.expression();
	            break;

	        case 17:
	            localctx = new CosStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 17);
	            this.state = 123;
	            this.match(GrammarParser.T__27);
	            this.state = 124;
	            this.expression();
	            break;

	        case 18:
	            localctx = new ExpStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 18);
	            this.state = 125;
	            this.match(GrammarParser.T__28);
	            this.state = 126;
	            this.expression();
	            break;

	        case 19:
	            localctx = new IntStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 19);
	            this.state = 127;
	            this.match(GrammarParser.T__29);
	            this.state = 128;
	            this.expression();
	            break;

	        case 20:
	            localctx = new LogStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 20);
	            this.state = 129;
	            this.match(GrammarParser.T__30);
	            this.state = 130;
	            this.expression();
	            break;

	        case 21:
	            localctx = new RndStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 21);
	            this.state = 131;
	            this.match(GrammarParser.T__31);
	            this.state = 132;
	            this.expression();
	            break;

	        case 22:
	            localctx = new SinStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 22);
	            this.state = 133;
	            this.match(GrammarParser.T__32);
	            this.state = 134;
	            this.expression();
	            break;

	        case 23:
	            localctx = new SqrStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 23);
	            this.state = 135;
	            this.match(GrammarParser.T__33);
	            this.state = 136;
	            this.expression();
	            break;

	        case 24:
	            localctx = new TanStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 24);
	            this.state = 137;
	            this.match(GrammarParser.T__34);
	            this.state = 138;
	            this.expression();
	            break;

	        case 25:
	            localctx = new ReturnStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 25);
	            this.state = 139;
	            this.match(GrammarParser.T__35);
	            break;

	        case 26:
	            localctx = new IdStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 26);
	            this.state = 140;
	            this.match(GrammarParser.ID);
	            this.state = 141;
	            this.match(GrammarParser.T__7);
	            this.state = 142;
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



	idList() {
	    let localctx = new IdListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, GrammarParser.RULE_idList);
	    try {
	        this.state = 149;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 145;
	            this.match(GrammarParser.ID);
	            this.state = 146;
	            this.match(GrammarParser.T__36);
	            this.state = 147;
	            this.idList();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 148;
	            this.match(GrammarParser.ID);
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



	valueList() {
	    let localctx = new ValueListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, GrammarParser.RULE_valueList);
	    try {
	        this.state = 156;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 151;
	            this.value();
	            this.state = 152;
	            this.match(GrammarParser.T__36);
	            this.state = 153;
	            this.valueList();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 155;
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
	        this.state = 163;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 158;
	            this.constant();
	            this.state = 159;
	            this.match(GrammarParser.T__36);
	            this.state = 160;
	            this.constantList();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 162;
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
	        this.state = 169;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 165;
	            this.match(GrammarParser.Integer);
	            this.state = 166;
	            this.match(GrammarParser.T__36);
	            this.state = 167;
	            this.integerList();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 168;
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
	        this.state = 176;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 171;
	            this.expression();
	            this.state = 172;
	            this.match(GrammarParser.T__36);
	            this.state = 173;
	            this.expressionList();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 175;
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
	        this.state = 183;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ListPrintListContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 178;
	            localctx.head = this.expression();
	            this.state = 179;
	            localctx.sep = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===GrammarParser.T__1 || _la===GrammarParser.T__36)) {
	                localctx.sep = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 180;
	            localctx.tail = this.printList();
	            break;

	        case 2:
	            localctx = new AtomPrintListContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 182;
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
	        this.state = 190;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new OpExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 185;
	            localctx.left = this.andExp();
	            this.state = 186;
	            this.match(GrammarParser.T__37);
	            this.state = 187;
	            localctx.right = this.expression();
	            break;

	        case 2:
	            localctx = new AtomExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 189;
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
	        this.state = 197;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new OpAndExpContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 192;
	            localctx.left = this.notExp();
	            this.state = 193;
	            this.match(GrammarParser.T__38);
	            this.state = 194;
	            localctx.right = this.andExp();
	            break;

	        case 2:
	            localctx = new AtomAndExpContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 196;
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
	        this.state = 202;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case GrammarParser.T__39:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 199;
	            this.match(GrammarParser.T__39);
	            this.state = 200;
	            this.compareExp();
	            break;
	        case GrammarParser.T__3:
	        case GrammarParser.T__46:
	        case GrammarParser.ID:
	        case GrammarParser.Integer:
	        case GrammarParser.String:
	        case GrammarParser.Real:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 201;
	            this.compareExp();
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
	        this.state = 209;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new OpCompareExpContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 204;
	            localctx.left = this.addExp();
	            this.state = 205;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===GrammarParser.T__7 || ((((_la - 41)) & ~0x1f) == 0 && ((1 << (_la - 41)) & ((1 << (GrammarParser.T__40 - 41)) | (1 << (GrammarParser.T__41 - 41)) | (1 << (GrammarParser.T__42 - 41)) | (1 << (GrammarParser.T__43 - 41)) | (1 << (GrammarParser.T__44 - 41)))) !== 0))) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 206;
	            localctx.right = this.compareExp();
	            break;

	        case 2:
	            localctx = new AtomCompareExpContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 208;
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
	        this.state = 216;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new OpAddExpContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 211;
	            localctx.left = this.multExp();
	            this.state = 212;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===GrammarParser.T__45 || _la===GrammarParser.T__46)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 213;
	            localctx.right = this.addExp();
	            break;

	        case 2:
	            localctx = new AtomAddExpContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 215;
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
	        this.state = 223;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new OpMultExpContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 218;
	            localctx.left = this.negateExp();
	            this.state = 219;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===GrammarParser.T__47 || _la===GrammarParser.T__48)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 220;
	            localctx.right = this.multExp();
	            break;

	        case 2:
	            localctx = new AtomMultExpContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 222;
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
	        this.state = 228;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case GrammarParser.T__46:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 225;
	            this.match(GrammarParser.T__46);
	            this.state = 226;
	            this.powerExp(0);
	            break;
	        case GrammarParser.T__3:
	        case GrammarParser.ID:
	        case GrammarParser.Integer:
	        case GrammarParser.String:
	        case GrammarParser.Real:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 227;
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

	        this.state = 231;
	        localctx.atom = this.value();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 238;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new OpPowerExpContext(this, new PowerExpContext(this, _parentctx, _parentState));
	                localctx.left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_powerExp);
	                this.state = 233;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 234;
	                this.match(GrammarParser.T__49);
	                this.state = 235;
	                localctx.right = this.value(); 
	            }
	            this.state = 240;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
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
	        this.state = 247;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case GrammarParser.T__3:
	            localctx = new ExprValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 241;
	            this.match(GrammarParser.T__3);
	            this.state = 242;
	            localctx.expr = this.expression();
	            this.state = 243;
	            this.match(GrammarParser.T__4);
	            break;
	        case GrammarParser.ID:
	            localctx = new IDValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 245;
	            localctx.id = this.match(GrammarParser.ID);
	            break;
	        case GrammarParser.Integer:
	        case GrammarParser.String:
	        case GrammarParser.Real:
	            localctx = new ConstValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 246;
	            localctx.constv = this.constant();
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
	    this.enterRule(localctx, 36, GrammarParser.RULE_constant);
	    try {
	        this.state = 252;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case GrammarParser.Integer:
	            localctx = new ConstIntContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 249;
	            this.match(GrammarParser.Integer);
	            break;
	        case GrammarParser.String:
	            localctx = new ConstStringContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 250;
	            this.match(GrammarParser.String);
	            break;
	        case GrammarParser.Real:
	            localctx = new ConstRealContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 251;
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
	    this.enterRule(localctx, 38, GrammarParser.RULE_label);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 254;
	        this.match(GrammarParser.T__50);
	        this.state = 255;
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
GrammarParser.ID = 52;
GrammarParser.Integer = 53;
GrammarParser.String = 54;
GrammarParser.Real = 55;
GrammarParser.WS = 56;

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
GrammarParser.RULE_constant = 18;
GrammarParser.RULE_label = 19;

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


class OnGotoStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterOnGotoStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitOnGotoStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitOnGotoStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.OnGotoStatementContext = OnGotoStatementContext;

class SpcStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
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

class OnGosubStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterOnGosubStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitOnGosubStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitOnGosubStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.OnGosubStatementContext = OnGosubStatementContext;

class ExpStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterExpStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitExpStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitExpStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.ExpStatementContext = ExpStatementContext;

class ReadStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	idList() {
	    return this.getTypedRuleContext(IdListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterReadStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitReadStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitReadStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.ReadStatementContext = ReadStatementContext;

class ReturnStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


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

class TanStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterTanStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitTanStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitTanStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.TanStatementContext = TanStatementContext;

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

class IntStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterIntStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitIntStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitIntStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.IntStatementContext = IntStatementContext;

class DoWhileStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
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

class LogStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterLogStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitLogStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitLogStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.LogStatementContext = LogStatementContext;

class AbsStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterAbsStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitAbsStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitAbsStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.AbsStatementContext = AbsStatementContext;

class RndStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterRndStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitRndStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitRndStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.RndStatementContext = RndStatementContext;

class EndStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


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

class SinStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterSinStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitSinStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitSinStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.SinStatementContext = SinStatementContext;

class SqrStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterSqrStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitSqrStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitSqrStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.SqrStatementContext = SqrStatementContext;

class DimStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
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
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(GrammarParser.ID, 0);
	};

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

class CosStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterCosStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitCosStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitCosStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.CosStatementContext = CosStatementContext;

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

class IdStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
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

class AtnStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterAtnStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitAtnStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitAtnStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.AtnStatementContext = AtnStatementContext;

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

	ID() {
	    return this.getToken(GrammarParser.ID, 0);
	};

	idList() {
	    return this.getTypedRuleContext(IdListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterIdList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitIdList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitIdList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



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

	compareExp() {
	    return this.getTypedRuleContext(CompareExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterNotExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitNotExp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitNotExp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



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
GrammarParser.ConstantContext = ConstantContext; 
GrammarParser.LabelContext = LabelContext; 
