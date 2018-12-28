import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import './CheckoutForm.css';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payerAmount: null,
      showCustom: false
    }
    // this.submit = this.submit.bind(this);
  }

  handleAmount = (custom) => (e) => {
    let amt = e.target.value || 0;
    amt = parseInt(amt) * 100;
    this.setState({payerAmount: amt, showCustom: custom})
    console.log(this.state);
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
    const amount = this.state.payerAmount;
      const cardElementOrErrorMessage =
      amount >= 500 ?
      <div>
        <CardElement />
        <button className="center" onClick={this.submit}>$$$ PAY $$$</button>
      </div>
      :
      <p>Please enter an amount of at least $5</p>;

    return (
      <div className="CheckoutForm">
        <div>
          <input type="radio" name="donate" value="50" id="pay-50" onChange={this.handleAmount(false)} />
          <label for="pay-50">$50</label>
        </div>
        <div>
          <input type="radio" name="donate" value="100" id="pay-100" onChange={this.handleAmount(false)} />
          <label for="pay-100">$100</label>
        </div>
        <div>
          <input type="radio" name="donate" value="200" id="pay-200" onChange={this.handleAmount(false)} />
          <label for="pay-200">$200</label>
        </div>
        <div>
          <input type="radio" name="donate" value="0" id="pay-custom" onChange={this.handleAmount(true)} />
          <label for="pay-custom">Custom</label>
          {this.state.showCustom &&
            <div>
              <label>$</label>
              <input type="number" name="donate" onChange={this.handleAmount(true)} />
            </div>
          }
        </div>
        {cardElementOrErrorMessage}
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
