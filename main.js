var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

function new_image()
{
fabric.Image.fromURL('AniversarioImagem.png', function(Img) {
blockImageObject = Img;
blockImageObject.scaleTowidth(700);
blockImageObject.scaleToHeight(510);
blockImageObject.set({
top:0,
left:0
});
canvas.add(blockImageobject);
});
}

function playSound(){
    x.play();
}
