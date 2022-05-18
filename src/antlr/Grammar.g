grammar Grammar;
start     : expr ;
expr      : left=expr op=('+'|'-') right=expr #opExpr
          | atom=INTEGER                      #atomExpr
          ;

INTEGER   : [0-9]+ ;
WS        : [\n\t\r ] -> skip ;