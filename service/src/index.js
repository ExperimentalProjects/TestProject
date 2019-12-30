let express = require("express")
var cors = require('cors')

let app = express()
app.use(cors())
let weatherRoute = require('./routes/weather')

app.use(weatherRoute)
app.use(express.static('public'))

const PORT = process.env.PORT || 3030

app.listen(PORT, () => console.info(`server has started on port ${PORT}`))
