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

statement   : 'CLOSE' '#' Integer
                | 'DATA' constantList 
                | 'DIM' ID '(' integerList ')'
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
                | 'LET' ID '=' expression 
                | 'NEXT' idList               
                | 'PRINT' printList
                | 'SPC' Integer
                | 'READ' idList  
                | 'LIST' 
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
                | 'RESTORE'
                | 'STOP'
              ;

access   : 'INPUT'
             | 'OUPUT'
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
                | addExp '><' compareExp 
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
                | ID '(' expressionList ')'
                | constant 
              ;

constant : Integer
             | String
             | Real
            ;

// les unites lexicales de ANTLR doivent commencer par une majuscule
// Attention : ANTLR n'autorise pas certains traitements sur les unites lexicales, 
// il est alors ncessaire de passer par un non-terminal intermediaire 
     
// zone lexicale //


ID : [A-Za-z]+
;

Integer : [0-9]+
;

String : '"'[A-Za-z]+'"'
;

Real : [0-9]+ '.' [0-9]+
;

WS: 
  [\n\t\r ] -> skip
  ;






//NewLine        : {CR}{LF}|{CR} ;

//ID             : {Letter}[$%]? ;
//String         : '"'(Chars)*'"' ;
//Chars          : String Chars ;

//Real           : {Integer}.{Integer} ;
//Integer        : '0'..'9'+ ;
//WS             : (' '|'\t' |'\r')+ {skip();} ; // definition des "blocs d'espaces"
//RC             : ('\n') {UtilLex.incrementeLigne(); skip() ;} ; // definition d'un unique "passage a la ligne" et comptage des numeros de lignes

//COMMENT
//  :  '\{' (.)* '\}' {skip();}   // toute suite de caracteres entouree d'accolades est un commentaire
//  |  '#' ~( '\r' | '\n' )* {skip();}  // tout ce qui suit un caractere diese sur une ligne est un commentaire
//  ;

// commentaires sur plusieurs lignes
// ML_COMMENT    :   '/*' (options {greedy=false;} : .)* '*/' {$channel=HIDDEN;} ;
