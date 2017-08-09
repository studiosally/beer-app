angular.module('beerApp')
    .factory('beerService', function($http) {
        function searchBeer(beerselected) {
            var urlSearchBeer = 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=' + beerselected
            return $http.get(urlSearchBeer)
        }

        function beerSelection(idBeer) {
            var urlbeerSelection = 'https://quiet-inlet-67115.herokuapp.com/api/beer/' + idBeer
            return $http.get(urlbeerSelection)
        }

        return {
            searchBeer: searchBeer,
            beerSelection: beerSelection,
        }

    })
