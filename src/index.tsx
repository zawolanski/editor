import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import { Root } from '@src/pages';

import '@src/i18n';
import '@src/firebase/firebase.config';

import './styles/index.scss';
import './styles/lexical.scss';

createRoot(document.getElementById('app')).render(
  <Suspense fallback="loading">
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  </Suspense>
);
