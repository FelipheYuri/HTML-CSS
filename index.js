let elementName = document.getElementById("text");
let textAreaContent = [...document.getElementsByClassName(".boxes-text")];
let body = document.getElementById("body");
let blackWindow = document.getElementById("blackWindow");
let blackWindow2 = document.getElementById("blackWindow2");
const regex = /\S/;

let color = document.getElementById("color");
let create = document.getElementById("create");
let remove = document.getElementById("remove");
let selectAll = document.getElementById("select");

let red = document.getElementById("red");
let orange = document.getElementById("orange");
let yellow = document.getElementById("yellow");
let lime = document.getElementById("lime");
let green = document.getElementById("green");
let cyan = document.getElementById("cyan");
let blue = document.getElementById("blue");
let purple = document.getElementById("purple");
let pink = document.getElementById("pink");
let lightpink = document.getElementById("lightpink");
let white = document.getElementById("white");
let grey = document.getElementById("grey");
let black = document.getElementById("black");

let redSelected = false;
let orangeSelected = false;
let yellowSelected = false;
let limeSelected = false;
let greenSelected = false;
let cyanSelected = true;
let blueSelected = false;
let purpleSelected = false;
let pinkSelected = false;
let lightpinkSelected = false;
let whiteSelected = false;
let greySelected = false;
let blackSelected = false;

let section = document.getElementById("section");
let containers = [...document.getElementsByClassName("container1")];
let iconContainer = [...document.getElementsByClassName("icon1")];
let colorBox = document.getElementById("colorbox");

let selected = true;

let colorNumber = 0;

red.addEventListener("click", () => {
    colorbox.style.display = "none";
    blackWindow.style.display = "none";

    redSelected = true;
    orangeSelected = false;
    yellowSelected = false;
    limeSelected = false;
    greenSelected = false;
    cyanSelected = false;
    blueSelected = false;
    purpleSelected = false;
    pinkSelected = false;
    lightpinkSelected = false;
    whiteSelected = false;
    greySelected = false;
    blackSelected = false;
});

orange.addEventListener("click", () => {
    colorbox.style.display = "none";
    blackWindow.style.display = "none";

    redSelected = false;
    orangeSelected = true;
    yellowSelected = false;
    limeSelected = false;
    greenSelected = false;
    cyanSelected = false;
    blueSelected = false;
    purpleSelected = false;
    pinkSelected = false;
    lightpinkSelected = false;
    whiteSelected = false;
    greySelected = false;
    blackSelected = false;
});

yellow.addEventListener("click", () => {
    colorbox.style.display = "none";
    blackWindow.style.display = "none";

    redSelected = false;
    orangeSelected = false;
    yellowSelected = true;
    limeSelected = false;
    greenSelected = false;
    cyanSelected = false;
    blueSelected = false;
    purpleSelected = false;
    pinkSelected = false;
    lightpinkSelected = false;
    whiteSelected = false;
    greySelected = false;
    blackSelected = false;
});

lime.addEventListener("click", () => {
    colorbox.style.display = "none";
    blackWindow.style.display = "none";

    redSelected = false;
    orangeSelected = false;
    yellowSelected = false;
    limeSelected = true;
    greenSelected = false;
    cyanSelected = false;
    blueSelected = false;
    purpleSelected = false;
    pinkSelected = false;
    lightpinkSelected = false;
    whiteSelected = false;
    greySelected = false;
    blackSelected = false;
});

green.addEventListener("click", () => {
    colorbox.style.display = "none";
    blackWindow.style.display = "none";

    redSelected = false;
    orangeSelected = false;
    yellowSelected = false;
    limeSelected = false;
    greenSelected = true;
    cyanSelected = false;
    blueSelected = false;
    purpleSelected = false;
    pinkSelected = false;
    lightpinkSelected = false;
    whiteSelected = false;
    greySelected = false;
    blackSelected = false;
});

cyan.addEventListener("click", () => {
    colorbox.style.display = "none";
    blackWindow.style.display = "none";

    redSelected = false;
    orangeSelected = false;
    yellowSelected = false;
    limeSelected = false;
    greenSelected = false;
    cyanSelected = true;
    blueSelected = false;
    purpleSelected = false;
    pinkSelected = false;
    lightpinkSelected = false;
    whiteSelected = false;
    greySelected = false;
    blackSelected = false;
});

