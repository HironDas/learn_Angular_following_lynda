(function(){
    var AppComponent = ng.core.Component({
        selector: 'my-app',
        template: '<h1> Hello World!!</h1>'
    }).class({
        constructor: function(){ }
    });

    var AppModule = ng.core.NgModule({
        imports: [ng.platformBrowser.BrowserModule],
        declarations: [AppComponent],
        bootstrap:[AppComponent]
    }).class({
        constructor: function(){ }
    });

    ng.platformBrowserDynamic.platformBrowserDynamic()
        .bootstrapModule(AppModule);
})();