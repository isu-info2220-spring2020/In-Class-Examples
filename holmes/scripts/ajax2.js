$(document).ready(function () {
    $("#txtSearch").on("keyup", function (e) {
        e = e || window.event;
        if (e.keyCode >= 65 && e.keyCode <= 90) {
            //alert(e.key + "|" + e.keyCode);
            textEntered = this.value;

            $.ajax({
                url: "data/testdata.json"
                , success: function (dataObj) {
                    // fires when good
                    if (dataObj.ok === "true") {
                        //dataStr = JSON.stringify(dataObj);
                        //alert(dataStr);
                        filldata(textEntered, dataObj.data);
                    } else {
                        alert('Error: ' + dataObj.message);
                    }
                }
                , error: function () {
                    // fires when bad
                    alert("Oops");
                }
            });


        }
    });

    function filldata(searchText, arrObj) {
        $("#output").empty();
        searchText = searchText.toLowerCase();
        $.each(arrObj, function (ndx, obj) {
            textToSearch = obj.text.toLowerCase();
            if (textToSearch.indexOf(searchText) > 0) {
                // found it
                var li = $("<li>");
                li.text(JSON.stringify(obj));
                $("#output").append(li);
            } else {
                // dont add it. do nothing.
            }
            //obj.text ?? contains searchText
            //if(obj.text)
            
        });
    }
});