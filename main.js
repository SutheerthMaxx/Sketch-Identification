
function preload()
{
    load = ml5.imageClassifier("DoodleNet");
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    background("white");
    canvas.mouseReleased(hiphop);
    synth = window.speechSynthesis;
}

function draw()
 {
     strokeWeight(13);
     stroke(0);
     if(mouseIsPressed)
     {
        line(pmouseX , pmouseY , mouseX , mouseY);
     }
 }

 function hiphop()
 {
    load.classify(canvas , gotresult);
 }

 function clearr()
 {
    background("white");
 }

 function gotresult(error , results)
 {
    if (error) {
        console.log(error);
    } else {
        console.log(results);

        document.getElementById("label").innerHTML = "label : " + results[0].label;
        document.getElementById("confi").innerHTML = "confidence : " + Math.round(results[0].confidence * 100) + "%" ;
    
        utterthis = new SpeechSynthesisUtterance(results[0].label);
        synth.speak(utterthis);
    }
 }