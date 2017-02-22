// Initialize Kinvey
Kinvey.initialize({
  appKey: 'kid_WJt3WXdOpx',
  appSecret: '7cfd74e7af364c8f90b116c835f92e7d'
})
  .then(function(activeUser) {
    // Send all anchor link clicks through Backbone.history.navigate
    $(document).on('click', 'a:not([data-bypass])', function(evt) {
      var href = { prop: $(this).prop('href'), attr: $(this).attr('href') };
      var root = location.protocol + '//' + location.host + Backbone.history.options.root;

      if (href.prop && href.prop.slice(0, root.length) === root) {
        evt.preventDefault();
        Backbone.history.navigate(href.attr, true);
      }
    });

    // Define your master router on the application namespace and trigger all
    // navigation from this instance.
    var router = new Router();

    // Trigger the initial route and enable HTML5 History API support, set the root
    // folder to '/' by default.
    Backbone.history.start({ pushState: true, root: '/' });
  })
  .then(function() {
    $('#loading-modal').modal('hide');
  })
  .catch(function(error) {
    console.log(error);
  });
