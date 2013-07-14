(function () {
  "use strict";

  $('#create-an-account').submit( function() {
    var email = $('#email').val();
    var password = $('#password').val();
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    window.location = 'create-profile.html';
    return false;
  });

}());