LET guess = -1;
LET goal = RND(100);

WHILE guess <> goal DO
  GOSUB _prompt;
  IF guess < goal THEN PRINT("Plus grand!") ENDIF;
  IF guess > goal THEN PRINT("Plus petit!") ENDIF
WEND;

PRINT("Bien ouej");

END;
_prompt:
DO
  PRINT("Entrez un nombre entre 1 et 100.");
  INPUT(guess)
WHILE guess < 0;
RETURN