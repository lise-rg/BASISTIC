// Grammaire du langage BASIC
// Projet L3 Informatique

// relancer Antlr apres chaque modification

grammar Grammar;

options {
  language=Javascript; // k=1;
  caseInsensitive=true;
}

// partie syntaxique :  description de la grammaire //
// les non-terminaux doivent commencer par une minuscule

start:          subroutines? ('main' '{' main=statements '}')? ('update' '{' drawloop=statements '}')?
                ;

subroutines:    (lb=label '{' st=statements '}')+      
                ;

statements:     statement ';' (statements)?                                                                                                                                                                                                                                                             
                ;

statement   : 
                'DIM' ident=ID '(' list=integerList ')'                                                         #dimStatement
                | 'FOR' ident=ID '=' expression 'TO' expression ('STEP' step=Integer)? st=statements 'FEND'     #forStatement
                | 'GOSUB' label                                                                                 #gosubStatement
                | 'IF' cond=expression 'THEN' st=statements (alt=alternatives)? 'ENDIF'                         #ifStatement
                | 'WHILE' expression 'DO' statements 'WEND'                                                     #whileStatement
                | 'DO' statements 'WHILE' expression                                                            #doWhileStatement
                | 'INPUT' '(' idList ')'                                                                        #inputStatement
                | 'PRINT' '(' printList ')'                                                                     #printStatement
                | 'DRAWLINE' '(' expression ',' expression ',' expression ',' expression ')'                    #drawlineStatement
                | 'DRAWRECT' '(' expression ',' expression ',' expression ',' expression (',' color=expression)? ')'     #drawrectStatement
                | 'DRAWSQUARE' '(' expression ',' expression ',' expression (',' color=expression)? ')'                  #drawsquareStatement
                | 'DRAWCIRCLE' '(' expression ',' expression ',' expression (',' color=expression)? ')'                  #drawcircleStatement
                | 'DRAWTRIANGLE' '(' expression ',' expression ',' expression (',' color=expression)? ')'                #drawtriangleStatement
                | 'DRAWCLEAR' '(' expression ')'                                                                #drawclearStatement
                | 'DRAWCLEARAREA' '(' expression ',' expression ',' expression ',' expression ')'               #drawclearareaStatement
		            | ('LET')? ident=ID '=' exp=expression                                                          #idStatement
                | ('LET')? array=ID '(' index=expressionList ')' '=' exp=expression                             #arrayStatement
              	;

alternatives:   'ELIF' cond=expression 'THEN' elifst=statements (alt=alternatives)?                             #elifAlternative
                | 'ELSE' elsest=statements                                                                      #elseAlternative
                ;
                   
idList:         idhead=ID (',' idtail=idList)?                                                                  #listIdList
                | arrayhead=ID '(' index=expressionList ')' (',' arraytail=idList)?                             #arrayIdList
                ;

valueList      : value ',' valueList 
                    | value 
                  ;

constantList   : constant ',' constantList 
                    | constant 
                  ;

integerList:    head=Integer ',' tail=integerList                         #listIntegerList
                | atom=Integer                                            #atomIntegerList
                ;
                 
expressionList: head=expression ',' tail=expressionList                   #listExpressionList
                | atom=expression                                         #atomExpressionList
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
 
notExp:     'NOT' expr=compareExp                                         #opNotExp
            | atom=compareExp                                             #atomNotExp
            ;

compareExp: left=addExp op=('='|'<>'|'>'|'>='|'<'|'<=') right=compareExp  #opCompareExp
            | atom=addExp                                                 #atomCompareExp
            ;

addExp:     left=multExp op=('+'|'-') right=addExp                        #opAddExp
            | atom=multExp                                                #atomAddExp
            ;

multExp:    left=modExp op=('*'|'/') right=multExp                        #opMultExp
            | atom=modExp                                                 #atomMultExp
            ;

modExp:     left=negateExp '%' right=modExp                               #opModExp
            | atom=negateExp                                              #atomModExp
            ;

negateExp:  '-' expr=powerExp                                             #opNegateExp
            | atom=powerExp                                               #atomNegateExp
            ;

powerExp:   left=powerExp '^' right=value                                 #opPowerExp
            | atom=value                                                  #atomPowerExp
            ;

value:      '(' expr=expression ')'                                       #exprValue
            | func=function                                               #functionValue
            | array=ID '(' index=expressionList ')'                       #arrayValue
            | ident=ID                                                    #IDValue
            | constv=constant                                             #constValue
            ;

function:   'ABS' '(' expression ')'                                                                  
            | 'ATN' '(' expression ')'                                                                      
            | 'COS' '(' expression ')'                                                                     
            | 'EXP' '(' expression ')'                                                                                                   
            | 'INT' '(' expression ')'                                                                    
            | 'LN' '(' expression ')'                                                                
            | 'RND' '(' expression ')'                                                                   
            | 'SIN' '(' expression ')'                                                                  
            | 'SQR' '(' expression ')'                                                                   
            | 'TAN' '(' expression ')'
            | 'LOG' '(' expression ')'
            | 'DTR' '(' expression ')'
            | 'RTD' '(' expression ')'
            | 'GCD' '(' expression ',' expression ')'    
            | 'MIN' '(' expression ',' expression ')'
            | 'MAX' '(' expression ',' expression ')'
            | 'RGB' '(' expression ',' expression ',' expression ')'
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

ID :        [A-Z][A-Z0-9_]*
            ;

Integer:    [0-9]+
            ;

String:     '"'[\u0020\u0021\u0023-\u00ff]*'"'
            ;

Real:       Integer '.' Integer
            ;

WS:         [\n\t\r ] -> skip
            ;

COMMENT:  //tout ce qui suit un caractere '//' sur une ligne est un commentaire
          '//' [\u0020\u0021\u0023-\u00ff]* -> skip
          ;