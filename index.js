require('dotenv').config()
const config = require('./src/config')
const express = require('express')
const db = require('./src/database_connection')
const router = require('./src/routes/route.index')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
app.use(router)


app.listen(config.PORT ,() => {
    console.log('servidor rodando')
})