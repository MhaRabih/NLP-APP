const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const app = express()
var bodyParser = require('body-parser')
var cors = require('cors')
const axios = require("axios");

/*const subButton = document.getElementById('sub');*/
const apiUrl ='https://api.meaningcloud.com/sentiment-2.1?key='+process.env.API_KEY+'&url=';
var json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}


app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

console.log(__dirname )

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
		

})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
app.get("/here/*", async (req, res) => {
  try {
    const url = req.params[0];
    const apiResponse = await axios.get(apiUrl + url+'&lang=en');
	
	/*console.log(apiResponse.data);*/ 
    res.send({
     agreement:apiResponse.data.agreement,
     subjectivity:apiResponse.data.subjectivity,
     confidence:apiResponse.data.confidence,
     irony:apiResponse.data.irony,
  });

  } catch (err) {
    console.log(err);
	res.send({msg:'NO internet connection'});
  }
});

 