// 在请求发送之前，设置根路径
$.ajaxPrefilter(function(options){
    options.url='http://api-breakingnews-web.itheima.net'+options.url
    console.log(options.url)
})