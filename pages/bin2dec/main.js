const get = {
    byId: (id) => {
        return document.getElementById(id)
    }
}

let bin = get.byId('binary')
let dec = get.byId('decimal')
let btn_convert = get.byId('convert')
let copy_btn = get.byId('copy')
let msg = get.byId('message')

btn_convert.addEventListener('click', () =>{
    
    let binary = parseInt(bin.value, 2)
    console.log(binary)
    if(binary){
        dec.value = binary
        msg.style.color ='greenyellow'
        msg.textContent = ''
    }else if(!binary){
        alert('Is empty or container letter, it is wrong!!')
        dec.value = ''
        bin.value = ''
    }
    

})

copy_btn.addEventListener('click', () => {
    let value = dec.value

    if(value)
    {
        navigator.clipboard.writeText(value)
    
        msg.textContent = 'Copied!'
        
        bin.value = ''
        dec.value = ''
    }else{
        msg.textContent = 'Empty!'
        msg.style.color ='red'
    }
})