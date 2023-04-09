
  const fs = require('fs');

class ProductManager {
  constructor(file_path) {
    this.path = file_path;
    this.products = [];
    this.loadProducts();
  }

  loadProducts() {
    try {
      const data = fs.readFileSync(this.path, 'utf-8');
      this.products = JSON.parse(data);
    } catch (error) {
      // Si el archivo no existe, se crea uno vacío
      fs.writeFileSync(this.path, '[]', 'utf-8');
    }
  }

  saveProducts() {
    fs.writeFileSync(this.path, JSON.stringify(this.products), 'utf-8');
  }

  addProduct(product) {
    product.id = this.products.length + 1;
    this.products.push(product);
    this.saveProducts();
  }

  getProducts() {
    return this.products;
  }

  getProductById(product_id) {
    for (const product of this.products) {
      if (product.id === product_id) {
        return product;
      }
    }
    return null;
  }

  updateProduct(product_id, updated_product) {
    for (const product of this.products) {
      if (product.id === product_id) {
        Object.assign(product, updated_product);
        this.saveProducts();
        return true;
      }
    }
    return false;
  }

  deleteProduct(product_id) {
    for (const product of this.products) {
      if (product.id === product_id) {
        const index = this.products.indexOf(product);
        this.products.splice(index, 1);
        this.saveProducts();
        return true;
      }
    }
    return false;
  }
}

  