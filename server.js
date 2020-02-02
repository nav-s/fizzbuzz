import express from 'express';
import { urlencoded, json } from 'body-parser';
import fizzbuzzRouter from './app/routes/fizzbuzz.routes';

const router = express.Router()

// Attaching Promise Library to Mongoose Promise
Promise = global.Promise;


// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(json())

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Code Assignment for Fizz Bizz Algo"});
})

app.use('/fizzbuzz',fizzbuzzRouter)

// listen for requests
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening on port 3000");
});