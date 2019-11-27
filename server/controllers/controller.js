const users = require('./data.json')
let id = 11
module.exports = {
    getUsers(req, res){
        res.status(200).send(users)
    },
    addUser(req, res) {
        const {first_name, last_name, language} = req.body
        const image = `https://robohash.org/${first_name}.jpg?size=50x50&set=set1`
        const newUser = {
            id,
            first_name,
            last_name,
            image,
            language
        }
        users.push(newUser)
        id++
        res.status(200).send(users)
    },
    updateUser(req, res) {
        console.log(req.params, req.body)
        const {id} = req.params
        const {firsty: first_name, lasty: last_name, imagey: image, languagey: language} = req.body
        const index = users.findIndex(user => user.id === +id)

        users[index] = {
            id,
            first_name: first_name || users[index].first_name,
            last_name: last_name || users[index].last_name,
            image: `https://robohash.org/${first_name}.jpg?size=50x50&set=set1` || users[index].image,
            language: language || users[index].language
        }
        res.status(200).send(users)
    },
    deleteUser(req,res){
        const {id} = req.query
        const index = users.findIndex(user => user.id === +id)

        users.splice(index, 1)
        res.status(200).send(users)
    }
}