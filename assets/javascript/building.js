var ob = {
    idClass: function (theDiv) {
        var thisClass = theDiv.attr('class');
        switch (thisClass) {
            case "mainDiv":
                theDiv.css({
                    height: "75vh",
                    width: "60vw",
                    backgroundColor: "blue",
                    display: "flex",

                })
                myVariables.sections.mainContent.self.append(theDiv);
                break;
            case "mainCanvas":
                theDiv.css({
                    height: "70vh",
                    width: "60vw",
                    backgroundColor: "blue",
                    border: "none !important",
                    padding: "none !important",
                    display: "flex",

                })
                $("#mainDiv").append(theDiv);
                break;
        }
    },
}

var main = page.main
var sidebar = page.sidebar
var orderedDocument = [main, sidebar]
for (x = 0; x < 1; x++) {
    var section = orderedDocument[x];

    switch (section) {
        case main:
            console.log(main)
            var container = section.self;
            var maindiv = $("<div>", { id: "mainWrap", class: "mainWrap" })
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
                zIndex: m.zIndex,
                display: m.display
            })
            container.append(maindiv)
            break;
        // 
    }
}