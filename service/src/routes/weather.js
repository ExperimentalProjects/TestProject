let express = require('express')
var request = require('request');
let router = express.Router()

router.get('/weather', (req, res) => {
    if (req.query.zipcode) {
        // get weather and send 
        request(`http://dummy.restapiexample.com/api/v1/employees`, { json: true }, (err, response, body) => {
            if (err) {
                console.log(err)
            } else {
                console.log(body)
                res.send(body)
            }

        })
    } else {
        res.send("ou have requested weather without specifying zipcode")
    }

})


module.exports = router