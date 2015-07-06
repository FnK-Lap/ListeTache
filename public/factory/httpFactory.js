App.factory('http', function($http) {

    var http = {};

    http.get = function($url)
    {
        return $http({method: 'GET', url: $url}).
            error(function(data, status, headers, config) {
                return false;
            });
    };

    http.post = function($url, $sended_data)
    {
        return $http({ method: 'POST', url: $url, data: $sended_data})
            .error(function(data, status, headers, config) {
                return false;
            });
    };

    http.delete = function($url)
    {
        return $http({ method: 'DELETE', url: $url}).
            error(function(data, status, headers, config) {
                return false;
            });
    };

    http.put = function($url, $sended_data)
    {
        return $http({ method: 'PUT', url: $url, data: $sended_data})
            .error(function(data, status, headers, config) {
                return false;
            })
    }

    return http;



});
