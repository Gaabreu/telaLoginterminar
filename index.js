var pNome = document.querySelector('#pnome');
var sNome = document.querySelector('#snome');
var eMail = document.querySelector('#email');
var botao = document.querySelector('#submit');



botao.addEventListener('click', function(){



eMail.value.indexOf("@");
    if(eMail.value.length.indexOf ==-1){
        alert("E-mail invalido");
    }
        else{            
        
          eMail= eMail.value.split("@");     
            
          var e = eMail[1].indexOf(".");
                if(e ==-1){
                    alert("E-mail invalido");
                }
                    else{e.value.split(".");                    
                    }
        
        }
    
    if (pNome.value ==""){
        alert("Primeiro nome ainda não foi digitado");
    }
        else if(sNome.value ==""){
            alert("Segundo nome ainda não foi digitado");
        }
            else if(eMail.value ==""){
                alert("E-mail não foi digitado");
            }
               
                   
        

    })
    
//criar um modal



