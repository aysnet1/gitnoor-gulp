
  var scaling = "fit";

var assets = ["app1.png"];
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
   zog("تم تصميمها من قبل الاستاذين أيسر وماهر")


  var stage = frame.stage;
  var stageW = frame.width;
  var stageH = frame.height;
  frame.outerColor = "#444";
  frame.color= "white" ;


  btn1 = new Button({
    label:"النّشاط التالي",
    width:200,
    height:80,
    backgroundColor:"#36efdb",
    rollBackgroundColor:"MediumOrchid",
    borderWidth:2,
    borderColor:"violet",
    gradient:.3,
    corner:1
  }).addTo();


  qst = frame.asset("app1.png").sca(1.5)
 con = new Rectangle(qst.width+10,qst.height+5).centerReg()
 qst.centerReg(con)
qs= new Label("بالنقر على الزر الأحمر"
,30,null,"#383535").centerReg()
qs.x=555.3131935881628
qs.y=298.1405672009864

 function Rep(tog,txt) {


tog.change(function (e) {

    if (e.target.toggled) {
   txt.text = "نعم"
   } else {
   txt.text ="لا"
   }
 })
 }

 r1 = new Rep(new Toggle({backgroundColor:"red",toggleBackgroundColor:"#37d65f"}).center().pos(93.20838471023427,298.39334155363747),t1=new Label("").center().pos(243.3921085080148,307.23181257706534))
 r2 = new Rep(new Toggle({backgroundColor:"red",toggleBackgroundColor:"#37d65f"}).center().pos(93.20838471023427,370.39334155363747),t2=new Label("").center().pos(243.3921085080148,372.23181257706534))
 r3 = new Rep(new Toggle({backgroundColor:"red",toggleBackgroundColor:"#37d65f"}).center().pos(93.20838471023427,432.39334155363747),t3=new Label("").center().pos(243.3921085080148,372.23181257706534+65))
 r4 = new Rep(new Toggle({backgroundColor:"red",toggleBackgroundColor:"#37d65f"}).center().pos(93.20838471023427,494.39334155363747),t4=new Label("").center().pos(243.3921085080148,372.23181257706534+130))


btn1.on("click", function() {zgo("/app1.html");});
msg= new Label("").centerReg().mov(0,-qst.height/2-50)
virf = new Button({
  label:"التأكد",
  width:200,
  height:80,
  backgroundColor:"#37d65f",
  rollBackgroundColor:"#36efdb",
  borderWidth:2,
  borderColor:"violet",
  gradient:.3,
  corner:1
}).centerReg().mov(0,qst.height/2+80).on("click", function() {

if ((t1.text=="نعم") && (t2.text=="نعم") && (t3.text=="لا")&& (t4.text=="لا")) {
msg.text="أحسنت!! اجابتك صحيحة"
msg.color="#37d65f"

} else {
  msg.text="تثبت من الاجابة يوجد خطأ"
  msg.color="red"
}

});


   stage.update();

}); // end of ready
