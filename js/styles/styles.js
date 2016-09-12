angular.module('todomvc')
    .factory('styles', function() {
        "use strict";

        return aphrodite.StyleSheet.create({
            blue: {
                backgroundColor: 'blue'
            },
        });

    })