var PMQsData;

function getData (callback) {

    var req = new XMLHttpRequest();
    var url = "/data";

    req.onload = function(event) {
        callback(event.target.response);
    };		

    req.open("GET", url, true);

    req.onreadystatechange = function() {
        if (req.readyState === 4 && req.status !== 200) {
            console.log("error");
            return;
        }
    };

    req.send(null);
}

getData(function(response){
    PMQsData = response;
});
