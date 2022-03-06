const express = require('express')
const bodyParser = require('body-parser')
const app = express() 
const port = 8080

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send("Konversi suhu")
})
app.get('/convert/celcius/:suhu', (req, res) => {
    let c = req.params.suhu;

    let k = c + 273
    let f = (c * 9/5) + 32
    let r = c * 4/5

    res.send({
        celcius : c,
        result : {
            kelvin : k,
            fahrenheit : f,
            reamur : r
        }
    })
});

app.get('/convert/reamur/:suhu', (req, res) => {
    let r = req.params.suhu;

    let k = (r * 5/4) + 273
    let f = (r * 9/4) + 32
    let c = r * 5/4

    res.send({
        reamur : r,
        result : {
            kelvin : k,
            fahrenheit : f,
            celcius : c
        }
    })
});

app.get('/convert/kelvin/:suhu', (req, res) => {
    let k = req.params.suhu;

    let c = ((k * 1) - 273)
    let f = ((k - 273) * 9/5 +32)
    let r = 4/5 * (k - 273)

    res.send({
        kelvin : k,
        result : {
            celcius : c,
            fahrenheit : f,
            reamur : r
        }
    })
});

app.get('/convert/fahrenheit/:suhu', (req, res) => {
    let f = req.params.suhu;

    let c = 5/9 * (f - 32)
    let r = 4/9 * (f - 32)
    let k = 5/9 * (f - 32) + 273

    res.send({
        fahrenheit : f,
        result : {
            celcius : c,
            reamur : r,
            kelvin : k
        }
    })
});

app.listen(port, () => {
    console.log(`Server di port ${port}`)
})
