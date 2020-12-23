const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.set(express.static('public'))


app.get('/', (req,res)=>{
     res.render('home')
})

const port = process.env.PORT || 8080

app.listen(port, ()=>{console.log(`The server is running on port ${port}`)})