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

statements:     statement (';' statements)?                                                                 #statementStatements
                | label ':' (statements)?                                                                   #labelStatements
                ;

statement   : 
                'DIM' id=ID '(' list=integerList ')'                                                        #dimStatement
                | 'END'                                                                                     #endStatement
                | 'FOR' id=ID '=' expression 'TO' expression ('STEP' step=Integer)? st=statements 'FEND'       #forStatement
                | 'GOTO' label (';' statements)?                                                            #gotoStatement
                | 'GOSUB' label                                                                             #gosubStatement
                | 'ON' expression 'GOTO' label                                                              #onGotoStatement
                | 'ON' expression 'GOSUB' label                                                             #onGosubStatement
                | 'IF' expression 'THEN' statements ('ELSE' statements)?                                    #ifStatement
                | 'WHILE' expression 'DO' statements 'WEND'                                                 #whileStatement
                | 'DO' statements 'WHILE' expression                                                        #doWhileStatement
                | 'INPUT' idList                                                                            #inputStatement
                | 'PRINT' printList                                                                         #printStatement
                | 'SPC' value=Integer                                                                             #spcStatement
                | 'DRAWLINE' '(' expression ',' expression ',' expression ',' expression ')'                #drawlineStatement
                | 'DRAWRECT' '(' expression ',' expression ',' expression ',' expression ')'                #drawrectStatement
                | 'DRAWSQUARE' '(' expression ',' expression ',' expression ')'                             #drawsquareStatement
                | 'DRAWCIRLE' '(' expression ',' expression ',' expression ')'                              #drawcircleStatement
                | 'DRAWTRIANGLE' '(' expression ',' expression ',' expression ')'                           #drawtriangleStatement
                | 'RETURN'                                                                                  #returnStatement
		            | ('LET')? id=ID '=' exp=expression                                                                #idStatement
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

printList:  head=expression sep=(','|':') tail=printList                  #listPrintList
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
            | func=function                                               #functionValue
            | array=ID '(' index=expressionList ')'                       #arrayValue
            | id=ID                                                       #IDValue
            | constv=constant                                             #constValue
            ;

function:   'ABS' '(' expression ')'                                      #absFunction                         
            | 'ATN' '(' expression ')'                                    #atnFunction                    
            | 'COS' '(' expression ')'                                    #cosFunction                     
            | 'EXP' '(' expression ')'                                    #expFunction                    
            | 'INT' '(' expression ')'                                    #intFunction                    
            | 'LOG' '(' expression ')'                                    #logFunction                            
            | 'RND' '(' expression ')'                                    #rndFunction                               
            | 'SIN' '(' expression ')'                                    #sinFunction                             
            | 'SQR' '(' expression ')'                                    #sqrFunction                               
            | 'TAN' '(' expression ')'                                    #tanFunction
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

ID :        [A-Za-z]+[0-9_]*
            ;

Integer:    [0-9]+
            ;

String:     '"'[\u0020\u0021\u0023-\u00ff]*'"'
            ;

Real:       Integer.Integer
            ;

WS:         [\n\t\r ] -> skip
            ;
