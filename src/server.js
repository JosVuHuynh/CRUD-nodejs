import express from 'express'
import configViewEngine from './configs/viewEngine'
require('dotenv').config()
import initWebRoute from './route/web'
import initApiRoute from './route/api'

const app = express()
const port = process.env.PORT || 3000


app.use(express.urlencoded({extended: true}))
app.use(express.json())


//set up view engine
configViewEngine(app)


//init web route
initWebRoute(app)


//init api route
initApiRoute(app)

//handle 404 not found
app.use((req,res) => {
  return res.render('404.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})