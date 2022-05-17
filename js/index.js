var progressbar = document.getElementById('progressbar')
progressbar.setAttribute('class', 'show-block')
var url = document.URL
url = url.substring(0, url.lastIndexOf('/'))+'/blog.json'
console.log(url)
var req = new XMLHttpRequest()
req.open("GET", url)
req.onreadystatechange = function() {
    if (req.readyState === 4 && (req.status === 200 || req.status == 0)) {
        var blog_data = JSON.parse(req.responseText)
        console.log(blog_data)
        var main = document.getElementById("main")
        var html = ''
        for (const pub in blog_data.pubs) {
            var title = blog_data.pubs[pub].title
            var date = blog_data.pubs[pub].date
            var subtitle = blog_data.pubs[pub].subtitle
            var content = blog_data.pubs[pub].content
            html += '<div class="pub">'
            html += '<h1 class="pub-title">' + title + '</h1>'
            html += '<h2 class="pub-subtitle">' + subtitle + ' <span class="pub-date">' + date + '</span></h2>'
            html += '<hr>'
            html += '<div class="pub-content">' + content + "</div>"
            html += '</div>'
        }
        main.innerHTML = html
        progressbar.setAttribute('class', 'hide-block')
    }
}
req.send(null)
