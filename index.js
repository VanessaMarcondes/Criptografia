function cifraCesar(p, texto, critp = true){
    var alfabeto = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"
    var nAlfabeto = alfabeto.slice((p)*2) + alfabeto.slice(0,(p)*2)
    var nMensagem = ""
    if (critp){
        for (var i = 0; i < texto.length; i++){
            if (alfabeto.indexOf(texto[i]) > 0){
                var n = nAlfabeto.indexOf(texto[i])
                nMensagem = nMensagem + alfabeto[n]
            } else{
                nMensagem = nMensagem + texto[i]
            }
        }
    } else {
        for (var i = 0; i < texto.length; i++){
            if (alfabeto.indexOf(texto[i]) > 0){
                var n = alfabeto.indexOf(texto[i])
                nMensagem = nMensagem + nAlfabeto[n]
            } else{
                nMensagem = nMensagem + texto[i]
            }
        }
    }
    return nMensagem
}

function base64(texto, critp = true){
    var nMensagem = ""
    if (critp){
        nMensagem = atob(texto)
    } else {
        nMensagem = btoa(texto)
    }
    return nMensagem
}

var select = document.querySelector("#select")
var c = 0
select.addEventListener('change', (event) => {
    var escolha = event.target.value
    if (escolha == "valor1" & c == 0){
        var passo = document.createElement("label")
        passo.innerText = "Adicione um passo"
        passo.setAttribute('id', 'passo')
        var input = document.createElement("input")
        input.type = "number"
        input.id = "passo_input"
        passo.id = "passo_label"
        document.querySelector("#passo_cesar").append(passo)
        document.querySelector("#passo_cesar").append(input) 
        c = 1
    } else if (c == 1){
        console.log(c)
        c = 0   
        var passo_cesar = document.querySelector("#passo_cesar") 
        passo_cesar.removeChild(document.querySelector("#passo_input"))
        passo_cesar.removeChild(document.querySelector("#passo_label"))
    }
    
})

var enviar = document.querySelector("#submit")
enviar.addEventListener("click", function(event){
    event.preventDefault();
    var texto = document.querySelector("#texto").value
    var select = document.querySelector("#select")
    var nMensagem = ""
    var cript = document.querySelector("#codificar").checked
    if (select.value == "valor1"){
        var passo = Number(document.querySelector("#passo_input").value)
        console.log(cript)
        if (cript){
            nMensagem = cifraCesar(passo, texto, false)
        } else{
            nMensagem = cifraCesar(passo, texto, true)
        }
    }else if(select.value == "valor2") {
        if (cript){
            nMensagem = base64 (texto, false)
        } else{
            nMensagem = base64 (texto, true)
        }
    }

    var tagNovaMensagem  = document.querySelector("#nMensagem")
    tagNovaMensagem.value = nMensagem
    console.log(nMensagem)
    
})