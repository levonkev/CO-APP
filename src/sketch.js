
var offsetY = 0;
var mgr;
var buttonstyleMenu;
var input;
var dataLoaded = false;
var menuLoaded = false;
var storyData = {}; 
var stories = []; 
var data;
var timer = {secs:0,minutes:0,raw:0};
var colorWheel;
var fontCali;
var fontApercu;
var menuimg;
var backimg;
var frameimg;
var cinz;  
var frames1;
var frames2;
var frames3;
var frameRen;
var videoframes


  // Put any asynchronous data loading in preload to complete before "setup" is run
function preload() {  
  colorWheel = loadImage("./assets/palette.png");
  fontCali = loadFont("./assets/Calibri Light.ttf");
  fontApercu = loadFont("./assets/Apercu.otf");
  backimg = loadImage("./assets/back.jpg");
  menuimg = loadImage("./assets/menu.jpg");
  frameimg = loadImage('assets/F.png');
 // frameRen = createVideo('assets/FRAMES2.mp4');
  frames1 = loadImage('assets/EYEWEAR9.png');
  frames2 = loadImage('assets/15.png');
  frames3 = loadImage('assets/25.png');
  //frameRen.size(420, 200);
  //frameRen.hide();
 // frameRen.loop(); 
 frameRen = createVideo('assets/FRAMES2.mp4');
  videoframes = frameRen;
  frameRen.hide();

  cinz = loadFont('assets/Cinzel-Medium.ttf');

   
}

function setupHeaderButtons() {
  // header menu
  var buttonstyleBack = {
    "rounding": 0,
    "strokeWeight": 0,
    "fillBg": color(255,255,255,0),
    "fillBgHover": color(255,255,255,0),
    "fillLabelHover" : color(255,255,255,0)
  }
  backButton = createButton("", 0, 0);
  backButton.w = 50;
  backButton.h = 50;
  backButton.setStyle(buttonstyleBack);
  backButton.onPress = function() {
      mgr.showScene(mainmenu);
  }  

  menuButton = createButton("", width-50, 0);
  menuButton.w = 50;
  menuButton.h = 50;
  menuButton.setStyle(buttonstyleBack);
  menuButton.onPress = function() {
      var url = "../app/index.html";
      window.location.replace(url)
  }
  // end header menu
}


function showHeader(showbuttons) {

 
  }
 

  
// }


function setup() {
 



	// keep a 16:9 portrait format
	if(windowWidth<windowHeight){
		createCanvas(windowWidth,windowHeight,P2D);
	} else {
		createCanvas( (windowHeight/1.3)*0.5625, windowHeight/1.38,P2D);
  }
  //videoframe = createVideo("/assets/FRAMES.mp4");
  //videoframe.loop;

  mgr = new SceneManager();
  mgr.wire();
  mgr.addScene(mainmenu);
 // mgr.addScene(slidersettings);
  mgr.addScene(buttonsettings);
 // mgr.addScene(colourcontrol);
  mgr.showNextScene();


 // frameRen.size(width);
  frames1.resize(350,0);
  frames2.resize(400,0);
//  frames3.resize(500,0);
  
}

function draw() {
 
 
  mgr.draw();
}





