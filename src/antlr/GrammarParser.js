// Generated from Grammar.g by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import GrammarListener from './GrammarListener.js';
import GrammarVisitor from './GrammarVisitor.js';

const serializedATN = [4,1,77,530,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,1,0,5,0,54,8,0,
10,0,12,0,57,9,0,1,0,1,0,1,0,1,0,1,0,3,0,64,8,0,1,0,1,0,1,0,1,0,1,0,3,0,
71,8,0,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,3,2,81,8,2,1,3,1,3,1,3,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,97,8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,3,3,109,8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,1,3,1,3,3,3,147,8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,243,8,3,1,3,1,3,
1,3,1,3,3,3,249,8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,258,8,3,1,4,1,4,1,4,
1,4,1,4,3,4,265,8,4,1,4,1,4,3,4,269,8,4,1,5,1,5,1,5,3,5,274,8,5,1,5,1,5,
1,5,1,5,1,5,1,5,3,5,282,8,5,3,5,284,8,5,1,6,1,6,1,6,1,6,1,6,3,6,291,8,6,
1,7,1,7,1,7,1,7,1,7,3,7,298,8,7,1,8,1,8,1,8,1,8,3,8,304,8,8,1,9,1,9,1,9,
1,9,1,9,3,9,311,8,9,1,10,1,10,1,10,1,10,1,10,3,10,318,8,10,1,11,1,11,1,11,
1,11,1,11,3,11,325,8,11,1,12,1,12,1,12,1,12,1,12,3,12,332,8,12,1,13,1,13,
1,13,3,13,337,8,13,1,14,1,14,1,14,1,14,1,14,3,14,344,8,14,1,15,1,15,1,15,
1,15,1,15,3,15,351,8,15,1,16,1,16,1,16,1,16,1,16,3,16,358,8,16,1,17,1,17,
1,17,1,17,1,17,3,17,365,8,17,1,18,1,18,1,18,3,18,370,8,18,1,19,1,19,1,19,
1,19,1,19,1,19,5,19,378,8,19,10,19,12,19,381,9,19,1,20,1,20,1,20,1,20,1,
20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,3,20,395,8,20,1,21,1,21,3,21,399,8,
21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,
1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,
22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,
1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,
22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,
1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,
22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,3,22,
501,8,22,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,
1,23,1,23,1,23,1,23,3,23,520,8,23,1,24,1,24,1,24,3,24,525,8,24,1,25,1,25,
1,25,1,25,0,1,38,26,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
38,40,42,44,46,48,50,0,4,2,0,24,24,35,35,2,0,10,10,39,43,1,0,44,45,1,0,46,
47,574,0,55,1,0,0,0,2,72,1,0,0,0,4,77,1,0,0,0,6,257,1,0,0,0,8,268,1,0,0,
0,10,283,1,0,0,0,12,290,1,0,0,0,14,297,1,0,0,0,16,303,1,0,0,0,18,310,1,0,
0,0,20,317,1,0,0,0,22,324,1,0,0,0,24,331,1,0,0,0,26,336,1,0,0,0,28,343,1,
0,0,0,30,350,1,0,0,0,32,357,1,0,0,0,34,364,1,0,0,0,36,369,1,0,0,0,38,371,
1,0,0,0,40,394,1,0,0,0,42,398,1,0,0,0,44,500,1,0,0,0,46,519,1,0,0,0,48,524,
1,0,0,0,50,526,1,0,0,0,52,54,3,2,1,0,53,52,1,0,0,0,54,57,1,0,0,0,55,53,1,
0,0,0,55,56,1,0,0,0,56,63,1,0,0,0,57,55,1,0,0,0,58,59,5,1,0,0,59,60,5,2,
0,0,60,61,3,4,2,0,61,62,5,3,0,0,62,64,1,0,0,0,63,58,1,0,0,0,63,64,1,0,0,
0,64,70,1,0,0,0,65,66,5,4,0,0,66,67,5,2,0,0,67,68,3,4,2,0,68,69,5,3,0,0,
69,71,1,0,0,0,70,65,1,0,0,0,70,71,1,0,0,0,71,1,1,0,0,0,72,73,3,50,25,0,73,
74,5,2,0,0,74,75,3,4,2,0,75,76,5,3,0,0,76,3,1,0,0,0,77,78,3,6,3,0,78,80,
5,5,0,0,79,81,3,4,2,0,80,79,1,0,0,0,80,81,1,0,0,0,81,5,1,0,0,0,82,83,5,6,
0,0,83,84,5,72,0,0,84,85,5,7,0,0,85,86,3,16,8,0,86,87,5,8,0,0,87,258,1,0,
0,0,88,89,5,9,0,0,89,90,5,72,0,0,90,91,5,10,0,0,91,92,3,22,11,0,92,93,5,
11,0,0,93,96,3,22,11,0,94,95,5,12,0,0,95,97,5,73,0,0,96,94,1,0,0,0,96,97,
1,0,0,0,97,98,1,0,0,0,98,99,3,4,2,0,99,100,5,13,0,0,100,258,1,0,0,0,101,
102,5,14,0,0,102,258,3,50,25,0,103,104,5,15,0,0,104,105,3,22,11,0,105,106,
5,16,0,0,106,108,3,4,2,0,107,109,3,8,4,0,108,107,1,0,0,0,108,109,1,0,0,0,
109,110,1,0,0,0,110,111,5,17,0,0,111,258,1,0,0,0,112,113,5,18,0,0,113,114,
3,22,11,0,114,115,5,19,0,0,115,116,3,4,2,0,116,117,5,20,0,0,117,258,1,0,
0,0,118,119,5,19,0,0,119,120,3,4,2,0,120,121,5,18,0,0,121,122,3,22,11,0,
122,258,1,0,0,0,123,124,5,21,0,0,124,125,5,7,0,0,125,126,3,10,5,0,126,127,
5,8,0,0,127,258,1,0,0,0,128,129,5,22,0,0,129,130,5,7,0,0,130,131,3,20,10,
0,131,132,5,8,0,0,132,258,1,0,0,0,133,134,5,23,0,0,134,135,5,7,0,0,135,136,
3,22,11,0,136,137,5,24,0,0,137,138,3,22,11,0,138,139,5,24,0,0,139,140,3,
22,11,0,140,141,5,24,0,0,141,142,3,22,11,0,142,143,5,24,0,0,143,146,3,22,
11,0,144,145,5,24,0,0,145,147,3,22,11,0,146,144,1,0,0,0,146,147,1,0,0,0,
147,148,1,0,0,0,148,149,5,8,0,0,149,258,1,0,0,0,150,151,5,25,0,0,151,152,
5,7,0,0,152,153,3,22,11,0,153,154,5,24,0,0,154,155,3,22,11,0,155,156,5,24,
0,0,156,157,3,22,11,0,157,158,5,24,0,0,158,159,3,22,11,0,159,160,5,24,0,
0,160,161,3,22,11,0,161,162,5,8,0,0,162,258,1,0,0,0,163,164,5,26,0,0,164,
165,5,7,0,0,165,166,3,22,11,0,166,167,5,24,0,0,167,168,3,22,11,0,168,169,
5,24,0,0,169,170,3,22,11,0,170,171,5,24,0,0,171,172,3,22,11,0,172,173,5,
24,0,0,173,174,3,22,11,0,174,175,5,24,0,0,175,176,3,22,11,0,176,177,5,24,
0,0,177,178,3,22,11,0,178,179,5,8,0,0,179,258,1,0,0,0,180,181,5,27,0,0,181,
182,5,7,0,0,182,183,3,22,11,0,183,184,5,24,0,0,184,185,3,22,11,0,185,186,
5,24,0,0,186,187,3,22,11,0,187,188,5,24,0,0,188,189,3,22,11,0,189,190,5,
24,0,0,190,191,3,22,11,0,191,192,5,24,0,0,192,193,3,22,11,0,193,194,5,8,
0,0,194,258,1,0,0,0,195,196,5,28,0,0,196,197,5,7,0,0,197,198,3,22,11,0,198,
199,5,24,0,0,199,200,3,22,11,0,200,201,5,24,0,0,201,202,3,22,11,0,202,203,
5,24,0,0,203,204,3,22,11,0,204,205,5,24,0,0,205,206,3,22,11,0,206,207,5,
24,0,0,207,208,3,22,11,0,208,209,5,8,0,0,209,258,1,0,0,0,210,211,5,29,0,
0,211,212,5,7,0,0,212,213,3,22,11,0,213,214,5,24,0,0,214,215,3,22,11,0,215,
216,5,24,0,0,216,217,3,22,11,0,217,218,5,24,0,0,218,219,3,22,11,0,219,220,
5,24,0,0,220,221,3,22,11,0,221,222,5,24,0,0,222,223,3,22,11,0,223,224,5,
8,0,0,224,258,1,0,0,0,225,226,5,30,0,0,226,227,5,7,0,0,227,228,3,22,11,0,
228,229,5,8,0,0,229,258,1,0,0,0,230,231,5,31,0,0,231,232,5,7,0,0,232,233,
3,22,11,0,233,234,5,24,0,0,234,235,3,22,11,0,235,236,5,24,0,0,236,237,3,
22,11,0,237,238,5,24,0,0,238,239,3,22,11,0,239,240,5,8,0,0,240,258,1,0,0,
0,241,243,5,32,0,0,242,241,1,0,0,0,242,243,1,0,0,0,243,244,1,0,0,0,244,245,
5,72,0,0,245,246,5,10,0,0,246,258,3,22,11,0,247,249,5,32,0,0,248,247,1,0,
0,0,248,249,1,0,0,0,249,250,1,0,0,0,250,251,5,72,0,0,251,252,5,7,0,0,252,
253,3,18,9,0,253,254,5,8,0,0,254,255,5,10,0,0,255,256,3,22,11,0,256,258,
1,0,0,0,257,82,1,0,0,0,257,88,1,0,0,0,257,101,1,0,0,0,257,103,1,0,0,0,257,
112,1,0,0,0,257,118,1,0,0,0,257,123,1,0,0,0,257,128,1,0,0,0,257,133,1,0,
0,0,257,150,1,0,0,0,257,163,1,0,0,0,257,180,1,0,0,0,257,195,1,0,0,0,257,
210,1,0,0,0,257,225,1,0,0,0,257,230,1,0,0,0,257,242,1,0,0,0,257,248,1,0,
0,0,258,7,1,0,0,0,259,260,5,33,0,0,260,261,3,22,11,0,261,262,5,16,0,0,262,
264,3,4,2,0,263,265,3,8,4,0,264,263,1,0,0,0,264,265,1,0,0,0,265,269,1,0,
0,0,266,267,5,34,0,0,267,269,3,4,2,0,268,259,1,0,0,0,268,266,1,0,0,0,269,
9,1,0,0,0,270,273,5,72,0,0,271,272,5,24,0,0,272,274,3,10,5,0,273,271,1,0,
0,0,273,274,1,0,0,0,274,284,1,0,0,0,275,276,5,72,0,0,276,277,5,7,0,0,277,
278,3,18,9,0,278,281,5,8,0,0,279,280,5,24,0,0,280,282,3,10,5,0,281,279,1,
0,0,0,281,282,1,0,0,0,282,284,1,0,0,0,283,270,1,0,0,0,283,275,1,0,0,0,284,
11,1,0,0,0,285,286,3,40,20,0,286,287,5,24,0,0,287,288,3,12,6,0,288,291,1,
0,0,0,289,291,3,40,20,0,290,285,1,0,0,0,290,289,1,0,0,0,291,13,1,0,0,0,292,
293,3,48,24,0,293,294,5,24,0,0,294,295,3,14,7,0,295,298,1,0,0,0,296,298,
3,48,24,0,297,292,1,0,0,0,297,296,1,0,0,0,298,15,1,0,0,0,299,300,5,73,0,
0,300,301,5,24,0,0,301,304,3,16,8,0,302,304,5,73,0,0,303,299,1,0,0,0,303,
302,1,0,0,0,304,17,1,0,0,0,305,306,3,22,11,0,306,307,5,24,0,0,307,308,3,
18,9,0,308,311,1,0,0,0,309,311,3,22,11,0,310,305,1,0,0,0,310,309,1,0,0,0,
311,19,1,0,0,0,312,313,3,22,11,0,313,314,7,0,0,0,314,315,3,20,10,0,315,318,
1,0,0,0,316,318,3,22,11,0,317,312,1,0,0,0,317,316,1,0,0,0,318,21,1,0,0,0,
319,320,3,24,12,0,320,321,5,36,0,0,321,322,3,22,11,0,322,325,1,0,0,0,323,
325,3,24,12,0,324,319,1,0,0,0,324,323,1,0,0,0,325,23,1,0,0,0,326,327,3,26,
13,0,327,328,5,37,0,0,328,329,3,24,12,0,329,332,1,0,0,0,330,332,3,26,13,
0,331,326,1,0,0,0,331,330,1,0,0,0,332,25,1,0,0,0,333,334,5,38,0,0,334,337,
3,28,14,0,335,337,3,28,14,0,336,333,1,0,0,0,336,335,1,0,0,0,337,27,1,0,0,
0,338,339,3,30,15,0,339,340,7,1,0,0,340,341,3,28,14,0,341,344,1,0,0,0,342,
344,3,30,15,0,343,338,1,0,0,0,343,342,1,0,0,0,344,29,1,0,0,0,345,346,3,32,
16,0,346,347,7,2,0,0,347,348,3,30,15,0,348,351,1,0,0,0,349,351,3,32,16,0,
350,345,1,0,0,0,350,349,1,0,0,0,351,31,1,0,0,0,352,353,3,34,17,0,353,354,
7,3,0,0,354,355,3,32,16,0,355,358,1,0,0,0,356,358,3,34,17,0,357,352,1,0,
0,0,357,356,1,0,0,0,358,33,1,0,0,0,359,360,3,36,18,0,360,361,5,48,0,0,361,
362,3,34,17,0,362,365,1,0,0,0,363,365,3,36,18,0,364,359,1,0,0,0,364,363,
1,0,0,0,365,35,1,0,0,0,366,367,5,45,0,0,367,370,3,38,19,0,368,370,3,38,19,
0,369,366,1,0,0,0,369,368,1,0,0,0,370,37,1,0,0,0,371,372,6,19,-1,0,372,373,
3,40,20,0,373,379,1,0,0,0,374,375,10,2,0,0,375,376,5,49,0,0,376,378,3,40,
20,0,377,374,1,0,0,0,378,381,1,0,0,0,379,377,1,0,0,0,379,380,1,0,0,0,380,
39,1,0,0,0,381,379,1,0,0,0,382,383,5,7,0,0,383,384,3,22,11,0,384,385,5,8,
0,0,385,395,1,0,0,0,386,395,3,42,21,0,387,388,5,72,0,0,388,389,5,7,0,0,389,
390,3,18,9,0,390,391,5,8,0,0,391,395,1,0,0,0,392,395,5,72,0,0,393,395,3,
48,24,0,394,382,1,0,0,0,394,386,1,0,0,0,394,387,1,0,0,0,394,392,1,0,0,0,
394,393,1,0,0,0,395,41,1,0,0,0,396,399,3,44,22,0,397,399,3,46,23,0,398,396,
1,0,0,0,398,397,1,0,0,0,399,43,1,0,0,0,400,401,5,50,0,0,401,402,5,7,0,0,
402,403,3,22,11,0,403,404,5,8,0,0,404,501,1,0,0,0,405,406,5,51,0,0,406,407,
5,7,0,0,407,408,3,22,11,0,408,409,5,8,0,0,409,501,1,0,0,0,410,411,5,52,0,
0,411,412,5,7,0,0,412,413,3,22,11,0,413,414,5,8,0,0,414,501,1,0,0,0,415,
416,5,53,0,0,416,417,5,7,0,0,417,418,3,22,11,0,418,419,5,8,0,0,419,501,1,
0,0,0,420,421,5,54,0,0,421,422,5,7,0,0,422,423,3,22,11,0,423,424,5,8,0,0,
424,501,1,0,0,0,425,426,5,55,0,0,426,427,5,7,0,0,427,428,3,22,11,0,428,429,
5,8,0,0,429,501,1,0,0,0,430,431,5,56,0,0,431,432,5,7,0,0,432,433,3,22,11,
0,433,434,5,8,0,0,434,501,1,0,0,0,435,436,5,57,0,0,436,437,5,7,0,0,437,438,
3,22,11,0,438,439,5,8,0,0,439,501,1,0,0,0,440,441,5,58,0,0,441,442,5,7,0,
0,442,443,3,22,11,0,443,444,5,8,0,0,444,501,1,0,0,0,445,446,5,59,0,0,446,
447,5,7,0,0,447,448,3,22,11,0,448,449,5,8,0,0,449,501,1,0,0,0,450,451,5,
60,0,0,451,452,5,7,0,0,452,453,3,22,11,0,453,454,5,8,0,0,454,501,1,0,0,0,
455,456,5,61,0,0,456,457,5,7,0,0,457,458,3,22,11,0,458,459,5,8,0,0,459,501,
1,0,0,0,460,461,5,62,0,0,461,462,5,7,0,0,462,463,3,22,11,0,463,464,5,8,0,
0,464,501,1,0,0,0,465,466,5,63,0,0,466,467,5,7,0,0,467,468,3,22,11,0,468,
469,5,8,0,0,469,501,1,0,0,0,470,471,5,64,0,0,471,472,5,7,0,0,472,473,3,22,
11,0,473,474,5,24,0,0,474,475,3,22,11,0,475,476,5,8,0,0,476,501,1,0,0,0,
477,478,5,65,0,0,478,479,5,7,0,0,479,480,3,22,11,0,480,481,5,24,0,0,481,
482,3,22,11,0,482,483,5,8,0,0,483,501,1,0,0,0,484,485,5,66,0,0,485,486,5,
7,0,0,486,487,3,22,11,0,487,488,5,24,0,0,488,489,3,22,11,0,489,490,5,8,0,
0,490,501,1,0,0,0,491,492,5,67,0,0,492,493,5,7,0,0,493,494,3,22,11,0,494,
495,5,24,0,0,495,496,3,22,11,0,496,497,5,24,0,0,497,498,3,22,11,0,498,499,
5,8,0,0,499,501,1,0,0,0,500,400,1,0,0,0,500,405,1,0,0,0,500,410,1,0,0,0,
500,415,1,0,0,0,500,420,1,0,0,0,500,425,1,0,0,0,500,430,1,0,0,0,500,435,
1,0,0,0,500,440,1,0,0,0,500,445,1,0,0,0,500,450,1,0,0,0,500,455,1,0,0,0,
500,460,1,0,0,0,500,465,1,0,0,0,500,470,1,0,0,0,500,477,1,0,0,0,500,484,
1,0,0,0,500,491,1,0,0,0,501,45,1,0,0,0,502,503,5,68,0,0,503,504,5,7,0,0,
504,505,3,22,11,0,505,506,5,8,0,0,506,520,1,0,0,0,507,508,5,69,0,0,508,509,
5,7,0,0,509,510,3,22,11,0,510,511,5,8,0,0,511,520,1,0,0,0,512,513,5,70,0,
0,513,514,5,7,0,0,514,515,3,22,11,0,515,516,5,24,0,0,516,517,3,22,11,0,517,
518,5,8,0,0,518,520,1,0,0,0,519,502,1,0,0,0,519,507,1,0,0,0,519,512,1,0,
0,0,520,47,1,0,0,0,521,525,5,73,0,0,522,525,5,74,0,0,523,525,5,75,0,0,524,
521,1,0,0,0,524,522,1,0,0,0,524,523,1,0,0,0,525,49,1,0,0,0,526,527,5,71,
0,0,527,528,5,72,0,0,528,51,1,0,0,0,34,55,63,70,80,96,108,146,242,248,257,
264,268,273,281,283,290,297,303,310,317,324,331,336,343,350,357,364,369,
379,394,398,500,519,524];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class GrammarParser extends antlr4.Parser {

    static grammarFileName = "Grammar.g";
    static literalNames = [ null, "'main'", "'{'", "'}'", "'update'", "';'", 
                            "'DIM'", "'('", "')'", "'FOR'", "'='", "'TO'", 
                            "'STEP'", "'FEND'", "'GOSUB'", "'IF'", "'THEN'", 
                            "'ENDIF'", "'WHILE'", "'DO'", "'WEND'", "'INPUT'", 
                            "'PRINT'", "'DRAWTEXT'", "','", "'DRAWLINE'", 
                            "'DRAWRECT'", "'DRAWSQUARE'", "'DRAWCIRCLE'", 
                            "'DRAWTRIANGLE'", "'DRAWCLEAR'", "'DRAWCLEARAREA'", 
                            "'LET'", "'ELIF'", "'ELSE'", "':'", "'OR'", 
                            "'AND'", "'NOT'", "'<>'", "'>'", "'>='", "'<'", 
                            "'<='", "'+'", "'-'", "'*'", "'/'", "'%'", "'^'", 
                            "'ABS'", "'ATN'", "'COS'", "'EXP'", "'INT'", 
                            "'LN'", "'RND'", "'SIN'", "'SQR'", "'TAN'", 
                            "'LOG'", "'DTR'", "'RTD'", "'STR'", "'GCD'", 
                            "'MIN'", "'MAX'", "'RGB'", "'KEYPRESSED'", "'KEYRELEASED'", 
                            "'STRCAT'", "'_'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "ID", "Integer", "String", "Real", "WS", "COMMENT" ];
    static ruleNames = [ "start", "subroutines", "statements", "statement", 
                         "alternatives", "idList", "valueList", "constantList", 
                         "integerList", "expressionList", "printList", "expression", 
                         "andExp", "notExp", "compareExp", "addExp", "multExp", 
                         "modExp", "negateExp", "powerExp", "value", "function", 
                         "intFunction", "strFunction", "constant", "label" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = GrammarParser.ruleNames;
        this.literalNames = GrammarParser.literalNames;
        this.symbolicNames = GrammarParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 19:
    	    		return this.powerExp_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    powerExp_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, GrammarParser.RULE_start);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===GrammarParser.T__70) {
	            this.state = 52;
	            this.subroutines();
	            this.state = 57;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GrammarParser.T__0) {
	            this.state = 58;
	            this.match(GrammarParser.T__0);
	            this.state = 59;
	            this.match(GrammarParser.T__1);
	            this.state = 60;
	            localctx.main = this.statements();
	            this.state = 61;
	            this.match(GrammarParser.T__2);
	        }

	        this.state = 70;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GrammarParser.T__3) {
	            this.state = 65;
	            this.match(GrammarParser.T__3);
	            this.state = 66;
	            this.match(GrammarParser.T__1);
	            this.state = 67;
	            localctx.drawloop = this.statements();
	            this.state = 68;
	            this.match(GrammarParser.T__2);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	subroutines() {
	    let localctx = new SubroutinesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, GrammarParser.RULE_subroutines);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        localctx.lb = this.label();
	        this.state = 73;
	        this.match(GrammarParser.T__1);
	        this.state = 74;
	        localctx.st = this.statements();
	        this.state = 75;
	        this.match(GrammarParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statements() {
	    let localctx = new StatementsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, GrammarParser.RULE_statements);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this.statement();
	        this.state = 78;
	        this.match(GrammarParser.T__4);
	        this.state = 80;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        if(la_===1) {
	            this.state = 79;
	            this.statements();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, GrammarParser.RULE_statement);
	    var _la = 0; // Token type
	    try {
	        this.state = 257;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new DimStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 82;
	            this.match(GrammarParser.T__5);
	            this.state = 83;
	            localctx.ident = this.match(GrammarParser.ID);
	            this.state = 84;
	            this.match(GrammarParser.T__6);
	            this.state = 85;
	            localctx.list = this.integerList();
	            this.state = 86;
	            this.match(GrammarParser.T__7);
	            break;

	        case 2:
	            localctx = new ForStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 88;
	            this.match(GrammarParser.T__8);
	            this.state = 89;
	            localctx.ident = this.match(GrammarParser.ID);
	            this.state = 90;
	            this.match(GrammarParser.T__9);
	            this.state = 91;
	            this.expression();
	            this.state = 92;
	            this.match(GrammarParser.T__10);
	            this.state = 93;
	            this.expression();
	            this.state = 96;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===GrammarParser.T__11) {
	                this.state = 94;
	                this.match(GrammarParser.T__11);
	                this.state = 95;
	                localctx.step = this.match(GrammarParser.Integer);
	            }

	            this.state = 98;
	            localctx.st = this.statements();
	            this.state = 99;
	            this.match(GrammarParser.T__12);
	            break;

	        case 3:
	            localctx = new GosubStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 101;
	            this.match(GrammarParser.T__13);
	            this.state = 102;
	            this.label();
	            break;

	        case 4:
	            localctx = new IfStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 103;
	            this.match(GrammarParser.T__14);
	            this.state = 104;
	            localctx.cond = this.expression();
	            this.state = 105;
	            this.match(GrammarParser.T__15);
	            this.state = 106;
	            localctx.st = this.statements();
	            this.state = 108;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===GrammarParser.T__32 || _la===GrammarParser.T__33) {
	                this.state = 107;
	                localctx.alt = this.alternatives();
	            }

	            this.state = 110;
	            this.match(GrammarParser.T__16);
	            break;

	        case 5:
	            localctx = new WhileStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 112;
	            this.match(GrammarParser.T__17);
	            this.state = 113;
	            this.expression();
	            this.state = 114;
	            this.match(GrammarParser.T__18);
	            this.state = 115;
	            this.statements();
	            this.state = 116;
	            this.match(GrammarParser.T__19);
	            break;

	        case 6:
	            localctx = new DoWhileStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 118;
	            this.match(GrammarParser.T__18);
	            this.state = 119;
	            this.statements();
	            this.state = 120;
	            this.match(GrammarParser.T__17);
	            this.state = 121;
	            this.expression();
	            break;

	        case 7:
	            localctx = new InputStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 123;
	            this.match(GrammarParser.T__20);
	            this.state = 124;
	            this.match(GrammarParser.T__6);
	            this.state = 125;
	            this.idList();
	            this.state = 126;
	            this.match(GrammarParser.T__7);
	            break;

	        case 8:
	            localctx = new PrintStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 128;
	            this.match(GrammarParser.T__21);
	            this.state = 129;
	            this.match(GrammarParser.T__6);
	            this.state = 130;
	            this.printList();
	            this.state = 131;
	            this.match(GrammarParser.T__7);
	            break;

	        case 9:
	            localctx = new DrawtextStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 133;
	            this.match(GrammarParser.T__22);
	            this.state = 134;
	            this.match(GrammarParser.T__6);
	            this.state = 135;
	            localctx.text = this.expression();
	            this.state = 136;
	            this.match(GrammarParser.T__23);
	            this.state = 137;
	            localctx.x = this.expression();
	            this.state = 138;
	            this.match(GrammarParser.T__23);
	            this.state = 139;
	            localctx.y = this.expression();
	            this.state = 140;
	            this.match(GrammarParser.T__23);
	            this.state = 141;
	            localctx.font = this.expression();
	            this.state = 142;
	            this.match(GrammarParser.T__23);
	            this.state = 143;
	            localctx.drawmode = this.expression();
	            this.state = 146;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===GrammarParser.T__23) {
	                this.state = 144;
	                this.match(GrammarParser.T__23);
	                this.state = 145;
	                localctx.maxWidth = this.expression();
	            }

	            this.state = 148;
	            this.match(GrammarParser.T__7);
	            break;

	        case 10:
	            localctx = new DrawlineStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 10);
	            this.state = 150;
	            this.match(GrammarParser.T__24);
	            this.state = 151;
	            this.match(GrammarParser.T__6);
	            this.state = 152;
	            localctx.x1 = this.expression();
	            this.state = 153;
	            this.match(GrammarParser.T__23);
	            this.state = 154;
	            localctx.y1 = this.expression();
	            this.state = 155;
	            this.match(GrammarParser.T__23);
	            this.state = 156;
	            localctx.x2 = this.expression();
	            this.state = 157;
	            this.match(GrammarParser.T__23);
	            this.state = 158;
	            localctx.y2 = this.expression();
	            this.state = 159;
	            this.match(GrammarParser.T__23);
	            this.state = 160;
	            localctx.color = this.expression();
	            this.state = 161;
	            this.match(GrammarParser.T__7);
	            break;

	        case 11:
	            localctx = new DrawrectStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 11);
	            this.state = 163;
	            this.match(GrammarParser.T__25);
	            this.state = 164;
	            this.match(GrammarParser.T__6);
	            this.state = 165;
	            localctx.x = this.expression();
	            this.state = 166;
	            this.match(GrammarParser.T__23);
	            this.state = 167;
	            localctx.y = this.expression();
	            this.state = 168;
	            this.match(GrammarParser.T__23);
	            this.state = 169;
	            localctx.width = this.expression();
	            this.state = 170;
	            this.match(GrammarParser.T__23);
	            this.state = 171;
	            localctx.height = this.expression();
	            this.state = 172;
	            this.match(GrammarParser.T__23);
	            this.state = 173;
	            localctx.rotation = this.expression();
	            this.state = 174;
	            this.match(GrammarParser.T__23);
	            this.state = 175;
	            localctx.color = this.expression();
	            this.state = 176;
	            this.match(GrammarParser.T__23);
	            this.state = 177;
	            localctx.drawmode = this.expression();
	            this.state = 178;
	            this.match(GrammarParser.T__7);
	            break;

	        case 12:
	            localctx = new DrawsquareStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 12);
	            this.state = 180;
	            this.match(GrammarParser.T__26);
	            this.state = 181;
	            this.match(GrammarParser.T__6);
	            this.state = 182;
	            localctx.x = this.expression();
	            this.state = 183;
	            this.match(GrammarParser.T__23);
	            this.state = 184;
	            localctx.y = this.expression();
	            this.state = 185;
	            this.match(GrammarParser.T__23);
	            this.state = 186;
	            localctx.size = this.expression();
	            this.state = 187;
	            this.match(GrammarParser.T__23);
	            this.state = 188;
	            localctx.rotation = this.expression();
	            this.state = 189;
	            this.match(GrammarParser.T__23);
	            this.state = 190;
	            localctx.color = this.expression();
	            this.state = 191;
	            this.match(GrammarParser.T__23);
	            this.state = 192;
	            localctx.drawmode = this.expression();
	            this.state = 193;
	            this.match(GrammarParser.T__7);
	            break;

	        case 13:
	            localctx = new DrawcircleStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 13);
	            this.state = 195;
	            this.match(GrammarParser.T__27);
	            this.state = 196;
	            this.match(GrammarParser.T__6);
	            this.state = 197;
	            localctx.x = this.expression();
	            this.state = 198;
	            this.match(GrammarParser.T__23);
	            this.state = 199;
	            localctx.y = this.expression();
	            this.state = 200;
	            this.match(GrammarParser.T__23);
	            this.state = 201;
	            localctx.radius = this.expression();
	            this.state = 202;
	            this.match(GrammarParser.T__23);
	            this.state = 203;
	            localctx.rotation = this.expression();
	            this.state = 204;
	            this.match(GrammarParser.T__23);
	            this.state = 205;
	            localctx.color = this.expression();
	            this.state = 206;
	            this.match(GrammarParser.T__23);
	            this.state = 207;
	            localctx.drawmode = this.expression();
	            this.state = 208;
	            this.match(GrammarParser.T__7);
	            break;

	        case 14:
	            localctx = new DrawtriangleStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 14);
	            this.state = 210;
	            this.match(GrammarParser.T__28);
	            this.state = 211;
	            this.match(GrammarParser.T__6);
	            this.state = 212;
	            localctx.x = this.expression();
	            this.state = 213;
	            this.match(GrammarParser.T__23);
	            this.state = 214;
	            localctx.y = this.expression();
	            this.state = 215;
	            this.match(GrammarParser.T__23);
	            this.state = 216;
	            localctx.size = this.expression();
	            this.state = 217;
	            this.match(GrammarParser.T__23);
	            this.state = 218;
	            localctx.rotation = this.expression();
	            this.state = 219;
	            this.match(GrammarParser.T__23);
	            this.state = 220;
	            localctx.color = this.expression();
	            this.state = 221;
	            this.match(GrammarParser.T__23);
	            this.state = 222;
	            localctx.drawmode = this.expression();
	            this.state = 223;
	            this.match(GrammarParser.T__7);
	            break;

	        case 15:
	            localctx = new DrawclearStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 15);
	            this.state = 225;
	            this.match(GrammarParser.T__29);
	            this.state = 226;
	            this.match(GrammarParser.T__6);
	            this.state = 227;
	            localctx.range = this.expression();
	            this.state = 228;
	            this.match(GrammarParser.T__7);
	            break;

	        case 16:
	            localctx = new DrawclearareaStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 16);
	            this.state = 230;
	            this.match(GrammarParser.T__30);
	            this.state = 231;
	            this.match(GrammarParser.T__6);
	            this.state = 232;
	            localctx.x1 = this.expression();
	            this.state = 233;
	            this.match(GrammarParser.T__23);
	            this.state = 234;
	            localctx.y1 = this.expression();
	            this.state = 235;
	            this.match(GrammarParser.T__23);
	            this.state = 236;
	            localctx.x2 = this.expression();
	            this.state = 237;
	            this.match(GrammarParser.T__23);
	            this.state = 238;
	            localctx.y2 = this.expression();
	            this.state = 239;
	            this.match(GrammarParser.T__7);
	            break;

	        case 17:
	            localctx = new IdStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 17);
	            this.state = 242;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===GrammarParser.T__31) {
	                this.state = 241;
	                this.match(GrammarParser.T__31);
	            }

	            this.state = 244;
	            localctx.ident = this.match(GrammarParser.ID);
	            this.state = 245;
	            this.match(GrammarParser.T__9);
	            this.state = 246;
	            localctx.exp = this.expression();
	            break;

	        case 18:
	            localctx = new ArrayStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 18);
	            this.state = 248;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===GrammarParser.T__31) {
	                this.state = 247;
	                this.match(GrammarParser.T__31);
	            }

	            this.state = 250;
	            localctx.array = this.match(GrammarParser.ID);
	            this.state = 251;
	            this.match(GrammarParser.T__6);
	            this.state = 252;
	            localctx.index = this.expressionList();
	            this.state = 253;
	            this.match(GrammarParser.T__7);
	            this.state = 254;
	            this.match(GrammarParser.T__9);
	            this.state = 255;
	            localctx.exp = this.expression();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	alternatives() {
	    let localctx = new AlternativesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, GrammarParser.RULE_alternatives);
	    var _la = 0; // Token type
	    try {
	        this.state = 268;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case GrammarParser.T__32:
	            localctx = new ElifAlternativeContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 259;
	            this.match(GrammarParser.T__32);
	            this.state = 260;
	            localctx.cond = this.expression();
	            this.state = 261;
	            this.match(GrammarParser.T__15);
	            this.state = 262;
	            localctx.elifst = this.statements();
	            this.state = 264;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===GrammarParser.T__32 || _la===GrammarParser.T__33) {
	                this.state = 263;
	                localctx.alt = this.alternatives();
	            }

	            break;
	        case GrammarParser.T__33:
	            localctx = new ElseAlternativeContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 266;
	            this.match(GrammarParser.T__33);
	            this.state = 267;
	            localctx.elsest = this.statements();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	idList() {
	    let localctx = new IdListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, GrammarParser.RULE_idList);
	    var _la = 0; // Token type
	    try {
	        this.state = 283;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ListIdListContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 270;
	            localctx.idhead = this.match(GrammarParser.ID);
	            this.state = 273;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===GrammarParser.T__23) {
	                this.state = 271;
	                this.match(GrammarParser.T__23);
	                this.state = 272;
	                localctx.idtail = this.idList();
	            }

	            break;

	        case 2:
	            localctx = new ArrayIdListContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 275;
	            localctx.arrayhead = this.match(GrammarParser.ID);
	            this.state = 276;
	            this.match(GrammarParser.T__6);
	            this.state = 277;
	            localctx.index = this.expressionList();
	            this.state = 278;
	            this.match(GrammarParser.T__7);
	            this.state = 281;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===GrammarParser.T__23) {
	                this.state = 279;
	                this.match(GrammarParser.T__23);
	                this.state = 280;
	                localctx.arraytail = this.idList();
	            }

	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valueList() {
	    let localctx = new ValueListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, GrammarParser.RULE_valueList);
	    try {
	        this.state = 290;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 285;
	            this.value();
	            this.state = 286;
	            this.match(GrammarParser.T__23);
	            this.state = 287;
	            this.valueList();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 289;
	            this.value();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constantList() {
	    let localctx = new ConstantListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, GrammarParser.RULE_constantList);
	    try {
	        this.state = 297;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 292;
	            this.constant();
	            this.state = 293;
	            this.match(GrammarParser.T__23);
	            this.state = 294;
	            this.constantList();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 296;
	            this.constant();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	integerList() {
	    let localctx = new IntegerListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, GrammarParser.RULE_integerList);
	    try {
	        this.state = 303;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ListIntegerListContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 299;
	            localctx.head = this.match(GrammarParser.Integer);
	            this.state = 300;
	            this.match(GrammarParser.T__23);
	            this.state = 301;
	            localctx.tail = this.integerList();
	            break;

	        case 2:
	            localctx = new AtomIntegerListContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 302;
	            localctx.atom = this.match(GrammarParser.Integer);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expressionList() {
	    let localctx = new ExpressionListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, GrammarParser.RULE_expressionList);
	    try {
	        this.state = 310;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ListExpressionListContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 305;
	            localctx.head = this.expression();
	            this.state = 306;
	            this.match(GrammarParser.T__23);
	            this.state = 307;
	            localctx.tail = this.expressionList();
	            break;

	        case 2:
	            localctx = new AtomExpressionListContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 309;
	            localctx.atom = this.expression();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	printList() {
	    let localctx = new PrintListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, GrammarParser.RULE_printList);
	    var _la = 0; // Token type
	    try {
	        this.state = 317;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ListPrintListContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 312;
	            localctx.head = this.expression();
	            this.state = 313;
	            localctx.sep = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===GrammarParser.T__23 || _la===GrammarParser.T__34)) {
	                localctx.sep = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 314;
	            localctx.tail = this.printList();
	            break;

	        case 2:
	            localctx = new AtomPrintListContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 316;
	            localctx.atom = this.expression();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, GrammarParser.RULE_expression);
	    try {
	        this.state = 324;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new OpExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 319;
	            localctx.left = this.andExp();
	            this.state = 320;
	            this.match(GrammarParser.T__35);
	            this.state = 321;
	            localctx.right = this.expression();
	            break;

	        case 2:
	            localctx = new AtomExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 323;
	            localctx.atom = this.andExp();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	andExp() {
	    let localctx = new AndExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, GrammarParser.RULE_andExp);
	    try {
	        this.state = 331;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new OpAndExpContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 326;
	            localctx.left = this.notExp();
	            this.state = 327;
	            this.match(GrammarParser.T__36);
	            this.state = 328;
	            localctx.right = this.andExp();
	            break;

	        case 2:
	            localctx = new AtomAndExpContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 330;
	            localctx.atom = this.notExp();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	notExp() {
	    let localctx = new NotExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, GrammarParser.RULE_notExp);
	    try {
	        this.state = 336;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case GrammarParser.T__37:
	            localctx = new OpNotExpContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 333;
	            this.match(GrammarParser.T__37);
	            this.state = 334;
	            localctx.expr = this.compareExp();
	            break;
	        case GrammarParser.T__6:
	        case GrammarParser.T__44:
	        case GrammarParser.T__49:
	        case GrammarParser.T__50:
	        case GrammarParser.T__51:
	        case GrammarParser.T__52:
	        case GrammarParser.T__53:
	        case GrammarParser.T__54:
	        case GrammarParser.T__55:
	        case GrammarParser.T__56:
	        case GrammarParser.T__57:
	        case GrammarParser.T__58:
	        case GrammarParser.T__59:
	        case GrammarParser.T__60:
	        case GrammarParser.T__61:
	        case GrammarParser.T__62:
	        case GrammarParser.T__63:
	        case GrammarParser.T__64:
	        case GrammarParser.T__65:
	        case GrammarParser.T__66:
	        case GrammarParser.T__67:
	        case GrammarParser.T__68:
	        case GrammarParser.T__69:
	        case GrammarParser.ID:
	        case GrammarParser.Integer:
	        case GrammarParser.String:
	        case GrammarParser.Real:
	            localctx = new AtomNotExpContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 335;
	            localctx.atom = this.compareExp();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	compareExp() {
	    let localctx = new CompareExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, GrammarParser.RULE_compareExp);
	    var _la = 0; // Token type
	    try {
	        this.state = 343;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new OpCompareExpContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 338;
	            localctx.left = this.addExp();
	            this.state = 339;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===GrammarParser.T__9 || ((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (GrammarParser.T__38 - 39)) | (1 << (GrammarParser.T__39 - 39)) | (1 << (GrammarParser.T__40 - 39)) | (1 << (GrammarParser.T__41 - 39)) | (1 << (GrammarParser.T__42 - 39)))) !== 0))) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 340;
	            localctx.right = this.compareExp();
	            break;

	        case 2:
	            localctx = new AtomCompareExpContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 342;
	            localctx.atom = this.addExp();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	addExp() {
	    let localctx = new AddExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, GrammarParser.RULE_addExp);
	    var _la = 0; // Token type
	    try {
	        this.state = 350;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new OpAddExpContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 345;
	            localctx.left = this.multExp();
	            this.state = 346;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===GrammarParser.T__43 || _la===GrammarParser.T__44)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 347;
	            localctx.right = this.addExp();
	            break;

	        case 2:
	            localctx = new AtomAddExpContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 349;
	            localctx.atom = this.multExp();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multExp() {
	    let localctx = new MultExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, GrammarParser.RULE_multExp);
	    var _la = 0; // Token type
	    try {
	        this.state = 357;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new OpMultExpContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 352;
	            localctx.left = this.modExp();
	            this.state = 353;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===GrammarParser.T__45 || _la===GrammarParser.T__46)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 354;
	            localctx.right = this.multExp();
	            break;

	        case 2:
	            localctx = new AtomMultExpContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 356;
	            localctx.atom = this.modExp();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	modExp() {
	    let localctx = new ModExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, GrammarParser.RULE_modExp);
	    try {
	        this.state = 364;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new OpModExpContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 359;
	            localctx.left = this.negateExp();
	            this.state = 360;
	            this.match(GrammarParser.T__47);
	            this.state = 361;
	            localctx.right = this.modExp();
	            break;

	        case 2:
	            localctx = new AtomModExpContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 363;
	            localctx.atom = this.negateExp();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	negateExp() {
	    let localctx = new NegateExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, GrammarParser.RULE_negateExp);
	    try {
	        this.state = 369;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case GrammarParser.T__44:
	            localctx = new OpNegateExpContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 366;
	            this.match(GrammarParser.T__44);
	            this.state = 367;
	            localctx.expr = this.powerExp(0);
	            break;
	        case GrammarParser.T__6:
	        case GrammarParser.T__49:
	        case GrammarParser.T__50:
	        case GrammarParser.T__51:
	        case GrammarParser.T__52:
	        case GrammarParser.T__53:
	        case GrammarParser.T__54:
	        case GrammarParser.T__55:
	        case GrammarParser.T__56:
	        case GrammarParser.T__57:
	        case GrammarParser.T__58:
	        case GrammarParser.T__59:
	        case GrammarParser.T__60:
	        case GrammarParser.T__61:
	        case GrammarParser.T__62:
	        case GrammarParser.T__63:
	        case GrammarParser.T__64:
	        case GrammarParser.T__65:
	        case GrammarParser.T__66:
	        case GrammarParser.T__67:
	        case GrammarParser.T__68:
	        case GrammarParser.T__69:
	        case GrammarParser.ID:
	        case GrammarParser.Integer:
	        case GrammarParser.String:
	        case GrammarParser.Real:
	            localctx = new AtomNegateExpContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 368;
	            localctx.atom = this.powerExp(0);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	powerExp(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new PowerExpContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 38;
	    this.enterRecursionRule(localctx, 38, GrammarParser.RULE_powerExp, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new AtomPowerExpContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 372;
	        localctx.atom = this.value();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 379;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,28,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new OpPowerExpContext(this, new PowerExpContext(this, _parentctx, _parentState));
	                localctx.left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_powerExp);
	                this.state = 374;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 375;
	                this.match(GrammarParser.T__48);
	                this.state = 376;
	                localctx.right = this.value(); 
	            }
	            this.state = 381;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,28,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, GrammarParser.RULE_value);
	    try {
	        this.state = 394;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ExprValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 382;
	            this.match(GrammarParser.T__6);
	            this.state = 383;
	            localctx.expr = this.expression();
	            this.state = 384;
	            this.match(GrammarParser.T__7);
	            break;

	        case 2:
	            localctx = new FunctionValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 386;
	            localctx.func = this.function_();
	            break;

	        case 3:
	            localctx = new ArrayValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 387;
	            localctx.array = this.match(GrammarParser.ID);
	            this.state = 388;
	            this.match(GrammarParser.T__6);
	            this.state = 389;
	            localctx.index = this.expressionList();
	            this.state = 390;
	            this.match(GrammarParser.T__7);
	            break;

	        case 4:
	            localctx = new IDValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 392;
	            localctx.ident = this.match(GrammarParser.ID);
	            break;

	        case 5:
	            localctx = new ConstValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 393;
	            localctx.constv = this.constant();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	function_() {
	    let localctx = new FunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, GrammarParser.RULE_function);
	    try {
	        this.state = 398;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case GrammarParser.T__49:
	        case GrammarParser.T__50:
	        case GrammarParser.T__51:
	        case GrammarParser.T__52:
	        case GrammarParser.T__53:
	        case GrammarParser.T__54:
	        case GrammarParser.T__55:
	        case GrammarParser.T__56:
	        case GrammarParser.T__57:
	        case GrammarParser.T__58:
	        case GrammarParser.T__59:
	        case GrammarParser.T__60:
	        case GrammarParser.T__61:
	        case GrammarParser.T__62:
	        case GrammarParser.T__63:
	        case GrammarParser.T__64:
	        case GrammarParser.T__65:
	        case GrammarParser.T__66:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 396;
	            this.intFunction();
	            break;
	        case GrammarParser.T__67:
	        case GrammarParser.T__68:
	        case GrammarParser.T__69:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 397;
	            this.strFunction();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	intFunction() {
	    let localctx = new IntFunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, GrammarParser.RULE_intFunction);
	    try {
	        this.state = 500;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case GrammarParser.T__49:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 400;
	            this.match(GrammarParser.T__49);
	            this.state = 401;
	            this.match(GrammarParser.T__6);
	            this.state = 402;
	            this.expression();
	            this.state = 403;
	            this.match(GrammarParser.T__7);
	            break;
	        case GrammarParser.T__50:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 405;
	            this.match(GrammarParser.T__50);
	            this.state = 406;
	            this.match(GrammarParser.T__6);
	            this.state = 407;
	            this.expression();
	            this.state = 408;
	            this.match(GrammarParser.T__7);
	            break;
	        case GrammarParser.T__51:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 410;
	            this.match(GrammarParser.T__51);
	            this.state = 411;
	            this.match(GrammarParser.T__6);
	            this.state = 412;
	            this.expression();
	            this.state = 413;
	            this.match(GrammarParser.T__7);
	            break;
	        case GrammarParser.T__52:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 415;
	            this.match(GrammarParser.T__52);
	            this.state = 416;
	            this.match(GrammarParser.T__6);
	            this.state = 417;
	            this.expression();
	            this.state = 418;
	            this.match(GrammarParser.T__7);
	            break;
	        case GrammarParser.T__53:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 420;
	            this.match(GrammarParser.T__53);
	            this.state = 421;
	            this.match(GrammarParser.T__6);
	            this.state = 422;
	            this.expression();
	            this.state = 423;
	            this.match(GrammarParser.T__7);
	            break;
	        case GrammarParser.T__54:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 425;
	            this.match(GrammarParser.T__54);
	            this.state = 426;
	            this.match(GrammarParser.T__6);
	            this.state = 427;
	            this.expression();
	            this.state = 428;
	            this.match(GrammarParser.T__7);
	            break;
	        case GrammarParser.T__55:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 430;
	            this.match(GrammarParser.T__55);
	            this.state = 431;
	            this.match(GrammarParser.T__6);
	            this.state = 432;
	            this.expression();
	            this.state = 433;
	            this.match(GrammarParser.T__7);
	            break;
	        case GrammarParser.T__56:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 435;
	            this.match(GrammarParser.T__56);
	            this.state = 436;
	            this.match(GrammarParser.T__6);
	            this.state = 437;
	            this.expression();
	            this.state = 438;
	            this.match(GrammarParser.T__7);
	            break;
	        case GrammarParser.T__57:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 440;
	            this.match(GrammarParser.T__57);
	            this.state = 441;
	            this.match(GrammarParser.T__6);
	            this.state = 442;
	            this.expression();
	            this.state = 443;
	            this.match(GrammarParser.T__7);
	            break;
	        case GrammarParser.T__58:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 445;
	            this.match(GrammarParser.T__58);
	            this.state = 446;
	            this.match(GrammarParser.T__6);
	            this.state = 447;
	            this.expression();
	            this.state = 448;
	            this.match(GrammarParser.T__7);
	            break;
	        case GrammarParser.T__59:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 450;
	            this.match(GrammarParser.T__59);
	            this.state = 451;
	            this.match(GrammarParser.T__6);
	            this.state = 452;
	            this.expression();
	            this.state = 453;
	            this.match(GrammarParser.T__7);
	            break;
	        case GrammarParser.T__60:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 455;
	            this.match(GrammarParser.T__60);
	            this.state = 456;
	            this.match(GrammarParser.T__6);
	            this.state = 457;
	            this.expression();
	            this.state = 458;
	            this.match(GrammarParser.T__7);
	            break;
	        case GrammarParser.T__61:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 460;
	            this.match(GrammarParser.T__61);
	            this.state = 461;
	            this.match(GrammarParser.T__6);
	            this.state = 462;
	            this.expression();
	            this.state = 463;
	            this.match(GrammarParser.T__7);
	            break;
	        case GrammarParser.T__62:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 465;
	            this.match(GrammarParser.T__62);
	            this.state = 466;
	            this.match(GrammarParser.T__6);
	            this.state = 467;
	            this.expression();
	            this.state = 468;
	            this.match(GrammarParser.T__7);
	            break;
	        case GrammarParser.T__63:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 470;
	            this.match(GrammarParser.T__63);
	            this.state = 471;
	            this.match(GrammarParser.T__6);
	            this.state = 472;
	            this.expression();
	            this.state = 473;
	            this.match(GrammarParser.T__23);
	            this.state = 474;
	            this.expression();
	            this.state = 475;
	            this.match(GrammarParser.T__7);
	            break;
	        case GrammarParser.T__64:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 477;
	            this.match(GrammarParser.T__64);
	            this.state = 478;
	            this.match(GrammarParser.T__6);
	            this.state = 479;
	            this.expression();
	            this.state = 480;
	            this.match(GrammarParser.T__23);
	            this.state = 481;
	            this.expression();
	            this.state = 482;
	            this.match(GrammarParser.T__7);
	            break;
	        case GrammarParser.T__65:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 484;
	            this.match(GrammarParser.T__65);
	            this.state = 485;
	            this.match(GrammarParser.T__6);
	            this.state = 486;
	            this.expression();
	            this.state = 487;
	            this.match(GrammarParser.T__23);
	            this.state = 488;
	            this.expression();
	            this.state = 489;
	            this.match(GrammarParser.T__7);
	            break;
	        case GrammarParser.T__66:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 491;
	            this.match(GrammarParser.T__66);
	            this.state = 492;
	            this.match(GrammarParser.T__6);
	            this.state = 493;
	            this.expression();
	            this.state = 494;
	            this.match(GrammarParser.T__23);
	            this.state = 495;
	            this.expression();
	            this.state = 496;
	            this.match(GrammarParser.T__23);
	            this.state = 497;
	            this.expression();
	            this.state = 498;
	            this.match(GrammarParser.T__7);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	strFunction() {
	    let localctx = new StrFunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, GrammarParser.RULE_strFunction);
	    try {
	        this.state = 519;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case GrammarParser.T__67:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 502;
	            this.match(GrammarParser.T__67);
	            this.state = 503;
	            this.match(GrammarParser.T__6);
	            this.state = 504;
	            this.expression();
	            this.state = 505;
	            this.match(GrammarParser.T__7);
	            break;
	        case GrammarParser.T__68:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 507;
	            this.match(GrammarParser.T__68);
	            this.state = 508;
	            this.match(GrammarParser.T__6);
	            this.state = 509;
	            this.expression();
	            this.state = 510;
	            this.match(GrammarParser.T__7);
	            break;
	        case GrammarParser.T__69:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 512;
	            this.match(GrammarParser.T__69);
	            this.state = 513;
	            this.match(GrammarParser.T__6);
	            this.state = 514;
	            this.expression();
	            this.state = 515;
	            this.match(GrammarParser.T__23);
	            this.state = 516;
	            this.expression();
	            this.state = 517;
	            this.match(GrammarParser.T__7);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constant() {
	    let localctx = new ConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, GrammarParser.RULE_constant);
	    try {
	        this.state = 524;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case GrammarParser.Integer:
	            localctx = new ConstIntContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 521;
	            this.match(GrammarParser.Integer);
	            break;
	        case GrammarParser.String:
	            localctx = new ConstStringContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 522;
	            this.match(GrammarParser.String);
	            break;
	        case GrammarParser.Real:
	            localctx = new ConstRealContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 523;
	            this.match(GrammarParser.Real);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	label() {
	    let localctx = new LabelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, GrammarParser.RULE_label);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 526;
	        this.match(GrammarParser.T__70);
	        this.state = 527;
	        this.match(GrammarParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

GrammarParser.EOF = antlr4.Token.EOF;
GrammarParser.T__0 = 1;
GrammarParser.T__1 = 2;
GrammarParser.T__2 = 3;
GrammarParser.T__3 = 4;
GrammarParser.T__4 = 5;
GrammarParser.T__5 = 6;
GrammarParser.T__6 = 7;
GrammarParser.T__7 = 8;
GrammarParser.T__8 = 9;
GrammarParser.T__9 = 10;
GrammarParser.T__10 = 11;
GrammarParser.T__11 = 12;
GrammarParser.T__12 = 13;
GrammarParser.T__13 = 14;
GrammarParser.T__14 = 15;
GrammarParser.T__15 = 16;
GrammarParser.T__16 = 17;
GrammarParser.T__17 = 18;
GrammarParser.T__18 = 19;
GrammarParser.T__19 = 20;
GrammarParser.T__20 = 21;
GrammarParser.T__21 = 22;
GrammarParser.T__22 = 23;
GrammarParser.T__23 = 24;
GrammarParser.T__24 = 25;
GrammarParser.T__25 = 26;
GrammarParser.T__26 = 27;
GrammarParser.T__27 = 28;
GrammarParser.T__28 = 29;
GrammarParser.T__29 = 30;
GrammarParser.T__30 = 31;
GrammarParser.T__31 = 32;
GrammarParser.T__32 = 33;
GrammarParser.T__33 = 34;
GrammarParser.T__34 = 35;
GrammarParser.T__35 = 36;
GrammarParser.T__36 = 37;
GrammarParser.T__37 = 38;
GrammarParser.T__38 = 39;
GrammarParser.T__39 = 40;
GrammarParser.T__40 = 41;
GrammarParser.T__41 = 42;
GrammarParser.T__42 = 43;
GrammarParser.T__43 = 44;
GrammarParser.T__44 = 45;
GrammarParser.T__45 = 46;
GrammarParser.T__46 = 47;
GrammarParser.T__47 = 48;
GrammarParser.T__48 = 49;
GrammarParser.T__49 = 50;
GrammarParser.T__50 = 51;
GrammarParser.T__51 = 52;
GrammarParser.T__52 = 53;
GrammarParser.T__53 = 54;
GrammarParser.T__54 = 55;
GrammarParser.T__55 = 56;
GrammarParser.T__56 = 57;
GrammarParser.T__57 = 58;
GrammarParser.T__58 = 59;
GrammarParser.T__59 = 60;
GrammarParser.T__60 = 61;
GrammarParser.T__61 = 62;
GrammarParser.T__62 = 63;
GrammarParser.T__63 = 64;
GrammarParser.T__64 = 65;
GrammarParser.T__65 = 66;
GrammarParser.T__66 = 67;
GrammarParser.T__67 = 68;
GrammarParser.T__68 = 69;
GrammarParser.T__69 = 70;
GrammarParser.T__70 = 71;
GrammarParser.ID = 72;
GrammarParser.Integer = 73;
GrammarParser.String = 74;
GrammarParser.Real = 75;
GrammarParser.WS = 76;
GrammarParser.COMMENT = 77;

GrammarParser.RULE_start = 0;
GrammarParser.RULE_subroutines = 1;
GrammarParser.RULE_statements = 2;
GrammarParser.RULE_statement = 3;
GrammarParser.RULE_alternatives = 4;
GrammarParser.RULE_idList = 5;
GrammarParser.RULE_valueList = 6;
GrammarParser.RULE_constantList = 7;
GrammarParser.RULE_integerList = 8;
GrammarParser.RULE_expressionList = 9;
GrammarParser.RULE_printList = 10;
GrammarParser.RULE_expression = 11;
GrammarParser.RULE_andExp = 12;
GrammarParser.RULE_notExp = 13;
GrammarParser.RULE_compareExp = 14;
GrammarParser.RULE_addExp = 15;
GrammarParser.RULE_multExp = 16;
GrammarParser.RULE_modExp = 17;
GrammarParser.RULE_negateExp = 18;
GrammarParser.RULE_powerExp = 19;
GrammarParser.RULE_value = 20;
GrammarParser.RULE_function = 21;
GrammarParser.RULE_intFunction = 22;
GrammarParser.RULE_strFunction = 23;
GrammarParser.RULE_constant = 24;
GrammarParser.RULE_label = 25;

class StartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_start;
        this.main = null; // StatementsContext
        this.drawloop = null; // StatementsContext
    }

	subroutines = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SubroutinesContext);
	    } else {
	        return this.getTypedRuleContext(SubroutinesContext,i);
	    }
	};

	statements = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementsContext);
	    } else {
	        return this.getTypedRuleContext(StatementsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterStart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitStart(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitStart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SubroutinesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_subroutines;
        this.lb = null; // LabelContext
        this.st = null; // StatementsContext
    }

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	statements() {
	    return this.getTypedRuleContext(StatementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterSubroutines(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitSubroutines(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitSubroutines(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_statements;
    }

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	statements() {
	    return this.getTypedRuleContext(StatementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterStatements(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitStatements(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitStatements(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_statement;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DrawlineStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.x1 = null; // ExpressionContext;
        this.y1 = null; // ExpressionContext;
        this.x2 = null; // ExpressionContext;
        this.y2 = null; // ExpressionContext;
        this.color = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterDrawlineStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitDrawlineStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitDrawlineStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.DrawlineStatementContext = DrawlineStatementContext;

class DimStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.ident = null; // Token;
        this.list = null; // IntegerListContext;
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(GrammarParser.ID, 0);
	};

	integerList() {
	    return this.getTypedRuleContext(IntegerListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterDimStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitDimStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitDimStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.DimStatementContext = DimStatementContext;

class ForStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.ident = null; // Token;
        this.step = null; // Token;
        this.st = null; // StatementsContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	ID() {
	    return this.getToken(GrammarParser.ID, 0);
	};

	statements() {
	    return this.getTypedRuleContext(StatementsContext,0);
	};

	Integer() {
	    return this.getToken(GrammarParser.Integer, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterForStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitForStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitForStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.ForStatementContext = ForStatementContext;

class DrawtriangleStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.x = null; // ExpressionContext;
        this.y = null; // ExpressionContext;
        this.size = null; // ExpressionContext;
        this.rotation = null; // ExpressionContext;
        this.color = null; // ExpressionContext;
        this.drawmode = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterDrawtriangleStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitDrawtriangleStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitDrawtriangleStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.DrawtriangleStatementContext = DrawtriangleStatementContext;

class IfStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.cond = null; // ExpressionContext;
        this.st = null; // StatementsContext;
        this.alt = null; // AlternativesContext;
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	statements() {
	    return this.getTypedRuleContext(StatementsContext,0);
	};

	alternatives() {
	    return this.getTypedRuleContext(AlternativesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitIfStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitIfStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.IfStatementContext = IfStatementContext;

class DrawclearStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.range = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterDrawclearStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitDrawclearStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitDrawclearStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.DrawclearStatementContext = DrawclearStatementContext;

class WhileStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	statements() {
	    return this.getTypedRuleContext(StatementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterWhileStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitWhileStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitWhileStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.WhileStatementContext = WhileStatementContext;

class PrintStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	printList() {
	    return this.getTypedRuleContext(PrintListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterPrintStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitPrintStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitPrintStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.PrintStatementContext = PrintStatementContext;

class GosubStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterGosubStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitGosubStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitGosubStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.GosubStatementContext = GosubStatementContext;

class IdStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.ident = null; // Token;
        this.exp = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(GrammarParser.ID, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterIdStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitIdStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitIdStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.IdStatementContext = IdStatementContext;

class ArrayStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.array = null; // Token;
        this.index = null; // ExpressionListContext;
        this.exp = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(GrammarParser.ID, 0);
	};

	expressionList() {
	    return this.getTypedRuleContext(ExpressionListContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterArrayStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitArrayStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitArrayStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.ArrayStatementContext = ArrayStatementContext;

class InputStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	idList() {
	    return this.getTypedRuleContext(IdListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterInputStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitInputStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitInputStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.InputStatementContext = InputStatementContext;

class DrawcircleStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.x = null; // ExpressionContext;
        this.y = null; // ExpressionContext;
        this.radius = null; // ExpressionContext;
        this.rotation = null; // ExpressionContext;
        this.color = null; // ExpressionContext;
        this.drawmode = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterDrawcircleStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitDrawcircleStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitDrawcircleStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.DrawcircleStatementContext = DrawcircleStatementContext;

class DrawclearareaStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.x1 = null; // ExpressionContext;
        this.y1 = null; // ExpressionContext;
        this.x2 = null; // ExpressionContext;
        this.y2 = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterDrawclearareaStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitDrawclearareaStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitDrawclearareaStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.DrawclearareaStatementContext = DrawclearareaStatementContext;

class DoWhileStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	statements() {
	    return this.getTypedRuleContext(StatementsContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterDoWhileStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitDoWhileStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitDoWhileStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.DoWhileStatementContext = DoWhileStatementContext;

class DrawtextStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.text = null; // ExpressionContext;
        this.x = null; // ExpressionContext;
        this.y = null; // ExpressionContext;
        this.font = null; // ExpressionContext;
        this.drawmode = null; // ExpressionContext;
        this.maxWidth = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterDrawtextStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitDrawtextStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitDrawtextStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.DrawtextStatementContext = DrawtextStatementContext;

class DrawrectStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.x = null; // ExpressionContext;
        this.y = null; // ExpressionContext;
        this.width = null; // ExpressionContext;
        this.height = null; // ExpressionContext;
        this.rotation = null; // ExpressionContext;
        this.color = null; // ExpressionContext;
        this.drawmode = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterDrawrectStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitDrawrectStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitDrawrectStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.DrawrectStatementContext = DrawrectStatementContext;

class DrawsquareStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.x = null; // ExpressionContext;
        this.y = null; // ExpressionContext;
        this.size = null; // ExpressionContext;
        this.rotation = null; // ExpressionContext;
        this.color = null; // ExpressionContext;
        this.drawmode = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterDrawsquareStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitDrawsquareStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitDrawsquareStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.DrawsquareStatementContext = DrawsquareStatementContext;

class AlternativesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_alternatives;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ElseAlternativeContext extends AlternativesContext {

    constructor(parser, ctx) {
        super(parser);
        this.elsest = null; // StatementsContext;
        super.copyFrom(ctx);
    }

	statements() {
	    return this.getTypedRuleContext(StatementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterElseAlternative(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitElseAlternative(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitElseAlternative(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.ElseAlternativeContext = ElseAlternativeContext;

class ElifAlternativeContext extends AlternativesContext {

    constructor(parser, ctx) {
        super(parser);
        this.cond = null; // ExpressionContext;
        this.elifst = null; // StatementsContext;
        this.alt = null; // AlternativesContext;
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	statements() {
	    return this.getTypedRuleContext(StatementsContext,0);
	};

	alternatives() {
	    return this.getTypedRuleContext(AlternativesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterElifAlternative(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitElifAlternative(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitElifAlternative(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.ElifAlternativeContext = ElifAlternativeContext;

class IdListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_idList;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ArrayIdListContext extends IdListContext {

    constructor(parser, ctx) {
        super(parser);
        this.arrayhead = null; // Token;
        this.index = null; // ExpressionListContext;
        this.arraytail = null; // IdListContext;
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(GrammarParser.ID, 0);
	};

	expressionList() {
	    return this.getTypedRuleContext(ExpressionListContext,0);
	};

	idList() {
	    return this.getTypedRuleContext(IdListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterArrayIdList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitArrayIdList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitArrayIdList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.ArrayIdListContext = ArrayIdListContext;

class ListIdListContext extends IdListContext {

    constructor(parser, ctx) {
        super(parser);
        this.idhead = null; // Token;
        this.idtail = null; // IdListContext;
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(GrammarParser.ID, 0);
	};

	idList() {
	    return this.getTypedRuleContext(IdListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterListIdList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitListIdList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitListIdList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.ListIdListContext = ListIdListContext;

class ValueListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_valueList;
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	valueList() {
	    return this.getTypedRuleContext(ValueListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterValueList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitValueList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitValueList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConstantListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_constantList;
    }

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	constantList() {
	    return this.getTypedRuleContext(ConstantListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterConstantList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitConstantList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitConstantList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IntegerListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_integerList;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AtomIntegerListContext extends IntegerListContext {

    constructor(parser, ctx) {
        super(parser);
        this.atom = null; // Token;
        super.copyFrom(ctx);
    }

	Integer() {
	    return this.getToken(GrammarParser.Integer, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterAtomIntegerList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitAtomIntegerList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitAtomIntegerList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.AtomIntegerListContext = AtomIntegerListContext;

class ListIntegerListContext extends IntegerListContext {

    constructor(parser, ctx) {
        super(parser);
        this.head = null; // Token;
        this.tail = null; // IntegerListContext;
        super.copyFrom(ctx);
    }

	Integer() {
	    return this.getToken(GrammarParser.Integer, 0);
	};

	integerList() {
	    return this.getTypedRuleContext(IntegerListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterListIntegerList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitListIntegerList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitListIntegerList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.ListIntegerListContext = ListIntegerListContext;

class ExpressionListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_expressionList;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ListExpressionListContext extends ExpressionListContext {

    constructor(parser, ctx) {
        super(parser);
        this.head = null; // ExpressionContext;
        this.tail = null; // ExpressionListContext;
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	expressionList() {
	    return this.getTypedRuleContext(ExpressionListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterListExpressionList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitListExpressionList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitListExpressionList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.ListExpressionListContext = ListExpressionListContext;

class AtomExpressionListContext extends ExpressionListContext {

    constructor(parser, ctx) {
        super(parser);
        this.atom = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterAtomExpressionList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitAtomExpressionList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitAtomExpressionList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.AtomExpressionListContext = AtomExpressionListContext;

class PrintListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_printList;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ListPrintListContext extends PrintListContext {

    constructor(parser, ctx) {
        super(parser);
        this.head = null; // ExpressionContext;
        this.sep = null; // Token;
        this.tail = null; // PrintListContext;
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	printList() {
	    return this.getTypedRuleContext(PrintListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterListPrintList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitListPrintList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitListPrintList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.ListPrintListContext = ListPrintListContext;

class AtomPrintListContext extends PrintListContext {

    constructor(parser, ctx) {
        super(parser);
        this.atom = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterAtomPrintList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitAtomPrintList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitAtomPrintList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.AtomPrintListContext = AtomPrintListContext;

class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AtomExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.atom = null; // AndExpContext;
        super.copyFrom(ctx);
    }

	andExp() {
	    return this.getTypedRuleContext(AndExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterAtomExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitAtomExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitAtomExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.AtomExpressionContext = AtomExpressionContext;

class OpExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // AndExpContext;
        this.right = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	andExp() {
	    return this.getTypedRuleContext(AndExpContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterOpExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitOpExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitOpExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.OpExpressionContext = OpExpressionContext;

class AndExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_andExp;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AtomAndExpContext extends AndExpContext {

    constructor(parser, ctx) {
        super(parser);
        this.atom = null; // NotExpContext;
        super.copyFrom(ctx);
    }

	notExp() {
	    return this.getTypedRuleContext(NotExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterAtomAndExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitAtomAndExp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitAtomAndExp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.AtomAndExpContext = AtomAndExpContext;

class OpAndExpContext extends AndExpContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // NotExpContext;
        this.right = null; // AndExpContext;
        super.copyFrom(ctx);
    }

	notExp() {
	    return this.getTypedRuleContext(NotExpContext,0);
	};

	andExp() {
	    return this.getTypedRuleContext(AndExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterOpAndExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitOpAndExp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitOpAndExp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.OpAndExpContext = OpAndExpContext;

class NotExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_notExp;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AtomNotExpContext extends NotExpContext {

    constructor(parser, ctx) {
        super(parser);
        this.atom = null; // CompareExpContext;
        super.copyFrom(ctx);
    }

	compareExp() {
	    return this.getTypedRuleContext(CompareExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterAtomNotExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitAtomNotExp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitAtomNotExp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.AtomNotExpContext = AtomNotExpContext;

class OpNotExpContext extends NotExpContext {

    constructor(parser, ctx) {
        super(parser);
        this.expr = null; // CompareExpContext;
        super.copyFrom(ctx);
    }

	compareExp() {
	    return this.getTypedRuleContext(CompareExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterOpNotExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitOpNotExp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitOpNotExp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.OpNotExpContext = OpNotExpContext;

class CompareExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_compareExp;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AtomCompareExpContext extends CompareExpContext {

    constructor(parser, ctx) {
        super(parser);
        this.atom = null; // AddExpContext;
        super.copyFrom(ctx);
    }

	addExp() {
	    return this.getTypedRuleContext(AddExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterAtomCompareExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitAtomCompareExp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitAtomCompareExp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.AtomCompareExpContext = AtomCompareExpContext;

class OpCompareExpContext extends CompareExpContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // AddExpContext;
        this.op = null; // Token;
        this.right = null; // CompareExpContext;
        super.copyFrom(ctx);
    }

	addExp() {
	    return this.getTypedRuleContext(AddExpContext,0);
	};

	compareExp() {
	    return this.getTypedRuleContext(CompareExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterOpCompareExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitOpCompareExp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitOpCompareExp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.OpCompareExpContext = OpCompareExpContext;

class AddExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_addExp;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AtomAddExpContext extends AddExpContext {

    constructor(parser, ctx) {
        super(parser);
        this.atom = null; // MultExpContext;
        super.copyFrom(ctx);
    }

	multExp() {
	    return this.getTypedRuleContext(MultExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterAtomAddExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitAtomAddExp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitAtomAddExp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.AtomAddExpContext = AtomAddExpContext;

class OpAddExpContext extends AddExpContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // MultExpContext;
        this.op = null; // Token;
        this.right = null; // AddExpContext;
        super.copyFrom(ctx);
    }

	multExp() {
	    return this.getTypedRuleContext(MultExpContext,0);
	};

	addExp() {
	    return this.getTypedRuleContext(AddExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterOpAddExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitOpAddExp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitOpAddExp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.OpAddExpContext = OpAddExpContext;

class MultExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_multExp;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class OpMultExpContext extends MultExpContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // ModExpContext;
        this.op = null; // Token;
        this.right = null; // MultExpContext;
        super.copyFrom(ctx);
    }

	modExp() {
	    return this.getTypedRuleContext(ModExpContext,0);
	};

	multExp() {
	    return this.getTypedRuleContext(MultExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterOpMultExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitOpMultExp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitOpMultExp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.OpMultExpContext = OpMultExpContext;

class AtomMultExpContext extends MultExpContext {

    constructor(parser, ctx) {
        super(parser);
        this.atom = null; // ModExpContext;
        super.copyFrom(ctx);
    }

	modExp() {
	    return this.getTypedRuleContext(ModExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterAtomMultExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitAtomMultExp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitAtomMultExp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.AtomMultExpContext = AtomMultExpContext;

class ModExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_modExp;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class OpModExpContext extends ModExpContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // NegateExpContext;
        this.right = null; // ModExpContext;
        super.copyFrom(ctx);
    }

	negateExp() {
	    return this.getTypedRuleContext(NegateExpContext,0);
	};

	modExp() {
	    return this.getTypedRuleContext(ModExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterOpModExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitOpModExp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitOpModExp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.OpModExpContext = OpModExpContext;

class AtomModExpContext extends ModExpContext {

    constructor(parser, ctx) {
        super(parser);
        this.atom = null; // NegateExpContext;
        super.copyFrom(ctx);
    }

	negateExp() {
	    return this.getTypedRuleContext(NegateExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterAtomModExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitAtomModExp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitAtomModExp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.AtomModExpContext = AtomModExpContext;

class NegateExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_negateExp;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AtomNegateExpContext extends NegateExpContext {

    constructor(parser, ctx) {
        super(parser);
        this.atom = null; // PowerExpContext;
        super.copyFrom(ctx);
    }

	powerExp() {
	    return this.getTypedRuleContext(PowerExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterAtomNegateExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitAtomNegateExp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitAtomNegateExp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.AtomNegateExpContext = AtomNegateExpContext;

class OpNegateExpContext extends NegateExpContext {

    constructor(parser, ctx) {
        super(parser);
        this.expr = null; // PowerExpContext;
        super.copyFrom(ctx);
    }

	powerExp() {
	    return this.getTypedRuleContext(PowerExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterOpNegateExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitOpNegateExp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitOpNegateExp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.OpNegateExpContext = OpNegateExpContext;

class PowerExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_powerExp;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class OpPowerExpContext extends PowerExpContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // PowerExpContext;
        this.right = null; // ValueContext;
        super.copyFrom(ctx);
    }

	powerExp() {
	    return this.getTypedRuleContext(PowerExpContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterOpPowerExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitOpPowerExp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitOpPowerExp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.OpPowerExpContext = OpPowerExpContext;

class AtomPowerExpContext extends PowerExpContext {

    constructor(parser, ctx) {
        super(parser);
        this.atom = null; // ValueContext;
        super.copyFrom(ctx);
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterAtomPowerExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitAtomPowerExp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitAtomPowerExp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.AtomPowerExpContext = AtomPowerExpContext;

class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_value;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ConstValueContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.constv = null; // ConstantContext;
        super.copyFrom(ctx);
    }

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterConstValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitConstValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitConstValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.ConstValueContext = ConstValueContext;

class ExprValueContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.expr = null; // ExpressionContext;
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterExprValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitExprValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitExprValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.ExprValueContext = ExprValueContext;

class FunctionValueContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.func = null; // FunctionContext;
        super.copyFrom(ctx);
    }

	function_() {
	    return this.getTypedRuleContext(FunctionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterFunctionValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitFunctionValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitFunctionValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.FunctionValueContext = FunctionValueContext;

class ArrayValueContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.array = null; // Token;
        this.index = null; // ExpressionListContext;
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(GrammarParser.ID, 0);
	};

	expressionList() {
	    return this.getTypedRuleContext(ExpressionListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterArrayValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitArrayValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitArrayValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.ArrayValueContext = ArrayValueContext;

class IDValueContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.ident = null; // Token;
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(GrammarParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterIDValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitIDValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitIDValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.IDValueContext = IDValueContext;

class FunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_function;
    }

	intFunction() {
	    return this.getTypedRuleContext(IntFunctionContext,0);
	};

	strFunction() {
	    return this.getTypedRuleContext(StrFunctionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterFunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitFunction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitFunction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IntFunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_intFunction;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterIntFunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitIntFunction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitIntFunction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StrFunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_strFunction;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterStrFunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitStrFunction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitStrFunction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_constant;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ConstStringContext extends ConstantContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	String() {
	    return this.getToken(GrammarParser.String, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterConstString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitConstString(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitConstString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.ConstStringContext = ConstStringContext;

class ConstIntContext extends ConstantContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Integer() {
	    return this.getToken(GrammarParser.Integer, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterConstInt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitConstInt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitConstInt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.ConstIntContext = ConstIntContext;

class ConstRealContext extends ConstantContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Real() {
	    return this.getToken(GrammarParser.Real, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterConstReal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitConstReal(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitConstReal(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GrammarParser.ConstRealContext = ConstRealContext;

class LabelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GrammarParser.RULE_label;
    }

	ID() {
	    return this.getToken(GrammarParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.enterLabel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GrammarListener ) {
	        listener.exitLabel(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GrammarVisitor ) {
	        return visitor.visitLabel(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




GrammarParser.StartContext = StartContext; 
GrammarParser.SubroutinesContext = SubroutinesContext; 
GrammarParser.StatementsContext = StatementsContext; 
GrammarParser.StatementContext = StatementContext; 
GrammarParser.AlternativesContext = AlternativesContext; 
GrammarParser.IdListContext = IdListContext; 
GrammarParser.ValueListContext = ValueListContext; 
GrammarParser.ConstantListContext = ConstantListContext; 
GrammarParser.IntegerListContext = IntegerListContext; 
GrammarParser.ExpressionListContext = ExpressionListContext; 
GrammarParser.PrintListContext = PrintListContext; 
GrammarParser.ExpressionContext = ExpressionContext; 
GrammarParser.AndExpContext = AndExpContext; 
GrammarParser.NotExpContext = NotExpContext; 
GrammarParser.CompareExpContext = CompareExpContext; 
GrammarParser.AddExpContext = AddExpContext; 
GrammarParser.MultExpContext = MultExpContext; 
GrammarParser.ModExpContext = ModExpContext; 
GrammarParser.NegateExpContext = NegateExpContext; 
GrammarParser.PowerExpContext = PowerExpContext; 
GrammarParser.ValueContext = ValueContext; 
GrammarParser.FunctionContext = FunctionContext; 
GrammarParser.IntFunctionContext = IntFunctionContext; 
GrammarParser.StrFunctionContext = StrFunctionContext; 
GrammarParser.ConstantContext = ConstantContext; 
GrammarParser.LabelContext = LabelContext; 
