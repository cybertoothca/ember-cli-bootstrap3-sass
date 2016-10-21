/*jshint node:true*/
module.exports = {
  description: '',
  normalizeEntityName: function () {
  },
  afterInstall: function (options) {
    return this.addAddonToProject('ember-cli-sass')
      .then(() => this.addBowerPackageToProject('bootstrap-sass'));
  }
};
