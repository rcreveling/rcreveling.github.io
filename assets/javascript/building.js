var objectstoadd = {
    sections: {
        main: {
            self: $("<div>", { id: "mainWrap", class: "mainWrap" }),
            canvas: $("<canvas>", { id: "myCanvas", class: "myCanvas" }),
        },
        mainContent: {
            button: $("<button>", { id: "showSideButton", class: "btn" }),
            div1: $('<div>', { class: 'mainDiv', id: 'mainDiv' }),
            div2: $('<canvas>', { class: 'mainCanvas', id: '' }),
        },
        sidebarBtn: {
            self: $("<button>", { id: "showSideButton", class: "btn sideBtn" }),
            styling: {
                position: "fixed",
                top: "0",
                left: "0",
                zIndex: "5",
            },
        },
    },
    side: {
        id: $("#sidebar"),
        self: ($("<div>", { id: "sidebar", class: "wrapper sideWrap" })),
        styling: {
            width: "25vw",
            borderRight: "1vw",
            marginRight: "0 !important",
            left: "0",
            top: "0",
            height: "100vh",
            backgroundColor: "rgba(46, 86, 131, 0.8)",
            position: "relative",
        },

        container: ($("<div>", { id: "sideContainer", class: "container" })),

        rowOne: {
            row: $("<div>", { id: "sideRowFirst", class: "row sideRow" }),
            col: {
                self: $("<div>", { id: "headCol", class: "col m12" }),
                styling: {
                    marginTop: "0vh !important",
                    marginBottom: "1vh !important",
                    textAlign: "center",
                    paddingBottom: "1.5vh",
                    borderRadius: "10px",
                }
            },
            header: {
                self: $("<h1>", { id: "headerOne", class: "" }),
                styling: {
                    textAlign: "center",
                }
            }
        },

        rowTwo: {
            row: $("<div>", { id: "sideRowSecond", class: "row sideRow" }),
            col: {
                self: $("<div>", { id: "buttonCol", class: "col m12" }),
                button: $("<button>", { id: "button", class: "btn black white-text" }),
            }
        },

        rowThree: {
            row: $("<div>", { id: "sideRowThird", class: "row sideRow" }),
            col: {
                dud: $("<div>"),
                self: $("<div>", { id: "columnOne", class: "btn col m3 sidebarColors red" }),


                header: $("<h3>"),
            },
            colOne: {
                dud: $("<div>"),
                self: $("<div>", { id: "columnTwo", class: "btn col m3 sidebarColors green" }),

            },
            colTwo: {
                dud: $("<div>"),
                self: $("<div>", { id: "columnThree", class: "btn col m3 sidebarColors blue" }),

            },
            colThree: {
                dud: $("<div>"),
                self: $("<div>", { id: "columnFour", class: "btn col m3 sidebarColors yellow" }),

            },
        },

        htmlBody: {
            self: [$("html"), $("body")],
            styling: {
                maxHeight: "100vh !important",
                height: "100vh !important",
                maxWidth: "100vw !important",
                width: "100 vw !important",
                margin: "0",
                padding: "0",
            }
        }
    }
}


var functionalVariables = [objectstoadd.side, objectstoadd.container, objectstoadd.rowOne, objectstoadd.rowTwo, objectstoadd.htmlBody]
console.log(functionalVariables)
// Load HTML styling //

$("html").css({
    maxHeight: "100vh !important",
    height: "100vh !important",
    maxWidth: "100vw !important",
    width: "100 vw !important",
    margin: "0",
    padding: "0",
})
// Load Side // 
var side = objectstoadd.side;
console.log(objectstoadd.side)
var container = side.container;
console.log(container)
var rowOne = side.rowOne;
var rowTwo = side.rowTwo;
var rowThree = side.rowThree;
var htmlBody = side.htmlBody;


