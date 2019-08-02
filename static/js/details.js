

let prStck =  new Vue({
    el: '#dynamic', 
    delimiters: ["{-","-}"],
    
    data: {
        price : null,
        stock : null
    
    },
    mounted: function(){
        axios
        .post('https://xenodochial-mirzakhani-152330.netlify.com/.netlify/functions/price-read',JSON.stringify({'sku':'A12'}))
        .then(function(response)  {this.price = 10;})
         .catch(error => console.log(error));
      },
    computed: {
        getPrice() {
           
           return  this.$data.price;
         },
         getStock(){
             return this.$data.stock;
         }

   },
  
    
    
    }); 

    function createTodo() {
        return fetch('https://xenodochial-mirzakhani-152330.netlify.com/.netlify/functions/price-read', {
          body: {
            "sku" : "A13"
        },
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
        }
        }).then(response => {
          return response.json()
        })
      }

      const mySKU = {
        "sku" : "A13"
      }
      
      createTodo().then((response) => {
        console.log('API response', response);
        prStck.$data.price = 20;
        // set app state
      }).catch((error) => {
        console.log('API error', error)
        prStck.$data.price = "error";

      })

    