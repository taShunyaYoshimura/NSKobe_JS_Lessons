let r = process.argv[2];
if(isNaN(r) || r == Infinity){
    console.log('Eloor:Arguments');
}else{
    console.log(r*r*3.14);
}