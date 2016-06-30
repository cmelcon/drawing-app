//When clicking on the color picking list items
  //deselect all li's that are selected
  //select the one which was clicked

//When "new color" is pressed
  //hide or unhide the color select div

//When color sliders changes
//OR when the previous event fires
  //update the new color span

//When add color is pressed
  //append the new color to the controls ul
  //select the new color

//on mouse events on the canvas
  //draw lines

  $(".controls").find("ul").on("click", "li", function(){
    $(".selected").removeClass("selected");
    $(this).addClass("selected");
    setCanvasColor();

  });
  $("#revealColorSelect").on("click", function(){
    $("#colorSelect").fadeToggle();
    chooseSpanColor();

  });
function chooseSpanColor(){
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", `rgb(${r}, ${g}, ${b})`);
}
$(".sliders").find("input").on("change", chooseSpanColor);

$("#addNewColor").on("click", function(){
  var $newThing = $("<li></li>");
  var chosenColor = $("#newColor").css("background-color");
  $newThing.css("background-color", chosenColor);
  $(".controls").find("ul").append($newThing);
  $(".selected").removeClass("selected");
  $newThing.addClass("selected");
  setCanvasColor();

});



var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.lineWidth = 6;
var lastEvent;
var mouseIsDown;
$("canvas").on("mousedown", function(e){
  mouseIsDown = true;
  lastEvent = e;
}).on("mousemove", function(e){
  if (mouseIsDown){
    ctx.beginPath();
    ctx.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    ctx.lineTo(e.offsetX, lastEvent.offsetY);
    ctx.stroke();
    lastEvent = e;
  }
}).on("mouseup", function(){
  mouseIsDown = false;
});

function setCanvasColor(){
  ctx.strokeStyle = $(".selected").css("background-color");
}
setCanvasColor();
