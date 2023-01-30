class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");

        // card

        g.beginPath()
        g.fillStyle = "darkblue"
        g.moveTo(100,0)
        g.lineTo(100,900)
        g.lineTo(1400,900)
        g.lineTo(1400,0)
        g.closePath()
        g.stroke()
        g.fill()

        g.beginPath()
        g.fillStyle = "aliceblue"
        g.moveTo(200,100)
        g.lineTo(200,800)
        g.lineTo(1300,800)
        g.lineTo(1300,100)
        g.closePath()
        g.stroke()
        g.fill()
        
        // card
        
        
        // house


        g.beginPath()
        g.fillStyle = "red"
        g.moveTo(275,150);
        g.lineTo(250,175);
        g.lineTo(250,225);
        g.lineTo(300,225);
        g.lineTo(300,175);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "blue"
        g.moveTo(375,150);
        g.lineTo(350,175);
        g.lineTo(350,225);
        g.lineTo(400,225);
        g.lineTo(400,175);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "orange"
        g.moveTo(475,150);
        g.lineTo(450,175);
        g.lineTo(450,225);
        g.lineTo(500,225);
        g.lineTo(500,175);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "pink"
        g.moveTo(575,150);
        g.lineTo(550,175);
        g.lineTo(550,225);
        g.lineTo(600,225);
        g.lineTo(600,175);
        g.closePath();
        g.stroke();
        g.fill();


    
        g.beginPath()
        g.fillStyle = "purple"
        g.moveTo(575,350);
        g.lineTo(550,375);
        g.lineTo(550,425);
        g.lineTo(600,425);
        g.lineTo(600,375);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "aqua"
        g.moveTo(475,350);
        g.lineTo(450,375);
        g.lineTo(450,425);
        g.lineTo(500,425);
        g.lineTo(500,375);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "green"
        g.moveTo(375,350);
        g.lineTo(350,375);
        g.lineTo(350,425);
        g.lineTo(400,425);
        g.lineTo(400,375);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "brown"
        g.moveTo(275,350);
        g.lineTo(250,375);
        g.lineTo(250,425);
        g.lineTo(300,425);
        g.lineTo(300,375);
        g.closePath();
        g.stroke();
        g.fill();

        
        g.beginPath()
        g.fillStyle = "blue"
        g.moveTo(275,450);
        g.lineTo(250,475);
        g.lineTo(250,525);
        g.lineTo(300,525);
        g.lineTo(300,475);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "yellow"
        g.moveTo(375,450);
        g.lineTo(350,475);
        g.lineTo(350,525);
        g.lineTo(400,525);
        g.lineTo(400,475);
        g.closePath();
        g.stroke();
        g.fill();
        
        g.beginPath()
        g.fillStyle = "violet"
        g.moveTo(475,450);
        g.lineTo(450,475);
        g.lineTo(450,525);
        g.lineTo(500,525);
        g.lineTo(500,475);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "red"
        g.moveTo(575,450);
        g.lineTo(550,475);
        g.lineTo(550,525);
        g.lineTo(600,525);
        g.lineTo(600,475);
        g.closePath();
        g.stroke();
        g.fill();

        
        g.beginPath()
        g.fillStyle = "green"
        g.moveTo(575,650);
        g.lineTo(550,675);
        g.lineTo(550,725);
        g.lineTo(600,725);
        g.lineTo(600,675);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "pink"
        g.moveTo(475,650);
        g.lineTo(450,675);
        g.lineTo(450,725);
        g.lineTo(500,725);
        g.lineTo(500,675);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "blue"
        g.moveTo(375,650);
        g.lineTo(350,675);
        g.lineTo(350,725);
        g.lineTo(400,725);
        g.lineTo(400,675);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "red"
        g.moveTo(275,650);
        g.lineTo(250,675);
        g.lineTo(250,725);
        g.lineTo(300,725);
        g.lineTo(300,675);
        g.closePath();
        g.stroke();
        g.fill();

        // Road


        g.beginPath()
        g.fillStyle = "black"
        g.moveTo(225,575);
        g.lineTo(225,625);
        g.lineTo(725,625);
        g.lineTo(725,575);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "black"
        g.moveTo(225,275);
        g.lineTo(225,325);
        g.lineTo(725,325);
        g.lineTo(725,275);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "black";
        g.moveTo(740,150)
        g.lineTo(740,750)
        g.lineTo(670,750)
        g.lineTo(670,150)
        g.closePath()
        g.stroke()
        g.fill()



        // Road

    
        // Tree

        g.beginPath()
        g.fillStyle = "brown";
        g.moveTo(890,650)
        g.lineTo(890,725)
        g.lineTo(870,725)
        g.lineTo(870,650)
        g.closePath()
        g.stroke()
        g.fill()

        g.beginPath()
        g.fillStyle = "darkgreen"
        g.arc(880, 650, 40, 0, 2 * Math.PI)
        g.closePath()
        g.stroke()
        g.fill()
        g.beginPath()

        g.beginPath()
        g.fillStyle = "brown";
        g.moveTo(890,500)
        g.lineTo(890,575)
        g.lineTo(870,575)
        g.lineTo(870,500)
        g.closePath()
        g.stroke()
        g.fill()

        g.beginPath()
        g.fillStyle = "darkgreen"
        g.arc(880, 500, 40, 0, 2 * Math.PI)
        g.closePath()
        g.stroke()
        g.fill()
        g.beginPath()

        g.beginPath()
        g.fillStyle = "brown";
        g.moveTo(890,350)
        g.lineTo(890,425)
        g.lineTo(870,425)
        g.lineTo(870,350)
        g.closePath()
        g.stroke()
        g.fill()

        g.beginPath()
        g.fillStyle = "darkgreen"
        g.arc(880, 350, 40, 0, 2 * Math.PI)
        g.closePath()
        g.stroke()
        g.fill()
        g.beginPath()

        g.beginPath()
        g.fillStyle = "brown";
        g.moveTo(890,200)
        g.lineTo(890,275)
        g.lineTo(870,275)
        g.lineTo(870,200)
        g.closePath()
        g.stroke()
        g.fill()

        g.beginPath()
        g.fillStyle = "darkgreen"
        g.arc(880, 200, 40, 0, 2 * Math.PI)
        g.closePath()
        g.stroke()
        g.fill()
        g.beginPath()

        g.beginPath()
        g.fillStyle = "brown";
        g.moveTo(1090,200)
        g.lineTo(1090,275)
        g.lineTo(1070,275)
        g.lineTo(1070,200)
        g.closePath()
        g.stroke()
        g.fill()

        g.beginPath()
        g.fillStyle = "darkgreen"
        g.arc(1080, 200, 40, 0, 2 * Math.PI)
        g.closePath()
        g.stroke()
        g.fill()
        g.beginPath()

        g.beginPath()
        g.fillStyle = "brown";
        g.moveTo(1090,350)
        g.lineTo(1090,425)
        g.lineTo(1070,425)
        g.lineTo(1070,350)
        g.closePath()
        g.stroke()
        g.fill()

        g.beginPath()
        g.fillStyle = "darkgreen"
        g.arc(1080, 350, 40, 0, 2 * Math.PI)
        g.closePath()
        g.stroke()
        g.fill()
        g.beginPath()

        g.beginPath()
        g.fillStyle = "brown";
        g.moveTo(1090,500)
        g.lineTo(1090,575)
        g.lineTo(1070,575)
        g.lineTo(1070,500)
        g.closePath()
        g.stroke()
        g.fill()

        g.beginPath()
        g.fillStyle = "darkgreen"
        g.arc(1080, 500, 40, 0, 2 * Math.PI)
        g.closePath()
        g.stroke()
        g.fill()
        g.beginPath()

        g.beginPath()
        g.fillStyle = "brown";
        g.moveTo(1090,650)
        g.lineTo(1090,725)
        g.lineTo(1070,725)
        g.lineTo(1070,650)
        g.closePath()
        g.stroke()
        g.fill()

        g.beginPath()
        g.fillStyle = "darkgreen"
        g.arc(1080, 650, 40, 0, 2 * Math.PI)
        g.closePath()
        g.stroke()
        g.fill()
        g.beginPath()

        // Tree

    }
}
let app = new App();
app.runApplication();