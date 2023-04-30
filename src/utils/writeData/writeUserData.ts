import { doc, setDoc } from 'firebase/firestore';

import { db } from '@src/firebase';
import { User } from '@src/types';

export const writeUserData = async (user: User) => {
  await setDoc(doc(db, 'users', user.id), user);
};
