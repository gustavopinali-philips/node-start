const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

// =======================
// Configuration =========
// =======================
const app = express()
const port = process.env.PORT || 3000

app.use('/public', express.static('./public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))

// Loading controllers (with routes)
// =============================================================================
app.use('/auth', require('./api/auth/routes').init())


app.listen(port)
console.log('Serviço iniciado na porta %s', port)