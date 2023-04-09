// const order = {
//   "main_products": [],
//   "main_products": [],
//   "total_price": 0,
//   "name_of_client": "",
//   "phone_of_client": "",
//   "address_of_client": "",
//   "comment_of_client": "",
//   "delivery_type": "",
//   "payment_type": "",
// };

const products = [
  {
    id: 1,
    name: "Картопля",
    price: 10,
  },
  {
    id: 2,
    name: "Морква",
    price: 20,
  },
];

const additionalProducts = [
  {
    id: 1,
    name: "Вода",
    price: 10,
  },
  {
    id: 2,
    name: "Сік",
    price: 20,
  },
];

class Products {
  constructor(name, price, image, id) {
    this.Products = products;
  }
  drawProductsOnPage(array, selector) {
    html = ``;
    array.forEach((product) => {
      html += `
      <div class="product">
        <div class="product__name">${product.name}</div>
        <div class="product__price">${product.price}</div>
        <button data-mainId="${product.id}" class="product__btn">В корзину</button>
        </div> `;
    });
  }
}

class Cart {
  constructor(main_products, additional_products) {
    this.main_products = main_products;
    this.additional_products = additional_products;
  }
  addMainProduct(product) {
    this.main_products.push(product);
  }
  addAdditionalProduct(product) {
    this.additional_products.push(product);
  }
  removeMainProduct(product) {
    this.main_products = this.main_products.filter((item) => item !== product);
  }
  removeAdditionalProduct(product) {
    this.additional_products = this.additional_products.filter(
      (item) => item !== product
    );
  }
  clearCart() {
    this.main_products = [];
    this.additional_products = [];
  }
}

class LocalStorage {
  checkLocalStorage() {
    if (localStorage.getItem("order") === null) {
      localStorage.setItem("order", JSON.stringify(order));
    }
  }
  getMainProducts() {
    const order = JSON.parse(localStorage.getItem("order"));
    return order.main_products;
  }
  getAdditionalProducts() {
    const order = JSON.parse(localStorage.getItem("order"));
    return order.additional_products;
  }
}

// start point

document.addEventListener("DOMContentLoaded", () => {
  const allPizza = new Products(products);
  const allAdditionals = new Products(additionalProducts);
  const localStorage = new LocalStorage();
  localStorage.checkLocalStorage();
  const cart = new Cart(
    localStorage.getMainProducts(),
    localStorage.getAdditionalProducts()
  );
  allPizza.drawProductsOnPage(products, ".pizza");
});
