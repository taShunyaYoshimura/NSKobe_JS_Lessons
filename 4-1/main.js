for(let i=2; i<7; i++){
    process.argv[i] = Number(process.argv[i])
}

for(let i=0; i<4; i++){
    for(let x=0; x<=4-i; x++){
        if(process.argv[x+2]<=process.argv[x+3]){
            let number = process.argv[x+2];
            process.argv[x+2] = process.argv[x+3];
            process.argv[x+3] = number;
        }
    }
}

console.log(process.argv[4]); 