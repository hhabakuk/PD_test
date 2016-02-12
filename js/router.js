var AppRouter = Backbone.Router.extend({

    routes:{

        "":"list",
        "client/:id/":"clientDetails"
    },

    list:function () {

        this.clientList = new ClientList();
        this.deals = new Deals();

        var self = this;

        this.clientList.fetch({
            success:function () {
                self.clientListView = new ClientListView({model:self.clientList});
                // console.log(self.clientListView) // siit tuleb välja see model.models
                $('#sidebar').html(self.clientListView.render().el);
            }
        });

        // this.dealsList.fetch({
        //     self.dealsList = new DealsList({ model: self.dealsList })
        // })
    },


    clientDetails:function (id) {

        if (this.clientList) {

            this.client = this.clientList.get(id);
        
            this.deals = new Deals(); // where org_id = org_id
          

            var self = this;

            this.deals.fetch({
            success:function () {
                self.dealsList = new DealsList({ model:self.deals });
                $('#deals').html(self.dealsList.render().el);
            }
        });

            if (this.clientDetailsView || this.dealsView) this.clientDetailsView.close();
           

            this.clientDetailsView = new ClientDetailsView({model:this.client});
            $('#content').html(this.clientDetailsView.render().el);

            this.dealsView = new DealsView({model:this.client});
            $('#content').html(this.clientDetailsView.render().el);

        } else {
            this.requestedId = id;
            this.list();
        }
    },

    
});

var app = new AppRouter();
Backbone.history.start();