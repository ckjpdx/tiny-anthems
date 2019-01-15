import React, { Component } from 'react';
import 'firebase/firestore';
import './Payment.css';
import { observer } from 'mobx-react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import { quizzesCollection } from './../store';
import * as emailjs from 'emailjs-com';
import { withRouter } from 'react-router-dom';
import poweredByStripe from './../assets/img/powered_by_stripe.png';
import paymentTime from './../assets/img/payment-time.gif';
import ProgressVommy from './common/ProgressVommy';

// import donation from '../assets/img/donation.jpg';

const Payment = observer(class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payerAmount: 0,
      showCustom: false,
      processing: false,
      message: 'Please enter an amount of at least five dollars',
      text: 'showMe'
    }
  }

  handleAmount = (custom) => (e) => {
    this.state.text === 'showMe' && this.setState({text: 'hideMe'});
    let amt = e.target.value || 0;
    amt = parseInt(amt, 10) * 100;
    this.setState({payerAmount: amt, showCustom: custom})
  }

  submit = async (e) => {
    this.setState({processing: true});
    const firebaseFunc = 'https://us-central1-tiny-anthems-2043a.cloudfunctions.net/charge/';
    let tokenObj = await this.props.stripe.createToken({name: this.props.appState.name});
    if (tokenObj.token) {
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

      if (response.body.error) {
        this.setState({processing: false, message: 'There was an error on submission!'});
        return console.log(response.body.error);
      } else {
        const quizUpload = {...this.props.appState, pending: true};
        const quizSubmitId = await quizzesCollection.add(quizUpload); // can return doc.id
        if (quizSubmitId.id) {
          emailjs.init(process.env.REACT_APP_EMAILJS);
          const templateParams = {
            name: this.props.appState.name,
            email: this.props.appState.email
          };
          emailjs.send('gmail', 'template_vk6ykRLd', templateParams)
            .then(function(response) {
              console.log('EMAIL SUCCESS!', response.status, response.text);
            }, function(err) {
              console.log('EMAIL FAILED...', err);
            });
        } else {
          alert('Something broke on the submission! We havent any idea why. Please try again later or contact Mike and tell him to yell at his web developer, Jack.');
        }
        this.props.onClearQuiz();
        this.props.history.push('/user/quiz/complete');
      }
    } else {
      this.setState({processing: false});
    }
  };

  render(){
    const amount = this.state.payerAmount;
      const cardElement =
      <div>
        <section>
          <img src={poweredByStripe} alt="powered by stripe" style={{width: 'unset'}} />
          <CardElement />
        </section>
        {this.state.processing ?
          <div>
            <ProgressVommy />
            <p>finalizing immortalization...</p>
          </div>
          :
          <button className="center" onClick={this.submit}>Submit Payment</button>
        }
      </div>

    return (
      <div className="Payment">
        <h1>Payment</h1>
        {<div className={this.state.text}>
          <p>
            Thank you for your submission for immortalization through song!
          </p>
          <p>
            Tiny Anthems functions on a “pay what you can” model. I have included some suggested amounts that make it possible for me to undertake these and other, community-oriented works. Additionally, 20% of your donation goes directly to <a href="http://www.friendsofnoise.org/" target="_blank" rel="noopener noreferrer">Friends of Noise</a>, an amazing non-profit. No one will be turned away for lack of funds, and I encourage you to use the “other” option if you would like to pay a smaller (or larger) amount.
          </p>
        </div>}
        <div className="stripe">
          <img src={paymentTime} alt="payment time!" />
          <p>{this.state.message}</p>
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
            <label for="pay-custom">Other</label>
            {this.state.showCustom &&
              <div>
                <label>$</label>
                <input type="number" name="donate" style={{width: 75, backgroundColor: 'lightgreen'}} onChange={this.handleAmount(true)} />
              </div>
            }
          </div>
          {amount >= 500 && cardElement}
        </div>
      </div>
    );
  }
})

export default withRouter(injectStripe(Payment));
