/* Summary:         Directive definitions
*
* Descriptions:     This program provides the Directive functionality for AngularJS Application
*        
* Programmer:       185SE14THST
* 
* Date:             2016-09-15
*/

myApp.directive('searchResult', function() {
	return {
		restrict: 'AECM',
		templateUrl: 'assets/dir/searchresult.html',
		replace: true, 
		scope: { // Define passable data
			bookObject: "=",
		}, 
	};
});
