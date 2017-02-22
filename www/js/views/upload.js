var Upload = Backbone.View.extend({
  bindings: {
    '#filename': 'filename',
  },

  events: {
    'submit #upload-form': 'upload'
  },

  template: _.template($('#upload-template').html()),

  render: function() {
    this.$el.html(this.template());
    this.stickit();
    return this;
  },

  upload: function(event) {
    // Prevent the form from being submitted
    event.preventDefault();

    // Hide the upload-success and upload-error
    $('#upload-success').hide();
    $('#upload-error').hide();

    // Get entered values
    var file = $('#file')[0].files[0];

    if (file) {
      var filename = this.model.get('filename');
      filename = filename || filename !== '' ? filename : file.name;

      // Upload the file
      Kinvey.Files.upload(file, { filename: filename, public: true })
        .then(function() {
          $('#upload-success').show();
        })
        .catch(function(error) {
          $('#upload-error').text(error.message).show();
        });
    } else {
      $('#upload-error').text('Please select a file to upload.').show();
    }
  }
});
