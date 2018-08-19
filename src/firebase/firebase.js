import * as firebase from 'firebase';

// Initialize Firebase
  const prodConfig = {
    apiKey: "AIzaSyCHjT29MEEsR3LCEjFG57P6P2cZB3IfrLI",
    authDomain: "exec-dashboard-ecf54.firebaseapp.com",
    databaseURL: "https://exec-dashboard-ecf54.firebaseio.com",
    projectId: "exec-dashboard-ecf54",
    storageBucket: "exec-dashboard-ecf54.appspot.com",
    messagingSenderId: "298050179651"
  };

  const devConfig = {
    apiKey: "AIzaSyCHjT29MEEsR3LCEjFG57P6P2cZB3IfrLI",
    authDomain: "exec-dashboard-ecf54.firebaseapp.com",
    databaseURL: "https://exec-dashboard-ecf54.firebaseio.com",
    projectId: "exec-dashboard-ecf54",
    storageBucket: "exec-dashboard-ecf54.appspot.com",
    messagingSenderId: "298050179651"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;


  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const auth = firebase.auth();
  const db = firebase.database();

  export {
    auth,
    db
  };
