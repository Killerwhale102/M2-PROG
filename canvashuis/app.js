class App
{
    runApplication()
    {
        console.log("hello world!");
        this.tekenHuis()
    }
    
    tekenHuis(g)
    {
        console.log("hello world!");

        let canvasvariable=document.getElementById("canvasId");
        let g = canvasvariable.getContext("2d");

        g.fillRect(0,0,10,10);

        g.beginPath();
        g.fillStyle = "red"
        g.moveTo(200,300);
        g.lineTo(300,100);
        g.lineTo(700,200);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "gray"
        g.moveTo(200,300);
        g.lineTo(200,500);
        g.lineTo(600,600);
        g.lineTo(600,400);
        g.closePath()
        g.stroke();
        g.fill();

        g.beginPath();
        g.moveTo(600,400)
        g.lineTo(700,200)
        g.lineTo(800,300)
        g.closePath()
        g.stroke()
        g.fill()

        g.beginPath()
        g.moveTo(800,300)
        g.lineTo(800,500)
        g.lineTo(600,600)
        g.lineTo(600,400)
        g.closePath()
        g.stroke()
        g.fill()

        console.log(canvasvariable)
    }

    

}

let app = new App();
app.runApplication();


