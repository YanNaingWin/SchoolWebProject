const API_ENDPOINT = 'http://localhost/';

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
module.exports.addCategory = function (businessId, categoryName, variants, callback) {
    let url = API_ENDPOINT + "item/addCategory";
    axios({
        method: 'post',
        url: url,
        data: {
            'businessId': businessId,
            'categoryName': categoryName,
            'variants': variants
        },
        timeout: 5000,
    }).then((response) => {
        callback(null, response.data)
    }
    ).catch(function (error) {
        callback(error, null);
    });
}
