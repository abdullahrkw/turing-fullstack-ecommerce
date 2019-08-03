

let prStck =  new Vue({
    el: '#dynamic', 
    delimiters: ["{-","-}"],
    
    data: {
        price : null,
        stock : null
    
    },
    mounted: async function(){
        axios
        .post('https://xenodochial-mirzakhani-152330.netlify.com/.netlify/functions/price-read',JSON.stringify({'sku':'A13'}))
        .then(response => {console.log('success', response);
                            let data = JSON.parse(response);
                            console.log(data);
                            console.log(date[0][1]);
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

    