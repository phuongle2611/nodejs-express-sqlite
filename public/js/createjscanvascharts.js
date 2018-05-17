
var CapacityDisplay,IndoorDisplay,OutdoorDisplay,DeIceDisplay,ONOFFDisplay,FAULTDisplay;
var displaypanel1,displaypanel2,displaypanel3;
var displaypanel12,displaypanel22,displaypanel32;
var displaypanel13,displaypanel23,displaypanel33;
var DonutDisplay1,DonutDisplay2;
var custommark = [0,25,50,75,100,125,150,175,200,225,250];

$(document).ready(function () {
  var customvalue = [0,10,20,30,40,50,60,70,80,90,100];
  CapacityDisplay = bulletchart("demoCanvas1",0,100,0,"Capacity","%","#184655","#17f4e3",custommark,customvalue);
  IndoorDisplay = bulletchart("demoCanvas2",0,100,0,"Indoor Fan","%","#184655","#17f4e3",custommark,customvalue);
  OutdoorDisplay = bulletchart("demoCanvas3",0,100,0,"Outdoor Fan","%","#184655","#17f4e3",custommark,customvalue);
  DeIceDisplay = bulletchart("demoCanvas4",-10,17,-10,"Outdoor Coil","\u00B0C","#184655","#00baff",custommark,customvalue2);

  displaypanel1 = displaypanel("panel-left","Evap.T",0,"\u00B0C","#184655","#17f4e3");
  displaypanel2 = displaypanel("panel-middle","EEV1",0,"%","#184655","#fff");
  displaypanel3 = displaypanel("panel-right","Cond.T",0,"\u00B0C","#184655","#ffa704");
  displaypanel12 = displaypanel("panel-left-2","SSH",0,"\u00B0C","#184655","#17f4e3");
  displaypanel22 = displaypanel("panel-middle-2","EEV2",0,"%","#184655","#fff");
  displaypanel32 = displaypanel("panel-right-2","DSH",0,"\u00B0C","#184655","#ffa704");
  displaypanel13 = displaypanel("panel-left-3","SLT",0,"\u00B0C","#184655","#17f4e3");
  displaypanel23 = displaypanel("panel-middle-3","Comp Ratio",0,"","#184655","#fff");
  displaypanel33 = displaypanel("panel-right-3","DLT",0,"\u00B0C","#184655","#ffa704");
  ONOFF("ON");
  FAULT("FAULT");
  DonutDisplay1=donutchart("donutchart1",0,"1");
  DonutDisplay2=donutchart("donutchart2",0,"2");
});

function updatebulletchart(stage,minvalue,maxvalue,value,bulletcolor){
  stage.removeChildAt(6,7);
  stage.update();
  var basestart = 130;
  var max = 250;
  var ratio = max/(maxvalue-minvalue);
  var absvalue = value-minvalue;
  // console.log(ratio);
  var rectangle4 = new createjs.Shape();
  var displayvalue = absvalue*ratio;
  rectangle4.graphics.beginFill(bulletcolor).drawRect(0, 0,displayvalue,10); //bullet pointer
  // rectangle4.shadow = new createjs.Shadow("#000", 50, 50, 50);
  rectangle4.x = basestart;
  rectangle4.y = 10;

  var rectangle5 = new createjs.Shape();
  rectangle5.graphics.beginFill("#e9eaee").drawRect(0, 0,4,24); //stop bar right
  rectangle5.x = basestart+displayvalue;
  rectangle5.y = 3;
  stage.addChild(rectangle4,rectangle5);
  stage.update();
  return stage;
}

