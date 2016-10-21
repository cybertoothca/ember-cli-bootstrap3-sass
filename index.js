/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-bootstrap3-sass',
  included: function (app) {
    this._super.included(app);
    // import the bootstrap js file
    app.import(app.bowerDirectory + "/bootstrap-sass/assets/javascripts/bootstrap.js");
    // bootstrap glyphicons
    app.import(app.bowerDirectory + "/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.eot",
      {destDir: "assets/bootstrap"});
    app.import(app.bowerDirectory + "/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.svg",
      {destDir: "assets/bootstrap"});
    app.import(app.bowerDirectory + "/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.ttf",
      {destDir: "assets/bootstrap"});
    app.import(app.bowerDirectory + "/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.woff",
      {destDir: "assets/bootstrap"});
    app.import(app.bowerDirectory + "/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.woff2",
      {destDir: "assets/bootstrap"});
  }
};
