const admin = require("firebase-admin");
const { auth, firestore, https, pubsub } = require("firebase-functions");
admin.initializeApp();

// HTTPS Functions
const h = require("./https");
exports.next = https.onRequest(h.hosting.next);
