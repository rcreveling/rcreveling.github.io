
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
// VARIABLE DECLARATION OBJECT ///
var myVariables = {
    buttons: {
        foundational: {
            sideSlideButton: {
                container: $("#sidebar"),
                self: $("#showSideButton"),
                sideSlide: false,
                animate: {

                }
            },
        }
    },
    sections: {
        main: {
            self: $(".mainWrap"),
            styling: {
                width: "100vw",
                borderLeft: "none",
                right: "0",
                marginLeft: "0vw",
                boxShadow: "0 0 -5px - 5px black",
                top: "0",
                height: "100vh",
                background1: "url(assets/images/background-beverage-brown-414645.jpg)",
                backgroundSize: "100vw auto",
                filter: "progid: DXImageTransform.Microsoft.gradient(startColorstr = '#f1043b', endColorstr = '#940023', GradientType = 1)",
                position: "absolute",
                zIndex: "-1",
            }
        },
        sidebar: {
            self: $("#sidebar"),
            sideSlideButton: $("#sideSlide"),
            styling: {

            }
        }
    }
}

/// END ///

$(function () {
    /// Initialize page ///
    var page = myVariables.sections
    function initializePage() {
        var main = page.main
        var sidebar = page.sidebar
        var orderedDocument = [main, sidebar]
        for (x = 0; x < 1; x++) {
            var section = orderedDocument[x];

            switch (section) {
                case main:
                    console.log(main)
                    var container = section.self;
                    var maindiv = $("<div>", { id: "", class: "mainWrap" })
                    var m = section.styling;
                    console.log(m)
                    maindiv.css({
                        width: m.width,
                        borderLeft: m.borderLeft,
                        right: m.right,
                        marginRight: m.marginRight,
                        boxShadow: m.boxShadow,
                        top: m.top,
                        height: m.height,
                        backgroundImage: m.background1,
                        backgroundSize: m.backgroundSize,
                        filter: m.filter,
                        position: m.position,
                        zIndex: m.zIndex
                    })
                    container.append(maindiv)
                    break;
                // 
            }
        }
        var SBSfunction = myVariables.buttons.foundational.sideSlideButton
        var SBSfunctionMainwrap = myVariables.sections.main.self
        SBSfunction.self.on("click", function () {
            console.log("click!")

            if (!SBSfunction.sideSlide) {
                SBSfunction.container.slideToggle("slow")
                SBSfunctionMainwrap.css("width") = "100vw";
                SBSfunctionMainwrap.css("border-left") = "none"
                sideSlide = true;
            } if (SBSfunction.sideSlide) {
                ABSfunction.container.slideToggle("slow")
                SBSfunctionMainwrap.css("width") = "75vw"
                SBSfunctionMainwrap.css("border-left") = ".5vw ridge rgba(17, 60, 110, 0.6)"
                sideSlide = false;
            }
        })
    }
    initializePage();


    /// END initialize page ///

    /// Side Bar Sliding Function ///
    var SBSfunction = myVariables.buttons.foundational.sideSlideButton
    var SBSfunctionMainwrap = myVariables.sections.main.self
    SBSfunction.self.on("click", function () {
        console.log("click!")

        if (!SBSfunction.sideSlide) {
            SBSfunction.container.slideToggle("slow")
            SBSfunctionMainwrap.css("width") = "100vw";
            SBSfunctionMainwrap.css("border-left") = "none"
            sideSlide = true;
        } if (SBSfunction.sideSlide) {
            ABSfunction.container.slideToggle("slow")
            SBSfunctionMainwrap.css("width") = "75vw"
            SBSfunctionMainwrap.css("border-left") = ".5vw ridge rgba(17, 60, 110, 0.6)"
            sideSlide = false;
        }
    })
    /// END ///
})