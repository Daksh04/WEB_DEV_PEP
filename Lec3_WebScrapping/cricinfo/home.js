// const fs = require("fs")
const request = require("request")
const cheerio = require("cheerio")

//let url = "https://www.espncricinfo.com/";
//request(url,callback_func);

// function callback_func(error, response, body) {
 
//     // console.log(response);//so many data , same as data of body
//     // console.log(body);// html data of url

//     // fs.writeFileSync("./home.html",body+""); //'./home.html' file created with body data(html form or stirng form) in it
// }

//Now, Google type-espncricinfo ipl 2020

let cricInfoUrl= "https://www.espncricinfo.com/series/ipl-2020-21-1210595?ex_cid=ipl:google_cpc:search:dsa_feed:msn&gclid=CjwKCAiA4rGCBhAQEiwAelVti24c_hQO6wbUb2NZu0lnakvEB-zh0ZM02l9mWkSMAg5n_rY27H5H2RoCxDEQAvD_BwE";

request(cricInfoUrl,cb);

function cb(error,response,body){
   parsebody(body);
}

function parsebody(htmlkaData){
   let ch= cheerio.load(htmlkaData); //cheerio is used to get data from 'htmlkaData' in object form
//    let aTag= ch('a[data-hover="View All Results"]'); //With respect to particular 'selector', we can find required data from website

//    console.log(aTag); //object form mei data

let aTagData= ch('a[data-hover="View All Results"]').text();

console.log(aTagData);//o/p:- View All Results
}