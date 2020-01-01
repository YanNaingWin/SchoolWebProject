const API_ENDPOINT = 'http://localhost:8000/';

const axios = require('axios');
module.exports.getProducts = function (callback) {
    let url = API_ENDPOINT + "products";
    console.log(url)
    axios({
        method: 'get',
        url: url,
        timeout: 5000,
    }).then((response) => {
        callback(null, response.data)
    }
    ).catch(function (error) {
        callback(error, null);
    });
}
module.exports.addProducts = function (title, description, price, availability, callback) {
    let url = API_ENDPOINT + "products";
    axios({
        method: 'post',
        url: url,
        data: {
            'title': title,
            'description': description,
            'price': price,
            'availability' : availability,
        },
        timeout: 5000,
    }).then((response) => {
        callback(null, response.data)
    }
    ).catch(function (error) {
        callback(error, null);
    });
}
