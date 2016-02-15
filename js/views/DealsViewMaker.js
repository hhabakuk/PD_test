DealsViewMaker = Backbone.View.extend({

    template:_.template($('#tpl-client-deals').html()),

   render:function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },
    
    close:function () {
        $(this.el).empty();
    }

});