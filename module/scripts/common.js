var GOKb = {
  name: 'gokb',
  handlers: {},
  globals: {},
  menuItems: []
};

GOKb.postProcess = function(command, params, body, updateOptions, callbacks) {
  Refine.postProcess("gokb", command, params, body, updateOptions, callbacks);
};
