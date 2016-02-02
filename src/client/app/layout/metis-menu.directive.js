(function() {
    'use strict';

    angular
        .module('app.layout')
        .directive('ngMetis', ngMetis);

    /* @ngInject */
    function ngMetis ($timeout) {
        var directive = {
            restrict: 'A',
            link: function(scope, el, atts) {

                $timeout(function () {
                    angular.element(el).metisMenu();
                }, 0);
            }
        };

        return directive;
    }
})();
