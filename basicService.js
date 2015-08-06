var app = angular.module('plunker', []);

angular.module('plunker').factory('basicService', function(){
    return {
        exciteText: function(msg) {
            return msg + '!!!'
        }
    };
});
