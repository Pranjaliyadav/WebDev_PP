//div[itemprop = "articleBody"] p

const request = require("request");
const cheerio = require("cheerio");
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary";
request(url , cb);

function cb(error, response, data){
    parseData(data);
}


function parseData(html){
    let ch = cheerio.load(html);
    let allCommentries = ch('div[itemprop="articleBody"] p');
    let commentory = ch(allCommentries['0']).text();
    console.log(commentory);
}