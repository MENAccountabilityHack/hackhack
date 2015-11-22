var circle = document.getElementsByTagName("circle");
var converted = Array.prototype.slice.call(circle);


function getMPData (mpName, callback) {

    var splitNames = mpName.split(" ");
    var req = new XMLHttpRequest();
    var url = "http://lda.data.parliament.uk/members.json?exists-constituency=true&familyName=" + splitNames[0] + "&givenName=" + splitNames[1];

    req.onload = function(event) {

        callback(event.target.response);
    }

    req.open("GET", url, true);

    req.onreadystatechange = function() {

        if (req.readyState === 4 && req.status !== 200) {

            console.log("Error");
            return;
        }
    }

    req.send(null);
}
