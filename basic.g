// Grammaire du langage BASIC
// Projet L3 Informatique

// relancer Antlr apres chaque modification
// attention l'analyse est poursuivie apres erreur si l'on supprime la clause rulecatch

grammar basic;

options {
  language=Javascript; // k=1;
}

@header {           
import java.io.IOException;
import java.io.DataInputStream;
import java.io.FileInputStream;
} 


// partie syntaxique :  description de la grammaire //
// les non-terminaux doivent commencer par une minuscule


@members {

 
// variables globales et methodes utiles a placer ici
  
}
// la directive rulecatch permet d'interrompre l'analyse a la premiere erreur de syntaxe
@rulecatch {
catch (RecognitionException e) {reportError (e) ; throw e ; }}

lines       : Integer statements NewLine lines 
                | Integer statements NewLine
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
                | 'ABS' expression                                              // absolute value
                | 'ATN' expression                                              // arctangent (result in radians)
                | 'COS' expression                                              // cosine (argument in radians)
                | 'EXP' expression                                              // exponential function
                | 'INT' expression                                              // integer part (typically floor function)
                | 'LOG' expression                                              // natural logarithm
                | 'RND' expression                                              // random number generation
                | 'SIN' expression                                              // sine (argument in radians)
                | 'SQR' expression                                              // square root
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

// partie lexicale  : cette partie ne doit pas etre modifiee  //
// les unites lexicales de ANTLR doivent commencer par une majuscule
// Attention : ANTLR n'autorise pas certains traitements sur les unites lexicales, 
// il est alors ncessaire de passer par un non-terminal intermediaire 
// exemple : pour l'unit lexicale INT, le non-terminal nbentier a du etre introduit
 
// tous les identificateurs seront places dans la table des identificateurs, y compris le nom du programme ou module
// (NB: la table des symboles n'est pas geree au niveau lexical mais au niveau du compilateur)
     
// zone purement lexicale //

NewLine        : {CR}{LF}|{CR} ;

ID             : {Letter}[$%]? ;
String         : '"'(Chars)*'"' ;
Chars          : String Chars ;

Real           : {Integer}.{Integer} ;
Integer        : '0'..'9'+ ;
WS             : (' '|'\t' |'\r')+ {skip();} ; // definition des "blocs d'espaces"
RC             : ('\n') {UtilLex.incrementeLigne(); skip() ;} ; // definition d'un unique "passage a la ligne" et comptage des numeros de lignes

COMMENT
  :  '\{' (.)* '\}' {skip();}   // toute suite de caracteres entouree d'accolades est un commentaire
  |  '#' ~( '\r' | '\n' )* {skip();}  // tout ce qui suit un caractere diese sur une ligne est un commentaire
  ;

// commentaires sur plusieurs lignes
// ML_COMMENT    :   '/*' (options {greedy=false;} : .)* '*/' {$channel=HIDDEN;} ;
