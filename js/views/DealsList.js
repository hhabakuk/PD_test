DealsList = Backbone.View.extend({

    render:function () {

        _.each(this.model.models, function (deal) {


            $(this.el).append(new DealsViewMaker({ model:deal }).render().el);
        
        }, this);
        return this;

    }
});