'use strict';

app.directive('navegacao',function(){
  return {
    restrict:'E',
    controller:function($scope){
      $scope.menu =  [
         {'label':'Home','active':'true','url':'/'},
         {'label':'Clientes','active':'false','url':'/clientes'},
         {'label':'Pedidos','active':'false','url':'/pedidos'},
         {'label':'Produtos','active':'false','url':'/produtos'},
         {'label':'Fornecedores','active':'false','url':'/fornecedores'},
         {'label':'Financeiro','active':'false','url':'/financeiro'},
      ];
    },
    templateUrl:'/partials/navbar.html'
  };
});
