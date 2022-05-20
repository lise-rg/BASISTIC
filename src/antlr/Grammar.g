// Grammaire du langage BASIC
// Projet L3 Informatique

// relancer Antlr apres chaque modification

grammar basic;

options {
  language=Javascript; // k=1;
}

// partie syntaxique :  description de la grammaire //
// les non-terminaux doivent commencer par une minuscule

start       : statements
              ;

statements  : statement ':' statements
                | statement
              ;

statement   : 
                'DIM' ID '(' integerList ')'
                | 'END'             
                | 'FOR' ID '=' expression 'TO' expression ('STEP' Integer)?      
                | 'GOTO' expression 
                | 'GOSUB' expression 
                | 'ON' expression 'GOTO' expression
                | 'ON' expression 'GOSUB' expression
                | 'IF' expression 'THEN' statement ('ELSE' statement)?  
                | 'WHILE' expression 'DO' statement 'WEND'
                | 'DO' statement 'LOOP WHILE' expression 
                | 'INPUT' idList             
                | 'PRINT' printList
                | 'SPC' Integer
                | 'READ' idList
                | 'ABS' expression
                | 'ATN' expression
                | 'COS' expression
                | 'EXP' expression
                | 'INT' expression
                | 'LOG' expression
                | 'RND' expression
                | 'SIN' expression
                | 'SQR' expression
                | 'TAN' expression           
                | 'RETURN'
		| ID '=' expression 
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

printList      : expression ';' printList
                    | expression 
                    |  
                  ;

expression  : andExp 'OR' expression 
                | andExp 
              ;

andExp     : notExp 'AND' andExp 
                | notExp 
              ;
 
notExp     : 'NOT' compareExp 
                | compareExp 
              ;

compareExp : addExp '='  compareExp 
                | addExp '<>' compareExp 
                | addExp '>'  compareExp 
                | addExp '>=' compareExp 
                | addExp '<'  compareExp 
                | addExp '<=' compareExp 
                | addExp 
              ;

addExp     : multExp '+' addExp 
                | multExp '-' addExp 
                | multExp 
              ;

multExp    : negateExp '*' multExp 
                | negateExp '/' multExp 
                | negateExp 
              ;

negateExp  : '-' powerExp 
                | powerExp 
              ;

powerExp   : powerExp '^' value 
                | value 
              ;

value       : '(' expression ')'
                | ID 
                | constant 
              ;

constant: Integer   #constInt
          | String  #constString
          | Real    #constReal
          ;

// les unites lexicales de ANTLR doivent commencer par une majuscule
// Attention : ANTLR n'autorise pas certains traitements sur les unites lexicales, 
// il est alors ncessaire de passer par un non-terminal intermediaire 
     
// zone lexicale //


ID : [A-z]+
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
