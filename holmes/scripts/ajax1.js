$(document).ready(function () {
    $("#btnReadData").click(function () {
        // When button clicked.
        $.ajax({
            url: "data/learn.json"
            , success: function (payload) {

                bob = payload; //{ name: "Bob", age: 23, favoriteNumber: 34 };
                //alert(bob.name);
                var para = $("<p>").text(bob.name);
                $("#output").append(para);
                para = $("<p>").text("Age: " + bob.age);
                $("#output").append(para);
                var ul = $("<ul>");
                for (var i = 0; i < bob.favoriteBooks.length; i++) {
                    var book = bob.favoriteBooks[i];
                    ul.append($("<li>").text(book));
                }
                $("#output").append(ul);
            }
            , error: function (xdr,messObj, mess) {
                alert("Oops: " + mess);
            }
        });
    });
});