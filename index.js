const express = require('express');
const fetch = require('node-fetch');

const app = express()
const port = 3000

app.use(express.static(__dirname + 'public'));
app.get('/', async (req, res) => {
    const header_data=req.headers
    const ip_data=req.id
    const data={'IP':ip_data,'HEADERS':header_data}
    var response= await fetch('https://maker.ifttt.com/trigger/acsses_logger/json/with/key/ltKOLAEDn3BNW2rqpMpFhQKYZXC_FO71cVQt4mGbwkf', { 
        method: 'POST',
        mode: 'no-cors',
        headers:
        {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })

    res.sendFile(__dirname + '/public/home.html');
})

module.exports = app