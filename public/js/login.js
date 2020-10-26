const users = JSON.parse(localStorage.getItem('users')) || [];

function login (){

    console.log(JSON.stringify(users));

   console.log(document.getElementById("flusername").value);

   // if(user != null){
   //     if(user.passwd == document.getElementById("flpasswd").value){
   //         alert("Login efetuado!");
   //     }
   //     else{
   //         alert("Senha inválida!");
   //     }
   // }else{
   //     alert("Usuário não encontrado!");
   // }
}
