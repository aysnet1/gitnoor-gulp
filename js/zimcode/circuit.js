

const frame = new Frame({
  scaling: "full",
  color: darker,
  allowDefault: true,
  assets: ["battrey.png", "pil.png", "ll1.png", "lo1.png"],
  path: "assets/images/circuit/",
  progress: new ProgressBar({
    barType: "Rectangle",
    color: "rgb(153, 193, 255)",

    borderColor: dark,
    corner: 0,
    //  borderWidth:10,
    label: "LOADING",
    labelPosition: "above",
    // padding:3,
    percentage: true,
    fastClose: false,
  })
});
frame.on("ready", () => {


  let stage = frame.stage;
  let stageW = frame.width;
  let stageH = frame.height;

  frame.outerColor = "#444";
  frame.color = "#99c1ff";

  list = new Container(200, stageH).addTo().drag();




   battry = frame.asset('battrey.png').sca(0.5).pos(70, 40);
   pil = frame.asset("pil.png").addTo(list).pos(65, 150).sca(0.6);
   lamp_light = frame.asset("lo1.png").sca(0.4);
   lamp = frame.asset("ll1.png").addTo(list).pos(50, 184).sca(0.4);



    test = new Rectangle(battry.width,battry.height,"transparent").center().drag({onTop:false})
    battry.centerReg(test)
     battry.x=14
     cr1 = new Circle(10,"transparent")
     cr2 = new Circle(10,"transparent")

     cr1.x=test.width-(cr1.radius+2) //a
     cr2.x=cr2.radius+2 //b
     cr1.addTo(test).outline()
     cr2.addTo(test).outline()




  circ = new Squiggle({
    color: red,
    thickness: 6,
    points: 2,
    length: 300,
    controlType: "free",
    showControls: true,
    lockControls: false,
    allowToggle: false,
    onTop: true,
    selectPoints: false,
    editPoints: false
  }).center()
  // circ1 = new Squiggle({
  //   color: red,
  //   thickness: 6,
  //   points: 2,
  //   length: 300,
  //   controlType: "free",
  //   showControls: true,
  //   lockControls: false,
  //   allowToggle: false,
  //   onTop: true,
  //   selectPoints: false,
  //   editPoints: false
  // }).center()
  battry.regX=27



function circuitZero (ob){
ob.pointObjects[0][3].x=0;
ob.pointObjects[0][3].y=0;
ob.pointObjects[0][3].mouseEnabled=false;
ob.pointObjects[1][2].x=0;
ob.pointObjects[1][2].y=0;
ob.pointObjects[1][2].mouseEnabled=false;
ob.update()
}


circuitZero (circ)
  tab = new Container(stageW - list.width, stageH).addTo();

test.on("dblclick", () => {
  zog("gggggggg")
   circ.pointObjects[1][0].removeFrom(cr1)
   circ.pointObjects[0][0].removeFrom(cr2)


  });
result = result2 =result3 =result4= true;
function testHit(ob,a,b){
  if (ob.pointCircles[0].hitTestBounds(a) && result2 == true  ) {
     ob.pointObjects[0][0].centerReg(a)
    result= false;
}
if (ob.pointCircles[1].hitTestBounds(a) && result == true ) {
    ob.pointObjects[1][0].centerReg(a),
    result= false;
    result2= false;

}
if (ob.pointCircles[0].hitTestBounds(b) && result4 == true  ) {
   ob.pointObjects[0][0].centerReg(b)
  result3= false;
}
if (ob.pointCircles[1].hitTestBounds(b) && result3 == true ) {
  ob.pointObjects[1][0].centerReg(b),
  result3= false;
  result4= false;

}


}
  Ticker.add(()=>{
testHit(circ,cr1,cr2)


    circ.update()})





  // var list = new List({
  //   width: left.width,
  //   height:left.height,
  //   list: [
  //     battry, pil, lamp
  //   ],
  //   borderWidth: 4,
  //   borderColor: "black",
  //   backdropColor: "#ffffff",
  //   close: false,
  //   scrollBarColor: "red",
  //   currentSelected: false,
  //   swipe: false,
  //   vertical: true,
  //   spacing: 0,
  //   align: "center",
  // }).center(left);


  // var fn = (e) => {
  //   curr = e.target
  //   curr.addTo(middle).drag();
  //  curr.scale =  0.6
  //
  //
  //   stage.update();
  // };
  // // battry.tap(fn);
  // // pil.tap(fn);
  // // lamp.tap(fn);

  var layout = new Layout(stage, [{
      object: tab
    },
    {
      object: list,
      backgroundColor: white
    },

    // {object:right, align:"center", minWidth:20, maxHeight:90}
  ], 0, null, false); // container, regions, last margin, backing color, vertical, boundary shape

  // here is the frame resize event (same as window.addEventListener("resize", ()=>{}))
  frame.on("resize", resize);

  function resize() {
    stageW = frame.width;
    stageH = frame.height;
    layout.resize();
  }


  stage.update();


}); // end of ready
