const names =['babul', 'abul', 'kabul', 'sabul', 'bulbul', 'chulbul', 'duldul', 'mabul', 'rabiul', 'mabul', 'bulbul', 'abul' ,'kabul'];


function removeName(names){
    const unique = [];
    for(let i = 0; i < names.length; i++){
        const name = names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}
const uniqueName = removeName(names);
console.log(uniqueName);