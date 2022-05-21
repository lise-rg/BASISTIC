// Grammaire du langage BASIC
// Projet L3 Informatique

// relancer Antlr apres chaque modification

grammar Grammar;

options {
  language=Javascript; // k=1;
}

// partie syntaxique :  description de la grammaire //
// les non-terminaux doivent commencer par une minuscule

start       : statements
              ;

statements:     statement ';' statements                                                            #statementStatements
                | 'GOTO' label ';' statements                                                       #gotoStatements
                | label ':' statements                                                              #labelStatements
                | statement                                                                         #atomStatement
                ;

statement   : 
                'DIM' ID '(' integerList ')'                                                        #dimStatement
                | 'END'                                                                             #endStatement
                | 'FOR' ID '=' expression 'TO' expression ('STEP' Integer)? statements 'FEND'       #forStatement
                | 'GOSUB' label                                                                     #gosubStatement
                | 'ON' expression 'GOTO' label                                                      #onGotoStatement
                | 'ON' expression 'GOSUB' label                                                     #onGosubStatement
                | 'IF' expression 'THEN' statement ('ELSE' statement)?                              #ifStatement
                | 'WHILE' expression 'DO' statements 'WEND'                                         #whileStatement
                | 'DO' statement 'LOOP WHILE' expression                                            #doWhileStatement
                | 'INPUT' idList                                                                    #inputStatement
                | 'PRINT' printList                                                                 #printStatement
                | 'SPC' Integer                                                                     #spcStatement
                | 'READ' idList                                                                     #readStatement
                | 'ABS' expression                                                                  #absStatement
                | 'ATN' expression                                                                  #atnStatement
                | 'COS' expression                                                                  #cosStatement
                | 'EXP' expression                                                                  #expStatement
                | 'INT' expression                                                                  #intStatement
                | 'LOG' expression                                                                  #logStatement
                | 'RND' expression                                                                  #rndStatement
                | 'SIN' expression                                                                  #sinStatement
                | 'SQR' expression                                                                  #sqrStatement
                | 'TAN' expression                                                                  #tanStatement
                | 'RETURN'                                                                          #returnStatement
		            | ID '=' expression                                                                 #idStatement
              	;
                   
idList  : ID ',' idList 
             | ID 
            ;

valueList      : value ',' valueList 
                    | value 
                  ;

constantList   : constant ',' constantList 
                    | constant 
                  ;

integerList    : Integer ',' integerList
                    | Integer
                  ;
                 
expressionList : expression ',' expressionList 
                    | expression 
                  ;

printList:  head=expression ',' tail=printList                            #listPrintList
            | atom=expression                                             #atomPrintList
            ;

expression: left=andExp 'OR' right=expression                             #opExpression
            | atom=andExp                                                 #atomExpression
            ;

andExp:     left=notExp 'AND' right=andExp                                #opAndExp
            | atom=notExp                                                 #atomAndExp
            ;
 
notExp:     'NOT' compareExp                                        
            | compareExp 
            ;

compareExp: left=addExp op=('='|'<>'|'>'|'>='|'<'|'<=') right=compareExp  #opCompareExp
            | atom=addExp                                                 #atomCompareExp
            ;

addExp:     left=multExp op=('+'|'-') right=addExp                        #opAddExp
            | atom=multExp                                                #atomAddExp
            ;

multExp:    left=negateExp op=('*'|'/') right=multExp                     #opMultExp
            | atom=negateExp                                              #atomMultExp
            ;

negateExp:  '-' powerExp 
            | powerExp 
            ;

powerExp:   left=powerExp '^' right=value                                 #opPowerExp
            | atom=value                                                  #atomPowerExp
            ;

value:      '(' expr=expression ')'                                       #exprValue
            | id=ID                                                       #IDValue
            | constv=constant                                             #constValue
            ;

constant:   Integer                                                       #constInt
            | String                                                      #constString
            | Real                                                        #constReal
            ;

label:      '_' ID
            ;

// les unites lexicales de ANTLR doivent commencer par une majuscule
// Attention : ANTLR n'autorise pas certains traitements sur les unites lexicales, 
// il est alors ncessaire de passer par un non-terminal intermediaire 
     
// zone lexicale //


ID : [A-Za-z]+
;

Integer : [0-9]+
;

String : '"'[\u0020\u0021\u0023-\u00ff]+'"'
;

Real : Integer'.'Integer
;

WS: 
  [\n\t\r ] -> skip
  ;
