let express = require("express")

let app = express()
let weatherRoute = require('./routes/weather')

app.use(weatherRoute)
app.use(express.static('public'))

const PORT = process.env.PORT || 3030

app.listen(PORT, () => console.info(`server has started on port ${PORT}`))
