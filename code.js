var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["81a4f500-ad11-4009-8f0e-175b165af74b","11d5d9f0-6932-45de-ba25-6f4ac37fe9a9","7d58941f-a7d8-42da-85c6-3efa6131461a","42b7aa29-c5f8-44fe-9d49-8540deca9c13","e92d7a76-cb9d-426f-90f2-1f5356f539aa","7baf81a4-e720-472c-a0df-6245432f56e8","ecd69888-bc06-4291-a634-85c1e95ca649","634f05e9-0fda-4f34-a05f-4486380085bc","89c7dae4-d461-4f91-859a-bcf65ea7814a","0c67239d-9556-4810-a526-d114c37fa714","a597f098-5afc-4da8-9340-d8aad1e08667","c5727244-b8bd-49af-a3a2-77ba393f0333","45e27f97-ff83-4186-9431-5d176b4ece73","0ce8b147-7761-4d6f-a86f-2fe2ce46ccc6","7651123c-7d5f-4564-9261-11983147de57","a24722d6-2a18-46ad-bcc1-770205d3c249","5262cd39-bef8-4241-a71e-7b67dd8e60c9","d436b91c-7764-4924-a2b9-c79c1f01e0a6","4c9f46dc-5e41-42a7-bd0a-202a95a0ac29","5394d8c6-9d7c-485f-a26e-e963542f2bbd","b50abb79-2662-4a3c-a636-376b7c115378","848483ef-81d5-4b7e-8afb-3cc28d99b03e"],"propsByKey":{"81a4f500-ad11-4009-8f0e-175b165af74b":{"name":"bola","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"fnhzZbfpKxjyP4XGmuRlqTvWzojbkoGX","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/81a4f500-ad11-4009-8f0e-175b165af74b.png"},"11d5d9f0-6932-45de-ba25-6f4ac37fe9a9":{"name":"robô","sourceUrl":null,"frameSize":{"x":77,"y":69},"frameCount":1,"looping":true,"frameDelay":12,"version":"zDQIaW7c7845od2Pb_e1rFeLv0jK1WET","loadedFromSource":true,"saved":true,"sourceSize":{"x":77,"y":69},"rootRelativePath":"assets/11d5d9f0-6932-45de-ba25-6f4ac37fe9a9.png"},"7d58941f-a7d8-42da-85c6-3efa6131461a":{"name":"jogador","sourceUrl":null,"frameSize":{"x":60,"y":91},"frameCount":1,"looping":true,"frameDelay":12,"version":"i.lYPw37BaqZDc56fuk_L6ZoteT4N9o_","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":91},"rootRelativePath":"assets/7d58941f-a7d8-42da-85c6-3efa6131461a.png"},"42b7aa29-c5f8-44fe-9d49-8540deca9c13":{"name":"jogador_chuta","sourceUrl":null,"frameSize":{"x":77,"y":77},"frameCount":1,"looping":true,"frameDelay":12,"version":"MR4uNNtOPhlZYtl8hP5zxUjclsBHFDsz","loadedFromSource":true,"saved":true,"sourceSize":{"x":77,"y":77},"rootRelativePath":"assets/42b7aa29-c5f8-44fe-9d49-8540deca9c13.png"},"e92d7a76-cb9d-426f-90f2-1f5356f539aa":{"name":"jogador_cai","sourceUrl":null,"frameSize":{"x":92,"y":51},"frameCount":1,"looping":true,"frameDelay":12,"version":"LZZTVUJAKDZY7azET97M9a3qsi61Z4cs","loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":51},"rootRelativePath":"assets/e92d7a76-cb9d-426f-90f2-1f5356f539aa.png"},"7baf81a4-e720-472c-a0df-6245432f56e8":{"name":"cherry_1_1","sourceUrl":"assets/api/v1/animation-library/gamelab/CmLv0qLpD6tOu7heWjyW7F7a0Zd7opdj/category_food/cherry_1.png","frameSize":{"x":132,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"CmLv0qLpD6tOu7heWjyW7F7a0Zd7opdj","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":378,"y":379},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CmLv0qLpD6tOu7heWjyW7F7a0Zd7opdj/category_food/cherry_1.png"},"ecd69888-bc06-4291-a634-85c1e95ca649":{"name":"cupcake_1","sourceUrl":"assets/api/v1/animation-library/gamelab/VFvAjZCeLHhB39GafnRGfnrQhYdWk1xY/category_food/cupcake.png","frameSize":{"x":283,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"VFvAjZCeLHhB39GafnRGfnrQhYdWk1xY","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":283,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/VFvAjZCeLHhB39GafnRGfnrQhYdWk1xY/category_food/cupcake.png"},"634f05e9-0fda-4f34-a05f-4486380085bc":{"name":"donut_03_1","sourceUrl":"assets/api/v1/animation-library/gamelab/0A675LI6tuR.zoQ0yWoEo6NYyIyOaG4B/category_food/donut_03.png","frameSize":{"x":364,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"0A675LI6tuR.zoQ0yWoEo6NYyIyOaG4B","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":364,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/0A675LI6tuR.zoQ0yWoEo6NYyIyOaG4B/category_food/donut_03.png"},"89c7dae4-d461-4f91-859a-bcf65ea7814a":{"name":"face_birthdaycake_1","sourceUrl":null,"frameSize":{"x":370,"y":397},"frameCount":1,"looping":true,"frameDelay":12,"version":"1mV7unH1HUxeUbqoPjx1d5UvgGdiGbWF","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":370,"y":397},"rootRelativePath":"assets/89c7dae4-d461-4f91-859a-bcf65ea7814a.png"},"0c67239d-9556-4810-a526-d114c37fa714":{"name":"face_cherries_1","sourceUrl":"assets/api/v1/animation-library/gamelab/sso1NPsrucqg8kK0lg1yQ7wCTX1c91ni/category_food/face_cherries.png","frameSize":{"x":338,"y":396},"frameCount":1,"looping":true,"frameDelay":2,"version":"sso1NPsrucqg8kK0lg1yQ7wCTX1c91ni","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":338,"y":396},"rootRelativePath":"assets/api/v1/animation-library/gamelab/sso1NPsrucqg8kK0lg1yQ7wCTX1c91ni/category_food/face_cherries.png"},"a597f098-5afc-4da8-9340-d8aad1e08667":{"name":"face_chocobar_1","sourceUrl":"assets/api/v1/animation-library/gamelab/W9yZuhfaDl_A0x2oCeRQvxgx2ckKr7Pq/category_food/face_chocobar.png","frameSize":{"x":231,"y":391},"frameCount":1,"looping":true,"frameDelay":2,"version":"W9yZuhfaDl_A0x2oCeRQvxgx2ckKr7Pq","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":231,"y":391},"rootRelativePath":"assets/api/v1/animation-library/gamelab/W9yZuhfaDl_A0x2oCeRQvxgx2ckKr7Pq/category_food/face_chocobar.png"},"c5727244-b8bd-49af-a3a2-77ba393f0333":{"name":"face_cinnamonbun_1","sourceUrl":"assets/api/v1/animation-library/gamelab/1ZNiMVgdBQSwnF_glrOoZhieE2owafEC/category_food/face_cinnamonbun.png","frameSize":{"x":394,"y":257},"frameCount":1,"looping":true,"frameDelay":2,"version":"1ZNiMVgdBQSwnF_glrOoZhieE2owafEC","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":394,"y":257},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1ZNiMVgdBQSwnF_glrOoZhieE2owafEC/category_food/face_cinnamonbun.png"},"45e27f97-ff83-4186-9431-5d176b4ece73":{"name":"face_cottoncandy_1","sourceUrl":"assets/api/v1/animation-library/gamelab/HoD45xdvd6FD8VJA1FdN6jbR.o1HdD_p/category_food/face_cottoncandy.png","frameSize":{"x":216,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"HoD45xdvd6FD8VJA1FdN6jbR.o1HdD_p","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":216,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/HoD45xdvd6FD8VJA1FdN6jbR.o1HdD_p/category_food/face_cottoncandy.png"},"0ce8b147-7761-4d6f-a86f-2fe2ce46ccc6":{"name":"face_dumpling_1","sourceUrl":"assets/api/v1/animation-library/gamelab/5x9Rw0ddpjih23Fa8.Acs20InqRSwFTR/category_food/face_dumpling.png","frameSize":{"x":386,"y":359},"frameCount":1,"looping":true,"frameDelay":2,"version":"5x9Rw0ddpjih23Fa8.Acs20InqRSwFTR","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":359},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5x9Rw0ddpjih23Fa8.Acs20InqRSwFTR/category_food/face_dumpling.png"},"7651123c-7d5f-4564-9261-11983147de57":{"name":"face_cupcake_1","sourceUrl":"assets/api/v1/animation-library/gamelab/KHrxG_UKYXBvq5A284g3HbUGHHaHSGMo/category_food/face_cupcake.png","frameSize":{"x":285,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"KHrxG_UKYXBvq5A284g3HbUGHHaHSGMo","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":285,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KHrxG_UKYXBvq5A284g3HbUGHHaHSGMo/category_food/face_cupcake.png"},"a24722d6-2a18-46ad-bcc1-770205d3c249":{"name":"face_coffee_1","sourceUrl":"assets/api/v1/animation-library/gamelab/yahfXFZ5o8RFmKzSS6vHfAtgQXS2Q5HC/category_food/face_coffee.png","frameSize":{"x":398,"y":391},"frameCount":1,"looping":true,"frameDelay":2,"version":"yahfXFZ5o8RFmKzSS6vHfAtgQXS2Q5HC","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":391},"rootRelativePath":"assets/api/v1/animation-library/gamelab/yahfXFZ5o8RFmKzSS6vHfAtgQXS2Q5HC/category_food/face_coffee.png"},"5262cd39-bef8-4241-a71e-7b67dd8e60c9":{"name":"face_ramen_1","sourceUrl":"assets/api/v1/animation-library/gamelab/DfLOTlcwNX3v6V5BJgmbnQfU2Dl_j.ZC/category_food/face_ramen.png","frameSize":{"x":396,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"DfLOTlcwNX3v6V5BJgmbnQfU2Dl_j.ZC","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/DfLOTlcwNX3v6V5BJgmbnQfU2Dl_j.ZC/category_food/face_ramen.png"},"d436b91c-7764-4924-a2b9-c79c1f01e0a6":{"name":"face_cone_1","sourceUrl":"assets/api/v1/animation-library/gamelab/5FpppXc1ZxpiVOvae2HOUffVUddQn2D1/category_food/face_cone.png","frameSize":{"x":116,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"5FpppXc1ZxpiVOvae2HOUffVUddQn2D1","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":116,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5FpppXc1ZxpiVOvae2HOUffVUddQn2D1/category_food/face_cone.png"},"4c9f46dc-5e41-42a7-bd0a-202a95a0ac29":{"name":"background_landscape11_1","sourceUrl":"assets/api/v1/animation-library/gamelab/48WvIjYXVxyuCdt3Jah08koeLbeNGtRC/category_backgrounds/background_landscape11.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"48WvIjYXVxyuCdt3Jah08koeLbeNGtRC","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/48WvIjYXVxyuCdt3Jah08koeLbeNGtRC/category_backgrounds/background_landscape11.png"},"5394d8c6-9d7c-485f-a26e-e963542f2bbd":{"name":"bg_landscape21_1","sourceUrl":"assets/api/v1/animation-library/gamelab/GTrVmut4s5PswM6hx254yCcDWLNhhmVk/category_backgrounds/bg_landscape21.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"GTrVmut4s5PswM6hx254yCcDWLNhhmVk","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GTrVmut4s5PswM6hx254yCcDWLNhhmVk/category_backgrounds/bg_landscape21.png"},"b50abb79-2662-4a3c-a636-376b7c115378":{"name":"candy_1","sourceUrl":"assets/api/v1/animation-library/gamelab/1NaBN125bVEAAwWDYsOQkR199FhAllj3/category_food/candy.png","frameSize":{"x":390,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"1NaBN125bVEAAwWDYsOQkR199FhAllj3","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1NaBN125bVEAAwWDYsOQkR199FhAllj3/category_food/candy.png"},"848483ef-81d5-4b7e-8afb-3cc28d99b03e":{"name":"cookie_1","sourceUrl":"assets/api/v1/animation-library/gamelab/nHOnCD0VsHiM24D48VsqPD1PdLBE.tPh/category_food/cookie.png","frameSize":{"x":377,"y":377},"frameCount":1,"looping":true,"frameDelay":2,"version":"nHOnCD0VsHiM24D48VsqPD1PdLBE.tPh","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":377,"y":377},"rootRelativePath":"assets/api/v1/animation-library/gamelab/nHOnCD0VsHiM24D48VsqPD1PdLBE.tPh/category_food/cookie.png"}}};
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

//crie a bola, raqueteJogador e raqueteComputador como objetos de sprite
var fundo = createSprite(200, 200);
fundo.setAnimation("background_landscape11_1");

var ball  = createSprite(200,200,10,10);
ball.setAnimation("candy_1");
ball.scale=0.12


var playerPaddle = createSprite(360,200,10,70);
playerPaddle.setAnimation("face_cupcake_1");
playerPaddle.scale=0.21

var computerPaddle = createSprite(40,200,10,70);
computerPaddle.setAnimation("donut_03_1");
computerPaddle.scale=0.20


//variável para armazenar diferentes estados de jogo
var gameStage = "serve";

//variáveis para manter a pontuação
var compScore = 0;
var playerScore = 0;






function draw() {
  //limpa a tela

  
  if (ball.isTouching(playerPaddle) || 
  ball.isTouching(computerPaddle) ) {
  playSound("assets/category_alerts/airy_bell_notification.mp3", false);
      
  }
  
  
  //playSound("assets/default.mp3");
  
  
  //desenhar linha no centro
  for (var i = 0; i < 400; i=i+20) {
    line(200,i,200,i+10);
  }
  
  //coloque texto de informação no centro
  if (gameStage === "serve") {
    text("Aperte espaço para jogar",130,180);
  }
  
  //exibe o placar
  text(compScore, 170,20);
  text(playerScore, 230,20);
  
  //faça com que a raquete do jogador se mova com a posição y do mouse
  playerPaddle.y = World.mouseY;
  
  //IA para a raquete do computador
  //faça-o se mover com a posição y da bola
  computerPaddle.y = ball.y;
  
  //criar limites
  //faça a bola quicar com as bordas superior e inferior
  createEdgeSprites();
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  
  //faça a bola quicar com as raquetes
  ball.bounceOff(playerPaddle);
  ball.bounceOff(computerPaddle);
  
  //sacar a bola quando o espaço é pressionado
  if (keyDown("space") &&  gameStage === "serve") {
    serve();
    gameStage = "play";
  }
 
  //redefina a bola para o centro se ela cruzar a tela
  if(ball.x > 400 || ball.x <0) {
    
    if(ball.x > 400) {
      compScore = compScore + 1;
    }
    
    if(ball.x < 0) {
      playerScore = playerScore + 1;
    }
    
    setGame();
    gameStage = "serve";
  }
  
  //define quando o jogo acaba
  if (playerScore === 5 || compScore === 5){
    gameStage = "over";
    text("Game Over!",170,160);
    text("Aperte R para recomeçar",140,180);
  }
  
  //define como voltar para o começo do jogo
  if (keyDown("r") && gameStage === "over") {
    gameStage = "serve";
    compScore = 0;
    playerScore = 0;
  }
  
  //desenha sprites
  drawSprites();
}

function serve() {
  ball.velocityX = 6;
  ball.velocityY = 7;
}

function setGame() {
  ball.x = 200;
  ball.y = 200;
  ball.velocityX = 0;
  ball.velocityY = 0;
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
