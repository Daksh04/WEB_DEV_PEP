const request = require("request")
const cheerio = require("cheerio")

let lastBallCommentry= "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary";

request(lastBallCommentry,cb);

function cb(error,response,body){
   parsebody(body);
}

function parsebody(html){
    let ch=cheerio.load(html);

    // let commentry= ch('div[itemprop="articleBody"]>p').text();
    // let commentry= ch('div[itemprop="articleBody"] p').text();
    // let commentry= ch('#main-container > div.match-page-wrapper.commentary-page-wrapper > div.container > div.row > div.col-16.col-md-16.col-lg-12.main-content-x > div.match-body > div.comment-container > div.mb-5 > div > div:nth-child(1) > div.match-comment > div.d-flex.match-comment-padder.align-items-center > div.col-14.col-md-15.col-lg-14 > div > div > div.match-comment-long-text > p').text(); //from Inspect>Copy>Copy Selector
    let allcommentry= ch('div[itemprop="articleBody"] p');
    let commentry = ch(allcommentry['0']).text();
    // console.log(allcommentry);
    console.log(commentry);
    //o/p:-yorker just outside off, jabs it into the covers, runs to the other end with his arms aloft. Krunal Pandya seals the run that gives Mumbai Indians their fifth title
}