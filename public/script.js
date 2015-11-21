var circle = document.getElementsByTagName("circle");
var converted = Array.prototype.slice.call(circle);
var mp = encodeURIComponent("Ms Diane Abbott");

// var response = getMPData(mp, function(response) {
//
//     console.log(response); // illegal invocation
// });
// console.log("response: ",response);

// converted.forEach(function(element) {
//     element.addEventListener('click', console.log);
// })

function getMPData (mpName, callback) {

    var splitNames = mpName.split(" ");
    var req = new XMLHttpRequest();
    var url = "http://lda.data.parliament.uk/members.json?exists-constituency=true&familyName=" + splitNames[0] + "&givenName=" + splitNames[1];
    // var url = "http://lda.data.parliament.uk/members.json?about=" + mpName

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
