var Login = Backbone.View.extend({
  bindings: {
    '#username': 'username',
    '#password': 'password'
  },

  events: {
    'submit #login-form': 'login'
  },

  template: _.template($('#login-template').html()),

  login: function(evt) {
    var that = this;

    // Prevent the form from being submitted
    event.preventDefault();

    // Remove the login-error
    $('#login-error').hide();

    // Login to Kinvey
    this.model.login(this.model.get('username'), this.model.get('password'))
      .then(function() {
        that.model.clear();
        Backbone.history.navigate('/', true);
      })
      .catch(function(error) {
        $('#login-error').text(error.message).show();
      });
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    this.stickit();
    return this;
  }
});
