require('noodle')
const express = require('express')

const app = express()
const port = process.env.PORT || 3001


app.get('/', (req, res) => {
  console.log("sending another lol")
  res.send("Lawlz people!")
})

app.listen(port, () => console.log(`Listening on port ${port}`))
