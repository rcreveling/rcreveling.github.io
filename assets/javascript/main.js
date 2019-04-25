
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
                display: "flex",
            },

            cstyling: {
                height: "80vh",
                width: "60vw",
                backgroundColor: "blue",
                border: "none !important",
                padding: "none !important",
                display: "inline-flex",
                marginLeft: "30vw",
                marginTop: "10vh",
                borderRadius: "20px",
            }
        },
        mainContent: {
            button: $("<button>", { id: "showSideButton", class: "btn" }),
            div1: $('<div>', { class: 'mainDiv', id: 'mainDiv' }),
            div2: $('<canvas>', { class: 'mainCanvas', id: '' }),
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

    function initializePage() {
        var main = myVariables.sections.main
        var sidebar = myVariables.sections.sidebar
        var orderedDocument = [main, sidebar]
        for (x = 0; x < 1; x++) {
            var section = orderedDocument[x];

            switch (section) {
                case main:
                    console.log(main)
                    var container = section.self;
                    var maindiv = $("<div>", { id: "mainWrap", class: "mainWrap" })
                    var m = section.styling;
                    var button = $("<button>", { id: "showSideButton", class: "btn" });
                    button.css({
                        position: "fixed !important",
                        top: "0 !important",
                        marginLeft: "30vw !important",
                        backgroundColor: "rgb(46, 86, 131) !important",
                        color: "white",
                        zIndex: "5",
                    });
                    button.text("Toggle Sidebar")
                    console.log(button)
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
                        zIndex: m.zIndex,
                        display: m.display
                    })

                    maindiv.append(button)
                    container.append(maindiv)
                    var maincanvas = $("<canvas>", { id: "mainCanvas", class: "mainCanvas" });
                    var c = section.cstyling;

                    maincanvas.css({
                        height: c.height,
                        width: c.width,
                        backgroundColor: c.backgroundColor,
                        border: c.border,
                        padding: c.padding,
                        display: c.display,
                        marginLeft: c.marginLeft,
                        marginTop: c.marginTop,
                        borderRadius: c.borderRadius
                    })
                    maindiv.append(maincanvas)
                    break;
                // 
            }
        }

    }

    initializePage();
    /// Side Bar Sliding Function ///
    var SBSfunction = $("#showSideButton")
    var SBSfunctionMainwrap = myVariables.sections.main.self
    SBSfunction.on("click", function () {
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

    var SBSfunction = $("#showSideButton")
    var SBSfunctionMainwrap = myVariables.sections.main.self
    SBSfunction.on("click", function () {
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

$(function () {
    var canvas = $("#mainCanvas")
    console.log(canvas)



})