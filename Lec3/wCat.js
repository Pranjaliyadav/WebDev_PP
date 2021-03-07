let content = process.argv.slice(2);   //slice(2) will show the elements from 2 index
//argv is oly we need so .argv is fetched from process
let fs = require("fs");  //we will be needing fs for using cat commands
// console.log(content);   //this shows the content you write on terminal 
/* node wcat.js f1.txt (adding f1.txt )
   node wcat.js f1.txt f2.txt (adding f1.txt f2.txt )
   node wcat.js -s -b -n f1.txt f2.txt (adding -s -b -n f1.txt f2.txt ) */

let flags = [];
let files = [];

for(let i=0 ; i<content.length ; i++){
    // "-s"
    if( content[i].startsWith('-') ){
        flags.push(content[i]);    //categories the flags
    }
    else{
        files.push(content[i]);   //categories the files
    }
}

// console.log(flags);  //printing them out only on input .node wCat.js -s -b f1.txt  will give  [-s,-b]  [f1.txt]
// console.log(files);
// flags X

// for files output
let fileKaData = "";
for(let i=0 ; i<files.length ; i++){
    // f1.txt => f2.txt
    fileKaData += fs.readFileSync( files[i] ) + " ";   
}

console.log(fileKaData);