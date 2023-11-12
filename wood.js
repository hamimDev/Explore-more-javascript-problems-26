function woodCalculator(chairQuantity , tableQuantity , bedQuantity){
    const perChairWood = 3;
    const parTableWood = 10;
    const parBedWood = 50;
    const chairWood = chairQuantity*perChairWood ;
    const tableWood = tableQuantity*parTableWood ;
    const bedWood = bedQuantity*parBedWood;

    const totalWood = chairWood +  tableWood + bedWood ;
    return totalWood ;
}

const allWood = woodCalculator(1 , 1, 1);
console.log('total wood:', allWood);

