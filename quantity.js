const soppingCard = [
    {name:'shoe', price: 1200, quantity: 2},
    {name:'shirt', price: 2200, quantity: 5},
    {name:'pant', price: 3700, quantity: 4},
    {name:'belt', price: 600, quantity: 3},
]
function totalCost(soppingCard){
    let sum = 0;
    for (let i = 0; i < soppingCard.length; i++) {
        const produced = soppingCard[i];
        const producedTotal = produced.price*produced.quantity;
        sum = sum+producedTotal;
        // console.log(produced);
        
    }
    return sum;
}

const allCost = totalCost(soppingCard);
console.log(allCost);