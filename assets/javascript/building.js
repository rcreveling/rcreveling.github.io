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
                button: $("<button>", { id: "startButton", class: "btn black white-text" }),
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
            $("#startButton").text("Start")
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
                backgroundColor: "rgba(250, 250, 250, 0.6)",
                border: "none !important",
                padding: "none !important",
                display: "flex",
                marginLeft: "30vw",
                marginRight: "10vw",
                marginTop: "10vh",
                borderRadius: "20px",
                zIndex: "2"
            })

            $("#mainWrap").append(button);
            $("#showSideButton").css({
                position: "fixed",
                top: "0",
                left: "25vw",
                zIndex: "3",
            }),
                $("#showSideButton").text("Toggle Sidebar");
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
//Start adding Function //
var myCanvas = $("#myCanvas")
var canvasText = ""


$("#showSideButton").on("click", function () {
    if (sideSlide === true) {
        $('canvas').detectPixelRatio(function (ratio) {
            console.log(ratio)
            $('canvas').css({
                height: "80vh",
                width: "60vw"
            })
        });
        $('canvas').scaleCanvas({
            x: "60vw",
            y: "80vh",
            scaleX: 1, scaleY: 1
        })

    } else {
        $('canvas').detectPixelRatio(function (ratio) {
            console.log(ratio)
            $('canvas').css({
                height: "80vh",
                width: "75vw"
            })
        });
        $('canvas').scaleCanvas({
            x: "75vw",
            y: "80vh",
            scaleX: 1, scaleY: 1
        })
    }
})


// Game function work //
var triviaQs = {

    sections: {
        thirtiesToFifties: {
            header: "1930's - 1950's Fashion",
            questions: ["In the 1930's, what could $25 dollars get you at a men's clothing store?",
                "Question 2", "Question 3", "Question 4"]
        },
        sixtiesToEighties: {
            header: "1960's to 1980's",
            questions: ["Was Audrey Hepburn the Baddest Bitch in the land?", "", "", ""],
        },
        nineties: {
            header: "The 1990's",
            questions: ["Was Limp Bizkit at the Forefront of style and culture?", "", "", ""],
        }

    }
}
var triviaAnswers = {
    sectionOne: {
        answers: [
            // thinking these will be arrays of four possible answers that we will"""" link to
            // the  Colored Side Buttons"""" and """"Display on the canvas"""", also we will """""put the answers through a randomizing process""""" 
            // so they display differently every time the question is posed
            {
                one: ["suit, a hat, 3 pairs of socks, 2 dress shirts, a tie, a pair of shoes",
                    "suit, hat, cane, matching shoes",
                    "2 dress shirts, a tie, handkerchief, gloves, hair gel",
                    "Chanel's first ever production Double Breasted Peacock sport coat"
                ]
            },
            {
                two: ["2 Answer 1",
                    "2 Answer 2",
                    "2 Answer 3",
                    "2 Answer 4"
                ]
            },
            {
                three: ["3 Answer 1",
                    "3 Answer 2",
                    "3 Answer 3",
                    "3 Answer 4"
                ]
            },
            {
                four: ["4 Answer 1",
                    "4 Answer 2",
                    "4 Answer 3",
                    "4 Answer 4"
                ]
            }
        ]
    },

    "1960's to 1980's": [
        { one: [] },
        { two: [] },
        { three: [] },
        { four: [] }
    ],

    "1990's": [

    ]
}
function fixCanvas() {

    $('canvas').detectPixelRatio(function (ratio) {
        console.log(ratio)
        $('canvas').css({
            height: "80vh",
            width: "75vw"
        })
    });
    $('canvas').scaleCanvas({
        x: "75vw",
        y: "80vh",
        scaleX: 1, scaleY: 1
    })
}

