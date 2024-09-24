class ProductCard {
  constructor(id, name, price, image, onSale = false) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.onSale = onSale;
  }

  createProductCard() {
    return (
      <div className="productCard">
        <img
          src={this.image}
          alt={this.name}
        />
        <h2>{this.name}</h2>
        <p>{this.price}€</p>
        {this.onSale ? (
          <p className="saleBadge">Deal</p>
        ) : (
          <p className="newBadge">New</p>
        )}
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

export { ProductCard, ProductDetails };
