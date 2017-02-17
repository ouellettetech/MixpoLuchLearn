describe('Testing Angular JS Test Suite', function(){
    
    beforeEach(angular.mock.module('testingAngularApp'));
    
    describe('Testing Angular JS Controller', function() {
       
        var scope, ctrl;
        
        beforeEach(
            inject(function($controller,$rootScope) {
                scope=$rootScope.$new();
                ctrl = $controller('testingAngularCtrl', {$scope:scope});
            })
        );
        
        afterEach(function() {
           // Cleanup code 
        });
        
        it('should initialize the title in the scope', function() {
            expect(scope.title).toBeDefined();
            expect(scope.title).toBe("Testing Angular JS Applications");
        }); 
        
        
        it('Should add 2 destinations to the destinations list', function() {
            expect(scope.destinations).toBeDefined();
            expect(scope.destinations.length).toBe(0);
            
            scope.newDestination = {
                city: "London",
                country: "England"
            }
            scope.addDestination();
            
            expect(scope.destinations.length).toBe(1);
            expect(scope.destinations[0].city).toBe("London");
            expect(scope.destinations[0].country).toBe("England");
            
            scope.newDestination = {
                city: "Frankfurt",
                country: "Germany"
            }
            scope.addDestination();
            
            expect(scope.destinations.length).toBe(2);
            expect(scope.destinations[1].city).toBe("Frankfurt");
            expect(scope.destinations[1].country).toBe("Germany");
            expect(scope.destinations[0].city).toBe("London");
            expect(scope.destinations[0].country).toBe("England");
            
            
        });
    });
    
});