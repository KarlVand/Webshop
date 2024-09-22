class MainCard {
    constructor (image, text) {
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