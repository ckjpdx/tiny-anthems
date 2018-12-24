const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const express = require('express');
const cors = require('cors')({origin: true});
const app = express();

// TODO: Remember to set token using >> firebase functions:config:set stripe.token="SECRET_STRIPE_TOKEN_HERE"
const stripe = require('stripe')(functions.config().stripe.token);

function charge(req, res) {
    console.log('req', req);
    const body = JSON.parse(req.body);
    console.log('body', body);
    const token = body.token;
    console.log('token', token);
    const tokenId = token.id;
    console.log('amount in body:', body.charge.amount);
    const amount = body.charge.amount;
    console.log('amount:', amount);
    const currency = body.charge.currency;

    // Charge card
    stripe.charges.create({
        amount,
        currency,
        description: 'Firebase Example',
        source: tokenId,
    }).then(charge => {
        send(res, 200, {
            message: 'Success',
            charge,
        });
        return null;
    }).catch(err => {
        console.log(err);
        send(res, 500, {
            error: err.message,
        });
    });
}

function send(res, code, body) {
    res.send({
        statusCode: code,
        headers: {'Access-Control-Allow-Origin': '*'},
        body: JSON.stringify(body),
    });
}

app.use(cors);
app.post('/', (req, res) => {

    // Catch any unexpected errors to prevent crashing
    try {
        charge(req, res);
    } catch(e) {
        console.log(e);
        send(res, 500, {
            error: `The server received an unexpected error. Please try again and contact the site admin if the error persists.`,
        });
    }
});

exports.charge = functions.https.onRequest(app);
