var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["024aebb8-cd75-43fb-b087-e851e51d5fb7"],"propsByKey":{"024aebb8-cd75-43fb-b087-e851e51d5fb7":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"Lkz3wXLl3Q9IV2MZnu1k.3XHbrblMzmX","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/024aebb8-cd75-43fb-b087-e851e51d5fb7.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var game="play";
var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  
createEdgeSprites();
//adicione velocidade para fazer o carro se mover.



function draw() {
   background("white");
  text("Lifes: "+ life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// crie a função rebater, para fazer o carro rebater nos limites
//Adicione a condição para fazer Sam se mover para a esquerda e para a direita
//Adicione a condição para reduzir a vida de Sam quando ele encostar no carro.
     car1.bounceOff(boundary1);
  car2.bounceOff(boundary1);
  car3.bounceOff(boundary1);
  car4.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary2);
 car1.velocityY=3;
car2.velocityY=3;
car3.velocityY=-3;
car4.velocityY=-3;

if (game=="play"){
if(keyDown("RIGHT_ARROW")){
  sam.x=sam.x+2;
}
if(keyDown("LEFT_ARROW")){
  sam.x=sam.x-2;
}



  
}
if(keyDown("r")){
  sam.x=20;
  sam.y=190;
  car1.x=100;
  car1.y=130;
  car2.x=215;
  car2.y=130;
  car3.x=165;
  car3.y=250;
  car4.x=270;
  car4.y=250;
}
if (sam.isTouching(rightEdge)){
   sam.x=1;
   car1.destroy;
   car2.destroy;
   car3.destroy;
   car4.destroy;
}
if (sam.isTouching(car1)||sam.isTouching(car2)||sam.isTouching(car3)||sam.isTouching(car4)){
  
  textSize(12);
  fill(rgb(122, 133, 82));
  text("SAM died, please try again pressing R", 52, 168);

  
  
  
}
sam.collide(boundary1);
sam.collide(boundary2);
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
