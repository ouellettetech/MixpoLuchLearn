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
        
    });
    
});