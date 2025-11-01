const express = require('express')
const app = express()
const PORT = 8477

let data = {
    user: 'James',
    age: 30,
    job: 'Developer'
}

app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to my Express Server!</h1>
        <p>This is the home page.</p>
        <p>You can vist the Dashboard here: </p>
        <a href="/dashboard">Dashboard</a>
    `)
})

app.get('/dashboard', (req, res) => {
    res.send(`
        <h1>Dashboard</h1>
        <p>This is your dashboard ${data.user}</p>
        <p>Go back to the home page: </p>
        <a href="/">Home</a>
    `)
})

app.get('/api/data', (req, res) => {
    res.send(data)
})

app.post('/api/data', (req, res) => {
    const newData = req.body
    data = { ...data, ...newData } 
    res.send({ message: 'Data received successfully', data: newData }) 
})

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})