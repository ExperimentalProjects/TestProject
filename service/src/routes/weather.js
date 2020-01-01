let express = require('express')
let router = express.Router()
let OAuth = require('oauth');


let header = {
    "X-Yahoo-App-Id": "hZq1iA5i"
};

var weatherRequest = new OAuth.OAuth(
    null,
    null,
    'dj0yJmk9bzhvUk1mOE1ROEFJJmQ9WVdrOWFGcHhNV2xCTldrbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWU5',
    '0ba03db854bf88ee3de249f2164774ba19d3f8dc',
    '1.0',
    null,
    'HMAC-SHA1',
    null,
    header
);

router.get('/weather', (req, res) => {
    if (req.query.location) {
        // get weather and send 
        weatherRequest.get(
            `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${req.query.location},ca&format=json`,
            null,
            null,
            function (err, data, result) {
                if (err) {
                    console.log(err);
                } else {
                    res.send(data)
                }
            }
        );
    } else if (req.query.lat && req.query.lon) {
        // get weather and send 
        console.log("lat", req.query.lat)
        console.log("lon", req.query.lon)
        weatherRequest.get(
            `https://weather-ydn-yql.media.yahoo.com/forecastrss?lat=${req.query.lat}&lon=${req.query.lon},ca&format=json`,
            null,
            null,
            function (err, data, result) {
                console.log("data", data)
                console.log("result", result)
                if (err) {
                    console.log(err);
                } else {
                    res.send(data)
                }
            }
        );
    } else {
        res.send("ou have requested weather without specifying zipcode")
    }

})


module.exports = router