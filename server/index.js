import express from express;
import bodyParser from body-parser;
import cors from cors;
import mongoose from mongoose;
import dotenv from dotenv;



const app = express();
dotenv.config();
app.use(bodyParser.json());


app.listen(3000, () => {
    console.log('Server is running on port 3000');
    }
);