// mutiple files
// promisifed function
// read files serially 


const fs = require("fs");

let pendingPromise1 = fs.promises.readFile("./f1.txt");


/*
pendingPromise1.then(function(data){
    console.log("f1 ka data"+data);
    let pendingPromise2 = fs.promises.readFile("./f2.txt");
    pendingPromise2.then(function(data){                                            //this is PROMISE HELL
        console.log("f1 ka data"+data);                                                 can be prevented by CHAINING
        let pendingPromise3 = fs.promises.readFile("./f3.txt");
        pendingPromise3.then(function(data){
            console.log("f1 ka data"+data);
        });
    });
});
*/



