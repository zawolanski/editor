import { doc, setDoc } from 'firebase/firestore';

import { db } from '@src/firebase.config';
import { User } from '@src/types/models/user';

export const writeUserData = async (user: User) => {
  await setDoc(doc(db, 'users', user.id), user);
};
