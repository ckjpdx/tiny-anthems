import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit = (ev) => {
  ev.preventDefault();
  this.props.stripe.createToken({name: 'Test Person'}).then(({token}) => {
    console.log('Received Stripe token:', token);
  });
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
