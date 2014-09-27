'use strict';

app.directive('pod',function(){
  return {
    restrict:'A',
    replace:false,
    scope:{
      'titulo':'@',
      'conteudo':'@'
    },
    templateUrl:'/partials/pod.html'
  };
});
