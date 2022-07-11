const get = {
    byId: (id) => {
        return document.getElementById(id)
    }
}

let input_decimal = get.byId('decimal')
let input_binary = get.byId('binary')
let button_convert = get.byId('convert')

let button_copy = get.byId('copy')
let message_box = get.byId('message')

// Events
button_convert.addEventListener('click', () => {
    console.clear()
    let decimal_raw = parseInt(input_decimal.value)
    let toBinary = decimal_raw.toString(2)

    console.log(decimal_raw) // Decimal
    console.log(toBinary) // Binary

    if(decimal_raw){
        console.log(input_binary.value)
        input_binary.value = toBinary
        message_box.style.color ='greenyellow'
        message_box.textContent = ''
    }else if(!decimal_raw){
        alert('Is empty or container letter, it is wrong!!')
        input_decimal.value = ''
        input_binary.value = ''
    }
})

button_copy.addEventListener('click', () => {
    let value = input_binary.value

    if(value)
    {
        navigator.clipboard.writeText(value)

        message_box.textContent = 'Copied!'
        
        input_decimal.value = ''
        input_binary.value = ''
    }else{
        message_box.textContent = 'Empty!'
        message_box.style.color ='red'
    }
})