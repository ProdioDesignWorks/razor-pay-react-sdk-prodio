import React, { Component } from "react";
class RazorPay extends Component {

    constructor(props) {
        super(props);
        this.checkOutRazorPay = this.checkOutRazorPay.bind(this);
        this.embedScript = this.embedScript.bind(this);
    }

    checkOutRazorPay(payload){
        const {
            payment_amount,
            orderId,
            description,
            keyId,
            name

        } = payload;

        const options = {
            key: keyId,
            amount: payment_amount,
            name: name,
            description: description,
            subscription_id: orderId,
            prefill: {
                name: 'Shashank Shekhar',
                email: 'ss@localtrip.in',
            },
            notes: {
                address: 'Goa,India',
            },
            theme: {
                color: '#9D50BB',
            },
        };
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
