        window.onload = function () {
            var prevScrollPos = window.pageYOffset;
            var box = document.getElementById("box");
            var initialWidth = box.offsetWidth;
            var initialHeight = box.offsetHeight;

            window.addEventListener("scroll", function () {
                var currentScrollPos = window.pageYOffset;

                if (prevScrollPos > currentScrollPos) {

                    box.style.width = initialWidth + "px";
                    box.style.height = initialHeight + "px";
                } else {
                    box.style.width = (initialWidth + 1000) + "px";
                    box.style.height = (initialHeight + 1000) + "px";
                }

                prevScrollPos = currentScrollPos;
            });
        }
