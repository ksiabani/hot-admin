(function () {
    'use strict';

    angular
        .module('app.widgets')
        .directive('chat', chat);

    /* @ngInject */
    function chat() {
        var directive = {
            templateUrl:'app/widgets/widget-chat.html',
            restrict: 'E',
            replace: true
        };
        return directive;
    }
})();
