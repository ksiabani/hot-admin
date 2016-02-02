(function () {
    'use strict';

    angular
        .module('app.widgets')
        .directive('notifications', notifications);

    /* @ngInject */
    function notifications() {
        var directive = {
            templateUrl:'app/widgets/widget-notifications.html',
            restrict: 'E',
            replace: true
        };
        return directive;
    }
})();
