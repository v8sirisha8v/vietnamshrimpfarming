import { useEffect, useState } from 'react';
import { database } from './FirebaseConfig';

const useFirebaseData = (path) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!database) {
      console.error("Firebase database is undefined!");
      return;
    }

    const ref = database.ref(path);

    const listener = ref.on('value', (snapshot) => {
      // console.log(`✅ Data from Firebase path "${path}":`, snapshot.val());
      setData(snapshot.val());
    });

    return () => ref.off('value', listener);
  }, [path]);

  return data;
};

export default useFirebaseData;