blue.addEventListener("click", () => {
    colorbox.style.display = "none";
    blackWindow.style.display = "none";

    redSelected = false;
    orangeSelected = false;
    yellowSelected = false;
    limeSelected = false;
    greenSelected = false;
    cyanSelected = false;
    blueSelected = true;
    purpleSelected = false;
    pinkSelected = false;
    lightpinkSelected = false;
    whiteSelected = false;
    greySelected = false;
    blackSelected = false;
});

purple.addEventListener("click", () => {
    colorbox.style.display = "none";
    blackWindow.style.display = "none";

    redSelected = false;
    orangeSelected = false;
    yellowSelected = false;
    limeSelected = false;
    greenSelected = false;
    cyanSelected = false;
    blueSelected = false;
    purpleSelected = true;
    pinkSelected = false;
    lightpinkSelected = false;
    whiteSelected = false;
    greySelected = false;
    blackSelected = false;
});

pink.addEventListener("click", () => {
    colorbox.style.display = "none";
    blackWindow.style.display = "none";

    redSelected = false;
    orangeSelected = false;
    yellowSelected = false;
    limeSelected = false;
    greenSelected = false;
    cyanSelected = false;
    blueSelected = false;
    purpleSelected = false;
    pinkSelected = true;
    lightpinkSelected = false;
    whiteSelected = false;
    greySelected = false;
    blackSelected = false;
});

lightpink.addEventListener("click", () => {
    colorbox.style.display = "none";
    blackWindow.style.display = "none";

    redSelected = false;
    orangeSelected = false;
    yellowSelected = false;
    limeSelected = false;
    greenSelected = false;
    cyanSelected = false;
    blueSelected = false;
    purpleSelected = false;
    pinkSelected = false;
    lightpinkSelected = true;
    whiteSelected = false;
    greySelected = false;
    blackSelected = false;
});

white.addEventListener("click", () => {
    colorbox.style.display = "none";
    blackWindow.style.display = "none";

    redSelected = false;
    orangeSelected = false;
    yellowSelected = false;
    limeSelected = false;
    greenSelected = false;
    cyanSelected = false;
    blueSelected = false;
    purpleSelected = false;
    pinkSelected = false;
    lightpinkSelected = false;
    whiteSelected = true;
    greySelected = false;
    blackSelected = false;
});

grey.addEventListener("click", () => {
    colorbox.style.display = "none";
    blackWindow.style.display = "none";

    redSelected = false;
    orangeSelected = false;
    yellowSelected = false;
    limeSelected = false;
    greenSelected = false;
    cyanSelected = false;
    blueSelected = false;
    purpleSelected = false;
    pinkSelected = false;
    lightpinkSelected = false;
    whiteSelected = false;
    greySelected = true;
    blackSelected = false;
});

black.addEventListener("click", () => {
    colorbox.style.display = "none";
    blackWindow.style.display = "none";

    redSelected = false;
    orangeSelected = false;
    yellowSelected = false;
    limeSelected = false;
    greenSelected = false;
    cyanSelected = false;
    blueSelected = false;
    purpleSelected = false;
    pinkSelected = false;
    lightpinkSelected = false;
    whiteSelected = false;
    greySelected = false;
    blackSelected = true;
});

function colorSet() {
    colorbox.style.display = "flex";
    blackWindow.style.display = "block";
}

