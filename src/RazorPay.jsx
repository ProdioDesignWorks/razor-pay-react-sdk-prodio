import React, { Component } from "react";
import PropTypes from 'prop-types';
class RazorPay extends Component {
    static propTypes = {
        onClose: PropTypes.func,
        onPaymentResponse: PropTypes.func
      };

    constructor(props) {
        super(props);
        this.embedScript = this.embedScript.bind(this);
        this.onClose = this.onClose.bind(this);
        this.onPaymentResponse = this.onPaymentResponse.bind(this);
    }

    onClose(){
        console.log('closed');
        this.props.onClose();
    }
    onPaymentResponse(response){
        this.props.onPaymentResponse(response);
    }

    checkOutRazorPay = (payload) => {
        const {
            payment_amount,
            order_id,
            subscription_id,
            description,
            keyId,
            name

        } = payload;

        const me = this;
        let options ={};
        if(order_id){
            options = {
                key: keyId,
                order_id,
                amount: payment_amount,
                name: name,
                description: description,
                prefill: {
                    name: payload.payerName ? payload.payerName : 'jonathan',
                    email:payload.email ? payload.email : 'johanathonDoe@gmail.com',
                },
                handler: function (response){
                    me.onPaymentResponse(response);
                  },
                modal: {
                    ondismiss: function(){
                        me.onClose();
                    }
                },
                notes: {
                    address: 'Goa,India',
                },
                theme: {
                    color: '#9D50BB',
                },
            };
        }
        else {
            options = {
                key: keyId,
                amount: payment_amount,
                subscription_id,
                name: name,
                description: description,
                prefill: {
                    name: payload.payerName ? payload.payerName : 'jonathan',
                    email:payload.email ? payload.email : 'johanathonDoe@gmail.com',
                },
                handler: function (response){
                    me.onPaymentResponse(response);
                  },
                modal: {
                    ondismiss: function(){
                        me.onClose();
                    }
                },
                notes: {
                    address: 'Goa,India',
                },
                theme: {
                    color: '#9D50BB',
                },
            };
        }

        const rzp1 = new window.Razorpay(options);

        rzp1.open();
    }   

    embedScript() {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
    }

    componentDidMount() {
        this.embedScript();
    }

    componentWillReceiveProps(newProps){
        if(newProps.openCheckoutForm){
            this.checkOutRazorPay(newProps.payload);
        }
    }
    render() {
        return (
            <div></div>
        );
    }
};

export default RazorPay;
