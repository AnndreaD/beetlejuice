import { auth, db } from '../../../firebaseConfig';
import { logError, logWarning } from '../../logger';
import { Indexer } from '../baseTypes';
import { GetDataProps, WriteDataProps } from './types';

const DB_ROUTES = {
  TESTING: '/tester',
};

export const signIn = () => {
  auth
    .signInAnonymously()
    .then(() => {
      // Signed in..
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
};

/* 

// TODO: implement subscribers.

auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        console.log('logged in!!')
        // ...
    } else {
        // User is signed out
        // ...
    }
}); */

export const writeData = ({ URL, id, data, callBack }: WriteDataProps) => {
  db.ref(URL + (id ? id : '')).set(data, (error) => {
    if (error) {
      // Write failed
      logError("Couldn't write data to ", { URL, id, data, error });
    } else {
      // Data saved successfully!
      if (callBack) {
        callBack();
      }
    }
  });
};

export const getData = ({ URL, id, callBack }: GetDataProps) => {
  db.ref(URL + (id ? id : ''))
    .once('value')
    .then((snapshot: Indexer) => {
      if (snapshot.exists()) {
        callBack(snapshot.val());
      } else {
        logWarning('No data available');
        callBack(null);
      }
    })
    .catch((error: string | undefined) => {
      logError("Can't fetch data", { URL, id, error });
    });
};
