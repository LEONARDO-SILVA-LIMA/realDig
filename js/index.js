
var click = document.querySelector(".click");
    click.addEventListener("click",function(){
    var x = document.querySelector("#senha");
    if(x.type ==="password"){
        x.type = "text";
        click.classList.remove("fa-eye");
        click.classList.add("fa-eye-slash");
    }else{
        click.classList.remove("fa-eye-slash");
        click.classList.add("fa-eye")
       
        x.type = "password" ;
    }
  });


  function maxLengthCheck(object)
  {
    if (object.value.length > object.maxLength)
      object.value = object.value.slice(0, object.maxLength)
  }

  
  document.querySelector('#botao').addEventListener('click', function () {
    var peso = document.querySelector('#peso').value;
    var altura = document.querySelector('#altura').value;
        altura = altura/100;
    var imc = peso / (altura * altura);
        imc = imc.toFixed(2);
    var hr = document.createElement('hr');
    var spanIMC = document.createElement('span');
    spanIMC.textContent = 'IMC: ' + imc;
    var divResultado = document.querySelector('#resultado');
   if( isNaN(imc)){
    var aviso = document.createElement('span');
    aviso.textContent = "Preencha os campos";
    divResultado.appendChild(hr);
    divResultado.appendChild(aviso);
   }else{
    divResultado.appendChild(hr);
    divResultado.appendChild(spanIMC);
   }
  });

 
 /*document.querySelector("click").addEventListener("click", function(){
    var x = document.getElementById("senha");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  });*/