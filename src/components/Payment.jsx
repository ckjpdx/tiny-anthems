import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { quizzesCollection } from './../store';
import 'firebase/firestore';
import './Payment.css';
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
      <img src={donation} alt="donation jar" />
        <p>
          The quiz you just filled out is on standby and ready to be launched into our space-machines where it will be transmuted into the everlasting format of recorded music. Before the process is complete, however, we need to take care of some… unfortunate business called “money”.
        </p>
        <p>
          Payment for Tiny Anthem’s services are on a discretionary tiered donation system in accordance to what you can spare as a participating member of our capitalistic society. Because cost shouldn’t be prohibitive you have several options. There is a “low tier” donation for people on or around the poverty line, a “mid tier” for people who can give a bit more, and a “high tier” for those who would consider themselves comfortable and beyond.
        </p>
        <p>
          Please note that 25% of your contribution goes toward “Friends of Noise”, a Portland-based non-profit that seeks to foster healing and growth for the creative youth in our community via the arts.
        </p>
        <div style={{clear: "both"}} />
        <button>MONEY PLEASE</button>
      </div>
    );
  }
});

export default Payment;
