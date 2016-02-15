DealsList = Backbone.View.extend({

    render:function () {

        _.each(this.model.models, function (deal) {

          

            // ei taha each model.modelsit, tahan each model.models where org_id = jepp. 

            // võib olla _.each kui enne on läbi parsitud vastavalt org_id-le. vaata, et htmlis oleks järjestus õige. 


            //võibolla parsides, sest see siin võtab info deals.jsist kust saab parsida.  

            $(this.el).append(new DealsViewMaker({ model:deal }).render().el);
        
        }, this);
        return this;

    }
});