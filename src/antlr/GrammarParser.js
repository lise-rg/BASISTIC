// Generated from Grammar.g by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import GrammarListener from './GrammarListener.js';
import GrammarVisitor from './GrammarVisitor.js';

const serializedATN = [4,1,24,105,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,0,1,
1,1,1,1,1,4,1,30,8,1,11,1,12,1,31,1,2,1,2,1,2,1,2,1,2,1,2,3,2,40,8,2,1,3,
1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,58,8,5,1,
6,1,6,1,6,1,6,1,6,1,6,3,6,66,8,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,
1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,3,9,89,8,9,1,9,1,9,1,9,5,9,94,
8,9,10,9,12,9,97,9,9,1,10,1,10,1,10,1,10,1,11,1,11,1,11,0,1,18,12,0,2,4,
6,8,10,12,14,16,18,20,22,0,2,1,0,14,15,1,0,16,21,102,0,24,1,0,0,0,2,29,1,
0,0,0,4,39,1,0,0,0,6,41,1,0,0,0,8,46,1,0,0,0,10,57,1,0,0,0,12,59,1,0,0,0,
14,69,1,0,0,0,16,75,1,0,0,0,18,88,1,0,0,0,20,98,1,0,0,0,22,102,1,0,0,0,24,
25,3,2,1,0,25,1,1,0,0,0,26,27,3,4,2,0,27,28,5,1,0,0,28,30,1,0,0,0,29,26,
1,0,0,0,30,31,1,0,0,0,31,29,1,0,0,0,31,32,1,0,0,0,32,3,1,0,0,0,33,40,3,12,
6,0,34,40,3,14,7,0,35,40,3,16,8,0,36,40,3,10,5,0,37,40,3,6,3,0,38,40,3,8,
4,0,39,33,1,0,0,0,39,34,1,0,0,0,39,35,1,0,0,0,39,36,1,0,0,0,39,37,1,0,0,
0,39,38,1,0,0,0,40,5,1,0,0,0,41,42,5,2,0,0,42,43,5,23,0,0,43,44,5,3,0,0,
44,45,3,18,9,0,45,7,1,0,0,0,46,47,5,23,0,0,47,48,5,3,0,0,48,49,3,18,9,0,
49,9,1,0,0,0,50,51,5,4,0,0,51,52,3,18,9,0,52,53,5,5,0,0,53,58,1,0,0,0,54,
55,5,4,0,0,55,56,5,23,0,0,56,58,5,5,0,0,57,50,1,0,0,0,57,54,1,0,0,0,58,11,
1,0,0,0,59,60,5,6,0,0,60,61,3,20,10,0,61,62,5,7,0,0,62,65,3,2,1,0,63,64,
5,8,0,0,64,66,3,2,1,0,65,63,1,0,0,0,65,66,1,0,0,0,66,67,1,0,0,0,67,68,5,
9,0,0,68,13,1,0,0,0,69,70,5,10,0,0,70,71,3,20,10,0,71,72,5,11,0,0,72,73,
3,2,1,0,73,74,5,9,0,0,74,15,1,0,0,0,75,76,5,12,0,0,76,77,3,18,9,0,77,78,
5,13,0,0,78,79,3,18,9,0,79,80,5,13,0,0,80,81,3,18,9,0,81,82,5,13,0,0,82,
83,3,18,9,0,83,84,5,5,0,0,84,17,1,0,0,0,85,86,6,9,-1,0,86,89,3,22,11,0,87,
89,5,23,0,0,88,85,1,0,0,0,88,87,1,0,0,0,89,95,1,0,0,0,90,91,10,3,0,0,91,
92,7,0,0,0,92,94,3,18,9,4,93,90,1,0,0,0,94,97,1,0,0,0,95,93,1,0,0,0,95,96,
1,0,0,0,96,19,1,0,0,0,97,95,1,0,0,0,98,99,3,18,9,0,99,100,7,1,0,0,100,101,
3,18,9,0,101,21,1,0,0,0,102,103,5,22,0,0,103,23,1,0,0,0,6,31,39,57,65,88,
95];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class GrammarParser extends antlr4.Parser {

    static grammarFileName = "Grammar.g";
    static literalNames = [ null, "';'", "'var'", "'='", "'print('", "')'", 
                            "'if'", "'then'", "'else'", "'end'", "'while'", 
                            "'do'", "'drawline('", "','", "'+'", "'-'", 
                            "'>'", "'<'", "'>='", "'<='", "'=='", "'!='" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "NB", "IDENT", 
                             "WS" ];
    static ruleNames = [ "start", "instructions", "instruction", "initialization", 
                         "assignement", "print", "ifcond", "whilecond", 
                         "drawline", "expr", "condition", "number" ];

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
    	case 9:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 3);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, GrammarParser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.instructions();
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



	instructions() {
	    let localctx = new InstructionsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, GrammarParser.RULE_instructions);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 26;
	            this.instruction();
	            this.state = 27;
	            this.match(GrammarParser.T__0);
	            this.state = 31; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__1) | (1 << GrammarParser.T__3) | (1 << GrammarParser.T__5) | (1 << GrammarParser.T__9) | (1 << GrammarParser.T__11) | (1 << GrammarParser.IDENT))) !== 0));
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



	instruction() {
	    let localctx = new InstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, GrammarParser.RULE_instruction);
	    try {
	        this.state = 39;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case GrammarParser.T__5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 33;
	            this.ifcond();
	            break;
	        case GrammarParser.T__9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 34;
	            this.whilecond();
	            break;
	        case GrammarParser.T__11:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 35;
	            this.drawline();
	            break;
	        case GrammarParser.T__3:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 36;
	            this.print();
	            break;
	        case GrammarParser.T__1:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 37;
	            this.initialization();
	            break;
	        case GrammarParser.IDENT:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 38;
	            this.assignement();
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



	initialization() {
	    let localctx = new InitializationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, GrammarParser.RULE_initialization);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this.match(GrammarParser.T__1);
	        this.state = 42;
	        localctx.ident = this.match(GrammarParser.IDENT);
	        this.state = 43;
	        this.match(GrammarParser.T__2);
	        this.state = 44;
	        localctx.value = this.expr(0);
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



	assignement() {
	    let localctx = new AssignementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, GrammarParser.RULE_assignement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        localctx.ident = this.match(GrammarParser.IDENT);
	        this.state = 47;
	        this.match(GrammarParser.T__2);
	        this.state = 48;
	        localctx.value = this.expr(0);
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



	print() {
	    let localctx = new PrintContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, GrammarParser.RULE_print);
	    try {
	        this.state = 57;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new PrintExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 50;
	            this.match(GrammarParser.T__3);
	            this.state = 51;
	            localctx.argExpr = this.expr(0);
	            this.state = 52;
	            this.match(GrammarParser.T__4);
	            break;

	        case 2:
	            localctx = new PrintIdentContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 54;
	            this.match(GrammarParser.T__3);
	            this.state = 55;
	            localctx.argIdent = this.match(GrammarParser.IDENT);
	            this.state = 56;
	            this.match(GrammarParser.T__4);
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



	ifcond() {
	    let localctx = new IfcondContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, GrammarParser.RULE_ifcond);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(GrammarParser.T__5);
	        this.state = 60;
	        localctx.cond = this.condition();
	        this.state = 61;
	        this.match(GrammarParser.T__6);
	        this.state = 62;
	        localctx.ifInstructions = this.instructions();
	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GrammarParser.T__7) {
	            this.state = 63;
	            this.match(GrammarParser.T__7);
	            this.state = 64;
	            localctx.elseInstructions = this.instructions();
	        }

	        this.state = 67;
	        this.match(GrammarParser.T__8);
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



	whilecond() {
	    let localctx = new WhilecondContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, GrammarParser.RULE_whilecond);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.match(GrammarParser.T__9);
	        this.state = 70;
	        localctx.cond = this.condition();
	        this.state = 71;
	        this.match(GrammarParser.T__10);
	        this.state = 72;
	        localctx.inst = this.instructions();
	        this.state = 73;
	        this.match(GrammarParser.T__8);
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



	drawline() {
	    let localctx = new DrawlineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, GrammarParser.RULE_drawline);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this.match(GrammarParser.T__11);
	        this.state = 76;
	        this.expr(0);
	        this.state = 77;
	        this.match(GrammarParser.T__12);
	        this.state = 78;
	        this.expr(0);
	        this.state = 79;
	        this.match(GrammarParser.T__12);
	        this.state = 80;
	        this.expr(0);
	        this.state = 81;
	        this.match(GrammarParser.T__12);
	        this.state = 82;
	        this.expr(0);
	        this.state = 83;
	        this.match(GrammarParser.T__4);
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


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 18;
	    this.enterRecursionRule(localctx, 18, GrammarParser.RULE_expr, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case GrammarParser.NB:
	            localctx = new AtomExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 86;
	            localctx.atom = this.number();
	            break;
	        case GrammarParser.IDENT:
	            localctx = new IdentExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 87;
	            localctx.ident = this.match(GrammarParser.IDENT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 95;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new AddExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                localctx.left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_expr);
	                this.state = 90;
	                if (!( this.precpred(this._ctx, 3))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                }
	                this.state = 91;
	                localctx.op = this._input.LT(1);
	                _la = this._input.LA(1);
	                if(!(_la===GrammarParser.T__13 || _la===GrammarParser.T__14)) {
	                    localctx.op = this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 92;
	                localctx.right = this.expr(4); 
	            }
	            this.state = 97;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
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



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, GrammarParser.RULE_condition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        localctx.left = this.expr(0);
	        this.state = 99;
	        localctx.op = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__15) | (1 << GrammarParser.T__16) | (1 << GrammarParser.T__17) | (1 << GrammarParser.T__18) | (1 << GrammarParser.T__19) | (1 << GrammarParser.T__20))) !== 0))) {
	            localctx.op = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 100;
	        localctx.right = this.expr(0);
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



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, GrammarParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        localctx.value = this.match(GrammarParser.NB);
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
GrammarParser.NB = 22;
GrammarParser.IDENT = 23;
GrammarParser.WS = 24;

GrammarParser.RULE_start = 0;
GrammarParser.RULE_instructions = 1;
GrammarParser.RULE_instruction = 2;
GrammarParser.RULE_initialization = 3;
GrammarParser.RULE_assignement = 4;
GrammarParser.RULE_print = 5;
GrammarParser.RULE_ifcond = 6;
GrammarParser.RULE_whilecond = 7;
GrammarParser.RULE_drawline = 8;
GrammarParser.RULE_expr = 9;
GrammarParser.RULE_condition = 10;
GrammarParser.RULE_number = 11;

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

	instructions() {
	    return this.getTypedRuleContext(InstructionsContext,0);
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



class InstructionsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_instructions;
    }

	instruction = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstructionContext);
	    } else {
	        return this.getTypedRuleContext(InstructionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterInstructions(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitInstructions(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitInstructions(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_instruction;
    }

	ifcond() {
	    return this.getTypedRuleContext(IfcondContext,0);
	};

	whilecond() {
	    return this.getTypedRuleContext(WhilecondContext,0);
	};

	drawline() {
	    return this.getTypedRuleContext(DrawlineContext,0);
	};

	print() {
	    return this.getTypedRuleContext(PrintContext,0);
	};

	initialization() {
	    return this.getTypedRuleContext(InitializationContext,0);
	};

	assignement() {
	    return this.getTypedRuleContext(AssignementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitInstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InitializationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_initialization;
        this.ident = null; // Token
        this.value = null; // ExprContext
    }

	IDENT() {
	    return this.getToken(GrammarParser.IDENT, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterInitialization(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitInitialization(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitInitialization(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_assignement;
        this.ident = null; // Token
        this.value = null; // ExprContext
    }

	IDENT() {
	    return this.getToken(GrammarParser.IDENT, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterAssignement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitAssignement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitAssignement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrintContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_print;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class PrintIdentContext extends PrintContext {

    constructor(parser, ctx) {
        super(parser);
        this.argIdent = null; // Token;
        super.copyFrom(ctx);
    }

	IDENT() {
	    return this.getToken(GrammarParser.IDENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterPrintIdent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitPrintIdent(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitPrintIdent(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.PrintIdentContext = PrintIdentContext;

class PrintExprContext extends PrintContext {

    constructor(parser, ctx) {
        super(parser);
        this.argExpr = null; // ExprContext;
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterPrintExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitPrintExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitPrintExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.PrintExprContext = PrintExprContext;

class IfcondContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_ifcond;
        this.cond = null; // ConditionContext
        this.ifInstructions = null; // InstructionsContext
        this.elseInstructions = null; // InstructionsContext
    }

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	instructions = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstructionsContext);
	    } else {
	        return this.getTypedRuleContext(InstructionsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterIfcond(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitIfcond(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitIfcond(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WhilecondContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_whilecond;
        this.cond = null; // ConditionContext
        this.inst = null; // InstructionsContext
    }

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	instructions() {
	    return this.getTypedRuleContext(InstructionsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterWhilecond(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitWhilecond(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitWhilecond(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DrawlineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_drawline;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterDrawline(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitDrawline(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitDrawline(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class IdentExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.ident = null; // Token;
        super.copyFrom(ctx);
    }

	IDENT() {
	    return this.getToken(GrammarParser.IDENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterIdentExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitIdentExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitIdentExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.IdentExprContext = IdentExprContext;

class AddExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // ExprContext;
        this.op = null; // Token;
        this.right = null; // ExprContext;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterAddExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitAddExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitAddExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.AddExprContext = AddExprContext;

class AtomExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.atom = null; // NumberContext;
        super.copyFrom(ctx);
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterAtomExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitAtomExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitAtomExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.AtomExprContext = AtomExprContext;

class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_condition;
        this.left = null; // ExprContext
        this.op = null; // Token
        this.right = null; // ExprContext
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitCondition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitCondition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_number;
        this.value = null; // Token
    }

	NB() {
	    return this.getToken(GrammarParser.NB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




GrammarParser.StartContext = StartContext; 
GrammarParser.InstructionsContext = InstructionsContext; 
GrammarParser.InstructionContext = InstructionContext; 
GrammarParser.InitializationContext = InitializationContext; 
GrammarParser.AssignementContext = AssignementContext; 
GrammarParser.PrintContext = PrintContext; 
GrammarParser.IfcondContext = IfcondContext; 
GrammarParser.WhilecondContext = WhilecondContext; 
GrammarParser.DrawlineContext = DrawlineContext; 
GrammarParser.ExprContext = ExprContext; 
GrammarParser.ConditionContext = ConditionContext; 
GrammarParser.NumberContext = NumberContext; 
