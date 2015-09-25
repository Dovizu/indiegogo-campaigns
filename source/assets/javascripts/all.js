//= require jquery
//= require angular
//= require_tree .

angular.module('indiegogoCampaigns', [])
    .factory('campaignFactory', ['$http', function($http) {
    var indiegogo_api_endpoint = "https://api.indiegogo.com/1/campaigns.json?api_token=e377270bf1e9121da34cb6dff0e8af52a03296766a8e955c19f62f593651b346";
    var campaignFactory = {};
    campaignFactory.getAllCampaigns = function () {
        return $http.get(indiegogo_api_endpoint);
    };
    return campaignFactory;
}])
    .controller('mainController', ['$scope', 'campaignFactory', function($scope, campaignFactory) {
        $scope.campaigns = [];

        getCampaigns();

        function getCampaigns() {
            campaignFactory.getAllCampaigns()
                .success(function(campaigns) {
                    $scope.campaigns = campaigns.response;
                });
        }
    }]);