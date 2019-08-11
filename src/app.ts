// relect metadata
import 'reflect-metadata';
// Module alias module
import 'module-alias/register';
// Path module
import path from 'path';
// Import custom module
import condition from '@/utils/condition';

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
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { appDebug } from '@/utils/debug';
import apexRoutes from '@/routes/profile';

// Init app
const app: Express = express();

// Set port
app.set('port', config.get('APP_PORT'));
app.set('x-powered-by', false);

// middleware
app
  .use(cors())
  .use(helmet())
  .use(compression())
  .use(
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
  const error: Error & { status?: number } = new Error('Route not found');
  error.status = 404;
  next(error);
});

// Handling the request error
if (app.get('env') === 'production') {
  // Set static
  app.use(express.static(path.join(__dirname, 'public')));
  // Handle SPA
  app.use(/.*/, (req: Request, res: Response, next: NextFunction) =>
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
  );
} else {
  app.use(
    (
      error: ErrorRequestHandler & { status?: number },
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      res.status(error.status || 500).json({
        error: error
      });
    }
  );
}

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
