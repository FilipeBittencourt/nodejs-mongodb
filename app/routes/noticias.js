const dbConnection = require('../../config/dbConnection');

module.exports = function (app) {
    const connection = dbConnection();
    app.get('/noticias', (req, res) => {
        connection.query('select * from noticias', (error, result) => {
           // res.send(result);          
           res.render('noticias/noticias', { noticias: result });
        });
    });
};
