const express = require('express')
const app = express()
const PORT = 5050
app.use(express.json())
const ctrl = require('./controllers/controller')


app.get(`/api/users`, ctrl.getUsers)
app.post(`/api/users`, ctrl.addUser)
app.put(`/api/users/:id`, ctrl.updateUser)
app.delete(`/api/users`, ctrl.deleteUser)




app.listen(PORT, () => console.log(`Feelin' nifty on ${PORT}`))