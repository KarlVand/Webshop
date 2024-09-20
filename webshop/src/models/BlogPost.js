class BlogPost {
  constructor(title, content, imgUrl) {
    this.title = title;
    this.content = content;
    this.imgUrl = imgUrl;
  }

  createBlogCard() {
    return (
      <div className="blogCard">
        <img
          src=""
          alt=""
        />
        <h2>${this.title}</h2>
        <p>${this.content} </p>
      </div>
    );
  }
}
