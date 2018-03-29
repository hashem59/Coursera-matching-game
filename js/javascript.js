var numberOfFaces = 5;
    
    var i = 0;
       
   var theLeftSide = document.getElementById("leftSide");

   var theRightSide = document.getElementById("rightSide");

   var theBody = document.getElementsByTagName("body")[0];

   function generateFaces() {

     "use strict";

     while (theLeftSide.firstChild) { // While there is a child theNode.removeChild(theNode.firstChild);

       theLeftSide.removeChild(theLeftSide.firstChild);
     }       
    
    while (theRightSide.firstChild) { // While there is a child theNode.removeChild(theNode.firstChild);
    theRightSide.removeChild(theRightSide.firstChild);}                



     for (i = 0; i < numberOfFaces; ++ i) {

       var top_position = Math.floor((Math.random() * 400));

       var left_position = Math.floor((Math.random() * 400));

       var smile_img = document.createElement("img");

       smile_img.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png"

       smile_img.style.top = top_position + "px";

       smile_img.style.left = left_position + "px";

       theLeftSide.appendChild(smile_img);
         
    var leftSideImages = theLeftSide.cloneNode(true);

     leftSideImages.removeChild(leftSideImages.lastChild);

     theRightSide.appendChild(leftSideImages);
         
     }
       
 
     theLeftSide.lastChild.onclick = function nextLevel(event) {

       event.stopPropagation();

       numberOfFaces += 3;

       generateFaces();

     };

   }
     theBody.onclick = function gameOver() {

       alert("Game Over! Refresh the page and try again");

       theBody.onclick = null;

       theLeftSide.lastChild.onclick = null;

     }; 