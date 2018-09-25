require('noodle-it')
const express = require('express')

const app = express()
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
  console.info("oh yeahhhhhh")
  res.send("it workssssed!")
})

app.listen(port, () => console.log(`Listening on port ${port}`))
