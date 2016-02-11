window.ClientList = Backbone.Collection.extend({
    model:Client,
    url:"http://jsonplaceholder.typicode.com/users"
});