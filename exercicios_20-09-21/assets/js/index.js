

let nome=document.querySelector('#nome');
let email=document.querySelector('#email');
let assunto =document.querySelector('#assunto');
let mapa=document.querySelector('#mapa');
let nomeIsOk=false;
let emailIsOk=false;
let assuntoIsOk=false;

nome.style.width="100%";
email.style.width="100%";

function validaNome(){
    let txtNome=document.querySelector('#txtNome');
    if(nome.value.length< 3){
        nome.style.border="1px solid red";
        txtNome.style.color="red";
        txtNome.style.marginTop="0.5rem";
        txtNome.innerHTML="Nome inválido"
        nomeIsOk=false;
        
    }else{
        nome.style.border="1px solid green"
        txtNome.innerHTML="Nome válido";
        txtNome.style.color="green";
        nomeIsOk=true
        
    }
}

function validaEmail(){
    let caracteres=['@','.com']
    let txtEmail=document.querySelector('#txtEmail')
    if(email.value.indexOf(caracteres[0,1])==-1){
        email.style.border="1px solid red";
        txtEmail.style.color="red";
        txtEmail.style.marginTop="0.5rem";
        txtEmail.innerHTML="Email inválido";
        emailIsOk=false
    }else{
        txtEmail.innerHTML="Email válido";
        txtEmail.style.color="green"
        email.style.border="1px solid green"
        emailIsOk=true
    }
}

function validaAssunto(){
    let txtAssunto=document.querySelector('#txtAssunto')
    if(assunto.value.length>100){   
        txtAssunto.innerHTML="Assunto inválido";
        assunto.style.border="1px solid red";
        txtAssunto.style.color="red";
        txtAssunto.style.marginTop="0.5rem";
        assuntoIsOk=false
     
    }else {
        txtAssunto.style.display="none"
        assuntoIsOk=true;
    }
}

function enviar(){

    if(nomeIsOk==true && assuntoIsOk==true && emailIsOk==true){
        alert("success")
    } 
    else{
        alert("error")
    }

}

function mapaZoom(){
    mapa.style.width="40rem"
    mapa.style.height="33rem"
    
}
function mapaNormal(){
    mapa.style.width="20rem"
    mapa.style.height="13rem"
}