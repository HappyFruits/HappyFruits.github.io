"use strict";
function pay() {
    if (window.PaymentRequest) {
        //if it is supported
        //payment request object
        const supportedPaymentMethods = [
            {
                supportedMethods: ['https://www.ideal.nl/pay']
            }
        ];
        //payment details
        const paymentDetails = {
            total: {
                label: 'Total Cost',
                amount: {
                    currency: 'EUR',
                    value: 1
                }
            }
        };
        //custom options
        const options = {};
        // Create request
        const paymentRequest = new PaymentRequest(supportedPaymentMethods, paymentDetails);
        paymentRequest.show();
    }
    else {
        //fallback
    }
}
//var payButton:any = document.getElementById("pay");
//payButton.addEventListener('click', pay)
