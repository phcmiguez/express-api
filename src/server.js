const port = 3043

const express = require('express')

const app = express()

app.use(express.json())

app.use(express.urlencoded({
  extended: true
}))

app.get('/', (req, res) => {
  res.send('Hello, JS!')
})

app.get('/products', (req, res, next) => {
  res.send({
    name: 'Laptop',
    price: 12933.98
  })
})

app.get('/products/:id', (req, res) => {
  res.send(`Details for product ${req.params.id}`)
})

app.post('/products', (req, res) => {
  const prod = {
    name: req.body.name,
    price: req.body.price
  }
  res.send(prod)
})

app.listen(port, () => {
  console.log('Express running at port ' + port)
})