let one = process.argv[2];
let two = process.argv[3];
let onetwo = one/two*100;
if(isNaN(onetwo) || onetwo == 'Infinity'){
    console.log('Error: Arguments');
}else{
    console.log(onetwo + "%");
}