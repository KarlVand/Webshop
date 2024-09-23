class MainCard {
    constructor (id, image, text) {
        this.id = id;
        this.image = image;
        this.text = text;
    }

    render() {
        
        return (
            <div className="mainCard">
                <img src={this.image} alt="services" />
                <p>{this.text}</p>
            </div>
        )
    }
}

export default MainCard;

class BlogCard extends MainCard {
    constructor (id, image, title, text) {
        super(id,image, text);
        this.title = title;
    }
}