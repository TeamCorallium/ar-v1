'use strict';

angular.module("arDir", [
    'ui.router',
    'oc.lazyLoad'
]);

var app = angular.module('arApp', ['arDir']);