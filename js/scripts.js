(function () {
  "use strict";

  $('#log-in-link').click( function() {
    $(this).addClass('hide');
    $('#log-in-form').addClass('show');
    $('#log-in-email').focus();
    return false;
  });

  $('#log-in-form').submit( function() {
    var logInEmail = $('#log-in-email').val();
    var logInPassword = $('#log-in-password').val();
    localStorage.setItem('currentUserEmail', logInEmail);
    localStorage.setItem('currentUserPassword', logInPassword); // I know this is wrong. I'll fix it when I create a "real" log in system
    window.location = '/your-list';
    return false;
  });

  $('#create-an-account-form').submit( function() {
    var createAnAccountEmail = $('#create-an-account-email').val();
    var createAnAccountPassword = $('#create-an-account-password').val();
    localStorage.setItem('currentUserEmail', createAnAccountEmail);
    localStorage.setItem('currentUserPassword', createAnAccountPassword);
    window.location = '/create-profile';
    return false;
  });

  $('#create-your-profile-form').submit( function() {
    var createYourProfileName = $('#create-your-profile-name').val();
    var createYourProfileLocation = $('#create-your-profile-location').val();
    var createYourProfileAge = $('#create-your-profile-age').val();
    localStorage.setItem('currentUserName', createYourProfileName);
    localStorage.setItem('currentUserLocation', createYourProfileLocation);
    localStorage.setItem('currentUserAge', createYourProfileAge);
    window.location = '/your-list';
    return false;
  });

}());