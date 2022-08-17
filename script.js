class UI {
    constructor() {
        UI.ActualThemeSetterFromLocalStorage()
    }

    static themeHandler(clickedElement) {
        switch (clickedElement.target.innerText) {
            case "Dark":
                clickedElement.target.innerText = "Light"
                let darkTheme = { background: "#313131", color: "gray", buttonName: "Light" }
                localStorage.setItem("theme", JSON.stringify(darkTheme))

                UI.ActualThemeSetterFromLocalStorage()
                break;

            case "Light":
                clickedElement.target.innerText = "Dark"
                let lightTheme = { background: "#eee", color: "black", buttonName: "Dark" }
                localStorage.setItem("theme", JSON.stringify(lightTheme))

                UI.ActualThemeSetterFromLocalStorage()
                break;

            default:
                break;
        }
    }

    static ActualThemeSetterFromLocalStorage() {
        if (localStorage.getItem("theme") === null) {
            return;
        } else {
            let localStorageParsedData = JSON.parse(localStorage.getItem("theme"))
            document.querySelector("#theme").innerText = localStorageParsedData.buttonName
            document.body.style.background = localStorageParsedData.background
            document.body.style.color = localStorageParsedData.color
        }
    }

    static navigationHandler(clickedElement) {
        // console.log(clickedElement.target.innerText)
        switch (clickedElement.target.innerText) {
            case "≡":
                clickedElement.target.innerText = "X"
                document.querySelector("nav").style.left = "0px"
                break;

            case "X":
                clickedElement.target.innerText = "≡"
                document.querySelector("nav").style.left = "-300px"
                break;
        
            default:
                break;
        }
    }

    static showInformationPopup() {
        document.querySelector(".root").style.top = "1rem"
        // let timeOut = setTimeout(() => {
        //     document.querySelector(".root").style.top = "-15rem"
        // }, 6000)
    }

    static removeInformationPopup() {
        document.querySelector(".root").style.top = "-30rem"
    }
}

let firstInstanceOfClass = new UI()

document.querySelector("#theme").addEventListener("click", clickedElement => UI.themeHandler(clickedElement))

document.querySelector("#navigation").addEventListener("click", clickedElement => UI.navigationHandler(clickedElement))

addEventListener("DOMContentLoaded", () => UI.showInformationPopup())

document.querySelector("#removePopup").addEventListener("click", () => UI.removeInformationPopup())