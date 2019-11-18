/*jshint esversion: 6 */
const admin = require('firebase-admin');
const serviceAccount = require("./earthyclay-a4f72-firebase-adminsdk-shlpg-9f00ae148a.json");
const data = require("./ethtest.json");
const collectionKey = "test"; //name of the collection
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://earthyclay-a4f72.firebaseio.com"
});
const firestore = admin.firestore();
const settings = { timestampsInSnapshots: true };
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
}