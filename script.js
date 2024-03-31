const firebaseConfig = {
  apiKey: "AIzaSyD-vv1gRVnoiqq2N5siE8IBkdpJfVJd5As",
  authDomain: "login-62d6a.firebaseapp.com",
  databaseURL: "https://login-62d6a-default-rtdb.firebaseio.com",
  projectId: "login-62d6a",
  storageBucket: "login-62d6a.appspot.com",
  messagingSenderId: "600702885133",
  appId: "1:600702885133:web:49562a1db1799983ad6444",
  measurementId: "G-PQJHGVPJL4"
};
firebase.initializeApp(firebaseConfig);



// Get a reference to the database service
const db = firebase.firestore();

// Form submission event
document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const contactNumber = document.getElementById('contact-number').value;
  const password = document.getElementById('create-pswd').value;


  // Save the data to Firebase Firestore
  db.collection('users').doc('users').add({
      firstName: firstName,
      lastName: lastName,
      email: email,
      contactNumber: contactNumber,
      password: password,

  })
  .then(function(docRef) {
      console.log('Document written with ID: ', docRef.id);
      // Redirect or do something else upon successful submission
      window.location.href = 'pie.html';
  })
  .catch(function(error) {
      console.error('Error adding document: ', error);
  });
});