for (section = 0; section < 6; section++) {
    switch (section) {
        case 0:
            console.log(side.self)
            side.id.css({
                width: "25vw",
                borderRight: "1vw",
                marginRight: "0 !important",
                left: "0",
                top: "0",
                height: "100vh",
                backgroundColor: "rgba(46, 86, 131, 0.8)",
                position: "relative",
                zIndex: "2",
            });
            break;
        case 1:
            side.id.append(container)
            console.log("container");
            break;
        case 2:
            var container = $(".container")
            var row = side.rowOne.row
            var rowID = $("#sideRowFirst")
            var col = side.rowOne.col.self
            var header = side.rowOne.header.self

            container.append(row);
            $("#sideRowFirst").append(col);
            $("#headCol").css({
                marginTop: "0vh !important",
                marginBottom: "1vh !important",
                textAlign: "center",
                paddingBottom: "1.5vh",
                borderRadius: "10px",
            });
            $("#headCol").append(header);
            $("#headerOne").text("Side Bar")
            $("#headerOne").css({
                textAlign: "center",
            })
            break;
        case 3:
            var container = $(".container")
            var row = side.rowTwo.row
            var rowID = $("#sideRowSecond")
            var col = side.rowTwo.col.self
            var button = side.rowTwo.col.button

            container.append(row)
            $("#sideRowSecond").css({
                marginTop: "0vh !important",
                marginBottom: "1vh !important",
                textAlign: "center",
                paddingBottom: "1.5vh",
                borderRadius: "10px",
            })
            $("#sideRowSecond").append(col);
            $("#buttonCol").css({
                marginTop: "0vh !important",
                marginBottom: "1vh !important",
                textAlign: "center",
                paddingBottom: "1.5vh",
                borderRadius: "10px",
            })
            $("#buttonCol").append(button)
            $("#button").text("I'm a button")
            break;
        case 4:
            var container = $(".container")
            var row = side.rowThree.row
            var rowID = $("#sideRowThird")
            var col = side.rowThree.col.self
            var colOne = side.rowThree.colOne.self
            var colTwo = side.rowThree.colTwo.self
            var colThree = side.rowThree.colThree.self
            var button = side.rowThree.col.button
            console.log(colOne, colTwo, colThree)
            container.append(row)
            $("#sideRowThird").css({
                marginTop: "0vh !important",
                marginBottom: "1vh !important",
                textAlign: "center",
                paddingBottom: "1.5vh",
                borderRadius: "10px",
            })
            $("#sideRowThird").append(col).append(colOne).append(colTwo).append(colThree)
            $(".sidebarColors").css({
                marginTop: "0vh !important",
                marginBottom: "1vh !important",
                textAlign: "center",
                paddingBottom: "1.5vh",
                borderRadius: "10px",
            })
            break;
        case 5:
            var sections = objectstoadd.sections;
            var main = sections.main.self;
            var mainContent = sections.mainContent;
            var canvas = sections.main.canvas;
            var button = sections.sidebarBtn.self;
            $(".mainWrap").append(main)
            $("#mainWrap").css({
                width: "100vw",
                borderLeft: "none",
                right: "0",
                marginLeft: "0vw",
                boxShadow: "0 0 -5px - 5px black",
                top: "0",
                height: "100vh",
                background: "url(assets/images/background-beverage-brown-414645.jpg)",
                backgroundSize: "100vw auto",
                filter: "progid: DXImageTransform.Microsoft.gradient(startColorstr = '#f1043b', endColorstr = '#940023', GradientType = 1)",
                position: "absolute",
                zIndex: "1",
                display: "flex",
            }),
                $("#mainWrap").append(canvas);
            $("#myCanvas").css({
                height: "80vh",
                width: "60vw",
                backgroundColor: "blue",
                border: "none !important",
                padding: "none !important",
                display: "flex",
                marginLeft: "30vw",
                marginRight: "10vw",
                marginTop: "10vh",
                borderRadius: "20px",
                zIndex: "2"
            }),
                $("#mainWrap").append(button);
            $("#showSideButton").css({
                position: "fixed",
                top: "0",
                left: "25vw",
                zIndex: "3",
            }),
                $("#showSideButton").text("Toggle Sidebar View");

            break;
        case 6:

            break;


    }
    var SBSfunction = $("#showSideButton")
    var SBSfunctionMainwrap = objectstoadd.sections.main.self
    var sideSlide = false;
    SBSfunction.on("click", function () {
        if (!sideSlide) {

            $("#sidebar").animate({
                width: "10vw"
            }, 500, "linear")
            $("#showSideButton").animate({ left: "10vw" }, 500, "linear")
            $("#myCanvas").animate({
                marginLeft: "15vw",
                marginRight: "10vw",
                width: "75vw",
            }, 500, "linear")
            sideSlide = true;
        }
        else if (sideSlide) {

            $("#sidebar").animate({
                width: "25vw"
            }, 500, "linear")
            $("#myCanvas").animate({
                marginLeft: "30vw",
                marginRight: "10vw",
                width: "60vw",
            }, 500, "linear")
            $("#showSideButton").animate({ left: "25vw" }, 500, "linear")
            sideSlide = false;
        }
    })
}
// Page Loaded //
