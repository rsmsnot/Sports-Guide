// const matches = require('livesoccertv-parser')


// async function f1() {
//     var x = await matches('england', 'arsenal', { timezone: 'Europe/London' })
//     ;
//     console.log(x); // 10
//   }

//   f1()


const rp = require('request-promise');

const $ = require('cheerio');

const url = 'https://www.livesoccertv.com/channels/sky-sports-premier-league/';

rp(url)
  .then(function(html){
    //success!
    let count = $(".matchrow:not('.repeatrow')", html).length;
    let matches = [];
    for (let i = 0; i < count; i++) {
        matches.push($(".matchrow:not('.repeatrow')", html))
    }
    // console.log($(".matchrow:not('.repeatrow')", html);
    console.log(matches)
  })
  .catch(function(err){
    //handle error
  });
