var http = require("http")
var fs = require("fs")

http.createServer(function(req,res){
    fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        var posicao = req.url.indexOf('_')
        var valor = req.url.substr(posicao+2)

        res.write(data);
        res.write(valor);
        res.end();
      });
}).listen(3000)