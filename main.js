var status = "";
var obj_name
function preload() {
}

function setup() {
    canvas = createCanvas(400, 430);
    canvas.position(480, 350);
    video = createCapture(VIDEO);
    video.size(480, 430);
    video.hide();
}

function draw() {
    image(video, 0, 0, 480, 430);
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modalLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    obj_name = document.getElementById("obj_name").value;
}

function modalLoaded() {
    console.log("Modal Loaded Successfully");
    status = true;
}