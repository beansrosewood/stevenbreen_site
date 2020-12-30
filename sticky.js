window.onscroll = function() {
            myFunction()
        };

        var sticknavbar = document.getElementById("sticknavbar");
        var sticky = sticknavbar.offsetTop;

        function myFunction() {
            if (window.pageYOffset >= sticky) {
                sticknavbar.classList.add("sticky")
            } else {
                sticknavbar.classList.remove("sticky");
            }
        }
