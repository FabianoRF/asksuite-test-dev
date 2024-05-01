import dotenv from 'dotenv'
import express from 'express'
import router from './routes/router';

dotenv.config()
const app = express();
app.use(express.json());

const port = process.env.PORT;

app.use('/', router);
app.listen(port ?? 8080, () => {
    console.log(`Listening on port ${port}`);
});
