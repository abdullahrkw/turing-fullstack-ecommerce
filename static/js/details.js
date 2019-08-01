const axios = require('axios');

let app2 =  new Vue({
    el: '#price-stock', 
    delimiters: ["{-","-}"],
    

    data: {
        price : 0,
        stock : 0
    
    },
    mounted () {
        axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.info = response.data.bpi))
         .catch(error => console.log(error))
    }
    

   
         
    // instance methods
        
    
    })
