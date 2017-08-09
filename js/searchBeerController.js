angular.module('beerApp', [])
    .controller('searchBeerController', function($scope, beerService) {
        $scope.beerQuery = ""


        $scope.searchBeer = function(e) {
            e.preventDefault()
            var beerselected = $scope.beerQuery
            console.log(beerselected)
            beerService.searchBeer(beerselected)
                .then(function(response) {
                    $scope.beers = response.data;
                })
        }
 		$scope.beerSelection = function() {
            var idBeer = $scope.idbeersfound
			beerService.beerSelection(idBeer)
 			.then(function(response) {
 					console.log(response)
                    console.log(response.data.style.description)
                    console.log(response.data.labels.large)
                    $scope.name=response.data.name;
                    $scope.description = response.data.style.description;
                    $scope.label = response.data.label;
                })

            }

    })

 