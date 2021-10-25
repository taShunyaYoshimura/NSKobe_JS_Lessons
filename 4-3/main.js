const errorLogs = [
  "Error 101:Invalid Exception AAA - 2020/01/01/01:00",
  "Error 3:Invalid Exception BBBB - 2020/01/01/02:00",
  "Error 22:Invalid Exception CCCCC - 2020/01/01/03:00"
]

let j=0;

for(let i=0; i<errorLogs.length; i++){
  let error = errorLogs[i].indexOf(':');
  let error2 = errorLogs[i].indexOf(' -');
  var result = errorLogs[i].substr(error+1,error2-1-error);
  console.log(result);
} 