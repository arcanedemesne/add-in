class AddIn {

    constructor ({ message }) {
        this.message = 'hello';
        if (message) {
            this.message = message;
        }
    }
    goBig() {
        return AddIn.goBig(this.message);
    }

    goSmall() {
        return AddIn.goSmall(this.message);
    }

    static goBig(message) {
        return message.toLocaleUpperCase();
    };

    static goSmall(message) {
        return message.toLocaleLowerCase();
    };

    static callback(callback) {
        if (callback) {
            callback();
        }
    }
}

export default AddIn;