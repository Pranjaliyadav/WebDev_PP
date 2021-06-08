const puppeteer = require("puppeteer");
const id = "geetkhatri9@gmail.com";
const pw = "poiuytrewq123";
let tab;



let hackerKaPromise = puppeteer.launch({
    headless : false,       //to make it visible
    defaultViewport : null,
    args : ["--start-maximized"],

});

hackerKaPromise
.then(function(browser){
    console.log("browser opened!!!");
    let allPagesPromise = browser.pages();
    //console.log(allPagesPromise);
    return allPagesPromise;
})

.then(function(pages){
    tab = pages[0];
    let pageOpenPromise = tab.goto("https://www.hackerrank.com/auth/login");
    return pageOpenPromise;
})

.then(function() {
    let idTypePromise = tab.type( "#input-1" , id);
    return idTypePromise;

})

.then(function(){
    let pwTypePromise = tab.type("#input-2" , pw);
    return pwTypePromise;
})

.then(function(){
    let loginPromise = tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    return loginPromise;

})

.then(function(){
    let waitAndClickPromise = tab.waitForSelector(".nav-link-item" , {visible : true});
    return waitAndClickPromise;
})

.then(function(){
    let allNavTagsPromise = tab.$$(".nav-link-item");
    return allNavTagsPromise;

})
.then(function(allNavTags){
    let allNavsPromise = [];

    for (let i = 0; i < allNavTags.length; i++) {
        let navTag = allNavTags[i];
        let linkPromise = tab.evaluate(function (elem) {
          return elem.getAttribute("href");
        }, navTag);
        allNavsPromise.push(linkPromise);
    }

    let sbkaPromise = Promise.all(allNavsPromise);
    return sbkaPromise;

})

.then(function(allLinks){
    let completeLinks = allLinks.map(function(link){
        return "https://www.hackerrank.com" + link;
        
    });
    console.log(completeLinks);
    //let leaderBoardSolvePromise =  
    //return leaderBoardSolvePromise;
})

.then(function(){
    console.log("LeaderBoard clicked successfully");
})

.catch(function(error){
    console.log(error);
})


function waitAndClick(selector){
    return new Promise(function(resolve , reject){
        let waitPromise = tab.waitForSelector(selector , {visible : true});
        waitPromise
        .then(function(){
            let clickPromise = tab.click(selector);
            return clickPromise;
        })

        .then(function(){
            resolve();
        })

        .catch(function(error){
            reject(error);
        });
    });
}
