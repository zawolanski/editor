import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import Root from '@pages/Root';

import '@src/i18n';
import '@src/firebase.config';

createRoot(document.getElementById('app')).render(
  <Suspense fallback="loading">
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  </Suspense>
);
