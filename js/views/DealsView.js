DealsView = Backbone.View.extend({


    render:function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },
    
    close:function () {
        $(this.el).unbind();
        $(this.el).empty();
    }
});
