const phoneData = require('./mockPhoneData.json');

const getPhoneData = (req, res) => {
    // res.send('Hello World! using controller')
    res.send(phoneData);
}


module.exports = { getPhoneData };