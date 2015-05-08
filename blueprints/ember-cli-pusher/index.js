module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('ember-pusher', 'git@github.com:dasnixon/ember-cli-pusher.git#use_ember_keys');
  }
};
