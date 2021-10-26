const str = "こはるはるここはるここはるはるここはるこはるはるはる"
let newStr = str.split('');
let koharu = 0;
let haruko = 0;
for(let i=0; i<newStr.length-2; i++){
    if(newStr[i] == 'こ'){
        if(newStr[i+1] == 'は'){
            if(newStr[i+2] == 'る'){
                koharu += 1;
            }
        }
    }
    if(newStr[i] == 'は'){
        if(newStr[i+1] == 'る'){
            if(newStr[i+2] == 'こ'){
                haruko += 1;
            }
        }
    }
}
console.log('こはる:' + koharu);
console.log('はるこ:' + haruko);