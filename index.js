const AddIn = {};

AddIn.toUppercase = function(message) {
    return message.toLocaleUpperCase();
};

AddIn.toLowercase = function(message) {
    return message.toLocaleLowerCase();
};

module.exports = AddIn;