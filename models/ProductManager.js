class ProductManager {
    constructor() {
      this.products = []; 
    }
  
    getAllProducts(limit) {
      
      if (limit) {
        return this.products.slice(0, limit);
      } else {
        return this.products;
      }
    }
  
    getProductById(productId) {
      
      return this.products.find(product => product.id === productId);
    }
  
    addProduct(newProduct) {
     
      this.products.push(newProduct);
    }
  }
  
  module.exports = ProductManager;
  