const express = require('express')
const bodyParser = require('body-parser')
const app = express() 
const port = 8080

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/',(req,res) =>{
    res.send('Calculator BMI')
})

app.post('/count',(req,res)=>{
    var height = req.body.height
    var weight = req.body.weight
    var total = weight/(height*height)
    
    if(total < 18.5){
       var message = "Kamu terlalu kurus (pasti cacingan)"
    }
    else if((total >= 18.5)&&(total <= 24.9)){
        var message = "Berat badan kamu ideal (miskin ya!! gabisa beli makan)"
    }
    else if((total >= 25)&&(total <= 29.9)){
        var message = "Kamu itu GENDUT banyak makan sih"
    }
    else{
        var message = "Jelek banget lu gentong"
    }
    
    res.send({
        'Height' : height + "m",
        'Weight' : weight + "kg",
        'Body Mass Index' : total + message
    })
})

app.listen(port, () => {
    console.log(`Server di port ${port}`)
})
