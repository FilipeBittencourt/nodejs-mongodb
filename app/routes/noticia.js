module.exports = function (application) {
    application.get('/noticia', (req, res) => {
        const connection = application.config.dbConnection();
        const noticiasModel = application.app.models.noticiasModel;
        noticiasModel.getNoticias(connection, (error, result) => {
            res.render('noticias/noticia', { noticia: result });
        });
    });
};


