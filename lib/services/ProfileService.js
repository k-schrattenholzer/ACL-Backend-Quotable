const fetch = require('cross-fetch');
const Profile = require('../models/Profile');

module.exports = class ProfileService {
  static async create( name ) {
    const resp = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
    console.log(resp)
    const { quote, character } = await resp.json();
    console.log(quote)
    
    return Profile.insert({
      name, 
      quote: `${quote} + {' '} + ${character}`
    })
  }
};
