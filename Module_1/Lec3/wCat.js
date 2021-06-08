#!/usr/bin/env node

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
for (let i = 0; i < files.length; i++) {
  // f1.txt => f2.txt
  fileKaData += fs.readFileSync(files[i]);
  fileKaData += "\r\n";
}
// console.log(fileKaData);

// console.log(fileKaData);

if(!flags.length){
  console.log(fileKaData);
  return;
}



let data = fileKaData.split("\r\n");


let removedSpaces = [];

// node wCat.js -s -b -n f1.txt
// node wCat.js -s -n f1.txt

// flags = ["-s" , "-b" , "-n"];
// files = ["f1.txt"];

if (flags.includes("-s")) {
  removeLargeSpaces(data);
}

if (flags.includes("-n") && flags.includes("-b")) {
  if (flags.indexOf("-n") < flags.indexOf("-b")) {
    // -n pehle aya tha
    if (flags.includes("-s")) {
      addLineNumberToAllLines(removedSpaces);
    } else {
      addLineNumberToAllLines(data);
    }
  } else {
    // -b pehle aya tha
    if (flags.includes("-s")) {
      addLineNumberToNonEmptyLines(removedSpaces);
    } else {
      addLineNumberToNonEmptyLines(data);
    }
  }
} else if (flags.includes("-n")) {
  if (flags.includes("-s")) {
    addLineNumberToAllLines(removedSpaces);
  } else {
    addLineNumberToAllLines(data);
  }
} else if (flags.includes("-b")) {
  if (flags.includes("-s")) {
    addLineNumberToNonEmptyLines(removedSpaces);
  } else {
    addLineNumberToNonEmptyLines(data);
  }
}

function addLineNumberToNonEmptyLines(data) {
  let count = 1;
  for (let i = 0; i < data.length; i++) {
    if (data[i] != "") {
      data[i] = `${count}. ${data[i]}`;
      count++;
    }
  }
  let addedLineNumber = data.join("\n");
  console.log(addedLineNumber);
}

function addLineNumberToAllLines(data) {
  for (let i = 1; i < data.length + 1; i++) {
    data[i - 1] = `${i}. ${data[i - 1]}`;
  }
  let addedLineNumber = data.join("\n");
  console.log(addedLineNumber);
}

function removeLargeSpaces(data) {
  let emptyPushed = false;
  for (let i = 0; i < data.length; i++) {
    if (data[i] == "" && !emptyPushed) {
      removedSpaces.push(data[i]);
      emptyPushed = true;
    } else if (data[i] != "") {
      removedSpaces.push(data[i]);
    }
  }
}