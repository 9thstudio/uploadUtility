const admin = require('./node_modules/firebase-admin');
const serviceAccount = require("./serviceAccountKey.json");
const data = require("./earthyclay_prodlist.json");
const collectionKey = "items_list"; //name of the collection
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