function updatebulletchart2(stage,minvalue,maxvalue,value,customvalue,custommark,bulletcolor){
  stage.removeChildAt(5,6,7);
  stage.update();
  var basestart = 130;
  var max = 250;
  var ratio = max/(maxvalue-minvalue);
  var absvalue = value-minvalue;
  // console.log(ratio);
  var rectangle4 = new createjs.Shape();
  var displayvalue = absvalue*ratio;
  rectangle4.graphics.beginFill(bulletcolor).drawRect(0, 0,displayvalue,10); //bullet pointer
  // rectangle4.shadow = new createjs.Shadow("#000", 50, 50, 50);
  rectangle4.x = basestart;
  rectangle4.y = 10;

  var w = 2;
  var h = 10;
  var t= 15;
  var barcolor = '#e9eaee';
  var holder = new Array();
  var textholder = new Array();
  var container = new createjs.Container();
  
  for (var i = 0; i < custommark.length; i++) {
    holder[i]= new createjs.Shape();
    holder[i].graphics.beginFill(barcolor).drawRect(0, 0,w,h);
    holder[i].x = basestart+custommark[i];
    holder[i].y = t;
    textholder[i] = new createjs.Text(customvalue[i],"12px Verdana", "white");
    textholder[i].textAlign = "center";
    textholder[i].x = basestart+custommark[i];
    textholder[i].y = t+25;
    textholder[i].textBaseline = "alphabetic";
  }
  for (var i = 0; i <custommark.length; i++) {
    container.addChild(holder[i],textholder[i]);
  }


  var rectangle5 = new createjs.Shape();
  rectangle5.graphics.beginFill("#e9eaee").drawRect(0, 0,4,24); //stop bar right
  rectangle5.x = basestart+displayvalue;
  rectangle5.y = 3;
  stage.addChild(container,rectangle4,rectangle5);
  stage.update();
  return stage;
}

function ONOFF(command){
  ONOFFDisplay = new createjs.Stage("ONOFF");
  var circle1 = new createjs.Shape();
  circle1.graphics.beginFill("gray").drawCircle(0, 0, 45);
  circle1.x = circle1.y = 50;
  var circle2 = new createjs.Shape();
  circle2.graphics.beginFill("#70a440").drawCircle(0, 0, 35);
  circle2.x = circle2.y = 50;
  var text = new createjs.Text(command,"17px Verdana", "white");
  text.textAlign = "center";
  text.x = 50;
  text.y = 55;
  text.textBaseline = "alphabetic";
  //Add Shape instance to stage display list.
  ONOFFDisplay.addChild(circle1,circle2,text);
  //Update stage will render next frame
  ONOFFDisplay.update();
}

function FAULT(command){
  FAULTDisplay = new createjs.Stage("FAULT");
  var circle = new createjs.Shape();
  circle.graphics.beginFill("#f3c100").drawCircle(0, 0, 45);
  circle.x = circle.y = 50;
  var circle2 = new createjs.Shape();
  circle2.graphics.beginFill("#f15d2f").drawCircle(0, 0, 35);
  circle2.x = circle2.y = 50;
  var text = new createjs.Text(command,"17px Verdana", "white");
  text.textAlign = "center";
  text.x = 50;
  text.y = 55;
  text.textBaseline = "alphabetic";
  //Add Shape instance to stage display list.
  FAULTDisplay.addChild(circle,circle2,text);
  //Update stage will render next frame
  FAULTDisplay.update();
}

function donutchart(id,value,display){
  var fullcirle = Math.PI*2;
  var endangle = (fullcirle/100)*value;
  var stage = new createjs.Stage(id);
  
  //base circle
  var circle = new createjs.Shape();
  circle.graphics.beginFill("#808080").drawCircle(0, 0, 45);
  circle.x = circle.y = 50;
  
  var circle3 = new createjs.Shape();
  circle3.graphics.beginFill("blue").arc(0,0,43,0,endangle);
  circle3.x = circle3.y = 50;

  var circle2 = new createjs.Shape();
  circle2.graphics.beginFill("black").drawCircle(0, 0, 35);
  circle2.x = circle2.y = 50;
  
  var text = new createjs.Text(display,"17px Verdana", "white");
  text.textAlign = "center";
  text.x = 50;
  text.y = 45;
  text.textBaseline = "alphabetic";
  
  var text2 = new createjs.Text(value+"%","17px Verdana", "white");
  text2.textAlign = "center";
  text2.x = 50;
  text2.y = 65;
  text2.textBaseline = "alphabetic";
  //Add Shape instance to stage display list.
  stage.addChild(circle,circle3,circle2,text,text2);
  //Update stage will render next frame
  stage.update();
  return stage;
}

