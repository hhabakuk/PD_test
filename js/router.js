var AppRouter = Backbone.Router.extend({

    routes:{

        "":"list",
        "client/:id/":"clientDetails"
        
    },

    list:function () {

        this.clientList = new ClientList();
        

        var self = this;

        this.clientList.fetch({
            success:function () {
                self.clientListView = new ClientListView({model:self.clientList});

                $('#sidebar').html(self.clientListView.render().el);
                if (self.clientId) self.clientDetails(self.clientId);
            }


        });

    },

    


    clientDetails:function (id) {

        if (this.clientList) {

            this.client = this.clientList.get(id);

            var clientId = id


            this.deals = new Deals(); 
          

            var self = this;

            this.deals.fetch({
            success:function () {
                
                self.dealsList = new DealsList({ model : self.deals });
                $('#deals-table').html(self.dealsList.render().el);
            }

           
        });

            if (this.clientDetailsView) this.clientDetailsView.close();
           

            this.clientDetailsView = new ClientDetailsView({model:this.client});

      
            $('#details').html(this.clientDetailsView.render().el);

        } else {
            this.clientId = id;
            this.list();
        }
    },

    
});

var app = new AppRouter();




   




Backbone.history.start();