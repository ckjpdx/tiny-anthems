import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import './CheckoutForm.css';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payerAmount: null
    }
    // this.submit = this.submit.bind(this);
  }

  handleAmount = (e) => {
    this.setState({payerAmount: parseInt(e.target.value)})
  }

  submit = async (e) => {
    const firebaseFunc = 'https://us-central1-tiny-anthems-2043a.cloudfunctions.net/charge/';
    // e.preventDefault();

    // let result = await stripe.createToken(card);
    let tokenObj = await this.props.stripe.createToken({name: this.props.payerName});
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
          amount: this.state.payerAmount,
          currency: "usd"
        }
      })
    });
    console.log('response:', response);


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
      <div className="CheckoutForm">
        <span className="text-spacer">
          <input type="radio" name="donate" value="5000" onChange={this.handleAmount} />
          <label>$50</label>
        </span>
        <span className="text-spacer">
          <input type="radio" name="donate" value="10000" onChange={this.handleAmount} />
          <label>$100</label>
        </span>
        <span className="text-spacer">
          <input type="radio" name="donate" value="20000" onChange={this.handleAmount} />
          <label>$200</label>
        </span>
        {this.state.payerAmount &&
          <div>
            <CardElement />
            <button className="center" onClick={this.submit}>$$$ PAY $$$</button>
          </div>
        }
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
