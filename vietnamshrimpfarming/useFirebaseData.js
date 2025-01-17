import { useEffect, useState } from 'react';
import { database } from './FirebaseConfig'; // Adjust the path to your Firebase config file

const useFirebaseData = (path) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const ref = database.ref(path);

    const listener = ref.on('value', (snapshot) => {
      setData(snapshot.val());
    });

    return () => ref.off('value', listener); // Clean up listener on unmount
  }, [path]);

  return data;
};

export default useFirebaseData;
