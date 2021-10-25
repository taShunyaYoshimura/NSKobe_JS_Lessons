let number = Number(process.argv[2]);
for(let i=0; i<number; i++){
    let answer = '';
    for(let x=i+1; x<number; x++){
        answer += ' '
    }
    for(let y=0; y<=i*2; y++){
        answer += '*'
    }
    console.log(answer);
} 