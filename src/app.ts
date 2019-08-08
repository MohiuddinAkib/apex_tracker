// relect metadata
import 'reflect-metadata'
// dotenv
import dotenv from 'dotenv'
// config dotenv
dotenv.config()

// modules
import debug from 'debug'
import express from 'express'
import config from 'config'

// Init app
const app = express()

// Init app debug
const appDebug = debug('app:main')

// Set port
app.set('port', config.get('APP_PORT'))

// Listen for request
const server = app.listen(app.get('port'));
// app error handling
server.on("listening", () => appDebug(`Server is running on port ${app.get('port')}`)).once('error', (error: Error) => {
    appDebug('server error', error.name, error.message)
    appDebug(error.stack)
    process.exit(1)
})
