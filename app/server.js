var Logger = require('basic-logger')
    Docker = require('dockerode')
    http = require('http'),
    httpProxy = require('http-proxy');

var customConfig = {
    showMillis: false,
    showTimestamp: true
}
var log = new Logger(customConfig)

var docker = new Docker({socketPath: '/var/run/docker.sock'})

//
// Create a proxy server with custom application logic
//
var proxy = httpProxy.createProxyServer({});

var server = http.createServer()

server.on('request', function(req, res){
  docker.createContainer({
    Image: 'jeefy/strobe-light',
  }, function(err, container) {
    container.start({}, function(err, data) {
      container.inspect(function(err, data){
        setTimeout(function () {
          proxy.web(req, res, {target: 'http://' + data.NetworkSettings.IPAddress}, function(e){
            console.log(e);
          });
          res.on('finish', function(){
            container.remove({'force':true},function(){});
          })
        }, 180);
      });
    })
  });
});

console.log("listening on port 5050")
server.listen(5050);