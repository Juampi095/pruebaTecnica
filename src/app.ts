import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { connection } from './config/database';
import authRoutes from './routes/auth.routes';

const app = express();


app.use(express.json());
app.use(morgan('dev'))
app.use(cors());

app.get('/', (_, res) => { res.send("Welcome!") });

app.use('/api/auth', authRoutes);

connection.sync()
  //.then(() => console.log('models', Object.entries(base.connection.models)))
  .then(() => {
    app.listen(3000, async () => {
      console.log('server is running on port 3000')
    })
  })
  .catch((error: any) => console.log('Error al sincronizar la base de datos:', error));

export default app;