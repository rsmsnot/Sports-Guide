
const rp = require('request-promise');
const $ = require('cheerio');

let url = 'https://liveonsat.com/uk-england-premier-league.php';
rp({url: url, headers: {
  'User-Agent': 'Super Cool Browser'
}})
  .then(function(html){
    // console.log($(".fix_text", html).text()); // DIFERENT RESULTS EVERY TIME BUT NEVER THE RIGHT ONES!!! WTF
    
    let list = [];
    $('.blockfix', html).find('.fix_text > .fLeft').each(function (index, element) {
      list.push($(element).text());
    });
    let chans = [];
    $('.blockfix', html).find('.fLeft_live').each(function (index, element) {
      chans.push($(element).text().trim().replace(/\s\s+/g, ' '));
    });

    let results = {};
    
    results = Object.assign(...list.map((k,i) => ({[k]: chans[i]})))

    console.log(results);
    // let dates = [];
    // $('.time_head', html).each(function (index, element) {
    //   dates.push($(element).text());
    // });
    // console.log(dates)
  })
  .catch(function(err){
    console.error(err)
  });



/*
document.querySelectorAll('.fixtext')[1].querySelector('.fLeft').textContent.split("\n")


*/