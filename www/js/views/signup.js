var Signup = Backbone.View.extend({
  bindings: {
    '#username': 'username',
    '#password': 'password',
    '#firstname': 'firstname',
    '#lastname': 'lastname'
  },

  events: {
    'submit #signup-form': 'signup'
  },

  template: _.template($('#signup-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    this.stickit();
    return this;
  },

  signup: function(evt) {
    // Prevent the form from being submitted
    event.preventDefault();

    // Remove the signup-error
      $('#signup-error').remove();

    // Login to Kinvey
    this.model.signup(this.model.attributes)
      .then(function() {
        Backbone.history.navigate('/', true);
      })
      .catch(function(error) {
        $('#signup-form').append('<p id="signup-error" class="text-danger" style="margin-top: 10px;">' + error.message + '</p>');
      });
  }
});