function updatedonutchart(stage,value,display){
  stage.removeAllChildren();
  var fullcirle = Math.PI*2;
  var endangle = (fullcirle/100)*value;
  // stage = new createjs.Stage(id);
  
  //base circle
  var circle = new createjs.Shape();
  circle.graphics.beginFill("#808080").drawCircle(0, 0, 45);
  circle.x = circle.y = 50;
  
  var circle3 = new createjs.Shape();
  circle3.graphics.setStrokeStyle(5,"thickness").beginStroke("#19f3e3");
  circle3.graphics.arc(0,0,40,0,endangle);
  circle3.x = circle3.y = 50;

  var circle2 = new createjs.Shape();
  circle2.graphics.beginFill("black").drawCircle(0, 0, 35);
  circle2.x = circle2.y = 50;
  var text = new createjs.Text(display,"17px Verdana", "white");
  text.textAlign = "center";
  text.x = 50;
  text.y = 45;
  text.textBaseline = "alphabetic";
  if (value!=0){
    var text2 = new createjs.Text(value+"%","17px Verdana", "white");
  }else{
    var text2 = new createjs.Text("OFF","17px Verdana", "white");
  }
  text2.textAlign = "center";
  text2.x = 50;
  text2.y = 65;
  text2.textBaseline = "alphabetic";
  //Add Shape instance to stage display list.
  stage.addChild(circle,circle3,circle2,text,text2);
  //Update stage will render next frame
  stage.update();
  return stage;
}

function displaypanel(id,mytext,value,unit,backgroundcolor,textcolor){
  var stage = new createjs.Stage(id);
  var rectangle = new createjs.Shape();
  rectangle.graphics.beginFill(backgroundcolor).drawRect(0, 0, 200, 30); //green base
  rectangle.x = 0;
  rectangle.y = 0;
  var text = new createjs.Text(mytext,"12px Verdana", textcolor);
  text.textAlign = "left";
  text.x = 10;
  text.y = 20;
  text.textBaseline = "alphabetic";

  var text2 = new createjs.Text(value+unit,"17px Verdana", textcolor);
  text2.textAlign = "right";
  text2.x = 117;
  text2.y = 20;
  text2.textBaseline = "alphabetic";

  stage.addChild(rectangle,text,text2);
  stage.update();
  return stage;
}
function updatedisplaypanel(stage,mytext,value,unit,backgroundcolor,textcolor){
  stage.removeAllChildren();
  // var stage = new createjs.Stage(id);
  var rectangle = new createjs.Shape();
  rectangle.graphics.beginFill(backgroundcolor).drawRect(0, 0, 200, 30); //green base
  rectangle.x = 0;
  rectangle.y = 0;
  var text = new createjs.Text(mytext,"12px Verdana", textcolor);
  text.textAlign = "left";
  text.x = 10;
  text.y = 20;
  text.textBaseline = "alphabetic";

  var text2 = new createjs.Text(value+unit,"17px Verdana", textcolor);
  text2.textAlign = "right";
  text2.x = 117;
  text2.y = 20;
  text2.textBaseline = "alphabetic";

  stage.addChild(rectangle,text,text2);
  stage.update();
  return stage;
}

