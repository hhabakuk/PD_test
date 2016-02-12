ClientListView = Backbone.View.extend({

    //   initialize:function () {
    //     this.model.bind("reset", this.render, this);
    //     var self = this;
    //     this.model.bind("add", function (client) {
    //         $(self.el).append(new ClientNameListView({model:client}).render().el);
    //     });
    // },


    render:function () {

        _.each(this.model.models, function (client) {


            $(this.el).append(new ClientNameListView({ model:client }).render().el);
        
        }, this);
        return this;

    }
});



