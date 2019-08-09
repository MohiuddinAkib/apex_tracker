// relect metadata
import 'reflect-metadata';
// Module alias module
import 'module-alias/register';
// dotenv
import dotenv from 'dotenv';
// Path module
import path from 'path';
// Import custom module
import condition from '@/utils/condition';

// constructing .env path
const envPath = path.join(path.dirname(__dirname), '.env');
// config dotenv
dotenv.config({
  path: condition({
    [`${envPath}.production`]: process.env.NODE_ENV === 'production',
    [`${envPath}.development`]: process.env.NODE_ENV !== 'production'
  })
});

// modules
import config from 'config';
import morgan from 'morgan';
import express, { Express } from 'express';
import { appDebug } from '@/utils/debug';
import apexRoutes from '@/routes/profile';

// Init app
const app: Express = express();

// Set port
app.set('port', config.get('APP_PORT'));

// middleware
app.use(
  morgan(
    condition({
      dev: app.get('env') === 'development',
      combined: app.get('env') === 'production'
    })
  )
);
// Routes
app.use('/api/v1/profile', apexRoutes);

// Listen for request
const server = app.listen(app.get('port'));
// app error handling
server
  .on('listening', () =>
    appDebug(`Server is running on port ${app.get('port')}`)
  )
  .once('error', (error: Error) => {
    appDebug('server start failed', error);
    process.exit(1);
  });
