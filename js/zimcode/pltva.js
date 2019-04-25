  var scaling = "fit";

var assets = ["tab.png","plteau.png","pltsa.png","ter1.png","ter.png","eva.png","peva.png","sac.json","sac.png","sac1.json","sac1.png",
"put.png","putv.png","mira.png","pwat.json","pwat.png"];
var path = "assets/images/plante/";
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

        percentage:true,

    });

var frame = new Frame(scaling, width, 768, null, null, assets, path,bar);
frame.on("ready", function() {
   zog("تم تصميمها من قبل الاستاذين أيسر وماهر");
   zog("thank you Dan Zen")


  var stage = frame.stage;
  var stageW = frame.width;
  var stageH = frame.height;
  frame.outerColor = "#444";
  frame.color= "white" ;

  // table
  table=new Container().center(stage).mov({y:((stageH*0.91)/2)});
  img= frame.asset("tab.png").centerReg(table)

  btn1 = new Button({
    label:"اعادة التجربة",
    width:250,
    height:90,
    backgroundColor:"purple",
    rollBackgroundColor:"MediumOrchid",
    borderWidth:2,
    borderColor:"violet",
    gradient:.3,
    corner:1
  }).addTo();
  startb = new Button({
    label:"انطلق الأن !",
    width:250,
    height:90,
    backgroundColor:"#da258b",
    rollBackgroundColor:"MediumOrchid",
    gradient:.5,
    corner:3
  }).addTo().mov(0,120);
  startb.visible=false

qst = new Label({text:"التّعليمة: قم بوضع كل نبتة في أصيص ",size:30}).center().mov(0,-350)



  // var physics = new Physics({borders:new Boundary(0,-stageH,stageW,stageH*2)});
  //  physics.remove(physics.borderTop);

 var s = 0.7;



boundary = new Boundary(0,0,stageW,stageH).contract(90)
bplt1 = new Boundary(0,200,stageW/2,stageH-200)
bplt2 = new Boundary(stageW/2,200,stageW/2,stageH-250)






plt = new Container().setBounds(0,0,100,100).centerReg().sca(2)
plt2 = new Container().setBounds(0,0,100,100).centerReg().sca(2)

plt.x=71.98664440734561
plt.y=640.0033388981636
plt2.x=512
plt2.y=500.2938230383972

plante = frame.asset("pltsa.png").sca(0.45)
p2 = frame.asset("plteau.png").centerReg(plt2).sca(0.45)
plante.centerReg(plt);
plt.drag({currentTarget:true,onTop:false,boundary:bplt1})
plt2.drag({currentTarget:true,onTop:false,boundary:bplt2})

ter = frame.asset("ter.png").centerReg().sca(0.09)
ter1 = frame.asset("ter1.png").centerReg().sca(0.09)
ter1.x=70.49708284714119
ter1.y=697.29844120185
ter.x=512
ter.y=698.4466190578314

var test1 = test = false;
brt = new Rectangle(50,50,'transparent').centerReg(plt).mov(28,-68)

br = new Rectangle(50,50,'transparent').centerReg(plt2).mov(28,-68)

putm=new Container().setBounds(0,0,300,400).centerReg(stage).mov({x:-250,y:250}).sca(0.35)
 putv=new Container().setBounds(0,0,300,400).centerReg(stage).mov({x:200,y:250}).sca(0.35)
     a1=  frame.asset("putv.png").centerReg(putm);
     a2=  frame.asset("put.png").centerReg(putv);

   vap = frame.asset("eva.png").centerReg(plt2).sca(0.4)
   vap.y=-5
  vap.alpha=0.001
   vap1 = frame.asset("peva.png").centerReg(plt).sca(0.4)
   vap1.y=-10
   vap1.alpha=0.001


    sw = new Sprite({json:frame.asset("sac.json")}).centerReg().sca(0.5).mov(160,-190);
    sw1= new Sprite({json:frame.asset("sac1.json")}).centerReg().sca(0.5).mov(-200,-200);




   mira = new Container().setBounds(0,0,150,214).centerReg(stage)
   .drag({currentTarget:true,boundary:boundary})

m  = frame.asset("mira.png").centerReg(mira).sca(0.5)
pw =  new Sprite({json:frame.asset("pwat.json")}).sca(0.5).centerReg(mira).mov(-130,0)

   mira.x=921.8389731621937
   mira.y=650.4550758459743








pw.visible=false


swX = 705.5861271676301
swY=386.3676300578035
sw1X =259.8473988439306
sw1Y=386.43236994219643


mira.on("pressup",()=>{
 if ((plt.x==putm.x-20)  && (plt2.x==putv.x-10) && (ter.x==putv.x-20) && (ter1.x==putm.x-20) )  {

   Ticker.add(()=>{
 if (mira.hitTestRect(brt) || mira.hitTestRect(br)){

mira.animate({
   props:{rotation:-45},
   time:100

})
pw.visible=true
pw.play()

rty=false;

}
else{
  mira.animate({
     props:{rotation:0},
     time:100

  })

  pw.visible=false


}


if ((sw.x==swX) && (sw1.x==sw1X)) {
  vap.animate({
    props:{
      alpha:0.9
    },
    time:2000


  });
  vap1.animate({
    props:{
      alpha:0.9
    },
    time:1500
 });

 }

})

 }

});


// a one b : two , c : run Sprite
function lotme(a,b,c,x,y,t) {


   this.prez = a.on("pressmove",function() {
  if ((a==plt2) || (a == ter)) {
   if (a.hitTestBounds(b) ) {
        a.noDrag()
       a.animate({
            props:{
              x:x,
              y:y
            },

            time:t,
            events:true

      })
 c.drag({onTop:false,boundary:bplt2})

}
  } else {


  if (a.hitTestRect(b) ) {
      a.noDrag()
     a.animate({
          props:{
            x:x,
            y:y
          },

          time:t,
          events:true

    })
    if ((c == sw1) || (c == ter1)){
     c.drag({onTop:false,boundary:bplt1})
   }

  }

}

  })

  this.cap = a.on("animation",()=>{
    a.off("pressmove",this.prez)

  })
}




function rimi(a,b,x,y,t,ts,label) {


   this.prez = a.on("pressmove",function() {



  if (a.hitTestRect(b) ) {
      a.noDrag()
      a.sca(1.2,1)
     a.animate({
          props:{
            x:x,
            y:y
          },

          time:t,
          events:true

    })
     a.run(ts,label)
   }


  })

  this.cap = a.on("animation",()=>{
    a.off("pressmove",this.prez)
   })
}
// position sac



bb2   =   new lotme(plt,putm,ter1,putm.x-20,putm.y-160,400)
bb3   =   new lotme(plt2,putv,ter,putv.x-10,putv.y-160,400)
tera1 =   new lotme(ter,putv,sw,putv.x-20,putv.y-48,400)
tera2 =   new lotme(ter1,putm,sw1,putm.x-20,putm.y-48,400)
                 //(a,b,x,y,t,ts,label)
                 //test sac
sacer =   new rimi(sw,vap,swX,swY,400,4000,"close")
sacer1 =   new rimi(sw1,vap1,sw1X,sw1Y,400,4000,"close")




btn1.on("click", function() {zgo("/pltva.html");});




   stage.update();

}); // end of ready
