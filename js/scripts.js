(function () {
  "use strict";

  $('#create-an-account').submit( function() {
    var currentUserEmail = $('#current-user-email').val();
    var currentUserPassword = $('#current-user-password').val();
    localStorage.setItem('currentUserEmail', currentUserEmail);
    localStorage.setItem('currentUserPassword', currentUserPassword);
    window.location = '/create-profile';
    return false;
  });

  $('#create-your-profile').submit( function() {
    var currentUserName = $('#current-user-name').val();
    var currentUserLocation = $('#current-user-location').val();
    var currentUserAge = $('#current-user-age').val();
    localStorage.setItem('currentUserName', currentUserName);
    localStorage.setItem('currentUserLocation', currentUserLocation);
    localStorage.setItem('currentUserAge', currentUserAge);
    window.location = '/your-list';
    return false;
  });

}());