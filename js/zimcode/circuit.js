const frame = new Frame({
  scaling:"full",
  color: darker,
  allowDefault: true,
  assets: ["battrey.png", "pil.png", "ll1.png", "lo1.png"],
  path: "assets/images/circuit/",
  progress: new ProgressBar()
});
frame.on("ready", () => { // ES6 Arrow Function - similar to function(){}


  let stage = frame.stage;
  let stageW = frame.width;
  let stageH = frame.height;

  frame.outerColor = "#444";
  frame.color = "#99c1ff";

    const list = new Panel(200, stageH).addTo();

  var battry = frame.asset('battrey.png').sca(0.5).center(list).pos(70,40);
  var pil = frame.asset("pil.png").addTo(list).pos(70,90).sca(0.6);
  var lamp_light = frame.asset("lo1.png").sca(0.3);
  var lamp = frame.asset("ll1.png").pos(100, 400).sca(0.3);






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

 const tab = new Container(stageW-list.width, stageH).addTo();
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
      object: list
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


}); // end of ready
