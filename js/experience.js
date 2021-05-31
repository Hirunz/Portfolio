function expPopup1() {
    var popup = document.getElementById("expPopup1");
    popup.classList.toggle("show");

    document.getElementById("expPopup2").classList.remove("show");

}

function expPopup2() {
    var popup = document.getElementById("expPopup2");
    popup.classList.toggle("show");

    document.getElementById("expPopup1").classList.remove("show");
}