const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51KQGFgAqBpxcVG5VhlrqTiRbRgik8G2f8tioHrmSOf4xff8NAt8T5eU1U5J2wXkf8aGViTEbPlVhBi19eixNfd3S009p9zRmbj');

//-API

//-App config
const app = express();

//-Middlewares
app.use(cors({origin: true}));
app.use(express.json());
//-API routes
app.get('/', (request, response) => response.status(200).send('Hello World!'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment request recieved', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //sub units
        currency: "usd", //usd money
    });

    //ok - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})


//-Listen command

exports.api = functions.https.onRequest(app)

// http://localhost:5001/harmless-guns/us-central1/api  