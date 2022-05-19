grammar Grammar;

start:
  instructions
  ;

instructions:
  (instruction ';')+
  ;

instruction:
  ifcond
  | whilecond
  | drawline
  | print
  | initialization
  | assignement
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

ifcond:
  'if' cond=condition 'then' ifInstructions=instructions ('else' elseInstructions=instructions)? 'end'
  ;

whilecond:
  'while' cond=condition 'do' inst=instructions 'end'
  ;

drawline:
  'drawline(' expr ',' expr ',' expr ',' expr ')'
  ;

expr:
  left=expr op=('+'|'-') right=expr #addExpr
  | atom=number                     #atomExpr
  | ident=IDENT                     #identExpr
  ;

condition:
  left=expr op=('>'|'<'|'>='|'<='|'=='|'!=') right=expr
  ;

number:
  value=NB 
  ;

NB:
  [0-9]+ ('.' [0-9]+)?
  ;

IDENT:
  [A-Za-z]+
  ;

WS: 
  [\n\t\r ] -> skip
  ;