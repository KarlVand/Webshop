class ProductCard {
  constructor(name, price, quantity, onSale = false) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.onSale = onSale;
  }

  createProductCard() {
    return (
      <div className="product-card">
        <h2>${this.name}</h2>
        <p>${this.price}€</p>
        <p>Items left in stock: ${this.quantity}</p>
        {this.onSale && <p className="salesBadge">Promo</p>}$
        {this.addBuyButtons}
      </div>
    );
  }
  addBuyButtons() {
    return (
      <div className="buyButtons">
        <button className="Buy">Buy Now</button>
        <button className="Wishlist">Add to Wishlist</button>
        <button className="Cart">Add to Cart</button>
      </div>
    );
  }
}

class ProductDetails extends ProductCard {
  constructor(name, price, quantity, description, onSale = false) {
    super(name, price, quantity, onSale);
    this.description = description;
  }
}
