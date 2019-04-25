var objectstoadd = {
    sections: {
        main: {
            self: $("<div>", { id: "", class: "mainWrap" }),
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
            canvas: $("<canvas>", { id: "myCanvas", class: "myCanvas" }),
            canvasStyling: {
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


for (section = 0; section < 5; section++) {
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

    }
}

// Load Main //