function createBox() {
    if (!regex.test(elementName.value)) {
        alert("O elemento precisa ter nome!");
    } else {
        let div1 = document.createElement("div");
        let div1_1 = document.createElement("div");
        let div1_1_1 = document.createElement("div");
        let div1_2 = document.createElement("div");
        let div1_3 = document.createElement("div");
        let element = document.createElement("div");
        let icon = document.createElement("img");
        let icon2 = document.createElement("img");
        let button = document.createElement("input");
        let text = document.createTextNode(elementName.value);

        let showBox = document.createElement("div");
        let buttonsSection = document.createElement("div");
        let featureSection = document.createElement("div");
        let setSection = document.createElement("div");
        let icon4 = document.createElement("img");
        let icon5 = document.createElement("img");
        let name = document.createElement("div");
        let boxesSection = document.createElement("div");
        let nameText = document.createTextNode(elementName.value);
        
        let editBox = document.createElement("div");
        let colorButtonsSection = document.createElement("div");
        let editButton = document.createElement("input");
        let icon7 = document.createElement("img");
        let inputBox = document.createElement("div");
        let inputText = document.createElement("input");
        let colorBox = document.createElement("div");
        let redBox = document.createElement("div");
        let orangeBox = document.createElement("div");
        let yellowBox = document.createElement("div");
        let limeBox = document.createElement("div");
        let greenBox = document.createElement("div");
        let cyanBox = document.createElement("div");
        let blueBox = document.createElement("div");
        let purpleBox = document.createElement("div");
        let pinkBox = document.createElement("div");
        let lightpinkBox = document.createElement("div");
        let whiteBox = document.createElement("div");
        let greyBox = document.createElement("div");
        let blackBox = document.createElement("div");

        let textBox = document.createElement("div");
        let outSection = document.createElement("div");
        let icon6 = document.createElement("img");
        let textArea = document.createElement("textarea");
        let createText = document.createElement("input");

        element.appendChild(text);
        name.appendChild(nameText);
        icon.src = "https://icon-library.com/images/select-icon/select-icon-6.jpg";
        icon2.src = "https://www.svgrepo.com/show/6308/pen.svg";
        icon4.src = "https://www.svgrepo.com/show/68582/greek-cross.svg";
        icon5.src = "https://www.svgrepo.com/show/443957/gui-sign-out.svg";
        icon6.src = "https://www.svgrepo.com/show/443957/gui-sign-out.svg";
        icon7.src = "https://www.svgrepo.com/show/443957/gui-sign-out.svg";
        button.type = "button";
        button.value = "Ver";
        textArea.cols = "30";
        textArea.rows = "10";
        createText.type = "button";
        createText.value = "Criar";
        editButton.type = "button";
        editButton.value = "Editar";
        inputText.type = "text";
        inputText.placeholder = "edite aqui";


        section.appendChild(div1);
        div1.appendChild(div1_1);
        div1.appendChild(div1_2);
        div1.appendChild(div1_3);

        div1_1.appendChild(element);
        div1_1.appendChild(div1_1_1);
        div1_1_1.appendChild(icon2);
        div1_1_1.appendChild(icon);
        div1_3.appendChild(button);

        body.appendChild(showBox);
        showBox.appendChild(buttonsSection);
        showBox.appendChild(name);
        showBox.appendChild(boxesSection);

        buttonsSection.appendChild(featureSection);
        buttonsSection.appendChild(setSection);
        featureSection.appendChild(icon4);
        setSection.appendChild(icon5);

        body.appendChild(editBox);
        editBox.appendChild(colorButtonsSection);
        editBox.appendChild(inputBox);
        editBox.appendChild(colorBox);
        inputBox.appendChild(inputText);
        colorButtonsSection.appendChild(editButton);
        colorButtonsSection.appendChild(icon7);
        
        colorBox.appendChild(redBox);
        colorBox.appendChild(orangeBox);
        colorBox.appendChild(yellowBox);
        colorBox.appendChild(limeBox);
        colorBox.appendChild(greenBox);
        colorBox.appendChild(cyanBox);
        colorBox.appendChild(blueBox);
        colorBox.appendChild(purpleBox);
        colorBox.appendChild(pinkBox);
        colorBox.appendChild(lightpinkBox);
        colorBox.appendChild(whiteBox);
        colorBox.appendChild(greyBox);
        colorBox.appendChild(blackBox);

        body.appendChild(textBox);
        textBox.appendChild(outSection);
        textBox.appendChild(textArea);
        outSection.appendChild(createText);
        outSection.appendChild(icon6);

        div1.classList.add("container1");
        div1_1.classList.add("container1-1");
        div1_1_1.classList.add("container1-1-1")
        div1_2.classList.add("container1-2");
        div1_3.classList.add("container1-3");
        icon.classList.add("icon1");
        icon2.classList.add("icon2");

        showBox.classList.add("box");
        buttonsSection.classList.add("buttons-section");
        featureSection.classList.add("feature-section");
        setSection.classList.add("set-section");
        icon4.classList.add("icons");
        icon5.classList.add("icons");
        name.classList.add("name");
        boxesSection.classList.add("boxes-section");

        editBox.classList.add("edit-box");
        colorButtonsSection.classList.add("buttons-section");
        inputBox.classList.add("input-box");
        editButton.classList.add("edit-button");
        icon7.classList.add("icons");
        inputText.classList.add("edit-input");
        colorBox.classList.add("colors-box");

        redBox.classList.add("any-color-box");
        redBox.classList.add("red");
        orangeBox.classList.add("any-color-box");
        orangeBox.classList.add("orange");
        yellowBox.classList.add("any-color-box");
        yellowBox.classList.add("yellow");
        limeBox.classList.add("any-color-box");
        limeBox.classList.add("lime");
        greenBox.classList.add("any-color-box");
        greenBox.classList.add("green");
        cyanBox.classList.add("any-color-box");
        cyanBox.classList.add("cyan");
        blueBox.classList.add("any-color-box");
        blueBox.classList.add("blue");
        purpleBox.classList.add("any-color-box");
        purpleBox.classList.add("purple");
        pinkBox.classList.add("any-color-box");
        pinkBox.classList.add("pink");
        lightpinkBox.classList.add("any-color-box");
        lightpinkBox.classList.add("lightpink");
        whiteBox.classList.add("any-color-box");
        whiteBox.classList.add("white");
        greyBox.classList.add("any-color-box");
        greyBox.classList.add("grey");
        blackBox.classList.add("any-color-box");
        blackBox.classList.add("black");

        textBox.classList.add("add-box");
        outSection.classList.add("out-section");
        icon6.classList.add("icons");
        textArea.classList.add("boxes-text");
        createText.classList.add("add-button");

        let listColors = [...document.getElementsByClassName("any-color-box")];
        let blackBorder = getComputedStyle(inputBox).backgroundColor;

        boxesSection.scrollBy({
            top: boxesSection.clientHeight,
            behavior: "smooth"
        });

        if (redSelected == true) {
            div1.style.backgroundColor = "rgb(250, 12, 12)";
            showBox.style.backgroundColor = "rgb(250, 12, 12)";
            outSection.style.backgroundColor = "rgb(250, 12, 12)";
            div1_1_1.style.backgroundColor = "rgb(250, 12, 12)";
            inputBox.style.backgroundColor = "rgb(250, 12, 12)";
            colorBox.style.backgroundColor = "rgb(250, 12, 12)";
        } else if (orangeSelected == true) {
            div1.style.backgroundColor = "rgb(225, 108, 5)";
            showBox.style.backgroundColor = "rgb(225, 108, 5)";
            outSection.style.backgroundColor = "rgb(225, 108, 5)";
            div1_1_1.style.backgroundColor = "rgb(225, 108, 5)";
            inputBox.style.backgroundColor = "rgb(225, 108, 5)";
            colorBox.style.backgroundColor = "rgb(225, 108, 5)";
        } else if (yellowSelected == true) {
            div1.style.backgroundColor = "rgb(225, 214, 5)";
            showBox.style.backgroundColor = "rgb(225, 214, 5)";
            outSection.style.backgroundColor = "rgb(225, 214, 5)";
            div1_1_1.style.backgroundColor = "rgb(225, 214, 5)";
            inputBox.style.backgroundColor = "rgb(225, 214, 5)";
            colorBox.style.backgroundColor = "rgb(225, 214, 5)";
        } else if (limeSelected == true) {
            div1.style.backgroundColor = "rgb(89, 225, 5)";
            showBox.style.backgroundColor = "rgb(89, 225, 5)";
            outSection.style.backgroundColor = "rgb(89, 225, 5)";
            div1_1_1.style.backgroundColor = "rgb(89, 225, 5)";
            inputBox.style.backgroundColor = "rgb(89, 225, 5)";
            colorBox.style.backgroundColor = "rgb(89, 225, 5)";
        } else if (greenSelected == true) {
            div1.style.backgroundColor = "rgb(5, 225, 5)";
            showBox.style.backgroundColor = "rgb(5, 225, 5)";
            outSection.style.backgroundColor = "rgb(5, 225, 5)";
            div1_1_1.style.backgroundColor = "rgb(5, 225, 5)";
            inputBox.style.backgroundColor = "rgb(5, 225, 5)";
            colorBox.style.backgroundColor = "rgb(5, 225, 5)";
        } else if (cyanSelected == true) {
            div1.style.backgroundColor = "rgb(5, 225, 222)";
            showBox.style.backgroundColor = "rgb(5, 225, 222)";
            outSection.style.backgroundColor = "rgb(5, 225, 222)";
            div1_1_1.style.backgroundColor = "rgb(5, 225, 222)";
            inputBox.style.backgroundColor = "rgb(5, 225, 222)";
            colorBox.style.backgroundColor = "rgb(5, 225, 222)";
        } else if (blueSelected == true) {
            div1.style.backgroundColor = "rgb(5, 15, 225)";
            showBox.style.backgroundColor = "rgb(5, 15, 225)";
            outSection.style.backgroundColor = "rgb(5, 15, 225)";
            div1_1_1.style.backgroundColor = "rgb(5, 15, 225)";
            inputBox.style.backgroundColor = "rgb(5, 15, 225)";
            colorBox.style.backgroundColor = "rgb(5, 15, 225)";
        } else if (purpleSelected == true) {
            div1.style.backgroundColor = "rgb(111, 5, 225)";
            showBox.style.backgroundColor = "rgb(111, 5, 225)";
            outSection.style.backgroundColor = "rgb(111, 5, 225)";
            div1_1_1.style.backgroundColor = "rgb(111, 5, 225)";
            inputBox.style.backgroundColor = "rgb(111, 5, 225)";
            colorBox.style.backgroundColor = "rgb(111, 5, 225)";
        } else if (pinkSelected == true) {
            div1.style.backgroundColor = "rgb(225, 5, 203)";
            showBox.style.backgroundColor = "rgb(225, 5, 203)";
            outSection.style.backgroundColor = "rgb(225, 5, 203)";
            div1_1_1.style.backgroundColor = "rgb(225, 5, 203)";
            inputBox.style.backgroundColor = "rgb(225, 5, 203)";
            colorBox.style.backgroundColor = "rgb(225, 5, 203)";
        } else if (lightpinkSelected == true) {
            div1.style.backgroundColor = "rgb(225, 5, 71)";
            showBox.style.backgroundColor = "rgb(225, 5, 71)";
            outSection.style.backgroundColor = "rgb(225, 5, 71)";
            div1_1_1.style.backgroundColor = "rgb(225, 5, 71)";
            inputBox.style.backgroundColor = "rgb(225, 5, 71)";
            colorBox.style.backgroundColor = "rgb(225, 5, 71)";
        } else if (whiteSelected == true) {
            div1.style.backgroundColor = "white";
            showBox.style.backgroundColor = "white";
            outSection.style.backgroundColor = "white";
            div1_1_1.style.backgroundColor = "white";
            inputBox.style.backgroundColor = "white";
            colorBox.style.backgroundColor = "white";
        } else if (greySelected == true) {
            div1.style.backgroundColor = "grey";
            showBox.style.backgroundColor = "grey";
            outSection.style.backgroundColor = "grey";
            div1_1_1.style.backgroundColor = "grey";
            inputBox.style.backgroundColor = "grey";
            colorBox.style.backgroundColor = "grey";
        } else {
            div1.style.backgroundColor = "black";
            showBox.style.backgroundColor = "black";
            outSection.style.backgroundColor = "black";
            div1_1_1.style.backgroundColor = "white";
            div1_1_1.style.borderRadius = "20px";
            inputBox.style.backgroundColor = "black";
            colorBox.style.backgroundColor = "black";
        }

        icon.addEventListener("click", () => {
            const currentColor = getComputedStyle(icon).backgroundColor;

            if (currentColor === "rgba(0, 0, 0, 0)" || currentColor === "transparent") {
                icon.style.backgroundColor = "rgb(100, 100, 255)";
            } else {
                icon.style.backgroundColor = "transparent";
            }
        });

        icon2.addEventListener("click", () => {
            editBox.style.display = "flex";
            blackWindow.style.display = "block";
        });

        button.addEventListener("click", () => {
            showBox.style.display = "flex";
            blackWindow.style.display = "block";
        });

        icon5.addEventListener("click", () => {
            showBox.style.display = "none";
            blackWindow.style.display = "none";
        });

        icon4.addEventListener("click", () => {
            textBox.style.display = "flex";
            blackWindow2.style.display = "block";
        });

        icon6.addEventListener("click", () => {
            textBox.style.display = "none";
            blackWindow2.style.display = "none";
        });

        icon7.addEventListener("click", () => {
            editBox.style.display = "none";
            blackWindow.style.display = "none";
        });

        redBox.addEventListener("click", () => {
            colorNumber = 1;

            listColors.map(colors => {
                let newColor = getComputedStyle(colors).backgroundColor;

                if (newColor !== "rgb(250, 12, 12)") {
                    colors.style.borderColor = "black";
                } else {
                    colors.style.borderColor = "rgb(0, 120, 255)";
                }
            });
        });

        orangeBox.addEventListener("click", () => {
            colorNumber = 2;

            listColors.map(colors => {
                let newColor = getComputedStyle(colors).backgroundColor;

                if (newColor !== "rgb(225, 108, 5)") {
                    colors.style.borderColor = "black";
                } else {
                    colors.style.borderColor = "rgb(0, 120, 255)";
                }
            });
        });

        yellowBox.addEventListener("click", () => {
            colorNumber = 3;

            listColors.map(colors => {
                let newColor = getComputedStyle(colors).backgroundColor;

                if (newColor !== "rgb(225, 214, 5)") {
                    colors.style.borderColor = "black";
                } else {
                    colors.style.borderColor = "rgb(0, 120, 255)";
                }
            });
        });

        limeBox.addEventListener("click", () => {
            colorNumber = 4;

            listColors.map(colors => {
                let newColor = getComputedStyle(colors).backgroundColor;

                if (newColor !== "rgb(89, 225, 5)") {
                    colors.style.borderColor = "black";
                } else {
                    colors.style.borderColor = "rgb(0, 120, 255)";
                }
            });
        });

        greenBox.addEventListener("click", () => {
            colorNumber = 5;

            listColors.map(colors => {
                let newColor = getComputedStyle(colors).backgroundColor;

                if (newColor !== "rgb(5, 225, 5)") {
                    colors.style.borderColor = "black";
                } else {
                    colors.style.borderColor = "rgb(0, 120, 255)";
                }
            });
        });

        cyanBox.addEventListener("click", () => {
            colorNumber = 6;

            listColors.map(colors => {
                let newColor = getComputedStyle(colors).backgroundColor;

                if (newColor !== "rgb(5, 225, 222)") {
                    colors.style.borderColor = "black";
                } else {
                    colors.style.borderColor = "rgb(0, 120, 255)";
                }
            });
        });

        blueBox.addEventListener("click", () => {
            colorNumber = 7;

            listColors.map(colors => {
                let newColor = getComputedStyle(colors).backgroundColor;

                if (newColor !== "rgb(5, 15, 225)") {
                    colors.style.borderColor = "black";
                } else {
                    colors.style.borderColor = "rgb(0, 120, 255)";
                }
            });
        });

        purpleBox.addEventListener("click", () => {
            colorNumber = 8;

            listColors.map(colors => {
                let newColor = getComputedStyle(colors).backgroundColor;

                if (newColor !== "rgb(111, 5, 225)") {
                    colors.style.borderColor = "black";
                } else {
                    colors.style.borderColor = "rgb(0, 120, 255)";
                }
            });
        });

        pinkBox.addEventListener("click", () => {
            colorNumber = 9;

            listColors.map(colors => {
                let newColor = getComputedStyle(colors).backgroundColor;

                if (newColor !== "rgb(225, 5, 203)") {
                    colors.style.borderColor = "black";
                } else {
                    colors.style.borderColor = "rgb(0, 120, 255)";
                }
            });
        });

        lightpinkBox.addEventListener("click", () => {
            colorNumber = 10;

            listColors.map(colors => {
                let newColor = getComputedStyle(colors).backgroundColor;

                if (newColor !== "rgb(225, 5, 71)") {
                    colors.style.borderColor = "black";
                } else {
                    colors.style.borderColor = "rgb(0, 120, 255)";
                }
            });
        });

        whiteBox.addEventListener("click", () => {
            colorNumber = 11;

            listColors.map(colors => {
                let newColor = getComputedStyle(colors).backgroundColor;

                if (newColor !== "rgb(255, 255, 255)") {
                    colors.style.borderColor = "black";
                } else {
                    colors.style.borderColor = "rgb(0, 120, 255)";
                }
            });
        });

        greyBox.addEventListener("click", () => {
            colorNumber = 12;

            listColors.map(colors => {
                let newColor = getComputedStyle(colors).backgroundColor;

                if (newColor !== "rgb(128, 128, 128)") {
                    colors.style.borderColor = "black";
                } else {
                    colors.style.borderColor = "rgb(0, 120, 255)";
                }
            });
        });

        blackBox.addEventListener("click", () => {
            colorNumber = 13;

            listColors.map(colors => {
                let newColor = getComputedStyle(colors).backgroundColor;

                if (newColor !== "rgb(0, 0, 0)") {
                    colors.style.borderColor = "black";
                } else {
                    colors.style.borderColor = "rgb(0, 120, 255)";
                }
            });
        });

        editButton.addEventListener("click", () => {
            if (colorNumber == 1) {
                div1.style.backgroundColor = "rgb(250, 12, 12)";
                showBox.style.backgroundColor = "rgb(250, 12, 12)";
                outSection.style.backgroundColor = "rgb(250, 12, 12)";
                div1_1_1.style.backgroundColor = "rgb(250, 12, 12)";
                inputBox.style.backgroundColor = "rgb(250, 12, 12)";
                colorBox.style.backgroundColor = "rgb(250, 12, 12)";
            } else if (colorNumber == 2) {
                div1.style.backgroundColor = "rgb(225, 108, 5)";
                showBox.style.backgroundColor = "rgb(225, 108, 5)";
                outSection.style.backgroundColor = "rgb(225, 108, 5)";
                div1_1_1.style.backgroundColor = "rgb(225, 108, 5)";
                inputBox.style.backgroundColor = "rgb(225, 108, 5)";
                colorBox.style.backgroundColor = "rgb(225, 108, 5)";
            } else if (colorNumber == 3) {
                div1.style.backgroundColor = "rgb(225, 214, 5)";
                showBox.style.backgroundColor = "rgb(225, 214, 5)";
                outSection.style.backgroundColor = "rgb(225, 214, 5)";
                div1_1_1.style.backgroundColor = "rgb(225, 214, 5)";
                inputBox.style.backgroundColor = "rgb(225, 214, 5)";
                colorBox.style.backgroundColor = "rgb(225, 214, 5)";
            } else if (colorNumber == 4) {
                div1.style.backgroundColor = "rgb(89, 225, 5)";
                showBox.style.backgroundColor = "rgb(89, 225, 5)";
                outSection.style.backgroundColor = "rgb(89, 225, 5)";
                div1_1_1.style.backgroundColor = "rgb(89, 225, 5)";
                inputBox.style.backgroundColor = "rgb(89, 225, 5)";
                colorBox.style.backgroundColor = "rgb(89, 225, 5)";
            } else if (colorNumber == 5) {
                div1.style.backgroundColor = "rgb(5, 225, 5)";
                showBox.style.backgroundColor = "rgb(5, 225, 5)";
                outSection.style.backgroundColor = "rgb(5, 225, 5)";
                div1_1_1.style.backgroundColor = "rgb(5, 225, 5)";
                inputBox.style.backgroundColor = "rgb(5, 225, 5)";
                colorBox.style.backgroundColor = "rgb(5, 225, 5)";
            } else if (colorNumber == 6) {
                div1.style.backgroundColor = "rgb(5, 225, 222)";
                showBox.style.backgroundColor = "rgb(5, 225, 222)";
                outSection.style.backgroundColor = "rgb(5, 225, 222)";
                div1_1_1.style.backgroundColor = "rgb(5, 225, 222)";
                inputBox.style.backgroundColor = "rgb(5, 225, 222)";
                colorBox.style.backgroundColor = "rgb(5, 225, 222)";
            } else if (colorNumber == 7) {
                div1.style.backgroundColor = "rgb(5, 15, 225)";
                showBox.style.backgroundColor = "rgb(5, 15, 225)";
                outSection.style.backgroundColor = "rgb(5, 15, 225)";
                div1_1_1.style.backgroundColor = "rgb(5, 15, 225)";
                inputBox.style.backgroundColor = "rgb(5, 15, 225)";
                colorBox.style.backgroundColor = "rgb(5, 15, 225)";
            } else if (colorNumber == 8) {
                div1.style.backgroundColor = "rgb(111, 5, 225)";
                showBox.style.backgroundColor = "rgb(111, 5, 225)";
                outSection.style.backgroundColor = "rgb(111, 5, 225)";
                div1_1_1.style.backgroundColor = "rgb(111, 5, 225)";
                inputBox.style.backgroundColor = "rgb(111, 5, 225)";
                colorBox.style.backgroundColor = "rgb(111, 5, 225)";
            } else if (colorNumber == 9) {
                div1.style.backgroundColor = "rgb(225, 5, 203)";
                showBox.style.backgroundColor = "rgb(225, 5, 203)";
                outSection.style.backgroundColor = "rgb(225, 5, 203)";
                div1_1_1.style.backgroundColor = "rgb(225, 5, 203)";
                inputBox.style.backgroundColor = "rgb(225, 5, 203)";
                colorBox.style.backgroundColor = "rgb(225, 5, 203)";
            } else if (colorNumber == 10) {
                div1.style.backgroundColor = "rgb(225, 5, 71)";
                showBox.style.backgroundColor = "rgb(225, 5, 71)";
                outSection.style.backgroundColor = "rgb(225, 5, 71)";
                div1_1_1.style.backgroundColor = "rgb(225, 5, 71)";
                inputBox.style.backgroundColor = "rgb(225, 5, 71)";
                colorBox.style.backgroundColor = "rgb(225, 5, 71)";
            } else if (colorNumber == 11) {
                div1.style.backgroundColor = "white";
                showBox.style.backgroundColor = "white";
                outSection.style.backgroundColor = "white";
                div1_1_1.style.backgroundColor = "white";
                inputBox.style.backgroundColor = "white";
                colorBox.style.backgroundColor = "white";
            } else if (colorNumber == 12) {
                div1.style.backgroundColor = "grey";
                showBox.style.backgroundColor = "grey";
                outSection.style.backgroundColor = "grey";
                div1_1_1.style.backgroundColor = "grey";
                inputBox.style.backgroundColor = "grey";
                colorBox.style.backgroundColor = "grey";
            } else if (colorNumber == 13){
                div1.style.backgroundColor = "black";
                showBox.style.backgroundColor = "black";
                outSection.style.backgroundColor = "black";
                div1_1_1.style.backgroundColor = "white";
                div1_1_1.style.borderRadius = "20px";
                inputBox.style.backgroundColor = "black";
                colorBox.style.backgroundColor = "black";
                blackBox.style.borderColor = "white";
            } else {
                alert("as cores nao foram selecionadas!")
            }

            if (!regex.test(inputText.value) && colorNumber == 0) {
                alert("O elemento precisa ter nome para ser editado!");
            } else if (!regex.test(inputText.value)) {
                alert("O elemento precisa ter nome para ser editado!");
                editBox.style.display = "none";
                blackWindow.style.display = "none";
            } else {
                element.innerHTML = inputText.value;
                name.innerHTML = inputText.value;
                inputText.value = null;

                editBox.style.display = "none";
                blackWindow.style.display = "none";
            }

            colorNumber == 0;
        });

        createText.addEventListener("click", () => {

            if (!regex.test(textArea.value)) {
                alert("O elemento não pode estar vazio!");
            } else {
                let boxes = document.createElement("div");
                let boxesText = document.createTextNode(textArea.value.trim());
                let divBox = document.createElement("div");
                let divText = document.createTextNode(textArea.value.trim());
                let icon8 = document.createElement("img");
                icon8.src = "https://static.vecteezy.com/system/resources/previews/021/352/964/large_2x/trash-icon-recycle-and-trash-sign-symbol-icon-free-png.png";

                boxesSection.appendChild(boxes);
                boxes.appendChild(boxesText);
                boxes.appendChild(icon8);
                boxes.classList.add("boxes");

                div1_2.appendChild(divBox);
                divBox.appendChild(divText);
                divBox.classList.add("div-box");
                icon8.classList.add("remove-icon")
    
                textBox.style.display = "none";
                blackWindow2.style.display = "none";
                textArea.value = null;

                icon8.addEventListener("click", () => {
                    boxes.remove();
                    divBox.remove();
                });
    
            }

        });

        iconContainer.push(icon);
        containers.push(div1);
        textAreaContent.push(textArea);
    }
}

