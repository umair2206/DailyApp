// // server.js

// const express = require('express');
// const app = express();
// const path = require('path');

// app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/signin.html'));
// });

// const PORT = process.env.PORT || 550;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const app = express();
const path = require('path');

// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    // Set custom header
    res.set('X-Custom-Header', 'Custom Value');

    // Send the file
    res.sendFile(path.join(__dirname, '/signin.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});






// const express = require('express');
// const app = express();
// const path = require('path');

// app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/signin.html'));
// });

// const PORT = process.env.PORT || 5500;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

// // Firebase configuration
// const firebaseConfig = {
//         apiKey: "AIzaSyD-vv1gRVnoiqq2N5siE8IBkdpJfVJd5As",
//         authDomain: "login-62d6a.firebaseapp.com",
//         databaseURL: "https://login-62d6a-default-rtdb.firebaseio.com",
//         projectId: "login-62d6a",
//         storageBucket: "login-62d6a.appspot.com",
//         messagingSenderId: "600702885133",
//         appId: "1:600702885133:web:49562a1db1799983ad6444",
//         measurementId: "G-PQJHGVPJL4"
//       };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
  
//   // Get a reference to the database service
//   const db = firebase.firestore();
  
//   // Form submission event
//   document.getElementById('signup-form').addEventListener('submit', function(event) {
//       event.preventDefault(); // Prevent form submission
//       const firstName = document.getElementById('first-name').value;
//       const lastName = document.getElementById('last-name').value;
//       const email = document.getElementById('email').value;
//       const contactNumber = document.getElementById('contact-number').value;
  
//       // Save the data to Firebase Firestore
//       db.collection('users').add({
//               firstName: firstName,
//               lastName: lastName,
//               email: email,
//               contactNumber: contactNumber
//           })
//           .then(function(docRef) {
//               console.log('Document written with ID: ', docRef.id);
//               // Redirect or do something else upon successful submission
//               window.location.href = 'pie.html';
//           })
//           .catch(function(error) {
//               console.error('Error adding document: ', error);
//           });
//   });
  

// // server.js continued
// // const bodyParser = require('body-parser');
// // const firebase = require('firebase');

// // // Initialize Firebase with your configuration
// // const firebaseConfig = {
// //     apiKey: "AIzaSyD-vv1gRVnoiqq2N5siE8IBkdpJfVJd5As",
// //     authDomain: "login-62d6a.firebaseapp.com",
// //     databaseURL: "https://login-62d6a-default-rtdb.firebaseio.com",
// //     projectId: "login-62d6a",
// //     storageBucket: "login-62d6a.appspot.com",
// //     messagingSenderId: "600702885133",
// //     appId: "1:600702885133:web:49562a1db1799983ad6444",
// //     measurementId: "G-PQJHGVPJL4"
// //   };

// // firebase.initializeApp(firebaseConfig);
// // const database = firebase.database();

// // app.use(bodyParser.urlencoded({ extended: true }));

// // app.post('/signin', (req, res) => {
// //     const email = req.body.email;
// //     const password = req.body.password;

// //     firebase.auth().createUserWithEmailAndPassword(email, password)
// //         .then((userCredential) => {
// //             // User signed up successfully
// //             res.send('signup successfully');
// //         })
// //         .catch((error) => {
// //             // Handle errors
// //             res.status(400).send('Signup failed: ' + error.message);
// //         });
// // });

