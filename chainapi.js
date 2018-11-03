const fetch = require('node-fetch');
const crypto = require('crypto-js');
function chainapi(){
	this.getData = function(referenceToken)
	{

		var date = new Date();
		var payload = 'GET\n' + referenceToken + '\n' + date + '\n';
		var API_KEY = 'ALTR-92281AF07A205A85B7DB962B62CFA6AC';
		var SECRET = '99766ae9e30c45aaa4be6173adad88fc5eeba970779e89667eb6f9602bde8e97';
		var url = 'https://dgl-hackathon.dev.altr.com/api/v1/chain/' + referenceToken + "/";
		return fetch(url, 
		{
			method:"GET",
			headers: {
 				"X-ALTR-DATE": date,
    			"Authorization": "ALTR " + API_KEY + ":" + crypto.enc.Base64.stringify(crypto.HmacSHA256(payload, SECRET))
 	 		}
 	 	})
		.then(results => {
            return results.json();
        })

		/*.then(responseData => {
			console.log(responseData);

			this.setState({
			firstName: responseData.data.firstName,
			role: responseData.data.role,
			lastName: responseData.data.lastName,
		});

    	})*/
	}

	this.postData = function(inBody)
	{
		var date = new Date();
		var payload = 'POST\n\n' + date + '\n';
		var API_KEY = 'ALTR-92281AF07A205A85B7DB962B62CFA6AC';
		var SECRET = '99766ae9e30c45aaa4be6173adad88fc5eeba970779e89667eb6f9602bde8e97';
		var url = 'https://dgl-hackathon.dev.altr.com/api/v1/chain/';
		return fetch(url, 
		{
			method:"POST",
			headers: {
				"Content-Type": 'application/octet-stream',
    			"X-ALTR-DATE": date,
    			"Authorization": "ALTR " + API_KEY + ":" + crypto.enc.Base64.stringify(crypto.HmacSHA256(payload, SECRET))
    		},
    		body: inBody
    	})
		.then(results => {
            return results.json();
        })

		/*.then(responseData => {
			console.log(responseData);

			this.setState({
			firstName: responseData.data.firstName,
			role: responseData.data.role,
			lastName: responseData.data.lastName,
		});

    	}) */
	}
}
module.exports = chainapi;