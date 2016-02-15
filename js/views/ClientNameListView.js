ClientNameListView = Backbone.View.extend({

    template:_.template($('#tpl-client-name-list').html()),

    render:function () {
        $(this.el).html(this.template(this.model.toJSON()));
        
        return this;
    },

});

