const alphabets_lower = 'abcdefghijklmnopqrstuvwxyz'
const alphabets_upper = alphabets_lower.toUpperCase()
const alphabets = alphabets_lower + alphabets_upper
function dis(val){
    document.getElementById('text').value += val
}

function clear_function(){
    document.getElementById('text').value = ""
}

function sol(){
    var x = document.getElementById('text').value
    var y = eval(x)
    document.getElementById('text').value = y
}

function backspace(){
    const delete_last = document.getElementById('text').value
    document.getElementById('text').value = delete_last.substr(0, delete_last.length-1)
}