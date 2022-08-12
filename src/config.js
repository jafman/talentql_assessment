import { json, urlencoded } from 'express';
import cors from 'cors';
import howoldRoute from "./routes/index.js";

const port = process.env.PORT || 3000;

const config = (app) => {
    // adds middleware for cross-origin resource sharing configuration
    app.use(cors());

    // adds middleware that parses requests with x-www-form-urlencoded data encoding
    app.use(urlencoded({ extended: true }));

    // adds middleware that parses requests with application/json data encoding
    app.use(json());

    app.get('/', (req, res)=>res.send('Welcome.'));

    app.use('/howold', howoldRoute);

    app.use('*', (req, res)=>res.send('Non existent route!'));

    // listen
    app.listen(port, ()=>{
        console.log(`App is listening on port ${port}`);
    })
}

export default config;
