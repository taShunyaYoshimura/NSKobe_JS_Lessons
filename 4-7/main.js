let named = process.argv;
named = named.slice(2);
named[0] = named[0].split(',');
let result = []
for(let i=0; i<named[0].length; i++){
    named[0][i] = named[0][i].toLowerCase();
    let named2 = named[0][i].indexOf('a');
    if(named2 != -1){
        result.unshift(named[0][i]);
    }
}
console.log(result.sort());