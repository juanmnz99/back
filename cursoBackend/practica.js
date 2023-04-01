class ProductManager {
    constructor() {
      this.products = [];
      this.nextId = 1;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
    
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error("Error: todos los campos son obligatorios.");
        return;
      }
      if (this.getProductByCode(code)) {
        console.error("Error: el código ya existe.");
        return;
      }
      const product = {
        id: this.nextId,
        title: title,
        description: description,
        price: price,
        thumbnail: thumbnail,
        code: code,
        stock: stock,
      };
      this.products.push(product);
      this.nextId++;
    }
  
    getProductByCode(code) {
      
      const product = this.products.find((product) => product.code === code);
      return product || null;
    }
  
    getProductById(id) {
      
      const product = this.products.find((product) => product.id === id);
      if (!product) {
        console.error("Not found");
      }
      return product;
    }
  
    getProducts() {
      
      return this.products;
    }
  }
  