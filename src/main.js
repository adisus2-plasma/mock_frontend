import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0XKFNnyUMG0vgh43Jac2PJ2Q7__dZ3Xo",
  authDomain: "vue-firebase-auth-28f72.firebaseapp.com",
  projectId: "vue-firebase-auth-28f72",
  storageBucket: "vue-firebase-auth-28f72.appspot.com",
  messagingSenderId: "955551655616",
  appId: "1:955551655616:web:5697adc89397fe5979af25"
};

initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router)

app.config.globalProperties.axios = axios
app.mount('#app')

