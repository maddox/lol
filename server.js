require('noodle-it')
const express = require('express')

console.log("restart------ again!!!")
const app = express()
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
  console.info("oh it sure did do it - together")
  res.send("blannnnkiiiii!!")
})


app.listen(port, () => console.log(`Listening on port ${port}`))

