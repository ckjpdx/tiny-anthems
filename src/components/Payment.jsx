import React, { Component } from 'react';
import 'firebase/firestore';
import './Payment.css';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

import donation from '../assets/img/donation.jpg';

class Payment extends Component {

  render(){
    return (
      <StripeProvider apiKey="pk_test_sUVTn8x78A4039NAKm9Zojnm">
        <Elements>
        <div className="Payment">
          <h1>Payment</h1>
          <p>
          Thank you for your submission for immortalization through song! To finalize your transaction, please consider the payment options below.
          </p>
          <CheckoutForm
          appState={this.props.appState}
          onClearQuiz={this.props.onClearQuiz}
          />
          <p>
            As per my socialist leanings, I endorse a “pay what you can” model. I ask that you select a level of payment that is appropriate and comfortable for you, given your financial standing. Note that your support allows me to continue to undertake these and other, community-oriented works, and that 20% of your donation goes directly to <a href="http://www.friendsofnoise.org/" target="_blank">Friends of Noise</a>.
          </p>
          <p>
            (If you feel inclined to pay above or below my suggested amounts, please feel free to enter a custom amount above.)
          </p>
          <div style={{clear: "both"}} />
        </div>
        </Elements>
      </StripeProvider>
    );
  }
}

export default Payment;
