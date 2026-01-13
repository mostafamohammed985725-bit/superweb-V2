// Firebase config (بدل القيم من Firebase)
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  projectId: "PROJECT_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// تسجيل / دخول ايميل تلقائي
function loginEmail() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("تم تسجيل الدخول");
    })
    .catch(() => {
      // اذا ما موجود يسوي حساب تلقائي
      auth.createUserWithEmailAndPassword(email, password)
        .then(() => alert("تم إنشاء حساب جديد"))
        .catch(err => alert(err.message));
    });
}

// تسجيل دخول Google
function loginGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(() => alert("تم تسجيل الدخول Google"))
    .catch(err => alert(err.message));
}