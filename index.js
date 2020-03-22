const express = require('express');
const app = express();

// ...

let server = app.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Your App is running at http://%s:%s', host, port);
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});
const Nightmare = require('nightmare');          // 自动化测试包，处理动态页面
const nightmare = Nightmare({ show: true });     // show:true  显示内置模拟浏览器

/**
 * 模拟浏览器环境访问页面，使js运行，生成动态页面再抓取
 */
// 抓取本地新闻页面
nightmare
    .goto('http://news.baidu.com/')
    .wait("div#local_news")
    .evaluate(() => document.querySelector("div#local_news").innerHTML)
    .then(htmlStr => {
        localNews = getLocalNews(htmlStr)
    })
    .catch(error => {
        console.log(`抓取失败 - ${error}`);
    });