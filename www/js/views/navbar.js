var NavBar = Backbone.View.extend({
  routes: {
    'books': new Books(),
    'profile': new Profile(),
    'upload': new Upload()
  },

  template: _.template($('#navbar-template').html()),

  render: function(route) {
    this.$el.html(this.template());

    if (route) {
      var view = this.routes[route];

      if (route === 'books') {
        view.reload();
      } else if (route === 'profile') {
        view.model = Kinvey.Backbone.User.getActiveUser();
      } else if (route === 'upload') {
        view.model = new Kinvey.Backbone.Model();
      }

      if (view) {
        this.$('#content').html(view.render().$el);
      }
    }

    return this;
  }
});
