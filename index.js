// https://welovedevs.com/fr/articles/node-js-api/

const express = require('express')
const mongoose = require('mongoose')
const locationController = require('./locations/locations.controller')
const userController = require('./user/user.controller')
const bodyParser = require('body-parser')
require('dotenv').config()
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(locationController)
app.use(userController)

app.listen(port, async () => {
	await mongoose.connect(process.env.MONGO_URI)
	console.log("Connected to mongodb")
	console.log(`API listening on port ${port}, visit http://localhost:${port}/`)
})

app.get('/helloworld', (req,res) => {    res.send('Hello World')})

