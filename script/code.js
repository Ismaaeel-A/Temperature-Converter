/* function CtF() {
    let display = querySelector('[display]')
    let num1 = document.querySelector(['num1']).value
    let output = +num1 * 9 / 5 + 32
    display.value = (output)
    // console.log(output)
}

let button1 = document.querySelector('[CtF]')
button1.addEventListener('click', CtF) */

function CtF(){

    let numb1 = document.querySelector('[numb1]').value

    if (numb1 == '') {
        alert('Please input a number')
        document.querySelector('[display]').value = ''
    } else {
        let output = +numb1 * 9 / 5 + 32
        document.querySelector('[display]').value = output.toFixed(2)
    }
   
}
function FtC(){
  
    let numb1 = document.querySelector('[numb1]').value

    if (numb1 == '') {
        alert('Please input a number')
        document.querySelector('[display]').value = ''
    } else {
        let output = (+numb1 -32) * 5 / 9
        document.querySelector('[display]').value = output.toFixed(2)
    }
 
}

