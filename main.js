canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
nasa_imgs=["mars oange 3.jpg", "mars orange 2.jpg", "img1 black.jfif", "3.jpg"];
random_no=Math.floor(Math.random()*4);
rover_width=100;
rover_height=90;
background_img=nasa_imgs[random_no];
rover_img="rover.png";
rover_x=100;
rover_y=100;

function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uploadbackground;
    background_imgtag.src=background_img;

    rover_imgtag=new Image();
    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_img;
}
function uploadbackground(){
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgtag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e){
keypress=e.keyCode;
console.log(keypress);
if (keypress=="40"){
    down();
    console.log("down");
}
if (keypress=="37"){
    left();
    console.log("left");
}
if (keypress=="39"){
    right();
    console.log("right");
}
if (keypress=="38"){
    up();
    console.log("up");
}
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("when up arrow key is pressed, x="+ rover_x +"  y=" + rover_y);
        uploadbackground();
        uploadrover();
    }
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("when down arrow key is pressed, x="+ rover_x +"  y=" + rover_y);
        uploadbackground();
        uploadrover();
    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("when left arrow key is pressed, x="+ rover_x +"  y=" + rover_y);
        uploadbackground();
        uploadrover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("when right arrow key is pressed, x="+ rover_x +"  y=" + rover_y);
        uploadbackground();
        uploadrover();
    }
}