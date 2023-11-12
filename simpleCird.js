const soppingCried = [
    {name:'shoe', price: 1200},
    {name:'shirt', price: 2200},
    {name:'pant', price: 3700},
    {name:'belt', price: 600},
]
function totalCost(soppingCried){
    let sum = 0;
    for (let i = 0; i < soppingCried.length; i++) {
        const produced = soppingCried[i];
        sum = sum+produced.price;
        // console.log(produced);
        
    }
    return sum;
}

const allCost = totalCost(soppingCried);
console.log(allCost);
