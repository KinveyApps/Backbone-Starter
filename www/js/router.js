var Router = Backbone.Router.extend({
  routes: {
    '': 'books',
    'login': 'login',
    'logout': 'logout',
    'profile': 'profile',
    'signup': 'signup',
    'upload': 'upload',
    '*notFound': 'notFound'
  },

  books: function() {
    new NavBar({ el: $('#app') }).render('books');
  },

  login: function() {
    new Login({
      el: $('#app'),
      model: new Kinvey.Backbone.User()
    }).render();
  },

  logout: function() {
    Kinvey.User.logout()
      .then(function() {
        Backbone.history.navigate('/login', true);
      });
  },

  profile: function() {
    new NavBar({ el: $('#app') }).render('profile');
  },

  signup: function() {
    new Signup({
      el: $('#app'),
      model: new Kinvey.Backbone.User()
    }).render();
  },

  upload: function() {
    new NavBar({ el: $('#app') }).render('upload');
  },

  notFound: function() {
    new NotFound({ el: $('#app') }).render();
  }
});
