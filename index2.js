var pNome = document.querySelector('#pnome');
var sNome = document.querySelector('#snome');
var eMail = document.querySelector('#email');
var botao = document.querySelector('#submit');


function validar (){
    var nome1 = pNome.value;
    var nome2 = sNome.value;
    var mail = eMail.value;


        if (nome1 ==""){
            alert("Preencha o primeiro nome!");
            return false;
        }
        if (nome2==""){
            alert("Preencha o segundo nome!");
            return false;
        }
        if (mail ==""){
            alert("Preencha o E-mail!");
            return false;
        }    
             if (mail.indexOf("@") ==-1 ){
                alert("E-mail invalido!");
                return false;
            }          
              if (mail.indexOf(".")==-1){
                    alert("E-mail invalido");
                    return false;
                    
                }
                return true;
}


botao.addEventListener('click',validar);
   