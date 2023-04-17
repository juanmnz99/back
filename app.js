const express = require('express');
const app = express();
const ProductManager = require('./models/ProductManager');


const productManager = new ProductManager();


app.get('/products', (req, res) => {
  const limit = req.query.limit; 
  
  const products = limit ? productManager.getAllProducts(limit) : productManager.getAllProducts();
  res.json(products);
});

app.get('/products/:pid', (req, res) => {
  const productId = req.params.pid; 
 
  const product = productManager.getProductById(productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});