import get from './inshorts.js';

var options = {
    lang: 'en',
    category: 'national',
    numOfResults: 6
  }
  
  get(options ,function(result){
    console.log(result);
  });