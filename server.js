require('noodle-it')
const express = require('express')

const app = express()
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
  console.log("sending another lol here we go again")
  res.send("it worked!")
})

app.listen(port, () => console.log(`Listening on port ${port}`))
