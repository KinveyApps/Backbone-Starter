var BooksCollection = Kinvey.Backbone.Collection.extend({
  url: '/books'
});

var Books = Backbone.View.extend({
  collection: new BooksCollection(),
  template: _.template($('#books-template').html()),

  constructor: function() {
    this.collection.on('add', this.reload, this);
    Backbone.View.apply(this, arguments);
  },

  render: function() {
    this.$el.html(this.template({ books: this.collection.toJSON() }));
    return this;
  },

  reload: function() {
    var that = this;
    this.collection.fetch({
      success: function() {
        that.render()
      }
    });
  }
});
