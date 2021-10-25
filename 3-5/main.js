const students = [17,38,100,95,23,62,77,45,69,81,83,51,42,36,60]
let point = [0,0,0,0,0,0,0,0,0,0,0]
students.forEach(function(Element){
    let people = Math.floor(Element/10);
    point[people] += 1;
})
let maxPoint = point.reduce(function(a,b){
    return(Math.max(a,b))
})

for(let i=maxPoint; i>0; i--){
    for(let x=0; x<11; x++){
        if(point[x] >= i){
            process.stdout.write('*');
        }else if(x == 0){
            process.stdout.write('');
        }else{
            process.stdout.write(' ');
        }
        process.stdout.write('  ');
    }
    process.stdout.write('\n');
}

console.log('----------------------------------');
console.log('0 10 20 30 40 50 60 70 80 90 100') 