var arrayColor = [
    "antiquewhite",
    "rgb(228, 182, 125)",
    "rgb(240, 230, 93)",
    "rgb(164, 236, 116)",
    "rgb(92, 218, 159)",
    "rgb(170, 245, 245)",
    "rgb(61, 221, 233)",
    "rgb(133, 180, 233)",
    "rgb(189, 181, 235)",
    "rgb(204, 156, 233)",
    "rgb(233, 138, 217)",
    "rgb(196, 86, 181)",
];

var listEl = document.querySelector("#list");
arrayColor.forEach(function (item, i) {
    var buttonObject = document.createElement('button');
    buttonObject.className = "col-lg-1 col-md-2 col-sm-3 col-4 float-start border-0 rounded-3 m-2 btna"
    buttonObject.id = "btn" + i;
    buttonObject.style.backgroundColor = item;
    //buttonObject.setAttribute("onmouseout", "mouseout()");
    //buttonObject.setAttribute("onmouseover", "renkDegistir('" + item + "')");
    buttonObject.onmouseout = function () {
        document.body.style.backgroundColor = "white";
    };
    buttonObject.onmouseover = function () {
        document.body.style.background = item;
    };

    listEl.append(buttonObject);

});