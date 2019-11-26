const express = require('express')
const app = express()
const PORT = 5050
app.use(express.json())
const ctrl = require('./controllers/controller')


app.get(`/api/users`)
app.post(`/api/users`)
app.put(`/api/users`)
app.delete(`/api/users`)




app.listen(PORT, () => console.log(`Feelin' nifty on ${PORT}`))