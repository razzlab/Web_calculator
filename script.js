const displayOne = document.querySelector('.display1')
const displayTwo = document.querySelector('.display2')
const clearBtn = document.querySelector('.clear')
const deleteBtn = document.querySelector('.delete')
const sevenBtn = document.querySelector('.seven')
const eightBtn = document.querySelector('.eight')
const nineBtn = document.querySelector('.nine')
const divideBtn = document.querySelector('#divide')
const fourBtn = document.querySelector('.four')
const fiveBtn = document.querySelector('.five')
const sixBtn = document.querySelector('.six')
const multiplyBtn = document.querySelector('#multiply')
const oneBtn = document.querySelector('.one')
const twoBtn = document.querySelector('.two')
const threeBtn = document.querySelector('.three')
const minusBtn = document.querySelector('#minus')
const dotBtn = document.querySelector('.dot')
const zeroBtn = document.querySelector('.zero')
const equalBtn = document.querySelector('.equal')
const plusBtn = document.querySelector('#plus')



const buttons = document.querySelectorAll('button');
const operateButtons = document.querySelectorAll('.operators')
const operateButtonsInnertext = operateButtons

let numArray
let num1
let num2



buttons.forEach((btn) => {




    function operate() {



        let operator = findOperator()
        function findOperator() {
            if (displayOne.textContent.includes('+') == true) {
                return "+"
            } else if (displayOne.textContent.includes('-') == true) {
                return "-"
            } else if (displayOne.textContent.includes('x') == true) {
                return "x"
            } else if (displayOne.textContent.includes('÷') == true) {
                return "÷"
            }


        }



        let numArray = split()
        function split() {
            if (displayOne.textContent.includes('+') == true) {
                return displayOne.textContent.split("+")
            } else if (displayOne.textContent.includes('-') == true) {
                return displayOne.textContent.split("-")
            } else if (displayOne.textContent.includes('x') == true) {
                return displayOne.textContent.split("x")
            } else if (displayOne.textContent.includes('÷') == true) {
                return displayOne.textContent.split("÷")
            }

        }
        let num1 = Number(numArray[0])
        let num2 = Number(numArray[1])



        function result() {


            if (operator == "+") {
                return (num1 + num2)
            } else if (operator == "-") {
                return (num1 - num2)
            } else if (operator == "x") {
                return (num1 * num2)
            } else if (operator == "÷") {
                return (num1 / num2)
            } else { return operator }
        }


        return result()

    }










    btn.addEventListener('click', function () {



        if (btn.textContent == "=") {

            resulthere = (Math.floor(operate() * 10) / 10);
            displayTwo.textContent = resulthere;
            displayOne.textContent = resulthere;

        }
        else if (btn.textContent == ".") {

            if (displayOne.textContent.includes(".") == true) {
                if (displayOne.textContent.includes("+") == true || displayOne.textContent.includes("-") == true || displayOne.textContent.includes("x") == true || displayOne.textContent.includes("÷") == true) {




                    let numArray = split()
                    function split() {
                        if (displayOne.textContent.includes('+') == true) {
                            return displayOne.textContent.split("+")
                        } else if (displayOne.textContent.includes('-') == true) {
                            return displayOne.textContent.split("-")
                        } else if (displayOne.textContent.includes('x') == true) {
                            return displayOne.textContent.split("x")
                        } else if (displayOne.textContent.includes('÷') == true) {
                            return displayOne.textContent.split("÷")
                        }

                    }




                    if (numArray[1].includes(".") !== true) {
                        displayOne.textContent += btn.textContent;
                    } else if (numArray[1].includes(".") == true) { alert("can't use . twice") }
                } else if (displayOne.textContent.includes(".") == true) {
                    alert("can't use . twice")
                }
            }

            else {
                displayOne.textContent += btn.textContent;

            }
        }


        else if (btn.textContent == "CLEAR") {
            displayOne.textContent = ""
            displayTwo.textContent = ""
        }
        else if (btn.textContent == "DELETE") {
            displayOne.textContent = displayOne.textContent.slice(0, (displayOne.textContent.length - 1))
        }




        else if (btn == operateButtons[0] || btn == operateButtons[1] || btn == operateButtons[2] || btn == operateButtons[3]) {

            if (displayOne.textContent.includes("+") !== true && displayOne.textContent.includes("-") !== true && displayOne.textContent.includes("x") !== true && displayOne.textContent.includes("÷") !== true) {
                displayOne.textContent += btn.textContent;
            }


        }
        else {
            displayOne.textContent += btn.textContent;
        }
    })
})



