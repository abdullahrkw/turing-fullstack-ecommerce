

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
    .get('/.netlify/functions/test')
    .then(response => (this.$data.price = JSON.parse(response)))
     .catch(error => console.log(error))
  }
    
    
    })
