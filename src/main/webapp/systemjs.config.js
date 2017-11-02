/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
    // map tells the System loader where to look for things
    var paths = {
        // paths serve as alias
        'npm:': 'node_modules/'
    };

    var meta = {
        "*.json": { "loader": "json" }
    };


    var map = {
        'js': 'js', // 'dist',

        // angular bundles
        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
        '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
        '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
        '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
        '@angular/common/http': 'npm:@angular/common/bundles/common-http.umd.js',

        //Outras bibliotecas
        '@ngx-translate/core': 'npm:@ngx-translate/core/bundles/core.umd.js',
        '@ngx-translate/http-loader': 'npm:@ngx-translate/http-loader/bundles/http-loader.umd.js',
        'angular2-froala-wysiwyg': 'npm:angular2-froala-wysiwyg/bundles/angular2-froala-wysiwyg.umd.js',
        'rxjs': 'npm:rxjs',
        'tslib': 'npm:tslib/tslib.js',
        'json': 'npm:systemjs-plugin-json/json.js',
        'jquery': 'npm:jquery/dist/jquery.min.js'
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'js': { main: 'main.js',  defaultExtension: 'js' },
        'rxjs':  { defaultExtension: 'js' }
    };

    var config = {
        paths: paths,
        map: map,
        packages: packages,
        meta: meta
    };
    System.config(config);
})(this);
