const { createElement } = require("react")

console.log("ola mundo")

function AddItem (){
    const input = document.getElementById('Item')
    const lista = document.getElementById('ItemsLista')

    if (input.value.trim() === '') {
        NullField()
        return
    }
    const li = document.createElement('li')
    li.textContent = input.value
    lista.appendChild(li)
    input.value =''
    input.focus()
}

function NullField (){
    const input = document.getElementById('Item')
    const lblTask = document.getElementById('lbltarefas')

    //alert(`Insira um valor no campo ${lblTask.innerText}`)
    alert("Insira um valor no campo " + lblTask.innerText)
    input.focus()
}