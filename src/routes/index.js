const newsRouter = require('./news');
const siteRouter = require('./site');
//2
function route(app) {


    app.use('/news',newsRouter);
    app.use('/',siteRouter);
 

    

}

module.exports = route;