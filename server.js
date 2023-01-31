const http = require("http");
const { getProducts } = require('./controller/productController')

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.statusCode = 200;
    res.end(`<h1>welcome</h1>`);
  } 
else if(req.url === "/api/products" && req.method === 'GET') {
    getProducts(req,res)
  }
  else(
    res.writeHead(404, {'Content-Type':'application/json' }),
    res.end(JSON.stringify({message: 'Route not found'}))
  )
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
