function bounceOff(go1, go2) {

    if(go1.x-go2.x < go2.width/2 + go1.width/2 && go2.x-go1.x < go2.width/2 + go1.width/2) {
        go1.velocityX = go1.velocityX*(-1);
        go2.velocityX = go2.velocityX*(-1);
      }
    if (go1.y- go2.y < go2.height/2 + go1.height/2 && go2.y- go1.y < go2.height/2 + go1.height/2) {
        go1.velocityY = go1.velocityY*(-1);
        go2.velocityY = go2.velocityY*(-1);
    }
      
}