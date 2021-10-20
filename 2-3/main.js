if(isNaN(process.argv[2]) || process.argv[2]<0){
    console.log('Ellor:Arguments');
}else{
    console.log(process.argv[2]%24);
}