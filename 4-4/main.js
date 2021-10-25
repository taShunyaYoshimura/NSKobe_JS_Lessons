let number = [0,1,2,3,4,5,6,7,8,9]
for(let i=0; i<10; i++){
    let x = Math.floor(Math.random()*10);
    let y = Math.floor(Math.random()*10);
    let z = number[x];
    number[x] = number[y];
    number[y] = z;
}
number = number.join(',');
number = number.replace(/,/g, ' ')
console.log(number); 