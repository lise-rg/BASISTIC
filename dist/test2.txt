LET x = RND(100);
LET guess = 0;

_start:
PRINT("Entrez un nombre entre 0 et 100.");
INPUT(guess);
IF guess < 0 OR guess >= 100 THEN GOTO _start ENDIF;
IF guess < x THEN PRINT("Plus grand!"); GOTO _start ENDIF;
IF guess > x THEN PRINT("Plus petit!"); GOTO _start ENDIF;
PRINT("Bravo...");
END