'use strict';

angular.module("arDir", [
    'ui.router',
    'oc.lazyLoad',
    'angular-screenshot'
]);

var app = angular.module('arApp', ['arDir']);