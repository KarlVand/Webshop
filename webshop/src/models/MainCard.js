class MainCard {
    constructor (image, text) {
        this.image = image;
        this.text = text;
    }

    createMainCard () {
        
        return (
            <div className="mainCard">
                <img src="" alt="" />
                <p>{this.text}</p>
            </div>
        )
    }
}