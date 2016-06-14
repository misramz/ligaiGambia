import angular from 'angular';
// console.log(angular);
import './app.core/index';
import './app.user/index';

angular
  .module('app', ['app.user', 'app.core'])
  .constant('SERVER',{
    URL: 'https://www.backand.com/apps/#/app/legaigambia/objects/model/erd',
    
  })
  ;
