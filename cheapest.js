const phones = [
    {name: 'samsung', camera: 12, storage: '32gb', Price: 32000, colure: 'blue'},
    {name: 'sony', camera: 64, storage: '64gb', Price: 52000, colure: 'black'},
    {name: 'walton', camera: 20, storage: '32gb', Price: 20000, colure: 'yellow'},
    {name: 'google', camera: 8, storage: '128gb', Price: 39000, colure: 'black'},
    {name: 'htc', camera: 18, storage: '32gb', Price: 21000, colure: 'green'},
    {name: 'Poco', camera: 64, storage: '64gb', Price: 24000, colure: 'weight'},
    {name: 'onePules', camera: 68, storage: '128gb', Price: 36000, colure: 'yellow'},
    {name: 'IPhone', camera: 20, storage: '128gb', Price: 100000, colure: 'blue'}
]

// function cheapestPhone(phones){
//     let cheapest = phones[0];
//     for (let i = 0; i < phones.length; i++) {
//         const phone = phones[i];
//         if(phone.Price < cheapest.Price){
//             cheapest = phone;

//         }
       
//     }
//     return cheapest;
// }

function cheapestPhone(phones){
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if(phone.camera > cheapest.camera){
            cheapest = phone;

        }
       
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);