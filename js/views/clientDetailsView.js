ClientDetailsView = Backbone.View.extend({

    template:_.template($('#tpl-client-details').html()),

    render:function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },
    
    close:function () {
        $(this.el).unbind();
        $(this.el).empty();
    }
});





