function randomString(len) {
    var text = "";
    var possible = "abcdef0123456789";
    for(var i = 0; i < len; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};