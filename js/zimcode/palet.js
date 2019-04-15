 var scaling = "fit";

var assets = ["interptur.json", "interptur.png"];
var path = "assets/images/circuit/";
var width = 1024;
var height = 768;
var pattern = pizzazz.makePattern({
        type:"slants",
        colors:makeSeries(["brown",  "grey"]),
        size:5,
        rows:20,
        cols:60,
        interval:500
    });
var bar = new ProgressBar({
        barType:"Rectangle",
        color:"dark",

        backing:pattern,

        // corner:0,
        // borderColor:frame.blue,
        // borderWidth:10,
        // label:"LOADING",
        // labelPosition:"above",
        // padding:3,
        percentage:true,
        // fastClose:true
    });

var frame = new Frame(scaling, width, 768, null, null, assets, path,bar);
frame.on("ready", function() {



  var stage = frame.stage;
  var stageW = frame.width;
  var stageH = frame.height;
  frame.outerColor = "#444";
  frame.color= "white" ;
coms = ["pd1","pd2","pd3","pd4","pd5","pg1","pg2","pg3","pg4","ptt1","pine","pgtop","ptt","ptt2"]
comps=[]
cont = new Container().addTo().drag({currentTarget:true})


anim = new Sprite({json:frame.asset("interptur.json")});
anim.center().drag()
anim.run(10000)
anim.on('animationend',()=>{
 zog('hhhhhh zagitha')

})
 

anim.sca(0.5)
 //  loop(coms,(com,j)=>{
 // if (bigers[coms[j]].name == com) {
 //   comps[j]=bigers[coms[j]]
 //   zimify(comps[j])
 //   comps[j].addTo(cont)
 //
 //  }
 //  })
 //
 //
 //
 // list = []
 // i=0
 //   loop(comps,(comp,j)=>{
 //     i=i+1
 //   list[j] = comp.shape
 //   list[j] = comp.shape_1
 //   j=j+1
 // })







   stage.update();

}); // end of ready
