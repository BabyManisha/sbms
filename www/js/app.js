angular.module('sbms', ['ionic', 'sbms.services', 'sbms.controllers'])

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('sbms-menu', {
                url: '/sbmsmenu',
                templateUrl: 'templates/home.html',
                controller: 'SbmsMenuCtrl'
            })

            .state('sbms-projects', {
                url: '/projects',
                templateUrl: 'templates/projects.html',
                controller: 'SbmsProjectsCtrl'
            })

            .state('sbms-projectdetails', {
                url: '/project/:projectId',
                templateUrl: 'templates/project-details.html',
                controller: 'SbmsProjectDetailsCtrl'
            })

            .state('sbm-profile', {
                url: '/sbmprofile',
                templateUrl: 'templates/profile.html',
                controller: 'SbmsProfileCtrl'
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/sbmsmenu');

    });
