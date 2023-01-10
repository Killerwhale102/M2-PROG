class App
{
    runApplication()
    {
        this.mario()
        let laugh = this.bahwa()
        console.log(laugh)
        let calculated = this.getal(5, 5)
        console.log(calculated)
    }
        mario()
        {
            console.log("MARIO!!")
            
        }

        bahwa()
        {
            let laugh = "BWAHAHA!!!"

            return laugh
        }

        getal(x, y)
        {
            let calculated = x + y

            return calculated
        }
    
}

let app = new App();
app.runApplication();
