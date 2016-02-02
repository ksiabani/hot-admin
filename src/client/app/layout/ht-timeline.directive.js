(function () {
    'use strict';

    angular
        .module('app.widgets')
        .directive('timeline', timeline);

    /* @ngInject */
    function timeline() {
        var directive = {
            templateUrl: 'app/widgets/widget-timeline.html',
            restrict: 'E',
            replace: true
        };
        return directive;
    }
})();
