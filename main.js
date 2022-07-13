canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
mars_array=["mars.jpg","mars1.jpg","mars2.jpg","mars3.jpg"]
random_number=Math.floor(Math.random()*4)

rover_width=100
rover_height=90


background_image = mars_array[random_number];

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;


 
function add(){
    new_image=new Image()
    new_image.onload=uploadBackground
    new_image.src=background_image

    rover_image=new Image()
    rover_image.onload=uploadRover
    rover_image.src=rover_image
}                                  

//Create "uploadBackground()" function.
   function uploadBackground(){
    ctx.drawImage (new_image,0,0,canvas.width,canvas.height)
   }                           
                                         //Draw image of background

//Create "uploadrover()" function.

    function uploadRover(){
     ctx.drawImage(rover_image,rover_x,rover_y,rover_width,rover_height)
    }                                    //Draw image of rover


window.addEventListener("keydown",my_keydown);
function my_keydown(e)

{
	keyPressed = e.keyCode;
	
   
	if(keyPressed=="38"){
        up()
    }
    if(keyPressed=="39"){
        right()  
    }
    if(keyPressed=="37"){
      left()  
    }
    if(keyPressed=="40"){
        down()  
    }
     //Write code if keypressed is down. ASCII value of "up" arrow is 40.
		




    //Additional Activity
    //Write the code for left and right arrow pressed. 
}

function up(){
if(rover_y>=0){
    rover_y=rover_y-10
    uploadBackground()
    uploadRover()
}
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10
        uploadBackground()
        uploadRover()
}
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10
        uploadBackground()
        uploadRover()
}	
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10
        uploadBackground()
        uploadRover()		
}
}



