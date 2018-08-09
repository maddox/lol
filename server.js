const express = require('express')

const app = express()
const port = process.env.PORT || 3001


app.get('/', (req, res) => {
  res.send("lol!")
})

app.listen(port, () => console.log(`Listening on port ${port}`))
