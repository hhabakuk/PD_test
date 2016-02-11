var AppRouter = Backbone.Router.extend({

    routes:{
        "":"list",
        "client/:id":"clientDetails"
    },

    

    list:function () {
        this.clientList = new ClientList();
        var self = this;
        this.clientList.fetch({
            success:function () {
                self.clientListView = new ClientListView({model:self.clientList});
                $('#sidebar').html(self.clientListView.render().el);
            }
        });
    },


    clientDetails:function (id) {
        if (this.clientList) {
            this.wine = this.clientList.get(id);
            if (this.clientDetailsView) this.clientDetailsView.close();
            this.clientDetailsView = new ClientDetailsView({model:this.wine});
            $('#content').html(this.clientDetailsView.render().el);
        } else {
            this.requestedId = id;
            this.list();
        }
    },

    
});

var app = new AppRouter();
Backbone.history.start();