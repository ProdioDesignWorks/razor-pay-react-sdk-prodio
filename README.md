# razor-pay-react-sdk-prodio

razor-pay-react-sdk-prodio provides a quick and secure way of accepting payments using razor pay Checkout library.


## Installation

`npm install razor-pay-react-sdk-prodio --save`

### Example
```
import RazorPay from  'razor-pay-react-sdk-prodio';
  const payload = {
                payment_amount:"",
                order_id:"",
                description:"",
                keyId:"",
                name:""
              };
	<RazorPay 
		 openCheckoutForm={true}
		 payload={payload}
		 onClose={()=>this.onClose()} 
		 onPaymentResponse={(response)=>this.onPaymentResponse(response)} 
	/>
```

### Payload

| Key | Type | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `order_id` | string  | order created on your server | YES |
| `keyId` | string | key id of razor pay account | YES |
| `name` | string | name will be shown on checkout form. | YES |
| `payment_amount` | integer | The transaction amount to be paid. | YES |
| `payment_capture` | boolean | Payment capture flag to automatically capture the payment. | YES |

### Methods
| event |  | | || | Description |
| --- | ---- |
| `onClose` || | || | event called  on click of close icon in checkout modal  |
| `onPaymentResponse` || | || | event called on payment captured from razor pay |


