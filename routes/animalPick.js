var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/', function(req, res, next) {
  let animals = getAnimals()
  callRandomPick(animals).then(function (response) {
    res.contentType('application/json');
	res.send({option: response.data.option});  	
  })
  .catch(function (error) {
  	res.status(400);
	res.send({error: 'something went wrong'});
  });
}); 

function getAnimals() {
  return ['elephant', 'giraffe', 'lion', 'cat', 'dog', 'worm']
}

function callRandomPick(options) {
  return axios.post('http://random-pick-service:3000/random-pick', options, {headers: {'Content-Type': 'application/json'}})
}

module.exports = router;
