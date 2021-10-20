let money = Number(process.argv[2]);
let oneHundred = Math.floor(money / 100);
let remainder = money % 100;
let ten = Math.floor(remainder / 10);
let one = remainder % 10;

if (isNaN(money) || money === Infinity || process.argv.length > 3) {
    console.log('Error:Arguments');
} else {
    console.log('100円玉' + oneHundred + '枚, 10円玉' + ten + '枚, 1円玉' + one + '枚');
}