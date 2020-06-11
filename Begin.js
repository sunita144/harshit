class Begin{

constructor(){}

show(){


if(mousePressedOver(bolt)){

    background(0);
    gameState = "play";
    

    
var zuesGame = new Zues();
    zuesGame.clear();
    //zuesGame.create();
    

    drawSprites();

}


if(mousePressedOver(trident)){

    background(0);

    

    
var tridentGame = new Poseidon();
    tridentGame.clear();
   

}



}






}