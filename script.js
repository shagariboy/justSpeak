$(document).on("click", ".navbar-right .dropdown-menu", function(e){
	e.stopPropagation();
});


window.onload = function () {
    google.accounts.id.initialize({
      client_id: '270686179289-u2m5huooq9ljcfibktb4akibg5omm0o0.apps.googleusercontent.com',
      callback: handleCredentialResponse
    });
    google.accounts.id.prompt();
  };

  /*login function */
  function onLoad(params) {
    var Username=document.getElementById("username-field").value;
    localStorage.setItem("id", Username);
     window.location.replace("/userDashboard/uD.html");
  }
  