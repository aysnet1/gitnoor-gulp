
ZIM ZIP

ZIMjs is JavaScript framework / library for coding on the HTML Canvas:
http://zimjs.com

This zip contains the Frame Templates described at:
http://zimjs.com/frame.html

Just copy the html page you need to get started with your own project.
The easiest template is the FIT template so start there if you are new to ZIM.
There are comments in the code to explain the Frame set up.
In the "ready" event there is a comment that says "put your code here".
This is where you start coding - you can delete the sample button.


Documentation for what functions and classes you can use are found here:
http://zimjs.com/docs.html

There is a learn section for ZIM here with all sorts of tutorials and lessons:
http://zimjs.com/learn.html

There are many examples of common Interactive Media tasks here:
http://zimjs.com/bits.html

There are video tutorials with screen captures here:
http://zimjs.com/capture.html

------------------------------
SUMMARY OF CHANGES TO VERSIONS (latest to oldest)
http://zimjs.com/updates.html for full list
------------------------------



ZIM VEE (version 5 if ZIM)
No major changes to existing ZIM structure.
Added ZIM VEE values to various parameters that allow for passing in options.
The options can be run at a later date to provide a more dynamic result.
The options can be specified by an array, a ZIM RAND object or a function returning a value.
A ZIM RAND object is an object literal with min, max, and optional integer and negative parameters.
For instance, the ZIM interval() can receive a ZIM VEE value to run at a random time each interval.

An Emitter class is now available for emitting particles.
The Emitter class uses ZIM VEE values so you can emit random particles.

A Blob class is now available that lets you present a blob with Bezier curves.
These can be editable, savable, not editable or hidden.
A ZIM VEE value can be passed in to the Bezier handle length to make random blobs.

WebGL is now directly supported with the gpu parameter of ZIM Frame.
This uses the new StageGL system in CreateJS and has certain display limitations so see docs.

As of 5.5.0 you no longer need the zim namespace:
var circle = new Circle(); // will work for any code function, display object or control
// you can still use the namespace as follows:
var circle = new zim.Circle();
// and you can require the namespace by setting var zns = true before loading ZIM (see templates)
// the namespace makes sure that zim code does not interfere with other code
// but most of the time, all the code is in ZIM - and if not, it is easy to require the namespace.


ZIM 4TH (version 4 of ZIM)
Added all the Create module functions as methods on ZIM objects.
Previously we ran functions (which are still available).

var circle = new zim.Circle();
zim.center(circle, stage); // center function
zim.drag(circle); // drag function

Now we can use the functions as methods:

var circle = new zim.Circle();
circle.center(stage); // center method
circle.drag(); // drag method

ZIM 4TH also introduced ZIM Container, Shape, Sprite, MovieClip and Bitmap
that are all the same as the CreateJS equivilants
except they have all the Create module functions added as methods
and they have width and height read only properties.
Since the zim shapes (Rectangle, Circle, Triangle) and all the components
Label, Button, Dial, Slider, Window, Pane, Tabs, etc. are zim Containers
they all have the methods and width and height added as well.
The new methods are:

drag() noDrag() dragRect() setSwipe()
hitTestPoint() hitTestReg() hitTestRect()
hitTestCircle() hitTestBounds() hitTestGrid()
boundsToGlobal()
move() animate()
scale() scaleTo() fit()
centerReg() center()
outline() place() expand()
mask()

Example:
circle.alpha = 0;
circle.animate({alpha:1}, 700);

or with ZIM DUO

circle.animate({obj:{scale:2}, time:700, loop:true});

NOTE: ZIM 4TH also flattened the props parameter for move and animate.
This moves the loop and rewind properties formerly in props
to just regular parameters of move and animate (see documentation).
For instance, the loop above was props:{loop:true} now it is loop:true.



ZIM TRI (version 3 of ZIM)
Made it so that center(obj, container) and centerReg(obj, Container)
add the obj to the container
so there is no need for container.addChild(obj).
A zim.Ticker was also added which runs with move() and animate().
You can also add your functions with zim.Ticker.add(function, stage).



ZIM DUO (version 2 of ZIM)
Added support for two ways to pass parameters.

1. new zim.Rectangle(100, 100, "red", null, null, 10);
Where you need to fill in null to keep the order of the parameters.

2. new zim.Rectangle({width:100, height:100, color:"red", corner:10});
Where you use a single configuration object
using the parameter names as outlined in the documentation.




For a more complete list of changes see GIT HUB:
https://github.com/danzen/zimjs



******************************************************

ZIM will allow you to make wonderful interactive media
on the ubiquitous HTML browser platform and mobile through PhoneGap.
ZIM has taken thousands of hours to build and test
so that you can save time and thought to build efficiently.

Your donation and donations of coders before you
help keep us going to bring you the very best.
Donations can be made through PayPal to Agency Zen
http://zimjs.com/donate/
