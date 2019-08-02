/*

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
  
    
    
    }); */
    ;(async () => {
        const response = await axios({
          url: 'https://xenodochial-mirzakhani-152330.netlify.com/.netlify/functions/test',
          method: 'get'
        })
        document.getElementById('add-cart').innerHTML = response.body;

      })()
      
    
    
   