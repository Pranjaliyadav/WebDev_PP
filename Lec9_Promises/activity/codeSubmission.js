const puppeteer = require('puppeteer');
const id = "geetkhatri9@gmail.com";
const pw = "poiuytrewq123";
let tab;

// all functions of puppeteer promisifed => gives you a pending promise initially


// opens a new browser instance

//let browserOpenPromise = puppeteer.launch({ headless: false });
// Promise<Pending>
let HackerRank = puppeteer.launch({ 
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
    slowMo : 100 });

HackerRank.then(function (browser) {
    console.log("Browser opened !!!");
    let allPagesPromise = browser.pages();
    return allPagesPromise;
  })
  .then(function (pages) {
    tab = pages[0];
    let pageOpenPromise = tab.goto("https://www.hackerrank.com/auth/login");
    return pageOpenPromise;
    //Promise<pending>
  })
  .then(function () {
      let idTypePromise = tab.type("#input-1" , id);
      return idTypePromise;
  })
  .then(function(){
      let pwTypePromise = tab.type("#input-2" , pw);
      return pwTypePromise;
  })
  .then(function(){
      let ClickTypePromise = tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
      return ClickTypePromise;
  })
  .then(function(){
      console.log("login open")
  })
.catch(function(error){
    console.log(error);
})



// const browser = await puppeteer.launch();
// const page = await browser.newPage();
// await page.goto('https://example.com');
// await page.screenshot({ path: 'example.png' });
// await browser.close();