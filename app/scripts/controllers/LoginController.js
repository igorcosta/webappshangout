/*global app */
'use strict';

app.controller('LoginController', ['$scope','$location', function ($scope,$location) {

  // Validacao Fake
  $scope.falhou = false;
  $scope.Padrao = {};
  $scope.Padrao.login = 'admin';
  $scope.Padrao.senha = '123mudar';


  $scope.doLogin = function (){
    // simular o Login no aplicativo
    if($scope.LoginModel.usuario === $scope.Padrao.login &&
      $scope.LoginModel.senha === $scope.Padrao.senha){
      // ir para o Dashboard
      $location.path('/dashboard');
    }else {
      // TODO - Implementar o alerta nos padroes BootStrap
      $scope.falhou = true;
    }
  };
}]);
