// const fs = require('fs');

// const memDumpFile = 'ecg_signal_mem_dump.txt';

function isTwoHex(x) {
    if(x.length !== 2) return false;
    let table = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    return table.includes(x[0]) && table.includes(x[1])
}

function IEEE754_to_float(s) {

    if(s.length !== 8) {
        console.error('Should be 8 Hex numbers');
        return;
    }

    let buffer = new ArrayBuffer(4);
    let bytes = new Uint8Array(buffer);
    bytes[0] = parseInt(`${s[0]}${s[1]}`, 16);
    bytes[1] = parseInt(`${s[2]}${s[3]}`, 16);
    bytes[2] = parseInt(`${s[4]}${s[5]}`, 16);
    bytes[3] = parseInt(`${s[6]}${s[7]}`, 16);     
    let view = new DataView(buffer);
    // If you only had a Uint8Array, you would use bytes.buffer instead of buffer.
    // console.log(view.getFloat32(0, false));
    return view.getFloat32(0, false);
}

// fs.readFile(memDumpFile, "utf8", function(err, data) {
//     // console.log(data.split(' '));
//     let byte_ary = data.split(' ').filter((e) => isTwoHex(e));
//     // console.log(byte_ary)
 
//     let numbers = [];
    
//     let cnt = 0;
//     for(let i = 0; i < byte_ary.length; i++) {
//         if(i % 4 === 0) {
//             numbers.push(`${byte_ary[i + 3]}${byte_ary[i + 2]}${byte_ary[i + 1]}${byte_ary[i]}`);
//         }
//     }

//     let outputDoc = '';
//     // console.log(numbers.map(e => IEEE754_to_float(e)));
//     let outputAry = numbers.map(e => IEEE754_to_float(e));
//     for(let i = 0; i < outputAry.length; i++) {
//         outputDoc += `${outputAry[i]}\n`;
//     }
//     // console.log(numbers.length);
//     console.log(outputDoc);
// });


module.exports = {
    isTwoHex,
    IEEE754_to_float
};