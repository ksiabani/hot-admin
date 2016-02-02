(function () {
    'use strict';

    angular
        .module('app.widgets')
        .directive('stat', stat);

    /* @ngInject */
    function stat() {
        var directive = {
            templateUrl: 'app/widgets/widget-stat.html',
            restrict: 'E',
            replace: true,
            scope: {
                'model': '=',
                'comments': '@',
                'number': '@',
                'name': '@',
                'colour': '@',
                'details': '@',
                'type': '@',
                'goto': '@'
            }
        };
        return directive;
    }
})();
