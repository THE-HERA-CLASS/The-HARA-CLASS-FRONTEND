import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Main from '../pages/Main';
import Logins from '../pages/Login';
import Signup from '../pages/Signup';
import AdminPage from '../pages/AdminPage';
import UserMyPage from '../pages/UserMyPage';
import TestPage from '../pages/TestPage';
import SearchResultPage from '../pages/SearchResultPage';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ParsingEditor from '../pages/ParsingEditor';


function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/logins' element={<Logins />} />
        <Route path='/signups' element={<Signup />} />
        <Route path='/adminpages' element={<AdminPage />} />
        <Route path='/usermypages/:user_id' element={<UserMyPage />} />
        <Route path='/testpages' element={<TestPage />} />
        <Route path='/searchresultpage' element={<SearchResultPage />} />
        <Route path='/parsingeditor' element={<ParsingEditor />} />
      </Routes>
      <FooterConditionalRender />
    </BrowserRouter>
  );
}

function FooterConditionalRender() {
  const location = useLocation();
  return location.pathname !== '/parsingeditor' && location.pathname !== '/logins' && location.pathname !== '/signups' ? (
    <Footer />
  ) : null;
}

export default Router;

// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Main from '../pages/Main';
// import Logins from '../pages/Login';
// import Signup from '../pages/Signup';
// import AdminPage from '../pages/AdminPage';
// import UserMyPage from '../pages/UserMyPage';
// import TestPage from '../pages/TestPage';
// import SearchResultPage from '../pages/SearchResultPage';
// import Header from '../components/layout/Header';
// import Footer from '../components/layout/Footer';

// function Router() {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path='/' element={<Main />} />
//         <Route path='/logins' element={<Logins />} />
//         <Route path='/signups' element={<Signup />} />
//         <Route path='/adminpages' element={<AdminPage />} />
//         <Route path='/usermypages/:user_id' element={<UserMyPage />} />
//         <Route path='/testpages' element={<TestPage />} />
//         <Route path='/searchresultpage' element={<SearchResultPage />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default Router;
