import React, { Component } from 'react';
import 'firebase/firestore';
import './Payment.css';
import { observer } from 'mobx-react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import { quizzesCollection, settingsDoc } from './../store';
import * as emailjs from 'emailjs-com';
import { withRouter } from 'react-router-dom';
import poweredByStripe from './../assets/img/powered_by_stripe.png';
import paymentTime from './../assets/img/payment-time.gif';
import ProgressVommy from './common/ProgressVommy';
import donation from '../assets/img/donation.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const Payment = observer(class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payerAmount: 0,
      processing: false
    }
  }

  handleAmount = () => (e) => {
    let amt = e.target.value || 0;
    amt = parseInt(amt, 10) * 100;
    this.setState({payerAmount: amt})
  }

  parseQuiz = quizData => quizData.questions.map((question, i) => `<h3>${question}</h3><p>${quizData.answers[i]}</p>`).join("");

  submit = async () => {
    this.setState({processing: true});
    let tokenObj = {token: null};
    if (this.state.payerAmount > 0) {
      tokenObj = await this.props.stripe.createToken({name: this.props.appState.name});
    }
    if (tokenObj.token || this.state.payerAmount === -100) {
      const quizUpload = {...this.props.appState, pending: true};
      const quizSubmitId = await quizzesCollection.add(quizUpload); // can return doc.id
      if (quizSubmitId.id) {
        emailjs.init(process.env.REACT_APP_EMAILJS);
        const params = {
          name: this.props.appState.name,
          email: this.props.appState.email,
          docId: quizSubmitId.id,
          payment: this.state.payerAmount > 0 ? (this.state.payerAmount / 100) : "Income-Based Request",
          quizData: this.parseQuiz(this.props.appState.quizData)
        };
        emailjs.send('gmail', 'tiny_anthems', params).then(response => {
          if (this.state.payerAmount > 0) {
            this.goStripe(tokenObj);
          } else {
            this.props.onClearQuiz();
            this.props.history.push('/user/quiz/complete');
          }
        }, err => {
          alert('Error! Your quiz was probably submitted but your payment was not processed, and Tiny Anthems was not notified. Please email us to arrange payment: TinyAnthems@gmail.com')
        });
      } else {
        alert('Database failed! So sorry! Please email us your quiz instead: TinyAnthems@gmail.com');
      }
    } else {
      this.setState({processing: false});
    }
  };

  goStripe = async (tokenObj) => {
    if (tokenObj.token) {
      const firebaseFunc = 'https://us-central1-tiny-anthems-2043a.cloudfunctions.net/charge/';
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
        alert('Stripe payment failed! Please email us your quiz instead: TinyAnthems@gmail.com');
        this.setState({processing: false});
      } else {
        this.props.onClearQuiz();
        this.props.history.push('/user/quiz/complete');
      }
    }
  }

  render(){
    const amount = this.state.payerAmount;
    const prices = settingsDoc.data.prices;

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
          <p>
            if this spins for a minute or more please copy and paste your quiz answers into an email instead: TinyAnthems@gmail.com
          </p>
        </div>
        :
        <button className="center" onClick={this.submit}><FontAwesomeIcon icon={faLock} /> Submit Payment</button>
      }
    </div>;

    const submitRequest = this.state.processing
    ? <div>
        <ProgressVommy />
        <p>finalizing immortalization...</p>
        <p>
          if this spins for a minute or more please copy and paste your quiz answers into an email instead: TinyAnthems@gmail.com
        </p>
      </div>
    : <button className="center" onClick={this.submit}>Submit Request</button>;

    return (
      <div className="Payment">
        <img src={donation} alt="a donation jar to give mike your money" className="donationjar"/>
          {amount === 0 && <div>
            <p>
              Thank you for your submission for immortalization through song!
            </p>
            <p>
              Tiny Anthems functions on a “pay what you can” model. I have included some suggested amounts that make it possible for me to undertake these and other, community-oriented works. Additionally, 20% of your donation goes directly to <a href="http://www.friendsofnoise.org/" target="_blank" rel="noopener noreferrer">Friends of Noise</a>, an amazing non-profit. No one will be turned away for lack of funds, and I encourage you to use the “other” option if you would like to pay a smaller (or larger) amount.
            </p>
          </div>}
          <div className="stripe">
          {amount > 0 && <img src={paymentTime} alt="payment time!" className="paymenttime"/>}
            <p>Please choose a payment tier you’re comfortable with:</p>
            {prices && prices.map(price =>
              <div>
                <input type="radio" name="donate" value={price} id={"pay-" + price} onChange={this.handleAmount()} />
                <label for={"pay-" + price}>${price}</label>
              </div>
            )}
          <div>
            <input type="radio" name="donate" value="-1" id="pay-custom" onChange={this.handleAmount()} />
            <label for="pay-custom">Income-Based Request</label>
            {amount === -100 &&
            <div>
              <p>My goal is to be able to provide unique and meaningful art to any who would seek it. For practical reasons, I cannot accept all submissions. Please submit your Tiny Anthem request to the Ministry of Altruism, and I will do my absolute best to comply. No payment is required up front with this tier, but the immortalization process is NOT guaranteed.</p>
            </div>
            }
          </div>
          {amount > 0 && cardElement}
          {amount === -100 && submitRequest}
        </div>
      </div>
    );
  }
})

export default withRouter(injectStripe(Payment));
