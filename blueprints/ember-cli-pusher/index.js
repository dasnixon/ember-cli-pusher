module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('https://github.com/dasnixon/ember-pusher', 'use_ember_keys');
  }
};
