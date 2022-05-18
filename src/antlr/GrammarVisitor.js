// Generated from Grammar.g by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by GrammarParser.

export default class GrammarVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by GrammarParser#start.
	visitStart(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by GrammarParser#opExpr.
	visitOpExpr(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by GrammarParser#atomExpr.
	visitAtomExpr(ctx) {
	  return this.visitChildren(ctx);
	}



}