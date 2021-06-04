// A script to add an event listener to the popup box

document.addEventListener("DOMContentLoaded", function(event) {

    // get all elements with class -> exp-popup  (it contains the popup)
    const popup = document.getElementsByClassName("exp-popup");
    //  get all the elements with class -> exp-popup-toggle (it has the popup box content)
    const popupContent = document.getElementsByClassName("exp-popup-toggle");


    // for each popup box, on click -> add/remove "show" class from the relevant popup-box-content
    //  also, hide all the other popup contents, if they are shown. 
    for (let i = 0; i < popup.length; i++) {
        console.log("this is working")
        popup[i].addEventListener('click', function() {
            var p = popupContent[i];
            p.classList.toggle("show");

            for (let j = 0; j < popup.length; j++) {
                if (j === i) {
                    continue;
                }
                var popup2 = popupContent[j];
                if (popup2.classList.contains("show")) {
                    popup2.classList.remove("show");
                }
            }

        });
    }


});