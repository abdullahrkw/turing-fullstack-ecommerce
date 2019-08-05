

let prStck =  new Vue({
    el: '#dynamic', 
    delimiters: ["{-","-}"],
    
    data: {
        price : null,
        stock : null,
        sku : "",
    
        cart :  window.localStorage.getItem('cart')?JSON.parse(window.localStorage.getItem('cart')):[]
    
    },
    mounted: async function(){
        axios
        .post('/.netlify/functions/price-read',JSON.stringify({'sku': this.sku}))
        .then(response => {console.log('success', response);
                          
                            console.log(response.data);
                            console.log(response.data.data[0][1]);
                            this.price = response.data.data[0][1];
                            console.log(this.price);
                        })
        .catch(error => console.log('this is error',error));
        axios
        .post('/.netlify/functions/stock-read',JSON.stringify({'sku': this.sku}))
        .then(response => {console.log('success', response);
                          
                            console.log(response.data);
                            console.log(response.data.data[0][1]);
                            this.stock = response.data.data[0][1];
                            console.log(this.stock);
                        })
        .catch(error => console.log('this is error',error));

      },
    computed: {
        getPrice() {
           
           return  this.$data.price;
         },
         getStock(){
             return this.$data.stock;
         }, 
         getSKU(){
             return this.$data.sku;
         }
    },
    methods: {
        getSKU(sku){
            this.sku = sku;
            console.log('this is sku', sku);
            return sku;

        },
        addToCart(){
            
            this.cart.push(({"sku": this.sku})); 
            document.getElementById('order-q').innerHTML = "(" + this.cart.length + ")";
             window.localStorage.setItem("cart", JSON.stringify(this.cart)); 
          

        },
        shoppingCart(){

        },
        removeFromCart(){
            
        }


    }
  
    
    
    }); 

    
  


        
  

    