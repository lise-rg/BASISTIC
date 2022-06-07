
_start {
  ball_dir = rnd(360);
}

_moveBall {

  ball_x = ball_x + ball_spd * cos(dtr(ball_dir));
  ball_y = ball_y - ball_spd * sin(dtr(ball_dir));
  
  if ball_y - ball_rad < 0 then
    ball_y = ball_rad;
    if ball_dir < 90 then ball_dir = rnd(60) + 280;
    else ball_dir = rnd(60) + 190;
    endif;
    print(ball_dir);
  elif ball_y + ball_rad > SCREEN_H then
    ball_y = SCREEN_H - ball_rad;
    if ball_dir < 270 then ball_dir = rnd(60) + 100;
    else ball_dir = rnd(60) + 10;
    endif;
  endif;
  
  if ball_x < 0 or ball_x > SCREEN_W then gosub _reset;
  endif;
}

_movePaddleLeft {
  if up then left_y = left_y - paddle_spd; 
  elif down then left_y = left_y + paddle_spd;
  endif;
  
  if left_y < 0 then left_y = 0;
  elif left_y + paddle_h > SCREEN_H then left_y = SCREEN_H - paddle_h;
  endif;
}

_checkPressedKeys {
  if keypressed("ArrowUp") then up = 1;
  elif keyPressed("ArrowDown") then down = 1;
  endif;
  
  if keyreleased("ArrowUp") then up = 0;
  elif keyreleased("ArrowDown") then down = 0;
  endif;
}

_reset {
  left_y = SCREEN_H / 2 - paddle_h / 2;
  right_y = left_y;
  ball_x = SCREEN_W / 2;
  ball_y = SCREEN_H / 2;
  move = 0;
}

main {
  paddle_spd = 4;
  paddle_w = 20;
  paddle_h = 100;
  
  left_score = 0;
  right_score = 0;
  
  left_x = 20;
  right_x = (SCREEN_W - 20) - paddle_w;
 
  ball_rad = 10;
  ball_dir = 0;
  ball_spd = 3;
  
  gosub _reset;
  
  up = 0;
  down = 0;
}

update {
  
  gosub _checkPressedKeys;
  
  // Start game when arrow key pressed
  if (not move) and (up or down) then move = 1; gosub _start;
  endif;
  
  if move then 
  
    gosub _moveBall;
    gosub _movePaddleLeft;
    
  endif;
  
  // Draw background and paddles
  drawrect(0, 0, SCREEN_W, SCREEN_H, 0, "black", 1);
  drawrect(left_x, left_y, paddle_w, paddle_h, 0, "white", 1);
  drawrect(right_x, right_y, paddle_w, paddle_h, 0, "white", 1);
  drawcircle(ball_x, ball_y, ball_rad, 0, "white", 1);
}