

let prStck =  new Vue({
    el: '#dynamic', 
    delimiters: ["{-","-}"],
    
    data: {
        price : "abc",
        stock : 0
    
    },
    computed: {
        getPrice() {
           
           return  this.$data.price;
         },
         getStock(){
             return this.$data.stock;
         }

   },
   mounted: () =>{
    axios
    .post('https://xenodochial-mirzakhani-152330.netlify.com/.netlify/functions/price-read',JSON.stringify({'sku':'A12'}))
    .then(response => this.$data.price = JSON.parse(response.body).price)
     .catch(error => console.log(error))
  }
    
    
    })
