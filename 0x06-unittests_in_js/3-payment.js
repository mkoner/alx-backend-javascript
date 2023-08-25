const { calculateNumber } = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
    const total = calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${total}`);
}

module.exports = sendPaymentRequestToApi;
