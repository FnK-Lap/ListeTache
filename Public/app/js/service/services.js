// server request service
app.factory('serverData', function($http) {

    var serverData = {};

    serverData.get = function($url)
    {
        return $http({method: 'GET', url: $url}).
            error(function(data, status, headers, config) {
                return false;
            });
    };

    serverData.post = function($url, $sended_data)
    {
        return $http({ method: 'POST', url: $url, data:$sended_data}).
            error(function(data, status, headers, config) {

                return false;
            });
    };

    serverData.delete = function($url)
    {
        return $http({ method: 'DELETE', url: $url}).
            error(function(data, status, headers, config) {

                return false;
            });
    };

    return serverData;



});
