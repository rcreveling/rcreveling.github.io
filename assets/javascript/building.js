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
                self: $("<div>", { id: "One", class: "btn col m3 sidebarColors red" }),
                header: $("<h3>"),
            },
            colOne: {
                self: $("<div>", { id: "Two", class: "btn col m3 sidebarColors green" }),
            },
            colTwo: {
                self: $("<div>", { id: "Three", class: "btn col m3 sidebarColors blue" }),
            },
            colThree: {
                self: $("<div>", { id: "Four", class: "btn col m3 sidebarColors yellow" }),
            },
        },
        rowFour: {
            row: $("<div>", { id: "sideRowFourth", class: "row sideRow  z-depth-3" }),
            col: {
                self: $("<div>", { id: "scoreKeeper", class: "col m12 white" })
            }
        },
        rowFive: {
            row: $("<div>", { id: "sideRowFifth", class: "row sideRow  z-depth-5" }),
            col: {
                self: $("<div>", { id: "informationText", class: "card m12 white" })
            }
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
var container = side.container;
var rowOne = side.rowOne;
var rowTwo = side.rowTwo;
var rowThree = side.rowThree;
var htmlBody = side.htmlBody;
for (section = 0; section < 8; section++) {
    switch (section) {
        case 0:
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
            $("#headerOne").text("Las Trivi-Eras")
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
            for (x = 0; x < 4; x++) {
                var buttonClass = [$(".red"), $(".green"), $(".blue"), $(".yellow")]
                var buttonText = ["1", "2", "3", "4"]
                var color = buttonClass[x];
                color.text(buttonText[x])
            }
            break;
        case 5:
            var container = $(".container")
            var row = side.rowFour.row
            var col = side.rowFour.col.self

            $(".container").append(row)
            $("#scoreKeeper").css({
                fontSize: "2em",
                color: "white",
                border: "1px solid black",
                borderRadius: "10px",
            })
            $("#sideRowFourth").css({
                textAlign: "center",
                backgroundColor: "white",
                border: "1px solid black",
                borderRadius: "10px !important",
            })
            $("#sideRowFourth").append(col)
            $("#scoreKeeper").text("Score: " + String(0))
            break;
        case 6:
            var row = side.rowFive.row
            var col = side.rowFive.col.self
            var container = $(".container")
            row.append(col)
            container.append(row)
            $("#informationText").css({
                backgroundColor: "rgba(250, 250, 250, 0.5)",
                height: "15vh",
                textAlign: "center",
                fontSize: "2em",
                fontFamily: "Georgia, sans-serif",
                color: "black",
                borderRadius: "10px"
            })
            $("#informationText").text("Press Start to Begin!")
            break;
        case 7:
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
                width: "65vw",
                backgroundColor: "rgba(250, 250, 250, 0.6)",
                border: "none !important",
                padding: "none !important",
                display: "flex",
                marginLeft: "30vw",
                marginRight: "5vw",
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
                width: "18vw",
                paddingLeft: "0 !important",
            }, 500, "linear")
            $("#showSideButton").animate({ left: "18vw" }, 500, "linear")
            $("#informationText").animate({
                height: "25vh",
                fontSize: "1.5em",
                minWidth: "12vw",
                height: "30vh",
                borderRadius: "10px"
            }, 500, "linear")
            $("#myCanvas").animate({
                marginLeft: "20vw",
                width: "75vw",
            }, 500, "linear")
            $("#headerOne").animate({
                fontSize: "3em",
                height: "20vh",
                width: "13vw",
                paddingRight: "0vw"
            }, 320, "linear")
            sideSlide = true;
        }
        else if (sideSlide) {
            $("#sidebar").animate({
                width: "25vw"
            }, 500, "linear")
            $("#informationText").animate({
                height: "20vh",
                fontSize: "2em",
                minWidth: "16vw",
                height: "20vh",
                borderRadius: "10px",
            }, 500, "linear")
            $("#myCanvas").animate({
                marginLeft: "30vw",
                width: "65vw",
            }, 500, "linear")
            $("#showSideButton").animate({ left: "25vw" }, 500, "linear")
            $("#headerOne").animate({
                fontSize: "4em",
                height: "25vh",
                width: "18vw",
                paddingRight: "1vw"
            }, 320, "linear")

            sideSlide = false;
        }
    })
}
// Page Loaded //
//---------------------------------------------------------------------------------------------------------------------------------//
//Start adding Function //
var myCanvas = $("#myCanvas")
var canvasText = ""
var triviaQs = {
    sections: {
        thirtiesToFifties: {
            header: "1930's - 1950's Trivia",
            questions: ["In the 1930's, what could $25 dollars get you at a men's clothing store?",
                "Christian Dior's 1947 line including 'Huit' and 'Corolle' was called what?",
                "Entering the fifties, what changed the price and look of fashion forever?",
                "Post WWII fashion blossomed and evolved in what city?"]
        },
        sixtiesToEighties: {
            header: "1960's to 1980's Trivia",
            questions: ["What pet did Audrey Hepburn famously keep?",
                "What was the hottest Video Game of 1979?",
                "What was the Beatles' goodbye album?",
                "'When you put it on, something happens.' is attributed to which brand?"],
        },
        nineties: {
            header: "...1990's Trivia",
            questions: ["Was Limp Bizkit at the Forefront of style and culture?",
                "_____ Little Pill was Alanis Morissette's only achievement",
                "Bradley Nowell sang for which band until what year?",
                "What country had a Nuclear Power Plant scare at 12:02 01-01-2000?"],
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
                one: ["Suit, a hat, 3 pairs of socks, 2 dress shirts, a tie, a pair of shoes",
                    "Suit, hat, cane, matching shoes",
                    "2 dress shirts, a tie, handkerchief, gloves, hair gel",
                    "Chanel's first ever production Double Breasted Peacock sport coat"
                ]
            },
            {
                two: ["The Style",
                    "The New Look",
                    "Mordern Chique",
                    "The Fashion Revolution"
                ]
            },
            {
                three: ["Bedazzling",
                    "Canadian Hemp Fabric",
                    "Artifically blended Fabrics",
                    "Military Style Wool (Roswell Was a Coverup)"
                ]
            },
            {
                four: ["Berlin",
                    "Paris",
                    "London",
                    "New York City"
                ]
            }
        ]
    },
    sectionTwo: {
        answers: [
            {
                one: ["A German Shepard named Rosco",
                    "A Deer named Pippin",
                    "A Tigress named Lola",
                    "A Parrot named Pretty"]
            },
            {
                two: ["The Oregon Trail",
                    "Space Invaders",
                    "Super Hi-Res Chess",
                    "Beyond the Tesseract"
                ]
            },
            {
                three: ["Yesterday and Today",
                    "The Beatles",
                    "Let it Be",
                    "My Bonnie/The Saints"
                ]
            },
            {
                four: ["Ralph Lauren",
                    "Starter",
                    "Chess King",
                    "Members Only"
                ]
            }]
    },
    sectionThree: {
        answers: [
            {
                one: ["yes..?",
                    "no.",
                    "Don't ask stupid questions, punk",
                    "He did it all for the nookie"]
            },
            {
                two: ["Salty",
                    "Jagged",
                    "Blue",
                    "Big"
                ]
            },
            {
                three: ["Sublime, 1996",
                    "Reel Big Fish, 1999",
                    "Smash Mouth, 1997",
                    "No Doubt, 1992"
                ]
            },
            {
                four: ["South Korea",
                    "Czechoslovakia",
                    "Japan",
                    "Chechnya"
                ]
            }]
    }
}
$("#showSideButton").on("click", function () {
    if (sideSlide === true) {
        $('canvas').detectPixelRatio(function (ratio) {
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
        $("#headerOne").css({ fontSize: "2em", height: "17vh", paddingLeft: "none", width: "8vw" })
        if (roundInProgress) {
            $("#startButton").text("Next")
        }
    } else {
        $('canvas').detectPixelRatio(function (ratio) {
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
        $("#headerOne").css({ fontSize: "4em", height: "17vh", paddingLeft: "none", width: "15vw" })
        if (roundInProgress) {
            $("#startButton").text("Next Question")
        }
    }
})
// Game function //
// fixCanvas helper function used often //
function fixCanvas() {
    $('canvas').detectPixelRatio(function (ratio) {
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
// canvas variables then canvas functions to draw questions and answers //
var roundNumber = 1;
var questionNumber = 1;
var triviaQuestions = [(triviaQs.sections.thirtiesToFifties.questions), (triviaQs.sections.sixtiesToEighties.questions), (triviaQs.sections.nineties.questions)]
var roundInProgress = false;
var currentCanvasText = [];
var score = 0;
var roundScores = [];
function drawQuestion(qnumber, fs, fx, fy) {
    fixCanvas();
    for (x = 0; x < canvasText.length; x++) {
        if (x != 0) {
            $('canvas').drawText({
                fillStyle: 'black',
                strokeStyle: 'black',
                strokeWidth: 0.5,
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
                strokeWidth: 0.5,
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
    newText = [];
    newText = [currentCanvasText.join(""), one, two, three, four]
    return (currentCanvasText.join("") + " " + one + " " + two + " " + three + " " + four)
}
// Answer Checker function //
function answerHelper(a, b) {
    if (a === b) {
        score++;
        questionNumber++;
        $("#sideRowFourth").text("Score: " + String(score));
        $("#informationText").html("Correct!" + "<br>" + "+1")
        $("#sideRowFifth").animate({
            backgroundColor: "lawngreen",
            borderRadius: "10px"
        }, 200, "swing", function () {
            $("#startButton").text("Next Question");
        })
        $("#sideRowFifth").animate({
            backgroundColor: "rgba(180, 180, 180, 0.3)",
            borderRadius: "10px"
        }, 1500, "swing")
        return
    }
    else {

        questionNumber++;
        $("#informationText").html("Wrong..." + "<br>" + "Correct Answer: " + String(a))
        $("#sideRowFifth").animate({
            backgroundColor: "red",
            borderRadius: "10px"
        }, 200, "swing", function () {
            $("#startButton").text("Next Question")

        })
        $("#sideRowFifth").animate({
            backgroundColor: "rgba(180, 180, 180, 0.3)",
            borderRadius: "10px"
        }, 1500, "swing")

    }
}

// --___--____----____------_____-------______---------__________-----------______________---------------__________________-----------------------
// FINAL SCREEN FUNCTION //
function endGame(a) {
    console.log(a)
    var scoreDisplay = {
        finScreenText: ["You made it through a tough challenge there",
            "pudding pop", "- 30's-50's:  ", "- 60's-80's Quiz:  ", "- 90's:  ...do the math", "Total Score = "],
        backgroundImage: "url(assets/images/Allen.jpg)",
    }
    var lines = {
        first: "",
        second: "",
        third: "",
        fourth: "",
        fifth: "",
        sixth: "",
        extra: "",
    }
    lines.first = (scoreDisplay.finScreenText[0]);
    lines.second = (scoreDisplay.finScreenText[2] + roundScores[0]);
    lines.third = (scoreDisplay.finScreenText[3] + (roundScores[1] - roundScores[0]));
    lines.fourth = (scoreDisplay.finScreenText[4]);
    lines.fifth = (scoreDisplay.finScreenText[5] + a)
    lines.extra = (scoreDisplay.finScreenText[1])
    var linesArr = [lines.first, lines.extra, lines.second, lines.third, lines.fourth, lines.fifth]
    var fx;

    console.log(linesArr)
    debugger;
    // CURRENT ATTEMPT //    
    fixCanvas();
    for (x = 0; x < linesArr.length; x++) {

        if (x === 5) {
            $('canvas').drawText({
                fillStyle: 'black',
                strokeStyle: 'black',
                strokeWidth: 0.5,
                x: 150, y: (20 + (20 * x)),
                fontSize: 15,
                fontFamily: 'Georgia, serif',
                text: linesArr[x],
                scaleX: 1,
                scaleY: 1,
            })
        }
        if (x >= 2 && x !== 5) {
            if (x === 2) {
                fx = 100;
                var fff = "'Montserrat, sans-serif'";
            } else if (x === 3) {
                fx = 110;
                var fff = "'Wendy one, sans-serif'";
            } else {
                fx = 115;
                var fff = "'Gugi, cursive'";
            }
            $('canvas').drawText({
                fillStyle: 'black',
                strokeStyle: 'black',
                strokeWidth: 0.5,
                x: fx, y: (20 + (20 * x)),
                fontSize: 10,
                fontFamily: fff,
                text: linesArr[x],
                scaleX: 1,
                scaleY: 1,
            })
        }
        if (x === 0 || x === 1) {
            $('canvas').drawText({
                fillStyle: 'black',
                strokeStyle: 'black',
                strokeWidth: 0.5,
                x: 150, y: (20 + (20 * x)),
                fontSize: 14,
                fontFamily: 'Georgia, serif',
                text: linesArr[x],
                scaleX: 1,
                scaleY: 1,
            })
        }
    }
    // CURRENT ATEMPT END //
}
// END //
function answerChecker(guess) {
    console.log($("#startButton").text())
    var thisAnswer;
    switch (roundNumber) {
        case 1:
            switch (questionNumber) {
                case 1:
                    console.log(questionNumber)
                    thisAnswer = 1;
                    break;
                case 2:
                    console.log(questionNumber)
                    thisAnswer = 2;
                    break;
                case 3:
                    console.log(questionNumber)
                    thisAnswer = 3;
                    break;
                case 4:
                    thisAnswer = 2;
                    break;
            }
            answerHelper(thisAnswer, guess)
            break;
        case 2:
            switch (questionNumber) {
                case 1:
                    thisAnswer = 2;
                    break;
                case 2:
                    thisAnswer = 2;
                    break;
                case 3:

                    thisAnswer = 3;

                    break;
                case 4:
                    thisAnswer = 4;
                    break;
            }
            answerHelper(thisAnswer, guess)
            break;
        case 3:
            switch (questionNumber) {
                case 1:
                    thisAnswer = 4;

                    break;
                case 2:
                    thisAnswer = 2;
                    break;
                case 3:
                    thisAnswer = 1;
                    break;
                case 4:
                    thisAnswer = 1;
                    break;
            }
            answerHelper(thisAnswer, guess)
            break;
    }
}
// need the answers for this portion //
var answerData = [];
var newText = [];
function createText(question) {
    if (roundNumber === 1) {
        answerData = triviaAnswers.sectionOne.answers
    } else if (roundNumber === 2) {
        answerData = triviaAnswers.sectionTwo.answers
    } else if (roundNumber === 3) {
        answerData = triviaAnswers.sectionThree.answers
    }
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
        case "four":
            var answers = [
                answerData[3].four[0],
                answerData[3].four[1],
                answerData[3].four[2],
                answerData[3].four[3]
            ]
            break;
    }
    var one = ("1: " + answers[0])
    var two = ("2: " + answers[1])
    var three = ("3: " + answers[2])
    var four = ("4: " + answers[3])
    // var toParse = (one + " <br> " + two + " <br> " + three + " <br> " + four)
    // var toHtml = $.parseHTML(toParse)
    return canvasView(one, two, three, four)
}
function submitGuess(a) {
    answerChecker(a)
    console.log(a)
}
var currentQs = [];
function roundNotInProgress(roundNumber) {
    if (roundNumber === 1) {
        questionNumber = 1;
        currentQs = triviaQuestions[0];
        $("#headerOne").text(triviaQs.sections.thirtiesToFifties.header)
        $("#headerOne").css({
            fontFamily: "'Montserrat', 'sans-serif'",
            backgroundColor: "rgba(0, 30, 255, 0.6)",
            color: "rgb(210, 190, 205)",
            textShadow: "2px 2px 2px orange",
            borderRadius: "15px",
            border: "1px solid orange",
            boxShadow: "inset 0px 2px 3px 1px rgb(20, 20, 50)",
            transition: ".5s ease",
        })
        $("#mainWrap").css({
            backgroundImage: "url(assets/images/background-blur-blurred-949587.jpg)",
            backgroundSize: "cover",
            boxShadow: "inset 0px 0px 4px black",
            transition: ".5s ease",
        })
        $("#sidebar").css({
            backgroundColor: "rgba(100, 100, 70, 0.7)",
            boxShadow: "inset 0px 0px 4px black",
            transition: ".5s ease",
        })
        $('canvas').css({
            backgroundColor: "rgba(250, 250, 250, 0.8)",
            border: "1px solid black",
            boxShadow: "inset 0px 0px 10px black",
            transition: ".5s ease",
        })
    }
    // saved older one in function below //
    if (roundNumber === 2) {
        questionNumber = 1;
        $("#headerOne").text(triviaQs.sections.sixtiesToEighties.header);
        $("#headerOne").css({
            fontFamily: "'Wendy One', 'sans-serif'",
            fontSize: "4.2em",
            backgroundColor: "rgb(204, 204, 0)",
            color: "rgba(220, 100, 220, 0.8)",
            textShadow: "2px 2px black",
            borderRadius: "15px",
            border: "1px solid orange",
            boxShadow: "inset 0px 2px 3px 1px rgb(20, 20, 50)",
            transition: ".5s ease",
        })
        $("#mainWrap").css({
            backgroundImage: "url(assets/images/art-artistic-attractive-990824.jpg)",
            backgroundSize: "cover",
            boxShadow: "inset 0px 0px 4px black",
            transition: ".5s ease",
        })
        $("#sidebar").css({
            backgroundColor: "rgba(175, 50, 175, 0.7)",
            boxShadow: "inset 0px 0px 4px black",
            transition: ".5s ease",
        })
        $('canvas').css({
            backgroundColor: "rgba(250, 250, 250, 0.8)",
            border: "1px solid black",
            boxShadow: "inset 0px 0px 10px black",
            transition: ".5s ease",
        })
        currentQs = triviaQuestions[1];
        fixCanvas();
        return roundScores.push(score);
    }
    if (roundNumber === 3) {
        questionNumber = 1;
        $("#headerOne").text(triviaQs.sections.nineties.header);
        $("#headerOne").css({
            fontFamily: "'Gugi', 'cursive'",
            fontSize: "4.5em",
            backgroundColor: "rgb(0, 250, 200)",
            color: "rgba(153, 51, 255, 0.8)",
            textShadow: "2px 2px salmon",
            borderRadius: "15px",
            border: "1px 1px solid purple",
            boxShadow: "inset 0px 2px 3px 1px rgb(20, 20, 50)",
            transition: ".5s ease",
        })
        $("#mainWrap").css({
            backgroundImage: "url(assets/images/90s-website-style.jpg)",
            backgroundSize: "cover",
            boxShadow: "inset 0px 0px 4px black",
            transition: ".5s ease",
        })
        $("#sidebar").css({
            backgroundColor: "rgba(253, 128, 140, 0.7)",
            boxShadow: "inset 0px 0px 4px black",
            transition: ".5s ease",
        })
        $('canvas').css({
            backgroundColor: "rgba(250, 250, 250, 0.8)",
            border: "1px solid black",
            boxShadow: "inset 0px 0px 10px black",
            transition: ".5s ease",

        })
        currentQs = triviaQuestions[2];
        fixCanvas();
        return roundScores.push(score);
    }
}
var userClick = [];
$("#startButton").on("click", function () {
    console.log(roundNumber, roundInProgress)
    $("#informationText").text(" ")
    if (roundNumber === 4) {
        endGame(score);
    }
    if (!roundInProgress) {
        roundNotInProgress(roundNumber);
        roundInProgress = true;
        $("#startButton").text("Next Question")
    }
    if (roundInProgress) {
        var controllerText = $("#startButton").text();
        // IF "NEXT QUESTION" //
        if (controllerText !== "Submit Answer" && controllerText !== "End Game" && controllerText === "Next Question") {
            if (roundNumber === 1) {
                switch (questionNumber) {
                    case 1:
                        currentCanvasText = [];
                        currentCanvasText.push(triviaQuestions[0][0])
                        $('canvas').clearCanvas();
                        newText = [];
                        createText("one");
                        canvasText = newText;
                        drawQuestion(0, 5, 150, 20);
                        break;
                    case 2:
                        currentCanvasText = [];
                        currentCanvasText.push(triviaQuestions[0][1])
                        $('canvas').clearCanvas();
                        newText = [];
                        createText("two");
                        canvasText = newText;
                        drawQuestion(1, 5, 150, 20)
                        break;
                    case 3:
                        currentCanvasText = [];
                        currentCanvasText.push(triviaQuestions[0][2])
                        $('canvas').clearCanvas();
                        newText = [];
                        createText("three");
                        canvasText = newText;
                        drawQuestion(2, 5, 150, 20)
                        break;
                    case 4:
                        currentCanvasText = [];
                        currentCanvasText.push(triviaQuestions[0][3])
                        $('canvas').clearCanvas();
                        newText = [];
                        createText("four");
                        canvasText = newText;
                        drawQuestion(3, 5, 150, 20)
                        break;
                }
                $("#startButton").text("Select Answer...");
            }
            else if (roundNumber === 2) {
                switch (questionNumber) {
                    case 1:
                        currentCanvasText = [];
                        currentCanvasText.push(triviaQuestions[1][0])
                        $('canvas').clearCanvas();
                        newText = [];
                        createText("one");
                        canvasText = newText;
                        drawQuestion(0, 5, 150, 20)
                        break;
                    case 2:
                        currentCanvasText = [];
                        currentCanvasText.push(triviaQuestions[1][1])
                        $('canvas').clearCanvas();
                        newText = [];
                        createText("two");
                        canvasText = newText;
                        drawQuestion(1, 5, 150, 20)
                        break;
                    case 3:
                        currentCanvasText = [];
                        currentCanvasText.push(triviaQuestions[1][2])
                        $('canvas').clearCanvas();
                        newText = [];
                        createText("three");
                        canvasText = newText;
                        drawQuestion(2, 5, 150, 20)
                        break;
                    case 4:
                        currentCanvasText = [];
                        currentCanvasText.push(triviaQuestions[1][3])
                        $('canvas').clearCanvas();
                        newText = [];
                        createText("four");
                        canvasText = newText;
                        drawQuestion(3, 5, 150, 20)
                        break;
                }
                $("#startButton").text("Select Answer...");
            } else if (roundNumber === 3) {
                console.log(questionNumber)
                switch (questionNumber) {
                    case 1:
                        currentCanvasText = [];
                        currentCanvasText.push(triviaQuestions[2][0])
                        $('canvas').clearCanvas();
                        newText = [];
                        createText("one");
                        canvasText = newText;
                        drawQuestion(0, 5, 150, 20)
                        break;
                    case 2:
                        currentCanvasText = [];
                        currentCanvasText.push(triviaQuestions[2][1])
                        $('canvas').clearCanvas();
                        newText = [];
                        createText("two");
                        canvasText = newText;
                        drawQuestion(1, 5, 150, 20)
                        break;
                    case 3:
                        currentCanvasText = [];
                        currentCanvasText.push(triviaQuestions[2][2])
                        $('canvas').clearCanvas();
                        newText = [];
                        createText("three");
                        canvasText = newText;
                        drawQuestion(2, 5, 150, 20)
                        break;
                    case 4:
                        currentCanvasText = [];
                        currentCanvasText.push(triviaQuestions[2][3])
                        $('canvas').clearCanvas();
                        newText = [];
                        createText("four");
                        canvasText = newText;
                        drawQuestion(3, 5, 150, 20)
                        break;
                    case 5:
                        currentCanvasText = [];
                        $('canvas').clearCanvas();
                        // Draw Result Board //
                        $("#startButton").text("Retry!")
                        break;
                    case 6:
                        $("#startButton").text("Start")
                        questionNumber = 1;
                        roundNumber = 1;
                        roundInProgress = false;
                        break;
                }
                $("#startButton").text("Select Answer...");
            }
        }
        // END //
        // IF "SELECT ANSWER" //
        if (controllerText !== "Submit Answer" && controllerText !== "End Game" || controllerText === "Select Answer...") {
            switch (roundNumber) {
                case 1:
                    if (questionNumber === 5) {
                        $("#startButton").text("Next Round")
                        roundInProgress = false;
                        roundNumber++;
                        $("#sideRowFour").text("Round One Complete")
                    } else {
                        $(".sidebarColors").on("click", function () {
                            $("#startButton").text("Submit Answer")
                            userClick[0] = ($(this).text())
                            $("#informationText").html("Your Choice: " + userClick[0] + "<br>" + "   And...")
                            return
                        })
                    }
                    break;
                case 2:
                    if (questionNumber === 5) {
                        $("#startButton").text("Next Round")
                        roundInProgress = false;
                        roundNumber++;
                        $("#sideRowFour").text("Round One Complete")
                    } else {
                        $(".sidebarColors").on("click", function () {
                            $("#startButton").text("Submit Answer")
                            userClick[0] = ($(this).text())
                            $("#informationText").html("Your Choice: " + userClick[0] + "<br>" + "   And...")
                            return
                        })
                    }
                    break;
                case 3:
                    if (questionNumber === 5) {
                        $("#startButton").text("End Game")
                        roundInProgress = false;
                        roundNumber++;
                        $("#sideRowFour").text("Round One Complete")
                    } else if (questionNumber === 6) {
                        currentCanvasText = [];
                        $('canvas').clearCanvas();
                        // Draw Result Board //
                        $("#startButton").text("Retry!")
                    } else if (questionNumber === 7) {
                        $("#startButton").text("Start")
                        questionNumber = 1;
                        roundNumber = 1;
                        roundInProgress = false;
                    }
                    else {
                        $(".sidebarColors").on("click", function () {
                            console.log(userClick)
                            $("#startButton").text("Submit Answer")
                            userClick[0] = ($(this).text())
                            $("#informationText").html("Your Choice: " + userClick[0] + "<br>" + "   And...")
                            return
                        })
                    }
                    break;
            }
        }
        // END //
        // IF "SUBMIT ANSWER" //
        if (controllerText === "Submit Answer") {
            console.log(userClick)
            $("#informationText").fadeOut("slow", function () {
                submitGuess(Number(userClick))
                $("#informationText").fadeIn("fast", function () {
                    $("#informationText").animate({
                        fontSize: "2.5em"
                    }, 200, "linear", function () {
                        $("#informationText").animate({
                            fontSize: "2em"
                        }, 200, "linear")
                    })
                    userClick = [""];
                })
            })


        }
        // END //
    }
})