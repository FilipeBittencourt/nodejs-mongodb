
function NoticiasDAO(connection) {
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function (callback) {
    this._connection.query('select * from noticias;', callback);
    this._connection.end();
};

NoticiasDAO.prototype.getNoticia = function (callback) {
    this._connection.query('select * from noticias where id = 7;', callback);
    this._connection.end();
};
NoticiasDAO.prototype.salvarNoticias = function (noticia, callback) {
    this._connection.query('insert into noticias set ?', noticia, callback);

    /*this._connection.query('insert into noticias set ?', noticia, (err, result) => {
        console.log(err);
    });*/
    this._connection.end();

};

module.exports = function () {
    return NoticiasDAO;
};
