function buttonsettings()
{
  var gui;
  var me = this;
  var menu = [];
  var menuNames = ["Button1",  "Button2", "Button3", "Button4", "Button5"]; 
  var bDetails;
  var bDetailsT;
  var bDes;
  var bSize



  
 
    
  
 


  this.setup = function()
  {
   // frameRen = createVideo('assets/FRAMES2.mp4');
    //frameRen.hide();
    //frameRen.loop(); 
    //frameRen.size(420, 200);
    gui = createGui();
    bDetails = createButton("DETAILS", width / 10, height / 3, 50, 20);
    bDetails.setStyle({textSize: 10, fillLabel: color(175), rounding: 3, strokeWeight: 0, fillBg: color(250), fillBgActive: color(250), fillBgHover: color(200)});
    bDetailsT = 0;
   // bDetails.onRelease = this.onRelease;

    bDes = createButton("DESCRIPTION", width / 4, height / 3, 100, 20);
    bDes.setStyle({textSize: 10, fillLabel: color(175), rounding: 3, strokeWeight: 0, fillBg: color(250), fillBgActive: color(250), fillBgHover: color(200)});

    bSize = createButton("SIZE & FIT", width / 1.9, height / 3, 60, 20);
    bSize.setStyle({textSize: 10, fillLabel: color(175), rounding: 3, strokeWeight: 0, fillBg: color(250), fillBgActive: color(250), fillBgHover: color(200)});
    setupHeaderButtons();    
    //bDes.onRelease = this.onRelease;
    
  }



  this.draw = function()
  {
    background(250);

    image(videoframes,0,40, 420, 200);
    videoframes.loop();
    //image(frameRen,0,40, 420, 200);
   // frameRen.play();
    
    textFont(cinz);
    textSize(width / 35);
    textAlign(LEFT);
    fill(150);
    text("Conspiracy Origins",width / 10, height / 14
      );

    textFont('Calibri Light');
    fill(150);
    textSize(width / 35);
    //stroke(0);
    textAlign(LEFT); 
    text("v1",width / 1.15,height / 14
    );

    

    // if(!menuLoaded) {      
 


                
        
    //     menuLoaded = true;
    // }
    

    gui.draw();
    
    if (bDetails.isPressed)
    {
      bDetailsT = 1;
    }
    if (bDes.isPressed)
    {
      bDetailsT = 2;
    }
    if (bSize.isPressed)
    {
      bDetailsT = 3;
    }

    if(bDetailsT == 1){
      textFont('Calibri Light');
      fill(150);
      textSize(width / 35);
      //stroke(0);
      textAlign(LEFT); 
      text("COMPOSITION: 100% Sterling silver\nLENS: Tinted sun lenses with 100% protection against UV rays\nFINISHING: Mirror polished oil slick patina",width / 9,height / 2.25
      );
      image(frames1, 20, 375);
      
  
     }
    

     if(bDetailsT == 2){
      textFont('Calibri Light');
      fill(150);
      textSize(width / 35);
      //stroke(0);
      textAlign(LEFT); 
      text("MADE IN-HOUSE through additive manufacturing these frames\nare fueled by parallelisms of monastery-meets-laboratory,\ninfluenced by brutalism the bold frame and sweeping lines\nacross the arm are made from recycled sterling silver with\nan oil slick patina finish applied by hand. ",width / 9,height / 2.25
      );
      image(frames2, 120, 300);
     }

     if(bDetailsT == 3){
      textFont('Calibri Light');
      fill(150);
      textSize(width / 35);
      //stroke(0);
      textAlign(LEFT); 
      text("Each frame is custom tailored to your face using LiDAR\ntechnology, simply download Scandy Pro (Appstore) and\nfollow the on-screen instructions, take a 3D portrait scan\nof your face and upload!",width / 9,height / 2.25
      );
      image(frames3, 40, 400);
     }
    
  
  }
  
 
}
