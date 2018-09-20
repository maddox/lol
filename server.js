require('noodle-it')
const express = require('express')

const app = express()
const port = process.env.PORT || 3001


app.get('/', (req, res) => {
  console.log("sending another lol do it again and again but not again")
  res.send("lolasdf")
})

app.listen(port, () => console.log(`Listening on port ${port}`))
