const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  debugger;
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  axios.get(options.url, options.headers)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    })

  // let instance = axios.create(options);
  // instance.get(`${username}/repos`)
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })

}

getReposByUsername('octocat');

module.exports.getReposByUsername = getReposByUsername;