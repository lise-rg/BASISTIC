grammar Grammar;

start:
  instructions
  ;

instructions:
  (instruction ';')+
  ;

instruction:
  assignement
  | initialization
  | print
  ;

initialization:
  'var' ident=IDENT '=' value=expr
  ;

assignement:
  ident=IDENT '=' value=expr
  ;

print:
  'print(' argExpr = expr ')'                 #printExpr
  | 'print(' argIdent = IDENT ')'              #printIdent
  ;

expr:
  left=expr op=('+'|'-') right=expr #addExpr
  | atom=number                     #atomExpr
  | ident=IDENT                     #identExpr
  ;

number:
  value=NB 
  ;

NB:
  [0-9]+ ('.' [0.9]+)?
  ;

IDENT:
  [A-Za-z]+
  ;

WS: 
  [\n\t\r ] -> skip
  ;