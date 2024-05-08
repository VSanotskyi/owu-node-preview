const express = require('express');
const cors = require('cors')

const PORT = 8080

const app = express();

app.use(express.json())
app.use(cors())

// app.get('/', (req, res) => {
//     // res.send('Hello')
//     res.json({message: 'Hello'})
// })

const users = [{
    id: '1', name: 'Vasyl', age: 10
}, {
    id: '2', name: 'Petro', age: 18
}, {
    id: '3', name: 'Dmytro', age: 40
}]

app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/users', (req, res) => {
    const user = req.body

    users.push(user)
    res.status(201).json(users)
})

app.put('/user/:id', (req, res) => {
    const {id} = req.params
    const user = req.body

    const index = users.findIndex(el => el.id === id)

    users[index] = {id, ...user}
    res.status(201).json(users)
})

app.delete('/users/:id', (req, res) => {
    const {id} = req.params

    const index = users.findIndex(el => el.id === id)

    users.splice(index, 1)

    res.status(200).json({
        message: "delete is successfully"
    })
})

app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`)
});

