$(document).ready(function () {
    $("#btnLogin").click(function () {
        $.ajax({
            url: "data/logins.json"
            , success: function (data) {
                var uName = $("#txtusername").val().toLowerCase();
                var uPass = $("#txtpassword").val();
                $.each(data, function (ndx,user) {
                    if (user.username.toLowerCase() === uName
                        && user.password === uPass
                    ) {
                        alert("found a user");
                    } else {
                        // not correct user
                    }
                });
            }
            , error: function () {

            }
        });
        return false;
    });
});