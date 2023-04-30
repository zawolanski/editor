import { collection, query, where } from 'firebase/firestore';

import { db } from '@src/firebase';

export const getOwnerDocQuery = (uid: string) => query(collection(db, 'documents'), where('owner', '==', uid));
export const getInvitedDocQuery = (uid: string) =>
  query(collection(db, 'documents'), where('invitedUsers', 'array-contains', uid));
