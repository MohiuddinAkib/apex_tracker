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
import express, {
  Express,
  ErrorRequestHandler,
  Request,
  Response,
  NextFunction
} from 'express';
import 'express-async-errors';
import { appDebug } from '@/utils/debug';
import apexRoutes from '@/routes/profile';

// Init app
const app: Express = express();

// Set port
app.set('port', config.get('APP_PORT'));
app.set('x-powered-by', false);

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

// Handling 404 request error
app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error('Route not found');
  res.status(404);
  next(error);
});

// Handling the request error
app.use(
  (
    error: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    res.status(res.statusCode || 500).json({
      message: 'Server error',
      error: error
    });
  }
);

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
