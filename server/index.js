const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 4000
const token = 'aliehs'

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.post('/login', (req, res) => {
  const { username, password } = req.body
  if ('admin' === username && 'admin' === password) {
    res.send({
      success: true,
      data: token
    })
  }
  res.send({
    success: false,
    data: 'username or password is wrong!'//error
  })
})

app.get('/users/admin', (req, res) => {
  const { authorization } = req.headers

  if (token === authorization) {
    res.send({
      success: true,
      data: {
        id: 1,
        username: 'admin',
        email: 'fe.afra@gmail.com',
        name: 'admin'
      }
    })
  }

  res.send({
    success: false,
    data: 'token is not valid'
  })
})

app.listen(port, () => {
  console.log(`Example app is listening right now at http://localhost:${port}`)
})