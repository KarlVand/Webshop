class MainCard {
  constructor(id, image, title) {
    this.id = id;
    this.image = image;
    this.title = title;
  }

  render() {
    return (
      <div className="mainCard">
        <img
          src={this.image}
          alt="services"
        />
        <p>{this.title}</p>
      </div>
    );
  }
}

class BlogCard extends MainCard {
  constructor(id, image, title, text) {
    super(id, image, title);
    this.text = text;
  }

  render() {
    return (
      <div className="mainCard">
        <img
          src={this.image}
          alt="blog post"
        />
        <p>{this.title}</p>
        <p>{this.text}</p>
      </div>
    );
  }
}

export { MainCard, BlogCard };
