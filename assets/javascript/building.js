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
            for (x = 0; x < 4; x++) {
                var buttonClass = [$(".red"), $(".green"), $(".blue"), $(".yellow")]
                var buttonText = ["1", "2", "3", "4"]
                var color = buttonClass[x];
                color.text(buttonText[x])
            }
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
                "Y2k",
                "Sublime"],
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
                three: ["Section Three: 3 Answer 1",
                    "Section Three: 3 Answer 2",
                    "Section Three: 3 Answer 3",
                    "Section Three: 3 Answer 4"
                ]
            },
            {
                four: ["Section Three: 4 Answer 1",
                    "Section Three: 4 Answer 2",
                    "Section Three: 4 Answer 3",
                    "Section Three: 4 Answer 4"
                ]
            }]
    }
}



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
        $("#headerOne").css({ fontSize: "2em", height: "17vh" })
        if (roundInProgress) {
            $("#startButton").text("Next")
        }

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
        $("#headerOne").css({ fontSize: "4em", height: "17vh" })
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
function answerHelper(a, b, c, d, e, f) {
    console.log(e, f)
    if (e === f) {
        return console.log("correct")
    } else {
        return console.log("incorrect")
    }

}
function answerChecker(currentThis, guess) {
    var thisOne;
    var thisTwo;
    var thisThree;
    var thisFour;
    var thisAnswer;

    switch (roundNumber) {
        case 1:
            switch (questionNumber) {
                case 1:
                    console.log(questionNumber)
                    thisOne = currentThis[0].one[0]
                    thisTwo = currentThis[0].one[1]
                    thisThree = currentThis[0].one[2]
                    thisFour = currentThis[0].one[3]
                    thisAnswer = 1;


                    break;
                case 2:
                    thisOne = currentThis[1].two[0];
                    thisTwo = currentThis[1].two[1];
                    thisThree = currentThis[1].two[2];
                    thisFour = currentThis[1].two[3];
                    thisAnswer = 2;


                    break;
                case 3:
                    thisOne = currentThis[2].three[0];
                    thisTwo = currentThis[2].three[1];
                    thisThree = currentThis[2].three[2];
                    thisFour = currentThis[2].three[3];
                    thisAnswer = 3;


                    break;
                case 4:
                    thisOne = currentThis[3].four[0];
                    thisTwo = currentThis[3].four[1];
                    thisThree = currentThis[3].four[2];
                    thisFour = currentThis[3].four[3];
                    thisAnswer = 2;


                    break;
            }
            answerHelper(thisOne, thisTwo, thisThree, thisFour, thisAnswer, guess)
            break;
        case 2:

            switch (questionNumber) {
                case 1:
                    thisOne = currentThis[0].one[0]
                    thisTwo = currentThis[0].one[1]
                    thisThree = currentThis[0].one[2]
                    thisFour = currentThis[0].one[3]
                    thisAnswer = 2;

                    break;
                case 2:

                    thisOne = currentThis[1].two[0];
                    thisTwo = currentThis[1].two[1];
                    thisThree = currentThis[1].two[2];
                    thisFour = currentThis[1].two[3];
                    thisAnswer = 2;

                    break;
                case 3:
                    thisOne = currentThis[2].three[0];
                    thisTwo = currentThis[2].three[1];
                    thisThree = currentThis[2].three[2];
                    thisFour = currentThis[2].three[3];
                    thisAnswer = 3;

                    break;
                case 4:
                    thisOne = currentThis[3].four[0];
                    thisTwo = currentThis[3].four[1];
                    thisThree = currentThis[3].four[2];
                    thisFour = currentThis[3].four[3];
                    thisAnswer = 4;

                    break;
            }
            answerHelper(thisOne, thisTwo, thisThree, thisFour, thisAnswer, guess)
            break;
        case 3:
            switch (questionNumber) {
                case 1:
                    thisOne = currentThis[0].one[0]
                    thisTwo = currentThis[0].one[1]
                    thisThree = currentThis[0].one[2]
                    thisFour = currentThis[0].one[3]
                    thisAnswer = 4;

                    break;
                case 2:

                    thisOne = currentThis[1].two[0];
                    thisTwo = currentThis[1].two[1];
                    thisThree = currentThis[1].two[2];
                    thisFour = currentThis[1].two[3];
                    thisAnswer = 2;

                    break;
                case 3:
                    thisOne = currentThis[2].three[0];
                    thisTwo = currentThis[2].three[1];
                    thisThree = currentThis[2].three[2];
                    thisFour = currentThis[2].three[3];
                    thisAnswer = 1;

                    break;
                case 4:
                    thisOne = currentThis[3].four[0];
                    thisTwo = currentThis[3].four[1];
                    thisThree = currentThis[3].four[2];
                    thisFour = currentThis[3].four[3];
                    thisAnswer = 1;

                    break;
            }
            answerHelper(thisOne, thisTwo, thisThree, thisFour, thisAnswer, guess)
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
        if (roundNumber === 3) {

            $("#headerOne").text(triviaQs.sections.nineties.header);
            var currentQs = triviaQuestions[2];

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
                    console.log(questionNumber)
                    currentCanvasText = [];
                    currentCanvasText.push(triviaQuestions[0][0])
                    $('canvas').clearCanvas();
                    newText = [];
                    createText("one");
                    canvasText = newText;
                    drawQuestion(0, 5, 150, 20);
                    $(".sidebarColors").one("click", function () {
                        var guess = Number($(this).text());
                        console.log(guess)
                        answerChecker(triviaAnswers.sectionOne.answers, guess);
                        return questionNumber++;
                    })

                    break;
                case 2:
                    console.log(questionNumber)
                    currentCanvasText = [];
                    currentCanvasText.push(triviaQuestions[0][1])
                    $('canvas').clearCanvas();
                    newText = [];
                    createText("two");
                    canvasText = newText;
                    drawQuestion(1, 5, 150, 20)
                    $(".sidebarColors").one("click", function () {
                        var guess = Number($(this).text());
                        console.log(guess)
                        answerChecker(triviaAnswers.sectionOne.answers, guess);
                        return questionNumber++
                    })
                    break;
                case 3:
                    currentCanvasText = [];
                    currentCanvasText.push(triviaQuestions[0][2])
                    $('canvas').clearCanvas();
                    newText = [];
                    createText("three");
                    canvasText = newText;
                    drawQuestion(2, 5, 150, 20)
                    $(".sidebarColors").one("click", function () {
                        var guess = Number($(this).text());
                        console.log(guess)
                        answerChecker(triviaAnswers.sectionOne.answers, guess);
                        return questionNumber++
                    })
                    break;
                case 4:
                    currentCanvasText = [];
                    currentCanvasText.push(triviaQuestions[0][3])
                    $('canvas').clearCanvas();
                    newText = [];
                    createText("four");
                    canvasText = newText;
                    drawQuestion(3, 5, 150, 20)
                    $(".sidebarColors").one("click", function () {
                        var guess = Number($(this).text());
                        console.log(guess)
                        answerChecker(triviaAnswers.sectionOne.answers, guess);
                        $("#startButton").text("Next Round")
                        roundInProgress = false;
                        roundNumber++;
                        return questionNumber = 1;
                    })
                    break;
            }
        } else if (roundNumber === 2) {
            switch (questionNumber) {
                case 1:
                    currentCanvasText = [];
                    currentCanvasText.push(triviaQuestions[1][0])
                    $('canvas').clearCanvas();
                    newText = [];
                    createText("one");
                    canvasText = newText;
                    drawQuestion(0, 5, 150, 20)
                    $(".sidebarColors").one("click", function () {
                        var guess = Number($(this).text());
                        console.log(guess)
                        answerChecker(triviaAnswers.sectionTwo.answers, guess);
                        return questionNumber++
                    })

                    break;
                case 2:
                    console.log(currentQs)
                    currentCanvasText = [];
                    currentCanvasText.push(triviaQuestions[1][1])
                    $('canvas').clearCanvas();
                    newText = [];
                    createText("two");
                    canvasText = newText;
                    drawQuestion(1, 5, 150, 20)
                    $(".sidebarColors").one("click", function () {
                        var guess = Number($(this).text());
                        console.log(guess)
                        answerChecker(triviaAnswers.sectionTwo.answers, guess);
                        return questionNumber++
                    })
                    break;
                case 3:
                    currentCanvasText = [];
                    currentCanvasText.push(triviaQuestions[1][2])
                    $('canvas').clearCanvas();
                    newText = [];
                    createText("three");
                    canvasText = newText;
                    drawQuestion(2, 5, 150, 20)
                    $(".sidebarColors").one("click", function () {
                        var guess = Number($(this).text());
                        console.log(guess)
                        answerChecker(triviaAnswers.sectionTwo.answers, guess);
                        return questionNumber++
                    })
                    break;
                case 4:
                    currentCanvasText = [];
                    currentCanvasText.push(triviaQuestions[1][3])
                    $('canvas').clearCanvas();
                    newText = [];
                    createText("four");
                    canvasText = newText;
                    drawQuestion(3, 5, 150, 20)
                    $(".sidebarColors").one("click", function () {
                        var guess = Number($(this).text());
                        console.log(guess)
                        $("#startButton").text("Next Round")
                        answerChecker(triviaAnswers.sectionTwo.answers, guess);
                        roundNumber++;
                        roundInProgress = false;
                        return questionNumber = 1;
                    })
                    break;
            }
        } else if (roundNumber === 3) {
            switch (questionNumber) {
                case 1:
                    currentCanvasText = [];
                    currentCanvasText.push(triviaQuestions[2][0])
                    $('canvas').clearCanvas();
                    newText = [];
                    createText("one");
                    canvasText = newText;
                    drawQuestion(0, 5, 150, 20)
                    $(".sidebarColors").one("click", function () {
                        var guess = Number($(this).text());
                        console.log(guess)
                        answerChecker(triviaAnswers.sectionThree.answers, guess);
                        return questionNumber++
                    })
                    break;
                case 2:
                    console.log(currentQs)
                    currentCanvasText = [];
                    currentCanvasText.push(triviaQuestions[2][1])
                    $('canvas').clearCanvas();
                    newText = [];
                    createText("two");
                    canvasText = newText;
                    drawQuestion(1, 5, 150, 20)
                    $(".sidebarColors").one("click", function () {
                        var guess = Number($(this).text());
                        console.log(guess)
                        answerChecker(triviaAnswers.sectionThree.answers, guess);
                        return questionNumber++
                    })
                    break;
                case 3:
                    currentCanvasText = [];
                    currentCanvasText.push(triviaQuestions[2][2])
                    $('canvas').clearCanvas();
                    newText = [];
                    createText("three");
                    canvasText = newText;
                    drawQuestion(2, 5, 150, 20)
                    $(".sidebarColors").one("click", function () {
                        var guess = Number($(this).text());
                        console.log(guess)
                        answerChecker(triviaAnswers.sectionThree.answers, guess);
                        return questionNumber++
                    })
                    break;
                case 4:
                    currentCanvasText = [];
                    currentCanvasText.push(triviaQuestions[2][3])
                    $('canvas').clearCanvas();
                    newText = [];
                    createText("four");
                    canvasText = newText;
                    drawQuestion(3, 5, 150, 20)
                    $(".sidebarColors").one("click", function () {
                        var guess = Number($(this).text());
                        console.log(guess)
                        answerChecker(triviaAnswers.sectionThree.answers, guess);
                        $("#startButton").text("Result")
                        return questionNumber++
                    })
                    break;
                case 5:
                    currentCanvasText = [];
                    $('canvas').clearCanvas();
                    // Draw Result Board //

                    $("#startButton").text("Retry!")
                    questionNumber++;
                    answerChecker(triviaAnswers.sectionThree.answers);
                    break;
                case 6:
                    $("#startButton").text("Start")
                    questionNumber = 1;
                    roundNumber = 1;
                    roundInProgress = false;
                    break;

            }
        }
    }

    createText();


})

// While Round is going: //

// game function work end //
// building canvas text below //

// 3:48 Saturday, April 27th Notes
// We need to check what question is displayed, 


// access that question's section, 
// access that section's answers, 
// connect the buttons to the answers by index,
// check to see if the index is correct for each individual question






// Canvas Work //

// End Canvas Work //