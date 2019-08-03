

let prStck =  new Vue({
    el: '#dynamic', 
    delimiters: ["{-","-}"],
    
    data: {
        price : null,
        stock : null
    
    },
    mounted: async function(){
        axios
        .post('/.netlify/functions/price-read',JSON.stringify({'sku':'A13'}))
        .then(response => {console.log('success', response);
                          
                            console.log(response.data);
                            console.log(response.data.data[0][1]);
                        })
        .catch(error => console.log('this is error',error));
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

    