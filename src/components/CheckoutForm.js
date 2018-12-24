import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit = async (e) => {
    const firebaseFunc = 'https://us-central1-tiny-anthems-2043a.cloudfunctions.net/charge/';
    // e.preventDefault();

    // let result = await stripe.createToken(card);
    let tokenObj = await this.props.stripe.createToken({name: 'Test Person'});
    console.log('inside the createToken return:', tokenObj.token);
    // let isSubmitting, isSuccess;
    // if (isSubmitting) return;
    // isSubmitting = true;
    // let res = await charge(token.id, 123, 'usd');
    let response = await fetch(firebaseFunc, {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: JSON.stringify({
        token: tokenObj.token,
        charge: {
          amount: 333,
          currency: "usd"
        }
      })
    });


    // if (res.body.error) return console.log(res.body.error);
    // // Card successfully charged
    // isSuccess = true;
    // isSubmitting = false;

  //   async function charge(token, amount, currency) {
  //     const res = await fetch(firebaseFunc, {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         token,
  //         charge: {
  //           amount,
  //           currency,
  //         },
  //       }),
  //   });
  //   const data = await res.json();
  //   data.body = JSON.parse(data.body);
  //   return data;
  // }
};

  // async submit(ev) {
  //   // User clicked submit
  // }

  render() {
    return (
      <div className="checkout">
        <CardElement />
        <button onClick={this.submit}>$$$ PAY $$$</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
