var Profile = Backbone.View.extend({
  bindings: {
    '#username': 'username',
    '#firstname': 'firstname',
    '#lastname': 'lastname'
  },

  events: {
    'submit #profile-form': 'save'
  },

  template: _.template($('#profile-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    this.stickit();
    return this;
  },

  save: function(evt) {
    // Prevent the form from being submitted
    event.preventDefault();

    // Hide the profile-success and profile-error
    $('#profile-success').hide();
    $('#profile-error').hide();

    // Update to Kinvey
    this.model.update(this.model.attributes)
      .then(function() {
        $('#profile-success').show();
      })
      .catch(function(error) {
        $('#profile-error').text(error.message).show();
      });
  }
});