var roundNumber = 1;
var questionNumber = 1;
var startClick = true;
var triviaQuestions = [(triviaQs.sections.thirtiesToFifties.questions), (triviaQs.sections.sixtiesToEighties.questions), (triviaQs.sections.nineties.questions)]
var roundInProgress = false;
var currentCanvasText = [];
function drawQuestion(qnumber, fs, fx, fy) {
    fixCanvas();
    console.log(canvasText)
    for (x = 0; x < canvasText.length; x++) {
        if (x != 0) {
            $('canvas').drawText({
                fillStyle: 'black',
                strokeStyle: 'black',
                strokeWidth: 0,
                x: fx, y: (fy + (20 * x)),
                fontSize: fs,
                fontFamily: 'Verdana, sans-serif',
                text: canvasText[x],
                scaleX: 1,
                scaleY: 1,
            })
        } else {
            $('canvas').drawText({
                fillStyle: 'black',
                strokeStyle: 'black',
                strokeWidth: 0,
                x: fx, y: (fy + (20 * x)),
                fontSize: (fs + 3),
                fontFamily: 'Verdana, sans-serif',
                text: canvasText[x],
                scaleX: 1,
                scaleY: 1,
            })
        }
    }

}
function canvasView(one, two, three, four) {
    console.log(one, two, three, four)
    newText = [];
    newText = [currentCanvasText.join(""), one, two, three, four]
    return (currentCanvasText.join("") + " " + one + " " + two + " " + three + " " + four)


}
// need the answers for this portion //
var answerData = triviaAnswers.sectionOne.answers
var newText = [];
function createText(question) {
    var answers = [];
    switch (question) {
        case "one":
            var answers = [
                answerData[0].one[0],
                answerData[0].one[1],
                answerData[0].one[2],
                answerData[0].one[3]
            ]
            break;
        case "two":
            var answers = [
                answerData[1].two[0],
                answerData[1].two[1],
                answerData[1].two[2],
                answerData[1].two[3]
            ]
            break;
        case "three":
            var answers = [
                answerData[2].three[0],
                answerData[2].three[1],
                answerData[2].three[2],
                answerData[2].three[3]
            ]
            break;
    }
    var one = ("1: " + answers[0])
    var two = ("2: " + answers[1])
    var three = ("3: " + answers[2])
    var four = ("4: " + answers[3])
    var toParse = (one + " <br> " + two + " <br> " + three + " <br> " + four)
    // var toHtml = $.parseHTML(toParse)
    return console.log(canvasView(one, two, three, four))

}

$("#startButton").on("click", function () {

    if (!roundInProgress) {
        if (roundNumber === 1) {
            var currentQs = triviaQuestions[0];
            $("#headerOne").text(triviaQs.sections.thirtiesToFifties.header)
        }

        // saved older one in function below //
        if (roundNumber === 2) {

            $("#headerOne").text(triviaQs.sections.sixtiesToEighties.header);
            var currentQs = triviaQuestions[1];

            fixCanvas();
        }
        roundInProgress = true;
        $("#startButton").text("Next Question")
    }
    if (roundInProgress) {
        if (roundNumber === 1) {
            //use triviaQuestions[0][n]
            switch (questionNumber) {
                case 1:
                    currentCanvasText = [];
                    currentCanvasText.push(triviaQuestions[0][0])
                    $('canvas').clearCanvas();
                    newText = [];
                    createText("one");
                    canvasText = newText;
                    drawQuestion(0, 5, 150, 20)
                    questionNumber++;
                    break;
                case 2:
                    console.log(currentQs)
                    currentCanvasText = [];
                    currentCanvasText.push(triviaQuestions[0][1])
                    $('canvas').clearCanvas();
                    newText = [];
                    createText("two");
                    canvasText = newText;
                    drawQuestion(1, 5, 150, 20)
                    questionNumber++;
                    break;
                case 3:
                    currentCanvasText = [];
                    currentCanvasText.push(triviaQuestions[0][2])
                    $('canvas').clearCanvas();
                    newText = [];
                    createText("three");
                    canvasText = newText;
                    drawQuestion(2, 5, 150, 20)
                    questionNumber++;
                    break;
                case 4:
                    currentCanvasText = [];
                    currentCanvasText.push(triviaQuestions[0][3])
                    $('canvas').clearCanvas();
                    newText = [];
                    createText("four");
                    canvasText = newText;
                    drawQuestion(3, 5, 150, 20)
                    questionNumber = 1;
                    $("#startButton").text("Next Round")
                    roundInProgress = false;
                    roundNumber++;
                    break;
            }
        } else if (roundNumber === 2) {

        }
    }

    createText();
})

// While Round is going: //

// game function work end //
// building canvas text below //







// Canvas Work //

// End Canvas Work //