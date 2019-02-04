import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// window.store = store;
Vue.config.productionTip = false;
window.$ = window.jQuery = require("jquery");
window.Popper = require("popper.js");
require("bootstrap");
require("./scss/app.scss");
window.Swal = require("sweetalert2");
import "sweetalert2/src/sweetalert2.scss";

import * as firebase from "firebase/app";
import "firebase/database";
window.firebase = firebase;
let config = {
  apiKey: "AIzaSyAnDoPgoFlV84RnkG38cNxgPFQ8FsZ0TJM",
  authDomain: "exam-91e3c.firebaseapp.com",
  databaseURL: "https://exam-91e3c.firebaseio.com",
  projectId: "exam-91e3c",
  storageBucket: "exam-91e3c.appspot.com",
  messagingSenderId: "1044357472023"
};
firebase.initializeApp(config);
window.firebaseDB = firebase.database();
window.todosRef = firebaseDB.ref("/todos");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
