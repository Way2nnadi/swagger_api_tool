// IMPORTS
import express from 'express';
// import path from 'path';

let server = express();
let port = 3001;
let yamlUrl = "yaml/external_apis.yaml";

server.set('view engine', 'pug')
server.use(express.static(__dirname + '/public'));

server.get('/', (req, res) => {
  res.render('index', {yamlUrl})
})

server.get('/:apiType', (req, res) => {
  // internal user validation - Solution 1
    // ui to put into username and pass word
    // if validated then give them ass to internal.yaml

  // Solution 2 
    // do validation based off user header/cookie

  let apiType = req.params.apiType;
  let yamlFiles = {
    internal: "yaml/internal_apis.yaml",
    all: "yaml/all_apis.yaml"
  }

  res.render('index', {yamlUrl: yamlFiles[apiType] || yamlUrl});
})
server.listen(port || 3000, () => {

  console.log(`Node server started on port: ${port} at ${Date(new Date())}`);
  
});
