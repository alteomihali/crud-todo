import express, { Request, Response, NextFunction } from 'express';


import { json } from 'body-parser';
import todoRoutes from './routes/todos';


const app = express();

app.use(json());

app.use('/todos', todoRoutes);  // connect the two running express apps
                                // all requests that starts with / will forward to todoRoutes

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({message: err.message});
});


app.listen(3000);