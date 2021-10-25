let number = process.argv;
number = number.slice(2);
number = number.map(Number);
for(let i=0; i<number.length-1; i++){
    for(let x=0; x<number.length-i-1; x++){
        if(number[x]>number[x+1]){
            let y = number[x];
            number[x] = number[x+1];
            number[x+1] = y;
        }
        
    }
}