// Generated from Grammar.g by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,71,470,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,
2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,
27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,
7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,
41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,
2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,
56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,
7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,
70,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,
4,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,10,1,10,1,10,
1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,
13,1,13,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,
1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,
19,1,20,1,20,1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,22,1,22,
1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,
24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,
1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,
27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,
1,28,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,
29,1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,32,
1,32,1,32,1,32,1,32,1,33,1,33,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,36,1,
36,1,36,1,36,1,37,1,37,1,37,1,38,1,38,1,39,1,39,1,39,1,40,1,40,1,41,1,41,
1,41,1,42,1,42,1,43,1,43,1,44,1,44,1,45,1,45,1,46,1,46,1,47,1,47,1,48,1,
48,1,48,1,48,1,49,1,49,1,49,1,49,1,50,1,50,1,50,1,50,1,51,1,51,1,51,1,51,
1,52,1,52,1,52,1,52,1,53,1,53,1,53,1,54,1,54,1,54,1,54,1,55,1,55,1,55,1,
55,1,56,1,56,1,56,1,56,1,57,1,57,1,57,1,57,1,58,1,58,1,58,1,58,1,59,1,59,
1,59,1,59,1,60,1,60,1,60,1,60,1,61,1,61,1,61,1,61,1,62,1,62,1,62,1,62,1,
63,1,63,1,63,1,63,1,64,1,64,1,65,1,65,5,65,433,8,65,10,65,12,65,436,9,65,
1,66,4,66,439,8,66,11,66,12,66,440,1,67,1,67,5,67,445,8,67,10,67,12,67,448,
9,67,1,67,1,67,1,68,1,68,1,68,1,68,1,69,1,69,1,69,1,69,1,70,1,70,1,70,1,
70,5,70,464,8,70,10,70,12,70,467,9,70,1,70,1,70,0,0,71,1,1,3,2,5,3,7,4,9,
5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,
18,37,19,39,20,41,21,43,22,45,23,47,24,49,25,51,26,53,27,55,28,57,29,59,
30,61,31,63,32,65,33,67,34,69,35,71,36,73,37,75,38,77,39,79,40,81,41,83,
42,85,43,87,44,89,45,91,46,93,47,95,48,97,49,99,50,101,51,103,52,105,53,
107,54,109,55,111,56,113,57,115,58,117,59,119,60,121,61,123,62,125,63,127,
64,129,65,131,66,133,67,135,68,137,69,139,70,141,71,1,0,26,2,0,77,77,109,
109,2,0,65,65,97,97,2,0,73,73,105,105,2,0,78,78,110,110,2,0,85,85,117,117,
2,0,80,80,112,112,2,0,68,68,100,100,2,0,84,84,116,116,2,0,69,69,101,101,
2,0,70,70,102,102,2,0,79,79,111,111,2,0,82,82,114,114,2,0,83,83,115,115,
2,0,71,71,103,103,2,0,66,66,98,98,2,0,72,72,104,104,2,0,87,87,119,119,2,
0,76,76,108,108,2,0,67,67,99,99,2,0,81,81,113,113,2,0,88,88,120,120,2,0,
65,90,97,122,4,0,48,57,65,90,95,95,97,122,1,0,48,57,2,0,32,33,35,255,3,0,
9,10,13,13,32,32,473,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,
1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,
0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,
0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,
43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,
0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,
1,0,0,0,0,67,1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,0,73,1,0,0,0,0,75,1,0,0,0,
0,77,1,0,0,0,0,79,1,0,0,0,0,81,1,0,0,0,0,83,1,0,0,0,0,85,1,0,0,0,0,87,1,
0,0,0,0,89,1,0,0,0,0,91,1,0,0,0,0,93,1,0,0,0,0,95,1,0,0,0,0,97,1,0,0,0,0,
99,1,0,0,0,0,101,1,0,0,0,0,103,1,0,0,0,0,105,1,0,0,0,0,107,1,0,0,0,0,109,
1,0,0,0,0,111,1,0,0,0,0,113,1,0,0,0,0,115,1,0,0,0,0,117,1,0,0,0,0,119,1,
0,0,0,0,121,1,0,0,0,0,123,1,0,0,0,0,125,1,0,0,0,0,127,1,0,0,0,0,129,1,0,
0,0,0,131,1,0,0,0,0,133,1,0,0,0,0,135,1,0,0,0,0,137,1,0,0,0,0,139,1,0,0,
0,0,141,1,0,0,0,1,143,1,0,0,0,3,148,1,0,0,0,5,150,1,0,0,0,7,152,1,0,0,0,
9,159,1,0,0,0,11,161,1,0,0,0,13,165,1,0,0,0,15,167,1,0,0,0,17,169,1,0,0,
0,19,173,1,0,0,0,21,175,1,0,0,0,23,178,1,0,0,0,25,183,1,0,0,0,27,188,1,0,
0,0,29,194,1,0,0,0,31,197,1,0,0,0,33,202,1,0,0,0,35,208,1,0,0,0,37,214,1,
0,0,0,39,217,1,0,0,0,41,222,1,0,0,0,43,228,1,0,0,0,45,234,1,0,0,0,47,243,
1,0,0,0,49,245,1,0,0,0,51,254,1,0,0,0,53,265,1,0,0,0,55,276,1,0,0,0,57,289,
1,0,0,0,59,299,1,0,0,0,61,313,1,0,0,0,63,317,1,0,0,0,65,322,1,0,0,0,67,327,
1,0,0,0,69,329,1,0,0,0,71,332,1,0,0,0,73,336,1,0,0,0,75,340,1,0,0,0,77,343,
1,0,0,0,79,345,1,0,0,0,81,348,1,0,0,0,83,350,1,0,0,0,85,353,1,0,0,0,87,355,
1,0,0,0,89,357,1,0,0,0,91,359,1,0,0,0,93,361,1,0,0,0,95,363,1,0,0,0,97,365,
1,0,0,0,99,369,1,0,0,0,101,373,1,0,0,0,103,377,1,0,0,0,105,381,1,0,0,0,107,
385,1,0,0,0,109,388,1,0,0,0,111,392,1,0,0,0,113,396,1,0,0,0,115,400,1,0,
0,0,117,404,1,0,0,0,119,408,1,0,0,0,121,412,1,0,0,0,123,416,1,0,0,0,125,
420,1,0,0,0,127,424,1,0,0,0,129,428,1,0,0,0,131,430,1,0,0,0,133,438,1,0,
0,0,135,442,1,0,0,0,137,451,1,0,0,0,139,455,1,0,0,0,141,459,1,0,0,0,143,
144,7,0,0,0,144,145,7,1,0,0,145,146,7,2,0,0,146,147,7,3,0,0,147,2,1,0,0,
0,148,149,5,123,0,0,149,4,1,0,0,0,150,151,5,125,0,0,151,6,1,0,0,0,152,153,
7,4,0,0,153,154,7,5,0,0,154,155,7,6,0,0,155,156,7,1,0,0,156,157,7,7,0,0,
157,158,7,8,0,0,158,8,1,0,0,0,159,160,5,59,0,0,160,10,1,0,0,0,161,162,7,
6,0,0,162,163,7,2,0,0,163,164,7,0,0,0,164,12,1,0,0,0,165,166,5,40,0,0,166,
14,1,0,0,0,167,168,5,41,0,0,168,16,1,0,0,0,169,170,7,9,0,0,170,171,7,10,
0,0,171,172,7,11,0,0,172,18,1,0,0,0,173,174,5,61,0,0,174,20,1,0,0,0,175,
176,7,7,0,0,176,177,7,10,0,0,177,22,1,0,0,0,178,179,7,12,0,0,179,180,7,7,
0,0,180,181,7,8,0,0,181,182,7,5,0,0,182,24,1,0,0,0,183,184,7,9,0,0,184,185,
7,8,0,0,185,186,7,3,0,0,186,187,7,6,0,0,187,26,1,0,0,0,188,189,7,13,0,0,
189,190,7,10,0,0,190,191,7,12,0,0,191,192,7,4,0,0,192,193,7,14,0,0,193,28,
1,0,0,0,194,195,7,2,0,0,195,196,7,9,0,0,196,30,1,0,0,0,197,198,7,7,0,0,198,
199,7,15,0,0,199,200,7,8,0,0,200,201,7,3,0,0,201,32,1,0,0,0,202,203,7,8,
0,0,203,204,7,3,0,0,204,205,7,6,0,0,205,206,7,2,0,0,206,207,7,9,0,0,207,
34,1,0,0,0,208,209,7,16,0,0,209,210,7,15,0,0,210,211,7,2,0,0,211,212,7,17,
0,0,212,213,7,8,0,0,213,36,1,0,0,0,214,215,7,6,0,0,215,216,7,10,0,0,216,
38,1,0,0,0,217,218,7,16,0,0,218,219,7,8,0,0,219,220,7,3,0,0,220,221,7,6,
0,0,221,40,1,0,0,0,222,223,7,2,0,0,223,224,7,3,0,0,224,225,7,5,0,0,225,226,
7,4,0,0,226,227,7,7,0,0,227,42,1,0,0,0,228,229,7,5,0,0,229,230,7,11,0,0,
230,231,7,2,0,0,231,232,7,3,0,0,232,233,7,7,0,0,233,44,1,0,0,0,234,235,7,
6,0,0,235,236,7,11,0,0,236,237,7,1,0,0,237,238,7,16,0,0,238,239,7,17,0,0,
239,240,7,2,0,0,240,241,7,3,0,0,241,242,7,8,0,0,242,46,1,0,0,0,243,244,5,
44,0,0,244,48,1,0,0,0,245,246,7,6,0,0,246,247,7,11,0,0,247,248,7,1,0,0,248,
249,7,16,0,0,249,250,7,11,0,0,250,251,7,8,0,0,251,252,7,18,0,0,252,253,7,
7,0,0,253,50,1,0,0,0,254,255,7,6,0,0,255,256,7,11,0,0,256,257,7,1,0,0,257,
258,7,16,0,0,258,259,7,12,0,0,259,260,7,19,0,0,260,261,7,4,0,0,261,262,7,
1,0,0,262,263,7,11,0,0,263,264,7,8,0,0,264,52,1,0,0,0,265,266,7,6,0,0,266,
267,7,11,0,0,267,268,7,1,0,0,268,269,7,16,0,0,269,270,7,18,0,0,270,271,7,
2,0,0,271,272,7,11,0,0,272,273,7,18,0,0,273,274,7,17,0,0,274,275,7,8,0,0,
275,54,1,0,0,0,276,277,7,6,0,0,277,278,7,11,0,0,278,279,7,1,0,0,279,280,
7,16,0,0,280,281,7,7,0,0,281,282,7,11,0,0,282,283,7,2,0,0,283,284,7,1,0,
0,284,285,7,3,0,0,285,286,7,13,0,0,286,287,7,17,0,0,287,288,7,8,0,0,288,
56,1,0,0,0,289,290,7,6,0,0,290,291,7,11,0,0,291,292,7,1,0,0,292,293,7,16,
0,0,293,294,7,18,0,0,294,295,7,17,0,0,295,296,7,8,0,0,296,297,7,1,0,0,297,
298,7,11,0,0,298,58,1,0,0,0,299,300,7,6,0,0,300,301,7,11,0,0,301,302,7,1,
0,0,302,303,7,16,0,0,303,304,7,18,0,0,304,305,7,17,0,0,305,306,7,8,0,0,306,
307,7,1,0,0,307,308,7,11,0,0,308,309,7,1,0,0,309,310,7,11,0,0,310,311,7,
8,0,0,311,312,7,1,0,0,312,60,1,0,0,0,313,314,7,17,0,0,314,315,7,8,0,0,315,
316,7,7,0,0,316,62,1,0,0,0,317,318,7,8,0,0,318,319,7,17,0,0,319,320,7,2,
0,0,320,321,7,9,0,0,321,64,1,0,0,0,322,323,7,8,0,0,323,324,7,17,0,0,324,
325,7,12,0,0,325,326,7,8,0,0,326,66,1,0,0,0,327,328,5,58,0,0,328,68,1,0,
0,0,329,330,7,10,0,0,330,331,7,11,0,0,331,70,1,0,0,0,332,333,7,1,0,0,333,
334,7,3,0,0,334,335,7,6,0,0,335,72,1,0,0,0,336,337,7,3,0,0,337,338,7,10,
0,0,338,339,7,7,0,0,339,74,1,0,0,0,340,341,5,60,0,0,341,342,5,62,0,0,342,
76,1,0,0,0,343,344,5,62,0,0,344,78,1,0,0,0,345,346,5,62,0,0,346,347,5,61,
0,0,347,80,1,0,0,0,348,349,5,60,0,0,349,82,1,0,0,0,350,351,5,60,0,0,351,
352,5,61,0,0,352,84,1,0,0,0,353,354,5,43,0,0,354,86,1,0,0,0,355,356,5,45,
0,0,356,88,1,0,0,0,357,358,5,42,0,0,358,90,1,0,0,0,359,360,5,47,0,0,360,
92,1,0,0,0,361,362,5,37,0,0,362,94,1,0,0,0,363,364,5,94,0,0,364,96,1,0,0,
0,365,366,7,1,0,0,366,367,7,14,0,0,367,368,7,12,0,0,368,98,1,0,0,0,369,370,
7,1,0,0,370,371,7,7,0,0,371,372,7,3,0,0,372,100,1,0,0,0,373,374,7,18,0,0,
374,375,7,10,0,0,375,376,7,12,0,0,376,102,1,0,0,0,377,378,7,8,0,0,378,379,
7,20,0,0,379,380,7,5,0,0,380,104,1,0,0,0,381,382,7,2,0,0,382,383,7,3,0,0,
383,384,7,7,0,0,384,106,1,0,0,0,385,386,7,17,0,0,386,387,7,3,0,0,387,108,
1,0,0,0,388,389,7,11,0,0,389,390,7,3,0,0,390,391,7,6,0,0,391,110,1,0,0,0,
392,393,7,12,0,0,393,394,7,2,0,0,394,395,7,3,0,0,395,112,1,0,0,0,396,397,
7,12,0,0,397,398,7,19,0,0,398,399,7,11,0,0,399,114,1,0,0,0,400,401,7,7,0,
0,401,402,7,1,0,0,402,403,7,3,0,0,403,116,1,0,0,0,404,405,7,17,0,0,405,406,
7,10,0,0,406,407,7,13,0,0,407,118,1,0,0,0,408,409,7,6,0,0,409,410,7,7,0,
0,410,411,7,11,0,0,411,120,1,0,0,0,412,413,7,11,0,0,413,414,7,7,0,0,414,
415,7,6,0,0,415,122,1,0,0,0,416,417,7,13,0,0,417,418,7,18,0,0,418,419,7,
6,0,0,419,124,1,0,0,0,420,421,7,0,0,0,421,422,7,2,0,0,422,423,7,3,0,0,423,
126,1,0,0,0,424,425,7,0,0,0,425,426,7,1,0,0,426,427,7,20,0,0,427,128,1,0,
0,0,428,429,5,95,0,0,429,130,1,0,0,0,430,434,7,21,0,0,431,433,7,22,0,0,432,
431,1,0,0,0,433,436,1,0,0,0,434,432,1,0,0,0,434,435,1,0,0,0,435,132,1,0,
0,0,436,434,1,0,0,0,437,439,7,23,0,0,438,437,1,0,0,0,439,440,1,0,0,0,440,
438,1,0,0,0,440,441,1,0,0,0,441,134,1,0,0,0,442,446,5,34,0,0,443,445,7,24,
0,0,444,443,1,0,0,0,445,448,1,0,0,0,446,444,1,0,0,0,446,447,1,0,0,0,447,
449,1,0,0,0,448,446,1,0,0,0,449,450,5,34,0,0,450,136,1,0,0,0,451,452,3,133,
66,0,452,453,5,46,0,0,453,454,3,133,66,0,454,138,1,0,0,0,455,456,7,25,0,
0,456,457,1,0,0,0,457,458,6,69,0,0,458,140,1,0,0,0,459,460,5,47,0,0,460,
461,5,47,0,0,461,465,1,0,0,0,462,464,7,24,0,0,463,462,1,0,0,0,464,467,1,
0,0,0,465,463,1,0,0,0,465,466,1,0,0,0,466,468,1,0,0,0,467,465,1,0,0,0,468,
469,6,70,0,0,469,142,1,0,0,0,5,0,434,440,446,465,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class GrammarLexer extends antlr4.Lexer {

    static grammarFileName = "Grammar.g";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'main'", "'{'", "'}'", "'update'", "';'", 
                         "'DIM'", "'('", "')'", "'FOR'", "'='", "'TO'", 
                         "'STEP'", "'FEND'", "'GOSUB'", "'IF'", "'THEN'", 
                         "'ENDIF'", "'WHILE'", "'DO'", "'WEND'", "'INPUT'", 
                         "'PRINT'", "'DRAWLINE'", "','", "'DRAWRECT'", "'DRAWSQUARE'", 
                         "'DRAWCIRCLE'", "'DRAWTRIANGLE'", "'DRAWCLEAR'", 
                         "'DRAWCLEARAREA'", "'LET'", "'ELIF'", "'ELSE'", 
                         "':'", "'OR'", "'AND'", "'NOT'", "'<>'", "'>'", 
                         "'>='", "'<'", "'<='", "'+'", "'-'", "'*'", "'/'", 
                         "'%'", "'^'", "'ABS'", "'ATN'", "'COS'", "'EXP'", 
                         "'INT'", "'LN'", "'RND'", "'SIN'", "'SQR'", "'TAN'", 
                         "'LOG'", "'DTR'", "'RTD'", "'GCD'", "'MIN'", "'MAX'", 
                         "'_'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, null, 
                          null, null, "ID", "Integer", "String", "Real", 
                          "WS", "COMMENT" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "T__7", "T__8", "T__9", "T__10", "T__11", "T__12", 
                      "T__13", "T__14", "T__15", "T__16", "T__17", "T__18", 
                      "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
                      "T__25", "T__26", "T__27", "T__28", "T__29", "T__30", 
                      "T__31", "T__32", "T__33", "T__34", "T__35", "T__36", 
                      "T__37", "T__38", "T__39", "T__40", "T__41", "T__42", 
                      "T__43", "T__44", "T__45", "T__46", "T__47", "T__48", 
                      "T__49", "T__50", "T__51", "T__52", "T__53", "T__54", 
                      "T__55", "T__56", "T__57", "T__58", "T__59", "T__60", 
                      "T__61", "T__62", "T__63", "T__64", "ID", "Integer", 
                      "String", "Real", "WS", "COMMENT" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

GrammarLexer.EOF = antlr4.Token.EOF;
GrammarLexer.T__0 = 1;
GrammarLexer.T__1 = 2;
GrammarLexer.T__2 = 3;
GrammarLexer.T__3 = 4;
GrammarLexer.T__4 = 5;
GrammarLexer.T__5 = 6;
GrammarLexer.T__6 = 7;
GrammarLexer.T__7 = 8;
GrammarLexer.T__8 = 9;
GrammarLexer.T__9 = 10;
GrammarLexer.T__10 = 11;
GrammarLexer.T__11 = 12;
GrammarLexer.T__12 = 13;
GrammarLexer.T__13 = 14;
GrammarLexer.T__14 = 15;
GrammarLexer.T__15 = 16;
GrammarLexer.T__16 = 17;
GrammarLexer.T__17 = 18;
GrammarLexer.T__18 = 19;
GrammarLexer.T__19 = 20;
GrammarLexer.T__20 = 21;
GrammarLexer.T__21 = 22;
GrammarLexer.T__22 = 23;
GrammarLexer.T__23 = 24;
GrammarLexer.T__24 = 25;
GrammarLexer.T__25 = 26;
GrammarLexer.T__26 = 27;
GrammarLexer.T__27 = 28;
GrammarLexer.T__28 = 29;
GrammarLexer.T__29 = 30;
GrammarLexer.T__30 = 31;
GrammarLexer.T__31 = 32;
GrammarLexer.T__32 = 33;
GrammarLexer.T__33 = 34;
GrammarLexer.T__34 = 35;
GrammarLexer.T__35 = 36;
GrammarLexer.T__36 = 37;
GrammarLexer.T__37 = 38;
GrammarLexer.T__38 = 39;
GrammarLexer.T__39 = 40;
GrammarLexer.T__40 = 41;
GrammarLexer.T__41 = 42;
GrammarLexer.T__42 = 43;
GrammarLexer.T__43 = 44;
GrammarLexer.T__44 = 45;
GrammarLexer.T__45 = 46;
GrammarLexer.T__46 = 47;
GrammarLexer.T__47 = 48;
GrammarLexer.T__48 = 49;
GrammarLexer.T__49 = 50;
GrammarLexer.T__50 = 51;
GrammarLexer.T__51 = 52;
GrammarLexer.T__52 = 53;
GrammarLexer.T__53 = 54;
GrammarLexer.T__54 = 55;
GrammarLexer.T__55 = 56;
GrammarLexer.T__56 = 57;
GrammarLexer.T__57 = 58;
GrammarLexer.T__58 = 59;
GrammarLexer.T__59 = 60;
GrammarLexer.T__60 = 61;
GrammarLexer.T__61 = 62;
GrammarLexer.T__62 = 63;
GrammarLexer.T__63 = 64;
GrammarLexer.T__64 = 65;
GrammarLexer.ID = 66;
GrammarLexer.Integer = 67;
GrammarLexer.String = 68;
GrammarLexer.Real = 69;
GrammarLexer.WS = 70;
GrammarLexer.COMMENT = 71;



