angular.module('sbms.controllers', [])

    .controller('SbmsMenuCtrl', function ($scope, $stateParams, SbmsProjects) {
        SbmsProjects.findById($stateParams.projectId).then(function(project) {
            $scope.project = project;
        });
    })

    .controller('SbmsProjectsCtrl', function ($scope, SbmsProjects) {

        $scope.searchKey = "";

        $scope.clearSearch = function () {
            $scope.searchKey = "";
            findAllProjects();
        }

        $scope.search = function () {
            SbmsProjects.findByTittle($scope.searchKey).then(function (projects) {
                $scope.projects = projects;
            });
        }

        var findAllProjects = function() {
            SbmsProjects.findAll().then(function (projects) {
                $scope.projects = projects;
            });
        }

        findAllProjects();

    })

    .controller('SbmsProjectDetailsCtrl', function ($scope, $stateParams, SbmsProjects) {
        SbmsProjects.findById($stateParams.projectId).then(function(project) {
            $scope.project = project;
        });
    })

    .controller('SbmsProfileCtrl', function ($scope) {});
