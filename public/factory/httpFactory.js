App.factory('http', function($http) {

    var http = {};

    http.get = function($url)
    {
        console.log('GET');
        console.log($url);
        return $http({method: 'GET', url: $url}).
            error(function(data, status, headers, config) {
                return false;
            });
    };

    http.post = function($url, $sended_data)
    {
        console.log('POST');
        console.log($url);
        return $http({ method: 'POST', url: $url, data:$sended_data})
            .error(function(data, status, headers, config) {
                console.log('fail http');
                return false;
            });
    };

    http.delete = function($url)
    {
        console.log('DELETE');
        console.log($url);
        return $http({ method: 'DELETE', url: $url}).
            error(function(data, status, headers, config) {
                return false;
            });
    };

    return http;



});
