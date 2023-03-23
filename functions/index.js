const functions = require("firebase-functions");
const Filter = require("bad-words");

const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore();

exports.detectEvilUsers = functions.firestore
    .document("my-collection/{docId}")
    .onCreate( async (doc, ctx) => {
      const filter = new Filter();
      const {text, uid} = doc.data();

      if (filter.isProfane(text)) {
        await doc.ref.update({text: "I got banned for life"});

        await db.collection("banned").doc(uid).set({});
      }
    });

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
