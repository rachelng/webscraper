var cheerio = require('cheerio');
var path = require('path');
var request = require('request');

	request('http://substack.net/images/', function (error, response, body) {
		if (!error && response.statusCode == 200) {
			$ = cheerio.load(body);

	    $("td").each( function() {
	    	var url = "http://substack.net";
	    	var imgUrl = $(this).find('a').attr('href');
	    	var code = $(this).find('code').text();
	    	var absolute = url + imgUrl;
	    	var fileType = path.extname(absolute)

	    	console.log(code + " , " + absolute + " , " + fileType);
    	})
    }
})
// (--rw--r--r), whaevermyURLis.png, .png,
// (--rw--r--r), whaevermyURLis.png, .png,
// (--rw--r--r), whaevermyURLis.png, .png,