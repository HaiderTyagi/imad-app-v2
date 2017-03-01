var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne={
   title:'Article One | Haider Ali',
   heading:'Article One',
   date:'1-March-2016',
   content:'Hi Buddy............This Is Article One'
};

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;

var htmlTemplate='<html><head> <title> ${title}</title></head><body><div class="center"><a href="/">Home</a></div> <br><h3> ${heading}</h3><br> <div>${date}</div> <div>  ${content}</div></body></html>';
return htmltemplate;
}

app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleOne));
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
