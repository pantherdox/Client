  // Import the functions you need from the SDKs you need
  import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyDz_k07dvzZqvv7VnVegD-yzRmoc_UEpww",
      authDomain: "clientauth23.firebaseapp.com",
      projectId: "clientauth23",
      storageBucket: "clientauth23.appspot.com",
      messagingSenderId: "178278748617",
      appId: "1:178278748617:web:bd955c3293bf74ea3e9818",
      measurementId: "G-WDH162JKVZ"
    };

  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const database = getDatabase(app);
  // const auth = getAuth();
  const signup = document.querySelector('#signup');
  signup.addEventListener('click', (e) => {
    console.log("chal ja bc");
  //   var email = document.getElementById('email').value;
  //   var password = document.getElementById('password').value;
    
  //   createUserWithEmailAndPassword(auth, email, password)
  // .then((userCredential) => {
  //   // Signed in 
  //   const user = userCredential.user;
  //   set(ref(database, 'users/' + user.uid), {
  //     email: email,
  //   });
  //   alert("user created!");
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   alert(errorMessage);
  //   // ..
  });