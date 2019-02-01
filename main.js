$(begin);

function begin() {

}

var app = angular.module('dch', []);
app.controller('ctrl', function ($scope) {
    /////////////////////////////////////////////////////////////////////////////// Constants
    $scope.shifts = ['other', 'First', 'Second', 'Night'];

    $scope.shovels = [
        { id: '00', name: 'P&H-01', east: false, east_data: [0, 0, 0, 0], west: false, west_data: [0, 0, 0, 0] },
        { id: '01', name: 'P&H-02', east: false, east_data: [0, 0, 0, 0], west: false, west_data: [0, 0, 0, 0] },
        { id: '02', name: 'P&H-03', east: false, east_data: [0, 0, 0, 0], west: false, west_data: [0, 0, 0, 0] },
        { id: '03', name: 'P&H-04', east: false, east_data: [0, 0, 0, 0], west: false, west_data: [0, 0, 0, 0] },
        { id: '04', name: 'P&H-05', east: false, east_data: [0, 0, 0, 0], west: false, west_data: [0, 0, 0, 0] },
        { id: '05', name: 'P&H-06', east: false, east_data: [0, 0, 0, 0], west: false, west_data: [0, 0, 0, 0] },
        { id: '06', name: 'P&H-07', east: false, east_data: [0, 0, 0, 0], west: false, west_data: [0, 0, 0, 0] },
        { id: '07', name: 'P&H-08', east: false, east_data: [0, 0, 0, 0], west: false, west_data: [0, 0, 0, 0] },
        { id: '08', name: 'P&H-09', east: false, east_data: [0, 0, 0, 0], west: false, west_data: [0, 0, 0, 0] },
        { id: '09', name: 'P&H-10', east: false, east_data: [0, 0, 0, 0], west: false, west_data: [0, 0, 0, 0] }
    ]

    /////////////////////////////////////////////////////////////////////////////// Properties    
    $scope.shift = getShift();
    $scope.date = formattedDate();
    $scope.user = "none";
    $scope.eastShovelsTotal = [0, 0, 0, 0];
    $scope.westShovelsTotal = [0, 0, 0, 0];



    /////////////////////////////////////////////////////////////////////////////// Methods
    function formattedDate() {
        var today = new Date();
        var dd = today.getDate();
        var hour = new Date().getHours();
        if (hour <= 14) dd = dd - 1;
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) dd = "0" + dd;
        if (mm < 10) mm = "0" + mm;
        return dd + "/" + mm + "/" + yyyy;
    }

    function getShift() {
        var hour = new Date().getHours();
        //hour = 7;
        var currentShift = 0;
        if (hour >= 6 && hour < 14) currentShift = 1;
        else if (hour >= 14 && hour < 22) currentShift = 2;
        else currentShift = 3;
        var shift = (currentShift + 1) % 3 + 1;
        return shift;
    }


    $scope.refresh = function () {
        $scope.eastShovelsTotal = [0, 0, 0, 0];
        $scope.westShovelsTotal = [0, 0, 0, 0];

        angular.forEach($scope.shovels, function (shovel) {
            if (shovel.east) {
                $scope.eastShovelsTotal[0] += shovel.east_data[0];
                $scope.eastShovelsTotal[1] += shovel.east_data[1];
                $scope.eastShovelsTotal[2] += shovel.east_data[2];
                $scope.eastShovelsTotal[3] += shovel.east_data[3];

            }
            if (shovel.west) {
                $scope.westShovelsTotal[0] += shovel.west_data[0];
                $scope.westShovelsTotal[1] += shovel.west_data[1];
                $scope.westShovelsTotal[2] += shovel.west_data[2];
                $scope.westShovelsTotal[3] += shovel.west_data[3];
            }
        });

    };
});

