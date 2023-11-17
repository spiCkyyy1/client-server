const express = require ("express")
const cors = require('cors')
const app = express ()
const routes = require ("./routes")
const bodyParser = require('body-parser')
const PORT = 3000
app.use(express.json())
app.use(cors())
app.use("/", routes)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log ("My gateway has started on port " + PORT)
})


