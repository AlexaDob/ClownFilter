noseX=0;
noseY=0;
noseX2=0;
noseY2=0;

function preload() {
  clown_nose = loadImage('https://i.postimg.cc/631Ykb32/dog.png');
  flower_crown = loadImage('https://i.postimg.cc/gJSmfp8V/clipart1932869.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x - 45;
    noseY = results[0].pose.nose.y - 85;
    noseX2 = results[0].pose.nose.x - 60;
    noseY2 = results[0].pose.nose.y - 120;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(flower_crown, noseX2, noseY2, 120, 100);
  image(clown_nose, noseX, noseY, 100, 100);
}

function take_snapshot(){    
  save('myFilterImage.png');
}