function removeBox() {
    containers.map(div => {
        const currentColor = getComputedStyle(div.children[0].children[1].children[1]).backgroundColor;

        if (currentColor !== "rgba(0, 0, 0, 0)") {
            div.remove();
        } 
    });

    selectAll.style.backgroundColor = "rgba(0, 0, 0, 0)";
    selected = true;
}

create.addEventListener("click", createBox);
remove.addEventListener("click", removeBox);
color.addEventListener("click", colorSet);

selectAll.addEventListener("click", () => {
    if (selected == true) {
        selectAll.style.backgroundColor = "rgba(100, 100, 255, 1)";

        containers.map(div => {
            div.children[0].children[1].children[1].style.backgroundColor = "rgb(100, 100, 255)";
        });

        selected = false;
    } else {
        selectAll.style.backgroundColor = "rgba(0, 0, 0, 0)";

        containers.map(div => {
            div.children[0].children[1].children[1].style.backgroundColor = "rgba(0, 0, 0, 0)";
        });

        selected = true;
    }
});

document.addEventListener("keydown", function keyFunction() {
    key = event.key;

    textAreaContent.forEach(textElement => {

        if (document.activeElement !== elementName && document.activeElement !== textElement && document.activeElement !== inputText) {
            if(((key == 'a' || key == 'A') && event.shiftKey) && selected == true) {
                selectAll.style.backgroundColor = "rgba(100, 100, 255, 1)";
                selected = false;
                
                containers.map(div => {
                    div.children[0].children[1].children[1].style.backgroundColor = "rgb(100, 100, 255)";
                });
            } else if (((key == 'a' || key == 'A') && event.shiftKey) && selected == false) {
                selectAll.style.backgroundColor = "rgba(0, 0, 0, 0)";
    
                containers.map(div => {
                    div.children[0].children[1].children[1].style.backgroundColor = "rgba(0, 0, 0, 0)";
                });
    
                selected = true;
            }
            
            if ((key == 'c' || key == 'C') && event.shiftKey) {
                createBox();
            }
    
            if ((key == 'r' || key == 'R') && event.shiftKey) {
                removeBox();
            }
        }
    });
});
