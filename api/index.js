const { server, app } = require('./src/server');
const port = process.env.PORT || 4000;


(async () => {

    await server.start();

    server.applyMiddleware({ app });

    app.listen(port, () => {

        console.log(`Servidor está rodando na porta ${port}`);
    });

})();
