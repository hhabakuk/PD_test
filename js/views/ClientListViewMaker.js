ClientListView = Backbone.View.extend({


    render:function () {

        _.each(this.model.models, function (client) {
     
            $(this.el).append(new ClientNameListView({ model:client }).render().el);
        
        }, this);
        return this;

    }
});



