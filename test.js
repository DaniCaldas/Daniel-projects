function clicar(){

    //função do nome
    var nome = document.querySelector('input#Nome') 
    var resposta = document.querySelector('h4#res')
    var name = String(nome.value)
    

    //Função da data de nascimento
    const data_de_nascimento = document.querySelector("input#date")
    const dnm = String(data_de_nascimento.value)


    //função do email
    
    let email = document.querySelector('input#email')
    let eml = String(email.value)

    //Respostas
    resposta.innerHTML = `${name}  ${dnm}  ${eml}`

    
    if(name == '' || name == 0 && data_de_nascimento > 12-12-2003){
        window.alert('Resultado inválido')
        resposta.innerHTML = 'ERRO no resultado'
    }
}

