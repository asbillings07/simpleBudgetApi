const express = require('express')
const { port, sessionSecret } = require('./config')
const { ApolloServer } = require('apollo-server')
const typeDefs = require('./graphQl/schema')
const resolvers = require('./graphQl/resolvers')
const models = require('./models')
require('dotenv').config()
// const bodyParser = require('body-parser')
// var cookieParser = require('cookie-parser')
const config = require('./config')
const { logger } = require('./logger')
// const cors = require('cors')
// const textMessageRoute = require('./routes/text')
// const emailMessageRoute = require('./routes/email')
// const speakerRoute = require('./routes/speaker')
// const talkCoordRoute = require('./routes/talkCoord')
// const congregationRoute = require('./routes/congregation')
require('./mongoose')(config)


const context = () => ({ models })

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context
})


server.listen().then(({ url }) => console.log(`Server Ready at ${url}`))




























































/*
const app = express()

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors({ credentials: true, origin: corsOptions }))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', textMessageRoute)
app.use('/api', emailMessageRoute)
app.use('/api', speakerRoute)
app.use('/api', talkCoordRoute)
app.use('/api', congregationRoute)

app.get('/', (req, res, next) => {
  res.json({
    message: 'Welcome to the kh-scheduling server!'
  })
})

/// whitelisting for Cors
const whitelist = ['http://localhost:3000', 'http://localhost:9000', 'http://localhost:3001']

logger.debug("Overriding 'Express' logger")
app.use(require('morgan')('combined', { stream: logger.stream }))

// global error handler
app.use('*', (req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.locals.error = err
  if (err.status >= 100 && err.status < 600) {
    res.status(err.status).json({ err })
    console.log(err.status)
    console.log(err.message)
    console.log(err.stack)
  } else {
    res.status(500).json({ message: 'an internal server error occured' })
    console.log(500)
    console.log(err.message)
    console.log(err.stack)
  }
})

// creates server
app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})
*/