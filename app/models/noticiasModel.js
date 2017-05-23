module.exports = function () {
    //One
    this.getNoticia = function (connection, callback) {
        connection.query('select * from noticias where id = 2', callback);
        connection.end();
    };

    //Many
    this.getNoticias = function (connection, callback) {
        connection.query('select * from noticias', callback);
        connection.end();
    };
    return this;
};
