const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");
let fs = require("fs");
let files = ["../f1.txt","../f2.txt","../f3.txt"];

let allPendingPromises = [];

for(let i = 0; i<files.length ; i++){
    let FileKaPromise = fs.promises.readFile(files[i]);
    allPendingPromises.push(FileKaPromise);
}

let combinedPromise = Promise.all(allPendingPromises);

combinedPromise.then(function(allFilesKaData){
    console.log(allFilesKaData+"");
})