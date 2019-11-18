/*jshint esversion: 6 */
const admin = require('firebase-admin');
const serviceAccount = require("./earthyclay-a4f72-firebase-adminsdk-shlpg-9f00ae148a.json");
// const data = require("./ethtest.json");
// const collectionKey = "test"; //name of the collection
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://earthyclay-a4f72.firebaseio.com"
});
const firestore = admin.firestore();
const collectionRef = firestore.collection('items_list');

collectionRef.where('collection', '==', 'Yarn Bowl').get()
.then(snapshot => {
    snapshot.forEach(doc => {
        // console.log(doc.id, '=>', doc.ref);

        doc.ref.update({collection: 'bowls'});
      });
});

// let docRef = firestore.collection('test').doc('alovelace');
// add document
// let setAda = docRef.set({
//   first: 'Ada',
//   last: 'Lovelace__',
//   born: 1815
// });


// Read Data

/* firestore.collection('test').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    // doc.data().update({last: 'alnoor'});

    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  }); */
/* const settings = { timestampsInSnapshots: true };
firestore.settings(settings);
if (data && (typeof data === "object")) {
    Object.keys(data).forEach(docKey => {
        firestore.collection(collectionKey)
        .doc()
        .set(data[docKey])
        .then((res) => {
            console.log("Document " + docKey + " successfully written!");
        }).catch((error) => {
            console.error("Error writing document: ", error);
        });
    });
} */