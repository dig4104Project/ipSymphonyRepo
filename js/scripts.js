$.get("http://ipinfo.io", function (response) {
    $("#ip").html("IP: " + response.ip);
    $("#address").html("Location: " + response.city + ", " + response.region);
    $("#details").html(JSON.stringify(response, null, 4));
}, "jsonp");

$x = gethostbyname('www.electrictoolbox.com');
var_dump($x);
// outputs string(13) "120.138.20.39"