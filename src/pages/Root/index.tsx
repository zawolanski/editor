import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AuthRoute from '@components/Routes/authRoute';
import Documents from '@pages/Documents';
import ForgotPassword from '@pages/ForgotPassword';
import App from '@pages/Home';
import SignIn from '@pages/SignIn';
import SignUp from '@pages/SignUp';
import MainTemplate from '@templates/Main';

const Root = () => (
  <MainTemplate>
    <Router>
      <Routes>
        <Route index element={<App />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/documents" element={<AuthRoute />}>
          <Route path="/documents" element={<Documents />} />
        </Route>
      </Routes>
    </Router>
  </MainTemplate>
);

export default Root;
