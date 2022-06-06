function mainmenu()
{
  var gui;
  var menu = [];
  var menuNames = ["ORDER"];
  var me = this;
  var backButton;
  var menuButton;
  var jit = 0.01;
  var points = []; //where points spawn
  var r1;
var r2;
var g1;
var g2;
var b1;
var b2;
var canvasF;
var density = 50;
var resizedF;

// var canvasobj;
// var frameRen; 3d WEBGL stuff







  


  this.setup = function()  
  {
    
    frameimg.resize(400,0);

    
    gui = createGui();

    showHeader(false);

    var buttonstyleMenu = {
        "font": 'Calibri Light',
        "textSize": 15,
        "rounding": 5,
        "strokeWeight": 0,
        "fillBg": color(255, 0, 0, 0),
        "fillBgHover": color(20, 25, 45, 63),
        "fillLabel": color(255, 255, 255, 20),
        "fillLabelHover" : color(255, 255, 255, 20)
    }

    var xoffset = 30;
    var yoffset = 80;
    var offset = 580;
    var xwidth = width-60;

    for(var i = 0;i < menuNames.length;i++) {
      menu[i] = createButton(menuNames[i],xoffset,i*yoffset+offset);
      menu[i].index = i;
      menu[i].w = xwidth;
      menu[i].h = yoffset - 15;
      menu[i].setStyle(buttonstyleMenu);
  
      menu[i].onPress = function() 
      {
        if(this.index == 0) {
          me.sceneManager.showScene(buttonsettings);
        }
                    

      }      
    }

  background(0);
  noiseDetail(2);
  angleMode(DEGREES);
  var space = width / density;

  for (var x = 0; x < width; x += space) {
    //starting points for lines, create vectors + make them random to remove the grid-like structure - i.e creates points
    for (var y = 0; y < height; y += space) {
      var p = createVector(x + random(-10, 10), y + random(-10, 10));
      points.push(p); //adds vector to points array
    }
  }

  //shuffle array to randomize
  shuffle(points, true);
  //colour values
  r1 = (20, 23, 36);
  r2 = (20, 23, 36);
  g1 = (20, 23, 36);
  g2 = (20, 23, 36);
  b1 = random(255);
  b2 = random(255);

  


  }
  
  this.enter = function()
  {   
    gui.show();
  }

  this.exit = function()
  {
    gui.hide();
  }

  this.draw = function()
  {

    background(0, 8);



    if (frameCount <= points.length) {
      //fameCount spawning points diff time
      var max = frameCount; 
    } else {
      var max = points.length;
    }

    for (var i = 0; i < max; i++) {
      // control colours
      var r = map(points[i].x, 0, width, r1, r2);
      var g = map(points[i].y, 0, width, g1, g2);
      var b = map(points[i].x, 0, width, b1, b2);

      fill(r, g, b);

      
      var angle = map(
        noise(points[i].x * jit, points[i].y * jit),0,1,0,720); //Perlin noise command re-mapped to slider i.e show/display 

      
      points[i].add(createVector(cos(angle), sin(angle) *1));
      //vector added to each point based on angle i.e controls movement of the vector with a speed variable

      
      noStroke();
      circle(points[i].x, points[i].y, 0.5);
  }

    push();
    showHeader(false);


    
    textFont('Calibri Light');
    fill(100);
    textSize(width / 35);
    stroke(0);
    textAlign(CENTER); 
    text("ADDITIVE MANUFACTURING RESEARCH PROGRAM",width / 2,height / 2.1
    );


    
    textFont(cinz);
    textSize(width / 25);
    textAlign(CENTER, CENTER);
    fill(150);
    text("Conspiracy Origins",width / 2,height / 2
    );
    
    gui.draw();
   
    
    pop();
   
    
   
    

  }
 
}
