let time = process.argv[2];
time = time.split(':');
time = time.map(Number);
if(time[1]+45>=60){
    if(time[0]+1>=24){
        console.log(0);
        console.log(time[1]-15);
    }else{
        console.log(time[0]+1);
        console.log(time[1]-15);
    }
}else{
    console.log(time[0]);
    console.log(time[1]+45);
}