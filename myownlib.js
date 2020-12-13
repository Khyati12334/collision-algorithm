function collision(green,red)
{
  if (green.x - red.x < red.width/2 + green.width/2
    && red.x - green.x < red.width/2 + green.width/2
    && green.y - red.y < red.height/2 + green.height/2
    && red.y - green.y < red.height/2 + green.height/2) {
  return true;
}
else {
  return false;
}
}

