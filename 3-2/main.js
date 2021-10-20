let vertical = Number(process.argv[2]);
let side = Number(process.argv[3]);
let odd = true;
let letter = '';
for(x=0; x<vertical; x++){
    if(odd){
        for(let i=0; i<Math.floor(side/2); i++){
            letter += '*-';
        }
        if(side%2 == 1){
            letter += '*';
        }
        console.log(letter);
        odd = false;
        letter = ''
    }else{
        for(let y=0; y<Math.floor(side/2); y++){
            letter += '-*';
        }
        if(side%2 == 1){
            letter += '-';
        }
        console.log(letter);
        odd = true;
        letter = ''
    }
}