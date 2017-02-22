var NotFound = Backbone.View.extend({
  template: _.template($('#notFound-template').html()),

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});
