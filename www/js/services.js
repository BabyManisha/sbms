angular.module('sbms.services', [])

    .factory('SbmsProjects', function($q) {

        var projects = [
            {"id": 1,
              "tittle": "Autotest",
              "img": "autotest.png",
              "objective": "Project to test the coding skills of its aspirants",
              "description": "This project is for testing the coding skills of its aspirants. It is not only for testing but also improves the aspirant’s enthusiasm towards the open source software’s and to conduct multiple contests in any number of places at a same time and also to display the user results and leaderboard in one screen to notify users about their submissions, results, scores and rank."},
            {"id": 2,
              "tittle": "Wipro Portal",
              "img": "wipro.jpeg",
              "objective": "Portal for learning Organization",
              "description": "The proposed portal transforms the means of interaction between the institution, student and faculty. It brings about the virtual society and enables the students and faculty to connect to knowledge management (central repository containing various topics of interest in the form of PDF files, video and audio files). Thus the portal provides a single stop solution to gain knowledge on any area of subject."},
            {"id": 3,
              "tittle": "My MCA ONLINE",
              "img": "mca.jpg",
              "objective": "An Educational Website",
              "description": "This is an educational site where i can upload useful materials, books and other academic stuff, which is useful for students daily for Engineering Stream. Some of my lectures, friends and juniors are using this site by accessing those materials and technical stuff."},
            {"id": 4,
              "tittle": "AutoTest1",
              "img": "autotest1.gif",
              "objective": "Project to test the coding skills of its aspirants",
              "description": "This project is for testing the coding skills of its aspirants. It is not only for testing but also improves the aspirant’s enthusiasm towards the open source software’s and to conduct multiple contests in any number of places at a same time and also to display the user results and leaderboard in one screen to notify users about their submissions, results, scores and rank."},
            {"id": 5,
              "tittle": "Wipro Portal1",
              "img": "wipro1.jpg",
              "objective": "Portal for learning Organization",
              "description": "The proposed portal transforms the means of interaction between the institution, student and faculty. It brings about the virtual society and enables the students and faculty to connect to knowledge management (central repository containing various topics of interest in the form of PDF files, video and audio files). Thus the portal provides a single stop solution to gain knowledge on any area of subject."},
            {"id": 6,
              "tittle": "My MCA ONLINE1",
              "img": "mca1.jpeg",
              "objective": "An Educational Website",
              "description": "This is an educational site where i can upload useful materials, books and other academic stuff, which is useful for students daily for Engineering Stream. Some of my lectures, friends and juniors are using this site by accessing those materials and technical stuff."}
        ];

        return {
            findAll: function() {
                var deferred = $q.defer();
                deferred.resolve(projects);
                return deferred.promise;
            },

            findById: function(projectId) {
                var deferred = $q.defer();
                var project = projects[projectId - 1];
                deferred.resolve(project);
                return deferred.promise;
            },

            findByTittle: function(searchKey) {
                var deferred = $q.defer();
                var results = projects.filter(function(element) {
                    var name = element.tittle;
                    return name.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
                });
                deferred.resolve(results);
                return deferred.promise;
            }

        }

    });
