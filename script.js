let num = document.querySelector('input#txtn');
let lista = document.querySelector('select#flista')
let res = document.getElementById('res')
let valores = []

function isNum(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if(isNum(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = documente.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
}