function bulletchart(id,minvalue,maxvalue,value,mytext,unit,backgroundcolor,bulletcolor,custommark,customvalue){
  // var id = "demoCanvas";
  // var maxvalue = 100;
  // var value = 55;
  var basestart = 130;
  var max = 250;
  var ratio = max/(maxvalue-minvalue);
  var absvalue = value-minvalue;

  var stage = new createjs.Stage(id);

  var rectangle = new createjs.Shape();
  rectangle.graphics.beginFill(backgroundcolor).drawRect(0, 0, 400, 45); //green base
  rectangle.x = 0;
  rectangle.y = 0;

  var rectangle2 = new createjs.Shape();
  rectangle2.graphics.beginFill("#e9eaee").drawRect(0, 0,4,45); //stop bar left
  rectangle2.x = 115;
  rectangle2.y = 0;
  
  
  var w = 2;
  var h = 10;
  var t= 15;
  var barcolor = '#e9eaee';
  var holder = new Array();
  var textholder = new Array();
  var container = new createjs.Container();
  
  for (var i = 0; i < custommark.length; i++) {
    holder[i]= new createjs.Shape();
    holder[i].graphics.beginFill(barcolor).drawRect(0, 0,w,h);
    holder[i].x = basestart+custommark[i];
    holder[i].y = t;
    textholder[i] = new createjs.Text(customvalue[i],"12px Verdana", "white");
    textholder[i].textAlign = "center";
    textholder[i].x = basestart+custommark[i];
    textholder[i].y = t+25;
    textholder[i].textBaseline = "alphabetic";
  }
  for (var i = 0; i <custommark.length; i++) {
    container.addChild(holder[i],textholder[i]);
  }

  // holder[0]= new createjs.Shape();
  // holder[0].graphics.beginFill(barcolor).drawRect(0, 0,w,h);
  // holder[0].x = basestart+0;
  // holder[0].y = t;
  // textholder[0] = new createjs.Text(0,"12px Verdana", "white");
  // textholder[0].textAlign = "center";
  // textholder[0].x = basestart+0;
  // textholder[0].y = t+25;
  // textholder[0].textBaseline = "alphabetic";

  // holder[1]= new createjs.Shape();
  // holder[1].graphics.beginFill(barcolor).drawRect(0, 0,w,h);
  // holder[1].x = basestart+25;
  // holder[1].y = t;
  // textholder[1] = new createjs.Text(10,"12px Verdana", "white");
  // textholder[1].textAlign = "center";
  // textholder[1].x = basestart+25;
  // textholder[1].y = t+25;
  // textholder[1].textBaseline = "alphabetic";


  // holder[2]= new createjs.Shape();
  // holder[2].graphics.beginFill(barcolor).drawRect(0, 0,w,h);
  // holder[2].x = basestart+50;
  // holder[2].y = t;
  // textholder[2] = new createjs.Text(20,"12px Verdana", "white");
  // textholder[2].textAlign = "center";
  // textholder[2].x = basestart+50;
  // textholder[2].y = t+25;
  // textholder[2].textBaseline = "alphabetic";

  // holder[3]= new createjs.Shape();
  // holder[3].graphics.beginFill(barcolor).drawRect(0, 0,w,h);
  // holder[3].x = basestart+75;
  // holder[3].y = t;
  // textholder[3] = new createjs.Text(30,"12px Verdana", "white");
  // textholder[3].textAlign = "center";
  // textholder[3].x = basestart+75;
  // textholder[3].y = t+25;
  // textholder[3].textBaseline = "alphabetic";

  // holder[4]= new createjs.Shape();
  // holder[4].graphics.beginFill(barcolor).drawRect(0, 0,w,h);
  // holder[4].x = basestart+100;
  // holder[4].y = t;
  // textholder[4] = new createjs.Text(40,"12px Verdana", "white");
  // textholder[4].textAlign = "center";
  // textholder[4].x = basestart+100;
  // textholder[4].y = t+25;
  // textholder[4].textBaseline = "alphabetic";

  // holder[5]= new createjs.Shape();
  // holder[5].graphics.beginFill(barcolor).drawRect(0, 0,w,h);
  // holder[5].x = basestart+125;
  // holder[5].y = t;
  // textholder[5] = new createjs.Text(50,"12px Verdana", "white");
  // textholder[5].textAlign = "center";
  // textholder[5].x = basestart+125;
  // textholder[5].y = t+25;
  // textholder[5].textBaseline = "alphabetic";

  // holder[6]= new createjs.Shape();
  // holder[6].graphics.beginFill(barcolor).drawRect(0, 0,w,h);
  // holder[6].x = basestart+150;
  // holder[6].y = t;
  // textholder[6] = new createjs.Text(60,"12px Verdana", "white");
  // textholder[6].textAlign = "center";
  // textholder[6].x = basestart+150;
  // textholder[6].y = t+25;
  // textholder[6].textBaseline = "alphabetic";

  // holder[7]= new createjs.Shape();
  // holder[7].graphics.beginFill(barcolor).drawRect(0, 0,w,h);
  // holder[7].x = basestart+175;
  // holder[7].y = t;
  // textholder[7] = new createjs.Text(70,"12px Verdana", "white");
  // textholder[7].textAlign = "center";
  // textholder[7].x = basestart+175;
  // textholder[7].y = t+25;
  // textholder[7].textBaseline = "alphabetic";

  // holder[8]= new createjs.Shape();
  // holder[8].graphics.beginFill(barcolor).drawRect(0, 0,w,h);
  // holder[8].x = basestart+200;
  // holder[8].y = t;
  // textholder[8] = new createjs.Text(80,"12px Verdana", "white");
  // textholder[8].textAlign = "center";
  // textholder[8].x = basestart+200;
  // textholder[8].y = t+25;
  // textholder[8].textBaseline = "alphabetic";

  // holder[9]= new createjs.Shape();
  // holder[9].graphics.beginFill(barcolor).drawRect(0, 0,w,h);
  // holder[9].x = basestart+225;
  // holder[9].y = t;
  // textholder[9] = new createjs.Text(90,"12px Verdana", "white");
  // textholder[9].textAlign = "center";
  // textholder[9].x = basestart+225;
  // textholder[9].y = t+25;
  // textholder[9].textBaseline = "alphabetic";

  // holder[10]= new createjs.Shape();
  // holder[10].graphics.beginFill(barcolor).drawRect(0, 0,w,h);
  // holder[10].x = basestart+250;
  // holder[10].y = t;
  // textholder[10] = new createjs.Text(100,"12px Verdana", "white");
  // textholder[10].textAlign = "center";
  // textholder[10].x = basestart+250;
  // textholder[10].y = t+25;
  // textholder[10].textBaseline = "alphabetic";

  
  // container.addChild(holder[0],textholder[0],
  //                   holder[1],textholder[1],
  //                   holder[2],textholder[2],
  //                   holder[3],textholder[3],
  //                   holder[4],textholder[4],
  //                   holder[5],textholder[5],
  //                   holder[6],textholder[6],
  //                   holder[7],textholder[7],
  //                   holder[8],textholder[8],
  //                   holder[9],textholder[9],
  //                   holder[10],textholder[10]
  //                   );
  for (var i = 0; i <custommark.length; i++) {
    container.addChild(holder[i],textholder[i]);
  }
  // console.log(container);
  var rectangle3 = new createjs.Shape();
  rectangle3.graphics.beginFill("#e9eaee").drawRect(0, 0,max+2,10); //base bullet
  rectangle3.x = basestart;
  rectangle3.y = 10;

  var rectangle4 = new createjs.Shape();
  var displayvalue = absvalue*ratio;
  rectangle4.graphics.beginFill(bulletcolor).drawRect(0, 0,displayvalue,10); //bullet pointer
  // rectangle4.shadow = new createjs.Shadow("#ffff", 50, 50, 50);
  rectangle4.x = basestart;
  rectangle4.y = 10;

  var rectangle5 = new createjs.Shape();
  rectangle5.graphics.beginFill("#e9eaee").drawRect(0, 0,4,24); //stop bar right
  rectangle5.x = basestart+displayvalue;
  rectangle5.y = 3;

  var text = new createjs.Text(mytext,"12px Verdana", "white");
  text.textAlign = "left";
  text.x = 10;
  text.y = 20;
  text.textBaseline = "alphabetic";
  
  var unittext = new createjs.Text(unit,"12px Verdana", "white");
  unittext.textAlign = "center";
  unittext.x = 100;
  unittext.y = 20;
  unittext.textBaseline = "alphabetic";

  stage.addChild(rectangle,text,unittext,rectangle2,rectangle3,container,rectangle4,rectangle5);
  stage.update();
  return stage;
}