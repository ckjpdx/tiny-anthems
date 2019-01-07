import React, { Component } from 'react';
import 'firebase/firestore';
import './Payment.css';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

import donation from '../assets/img/donation.jpg';

class Payment extends Component {

  render(){
    return (
      <StripeProvider apiKey="pk_live_DXZHnIPbi73ySKKiyDkLD1NO">
        <Elements>
        <div className="Payment">
          <h1>Payment</h1>
          <p>
            Thank you for your submission for immortalization through song!
          </p>
          <p>
            Tiny Anthems functions on a “pay what you can” model. I have included some suggested amounts that make it possible for me to undertake these and other, community-oriented works. Additionally, 20% of your donation goes directly to <a href="http://www.friendsofnoise.org/" target="_blank">Friends of Noise</a>, an amazing non-profit. No one will be turned away for lack of funds, and I encourage you to use the “other” option if you would like to pay a smaller (or larger) amount.
          </p>
          <CheckoutForm
          appState={this.props.appState}
          onClearQuiz={this.props.onClearQuiz}
          />
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
