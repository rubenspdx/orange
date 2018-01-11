const express = require('express');
const load = require('express-load');

module.exports = function(){
  const app = express();

  app.use(express.static('./public'));

  app.set('views', './modules/views');
  app.set('view engine', 'ejs');

  load('./modules/models')
    .then('./modules/controllers')
    .then('./modules/routes')
    .into(app);

  return app;
}
