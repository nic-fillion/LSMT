import express, {Application, Request, Response} from 'express';
import * as http from 'http';
import cors from 'cors';

const app: Application = express();

const port: number = process.env.PORT ? Number(process.env.PORT) : 80;
// const dbAddress: string = process.env.DB_CONNECTION_STRING;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req: Request, res: Response) => {
    res.send('Server is functioning normally');
});

const server: http.Server = http.createServer(app);

server.listen(port, () => {
    // routes.forEach((routes: CommonRoutesConfig) => {
    //   console.log(`${routes.getName()} configured!`);
    // });
    console.log(`server is listening on port ${port}`);
});