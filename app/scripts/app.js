'use strict';

/**
 * @ngdoc overview
 * @name hangoutApp
 * @description
 * # hangoutApp
 *
 * Main module of the application.
 */
var app = angular
  .module('hangoutApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider,$locationProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardController'
      })
      .when('/pedidos',{
        templateUrl:'views/pedidos.html',
        controller:'PedidosController'
      })
      .when('/financeiro',{
        templateUrl:'views/financeiro.html',
        controller:'FinanceiroController'
      })
      .when('/fornecedores',{
        templateUrl:'views/fornecedores.html',
        controller:'FornecedorController'
      })
      .when('/clientes', {
        templateUrl:'views/clientes.html',
        controller:'ClienteController'
      })
      .when('/produtos',{
        templateUrl:'views/produtos.html',
        controller:'ProdutosController'
      })
      .otherwise({
        redirectTo: '/'
      });
     // $locationProvider.html5Mode(true);
  });
