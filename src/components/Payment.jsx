import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { quizzesCollection } from './../store';
import 'firebase/firestore';
// import './Payment.css'; does this need CSS?
import * as emailjs from 'emailjs-com';
import {StripeProvider} from 'react-stripe-elements';
import donation from '../assets/img/donation.jpg';

// <StripeProvider apiKey="pk_test_sUVTn8x78A4039NAKm9Zojnm">
//   <MyStoreCheckout />
// </StripeProvider>

const Payment = observer(class Payment extends Component {

// will need to put uid, etc into quiz on submit
  handleQuizFormSubmit = async (e) => {
    e.preventDefault();
      // document.getElementById("Quiz-submit").disabled = true;
      const quizSubmitId = await quizzesCollection.add(this.state.quiz); // can return doc.id
      if (quizSubmitId.id) {
        emailjs.init(process.env.REACT_APP_EMAILJS);
        const templateParams = {
          name: this.state.quiz.name,
          email: this.state.quiz.email
        };
        emailjs.send('gmail', 'template_vk6ykRLd', templateParams)
          .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
          }, function(err) {
            console.log('FAILED...', err);
          });
        this.handleDialogOpen();
      } else {
        alert('Something broke on the submission! We havent any idea why. Please try again later or contact Mike and tell him to yell at his web developer, Jack.');
      }
    // } else {
    //   alert('Payment failed!');
    // }
  };

  render(){
    // const submitButton = <button id="Quiz-submit" onClick={this.handleQuizFormSubmit}>Immortalize!</button>;

    // {submitButton}

    return (
      <div className="Payment">
        <h1>Payment</h1>
      </div>
    );
  }
});

export default Payment;
