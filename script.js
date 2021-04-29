window.onload = function() {
    setInterval(function() {customPageMargin();}, 50);
}

/* CUSTOM PAGE MARGIN TO FIX PAGE */
function customPageMargin() {
    var width = window.innerWidth;
    var height = window.innerHeight;

    var container = document.getElementsByTagName("body")[0];

    if ((width / height) < 0.6) {
        container.style.margin = "20px 10px 20px 10px";
    } else if ((width / height) < 1.0) {
        container.style.margin = "20px 10% 20px 10%";
    } else {
        container.style.margin = "20px 20% 20px 20%";
    }
}
