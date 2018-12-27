import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { quizzesCollection } from './../store';
import 'firebase/firestore';
import './Payment.css';
import * as emailjs from 'emailjs-com';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import donation from '../assets/img/donation.jpg';

// import 'firebase/functions'; maybe need this?

const Payment = observer(class Payment extends Component {

// // will need to put uid, etc into quiz on submit
//   handleQuizFormSubmit = async (e) => {
//     e.preventDefault();
//       // document.getElementById("Quiz-submit").disabled = true;
//       const quizSubmitId = await quizzesCollection.add(this.state.quiz); // can return doc.id
//       if (quizSubmitId.id) {
//         emailjs.init(process.env.REACT_APP_EMAILJS);
//         const templateParams = {
//           name: this.state.quiz.name,
//           email: this.state.quiz.email
//         };
//         emailjs.send('gmail', 'template_vk6ykRLd', templateParams)
//           .then(function(response) {
//             console.log('SUCCESS!', response.status, response.text);
//           }, function(err) {
//             console.log('FAILED...', err);
//           });
//         this.handleDialogOpen();
//       } else {
//         alert('Something broke on the submission! We havent any idea why. Please try again later or contact Mike and tell him to yell at his web developer, Jack.');
//       }
//     // } else {
//     //   alert('Payment failed!');
//     // }
//   };

  render(){
    // const submitButton = <button id="Quiz-submit" onClick={this.handleQuizFormSubmit}>Immortalize!</button>;

    // {submitButton}
    // <img src={donation} alt="donation jar" />

    return (
      <StripeProvider apiKey="pk_test_sUVTn8x78A4039NAKm9Zojnm">
        <Elements>
        <div className="Payment">
          <h1>Payment</h1>

          <CheckoutForm payerName={this.props.appState.name}/>
          <p>
            Thank you for your submission for immortalization through song! To finalize your transaction, please consider the payment options below.
          </p>
          <p>
            As per my socialist leanings, I endorse a “pay what you can” model. I ask that you select a level of payment that is appropriate and comfortable for you, given your financial standing. Note that your support allows me to continue to undertake these and other, community-oriented works, and that a portion of your donation goes directly to Friends of Noise.
          </p>
          <p>
            (If you feel inclined to pay above or below my suggested amounts, please feel free to enter an amount below.)
          </p>
          <div style={{clear: "both"}} />
        </div>
        </Elements>
      </StripeProvider>
    );
  }
});

export default Payment;
