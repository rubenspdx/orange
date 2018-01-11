module.exports = function(app){
  var home = app.modules.controllers.home;
  app.get('/', home.index);
  app.get('/home', home.index);
}
