function loginEmail(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('password').value;

    firebaseConfig.auth().signInwithEmailAndPassword(email,password),then(()=>{
        alert("Usuário Logado");
    }).cath(err =>{
        console.log('error', error)
    })
}