// Firebase config (بدلها ببياناتك)
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  projectId: "PROJECT_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// تسجيل دخول بالإيميل
function loginEmail() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("تم تسجيل الدخول بنجاح");
      window.location.href = "home.html";
    })
    .catch(err => alert(err.message));
}

// Google
function loginGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(() => window.location.href = "home.html")
    .catch(err => alert(err.message));
}

// Facebook
function loginFacebook() {
  const provider = new firebase.auth.FacebookAuthProvider();
  auth.signInWithPopup(provider)
    .then(() => window.location.href = "home.html")
    .catch(err => alert(err.message));