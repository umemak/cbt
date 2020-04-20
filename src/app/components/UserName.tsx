import * as React from 'react';

import firebase from '../firebase/clientApp';

const UserName: React.FC = () => {
  const auth = firebase.auth();
  auth.signInAnonymously().catch(() => {
    console.error('login error');
  });
  const uid = process.browser ? auth.currentUser.uid : 'SSR';

  return (
    <>
      <p>こんにちは、{uid} さん。</p>
    </>
  );
};

export default UserName;
