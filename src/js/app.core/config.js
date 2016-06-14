function config ($stateProvider, $urlRouterProvider, BackandProvider) {

  BackandProvider
          .setSignUpToken('')
          .setAppName('legaigambia');

  $urlRouterProvider.otherwise('/');

  $stateProvider
        .state('root',{
          abstract: true,
          templateUrl: 'templates/layout.tpl.html',
          controller: 'NavController as vm'
        })
        .state('root.home', {
          url: '/',
          templateUrl: 'templates/home.tpl.html',
        })
        .state('root.register', {
          url: '/register',
          templateUrl: 'templates/register.tpl.html'
          controller: 'RegisterController as vm'
        })
        .state('root.login', {
          url: '/login',
          templateUrl: 'templates/login.tpl.html',
          controller: 'LoginController as vm'
        });



}

config.$inject = ['$stateProvider', '$urlRouterProvider', 'BackandProvider'];
export { config };
