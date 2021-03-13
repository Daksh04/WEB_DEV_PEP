const fs = require("fs")
const request = require("request")
const cheerio = require("cheerio")

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard",cb);

function cb(err,response,data){
    let ch=cheerio.load(data);
    // let teamName= ch('a[href="/team/delhi-capitals-335975"]>p').text();
    // console.log(teamName);//Delhi Capitals

    let teamNames= ch('.name-detail .name-link .name');
    // console.log(teamNames); //{'0':{}//Delhi Capitals,'1':{}//Mumbai Indians}
    for(let i=0;i<teamNames.length;i++){
        let team= ch(teamNames[`${i}`]).text();
        console.log(team);
        //Teams jinke beech mei match hua:-
        //Delhi Capitals
        // Mumbai Indians
    }
}

