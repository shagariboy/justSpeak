$(document).on("click", ".navbar-right .dropdown-menu", function(e){
	e.stopPropagation();
});


window.onload = function (g_id_onload) {
    google.accounts.id.initialize({
      client_id: '270686179289-u2m5huooq9ljcfibktb4akibg5omm0o0.apps.googleusercontent.com',
      callback: handleCredentialResponse
    });
    google.accounts.id.prompt();
  };

  function onLoad(params) {
      window.location.replace("/userDashboard/uD.html");
  }
  