  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
  import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
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
  const app = initializeApp(firebaseConfig);
  const db = getDatabase();
  const auth = getAuth(app);

  //variables
  let Email= document.getElementById('email');
  let Password = document.getElementById('password');

  //register
  let RegisterUser = evt =>{
    evt.preventDefault();

    createUserWithEmailAndPassword(auth, Email.value, Password.value)
    .then((credentials)=>{

    })
    .catch((error)=>{
      console(error)
    })
  }
  