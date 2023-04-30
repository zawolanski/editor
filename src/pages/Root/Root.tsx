import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AuthRoute } from '@components';
import { SignUp, SignIn, Documents, Editor, ForgotPassword, Home } from '@pages';
import { MainTemplate } from '@templates';

export const Root = () => (
  <MainTemplate>
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route element={<AuthRoute />}>
          <Route path="/documents" element={<Documents />} />
        </Route>
        <Route element={<AuthRoute />}>
          <Route path="/editor" element={<Editor />} />
        </Route>
        <Route path="*" element={<h2>Not found</h2>} />
      </Routes>
    </Router>
  </MainTemplate>
);
