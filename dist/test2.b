LET x = RND(100);
LET guess = 0;

WHILE x <> guess DO

GOSUB _prompt;
  IF guess < x THEN PRINT("Plus grand!") ENDIF;
  IF guess > x THEN PRINT("Plus petit!") ENDIF
WEND;
PRINT("Bravo...");
END;

_prompt:
WHILE x < 0 OR x >= 100 DO
  PRINT("Entrez un nombre entre 0 et 100.");
  INPUT(guess)
WEND;
RETURN