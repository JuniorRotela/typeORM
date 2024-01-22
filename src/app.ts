import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { errors as celebrateErrors } from 'celebrate';  // Importa errors de celebrate
import userRoutes from './routes/user.routes';
import gardenRoutes from './routes/garden.routes';
import ownerRoutes from './routes/owner.routes'

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(userRoutes);
app.use(gardenRoutes);
app.use(ownerRoutes);

// Middleware de manejo de errores para celebrar (celebrate errors)
app.use(celebrateErrors());

// Manejo de errores general
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

export default app;
