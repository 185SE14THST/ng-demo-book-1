/* Summary:         Controller definitions
*
* Descriptions:     This program provides the controller functionality for AngularJS Application
*        
* Programmer:       185SE14THST
* 
* Date:             2016-09-15
*/
myApp.controller('mainController', ['$scope', '$filter', '$http', '$log', '$timeout', 'bookData', function ($scope, $filter, $http, $log, $timeout, bookData) {
    
      $scope.books = bookData.books;
        
        $scope.$watch('books', function () {
            bookData.books = $scope.books;
        });
    
    }]);
        
/* API GET and PUT EXAMPLE: Requires API service (local or remote)

    $http.get('http://demo-app3.mitmd.com/api/books.php') // get the data
    .success(function(result) { // on success RETURN result (what was called during GET)
        $log.info('Successfully got data from API!');
        // debug > # of returned objects > $log.info('JSONObject: ' + result );
        $scope.rules = result; // attatch results to scope of myApp
    }).error(function (data, status) { // return pre-configged data on error
        $log.error('API Error: ' + data + '('+ status + ')');
    });
	
    $scope.newTitle = '';
	$scope.newISBN = '';
	$scope.newPrice = '';
	$scope.newSubject = '';
	$scope.addRule = function() {
		data = {
			newTitle: $scope.newTitle,
			newISBN: $scope.newISBN,
			newPrice: $scope.newPrice,
			newSubject: $scope.newSubject,	
		};
		console.log(data);
		$http.post('https://myserver.com/api/books', data	)       // post the data
		.success(function(result) {                                 // return GET results
			$scope.rules = result;                                  // attatch results to scope
			$log.info('Successfully posted data from API!');
			$scope.newTitle = '';
			$scope.newISBN = '';
			$scope.newPrice = '';
			$scope.newSubject = '';				
		}).error(function (data, status) {                          // return perror information
			$log.error('Error: ' + data + '('+ status + ')');
		});
		
	}; */
