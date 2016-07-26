const AddIn = ({ message }) => {
    let  msg = 'hello';
    if (message) { msg = message; }

    this.goBig = () => {
        return AddIn.goBig(msg);
    };

    this.goSmall = () => {
        return AddIn.goSmall(msg);
    };
};

AddIn.goBig = (message) => {
    return message.toLocaleUpperCase();
};

AddIn.goSmall = (message) => {
    return message.toLocaleLowerCase();
};

AddIn.callback = (callback) => {
    if (callback) {
        callback();
    }
};

module.exports = AddIn;