// Generated from Grammar.g by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import GrammarListener from './GrammarListener.js';
import GrammarVisitor from './GrammarVisitor.js';

const serializedATN = [4,1,10,64,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,1,1,1,1,1,4,1,22,8,1,11,1,12,1,23,1,2,
1,2,1,2,3,2,29,8,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,
5,1,5,1,5,3,5,47,8,5,1,6,1,6,1,6,3,6,52,8,6,1,6,1,6,1,6,5,6,57,8,6,10,6,
12,6,60,9,6,1,7,1,7,1,7,0,1,12,8,0,2,4,6,8,10,12,14,0,1,1,0,6,7,61,0,16,
1,0,0,0,2,21,1,0,0,0,4,28,1,0,0,0,6,30,1,0,0,0,8,35,1,0,0,0,10,46,1,0,0,
0,12,51,1,0,0,0,14,61,1,0,0,0,16,17,3,2,1,0,17,1,1,0,0,0,18,19,3,4,2,0,19,
20,5,1,0,0,20,22,1,0,0,0,21,18,1,0,0,0,22,23,1,0,0,0,23,21,1,0,0,0,23,24,
1,0,0,0,24,3,1,0,0,0,25,29,3,8,4,0,26,29,3,6,3,0,27,29,3,10,5,0,28,25,1,
0,0,0,28,26,1,0,0,0,28,27,1,0,0,0,29,5,1,0,0,0,30,31,5,2,0,0,31,32,5,9,0,
0,32,33,5,3,0,0,33,34,3,12,6,0,34,7,1,0,0,0,35,36,5,9,0,0,36,37,5,3,0,0,
37,38,3,12,6,0,38,9,1,0,0,0,39,40,5,4,0,0,40,41,3,12,6,0,41,42,5,5,0,0,42,
47,1,0,0,0,43,44,5,4,0,0,44,45,5,9,0,0,45,47,5,5,0,0,46,39,1,0,0,0,46,43,
1,0,0,0,47,11,1,0,0,0,48,49,6,6,-1,0,49,52,3,14,7,0,50,52,5,9,0,0,51,48,
1,0,0,0,51,50,1,0,0,0,52,58,1,0,0,0,53,54,10,3,0,0,54,55,7,0,0,0,55,57,3,
12,6,4,56,53,1,0,0,0,57,60,1,0,0,0,58,56,1,0,0,0,58,59,1,0,0,0,59,13,1,0,
0,0,60,58,1,0,0,0,61,62,5,8,0,0,62,15,1,0,0,0,5,23,28,46,51,58];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class GrammarParser extends antlr4.Parser {

    static grammarFileName = "Grammar.g";
    static literalNames = [ null, "';'", "'var'", "'='", "'print('", "')'", 
                            "'+'", "'-'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "NB", "IDENT", "WS" ];
    static ruleNames = [ "start", "instructions", "instruction", "initialization", 
                         "assignement", "print", "expr", "number" ];

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
    	case 6:
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
	        this.state = 16;
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
	        this.state = 21; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.instruction();
	            this.state = 19;
	            this.match(GrammarParser.T__0);
	            this.state = 23; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__1) | (1 << GrammarParser.T__3) | (1 << GrammarParser.IDENT))) !== 0));
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
	        this.state = 28;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case GrammarParser.IDENT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 25;
	            this.assignement();
	            break;
	        case GrammarParser.T__1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 26;
	            this.initialization();
	            break;
	        case GrammarParser.T__3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 27;
	            this.print();
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
	        this.state = 30;
	        this.match(GrammarParser.T__1);
	        this.state = 31;
	        localctx.ident = this.match(GrammarParser.IDENT);
	        this.state = 32;
	        this.match(GrammarParser.T__2);
	        this.state = 33;
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
	        this.state = 35;
	        localctx.ident = this.match(GrammarParser.IDENT);
	        this.state = 36;
	        this.match(GrammarParser.T__2);
	        this.state = 37;
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
	        this.state = 46;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new PrintExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 39;
	            this.match(GrammarParser.T__3);
	            this.state = 40;
	            localctx.argExpr = this.expr(0);
	            this.state = 41;
	            this.match(GrammarParser.T__4);
	            break;

	        case 2:
	            localctx = new PrintIdentContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 43;
	            this.match(GrammarParser.T__3);
	            this.state = 44;
	            localctx.argIdent = this.match(GrammarParser.IDENT);
	            this.state = 45;
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


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 12;
	    this.enterRecursionRule(localctx, 12, GrammarParser.RULE_expr, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case GrammarParser.NB:
	            localctx = new AtomExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 49;
	            localctx.atom = this.number();
	            break;
	        case GrammarParser.IDENT:
	            localctx = new IdentExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 50;
	            localctx.ident = this.match(GrammarParser.IDENT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 58;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new AddExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                localctx.left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_expr);
	                this.state = 53;
	                if (!( this.precpred(this._ctx, 3))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                }
	                this.state = 54;
	                localctx.op = this._input.LT(1);
	                _la = this._input.LA(1);
	                if(!(_la===GrammarParser.T__5 || _la===GrammarParser.T__6)) {
	                    localctx.op = this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 55;
	                localctx.right = this.expr(4); 
	            }
	            this.state = 60;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
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



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, GrammarParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
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
GrammarParser.NB = 8;
GrammarParser.IDENT = 9;
GrammarParser.WS = 10;

GrammarParser.RULE_start = 0;
GrammarParser.RULE_instructions = 1;
GrammarParser.RULE_instruction = 2;
GrammarParser.RULE_initialization = 3;
GrammarParser.RULE_assignement = 4;
GrammarParser.RULE_print = 5;
GrammarParser.RULE_expr = 6;
GrammarParser.RULE_number = 7;

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

	assignement() {
	    return this.getTypedRuleContext(AssignementContext,0);
	};

	initialization() {
	    return this.getTypedRuleContext(InitializationContext,0);
	};

	print() {
	    return this.getTypedRuleContext(PrintContext,0);
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
GrammarParser.ExprContext = ExprContext; 
GrammarParser.NumberContext = NumberContext; 
