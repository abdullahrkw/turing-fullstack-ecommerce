

let prStck =  new Vue({
    el: '#dynamic', 
    delimiters: ["{-","-}"],
    
    data: {
        price : null,
        stock : null,
        sku : "",
        name : "",
        url : "",
    
        cart :  window.localStorage.getItem('cart')?JSON.parse(window.localStorage.getItem('cart')):[]
    
    },
    mounted: async function(){
        axios
        .post('https://47uqrxjowg.execute-api.us-east-2.amazonaws.com/default/faunaPriceRead',JSON.stringify({'sku': this.sku}))
        .then(response => {console.log('success', response);
                          
                            console.log(response.data);
                            console.log(response.data[0][1]);
                            this.price = response.data[0][1];
                            console.log(this.price);
                        })
        .catch(error => console.log('this is error1',error));
        axios
        .post('/.netlify/functions/stock-read',JSON.stringify({'sku': this.sku}))
        .then(response => {console.log('success', response);
                          
                            console.log(response.data);
                            console.log(response.data.data[0][1]);
                            this.stock = response.data.data[0][1];
                            console.log(this.stock);
                        })
        .catch(error => console.log('this is error2',error));

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
        getName(name){
            this.name = name;
            console.log('this is sku', name);
            return name;

        },
        getUrl(url){
            this.url = url;
            return "";
        },
        addToCart(){
            
            this.cart.push(({"sku": this.sku, "name": this.name, "price": this.price, "url": this.url })); 
            document.getElementById('order-q').innerHTML = "(" + this.cart.length + ")";
             window.localStorage.setItem("cart", JSON.stringify(this.cart)); 
          

        },
        shoppingCart(){

        },
        removeFromCart(){
            
        }


    }
  
    
    
    }); 

    
  


        
  

    