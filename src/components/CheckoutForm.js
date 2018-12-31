import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import { observer } from 'mobx-react';
import { quizzesCollection } from './../store';
import * as emailjs from 'emailjs-com';
import { withRouter } from 'react-router-dom';
import ProgressVommy from './common/ProgressVommy';

import './CheckoutForm.css';

const CheckoutForm = observer(class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payerAmount: 0,
      showCustom: false,
      processing: false,
      message: 'Please enter an amount of at least $5'
    }
  }

  handleAmount = (custom) => (e) => {
    let amt = e.target.value || 0;
    amt = parseInt(amt) * 100;
    this.setState({payerAmount: amt, showCustom: custom})
  }

  submit = async (e) => {
    this.setState({processing: true});
    const firebaseFunc = 'https://us-central1-tiny-anthems-2043a.cloudfunctions.net/charge/';
    // e.preventDefault();

    // let result = await stripe.createToken(card);
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
        // will need to put uid, etc into quiz on submit
          // handleQuizFormSubmit = async (e) => {
        // e.preventDefault();
          // document.getElementById("Quiz-submit").disabled = true;
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
        // };
        this.props.onClearQuiz();
        this.props.history.push('/user/quiz/complete');
      }
    } else {
      this.setState({processing: false});
    }

};

  render() {
    const amount = this.state.payerAmount;
      const cardElement =
      <div>
        <CardElement />
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
      <div className="CheckoutForm">
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
          <label for="pay-custom">Custom</label>
          {this.state.showCustom &&
            <div>
              <label>$</label>
              <input type="number" name="donate" style={{width: 75, backgroundColor: 'lightgreen'}} onChange={this.handleAmount(true)} />
            </div>
          }
        </div>
        {amount >= 500 && cardElement}
      </div>
    );
  }
});

export default withRouter(injectStripe(CheckoutForm));
