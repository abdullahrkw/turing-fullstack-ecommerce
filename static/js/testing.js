
let abc  = [{"price": 50}, { price : 30} ,{price : 40}]
function totalPrice (data){
    let price = 0;
    //let row = table.insertRow();
    for (let element of data){
        for(key in element){
            if(key === "price"){
                price = price + element[key];

            }
        }
    }
    return price;
    
}

console.log(totalPrice(abc));