const firebaseConfig = {
    apiKey: "AIzaSyALNzJNzkWZ1RFeTLr1ia1nqudqG8PQrOQ",
    authDomain: "projeto2miateste-65488.firebaseapp.com",
    projectId: "projeto2miateste-65488",
    storageBucket: "projeto2miateste-65488.appspot.com",
    messagingSenderId: "355974222752",
    appId: "1:355974222752:web:cd347840c81b90154d4ac5"
  };

  firebase.initializeApp(firebaseConfig);

  const emailField = document.getElementById('email');
  const passwordField = document.getElementById('password');
  const loginButton = document.getElementById('loginButton');

  loginButton.addEventListener('click', ()=>{
    const email = emailField.value;
    const password = passwordField.value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential)=>{
        const user = userCredential.user;
        console.log("Usuário logado: ", user)
    })
    .catch((error)=>{
        const errorMessage = error.message;
        console.error("Erro de autenticação: ", errorMessage)
    })     
  })