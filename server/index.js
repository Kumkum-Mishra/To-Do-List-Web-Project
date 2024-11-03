import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


import Connection from './database/db.js';
import Routes from './routes/route.js';

const app= express();
const port = process.env.PORT || 3001;  // added recently

//app.use(express());
app.use(cors());

app.use(bodyParser.json( {extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/',Routes);
const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));