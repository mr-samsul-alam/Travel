import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NotFound from './Pages/NotFound/NotFound';
import Homepage from './Pages/HomePage/Homepage/Homepage';
import SignUp from './Pages/AuthenticationPages/SignUp/SignUp';
import AboutPage from './Pages/AboutPage/AboutPage';
import SignIn from './Pages/AuthenticationPages/SignIn/SignIn';
import PopularDestination from './Pages/PopularDestination/PopularDestination/PopularDestination';
import Navigations from './Pages/Shared/Navigations/Navigations';
import Footer from './Pages/Shared/Footer/Footer';
import PackagesPage from './Pages/PackagesPage/PackagesPage/PackagesPage';
import AuthProvider from './Context/AuthProvider';
import SinglePackageDetails from './Pages/PackagesPage/SinglePackageDetails/SinglePackageDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider >
          <Navigations></Navigations>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="home" element={<Homepage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="packages" element={<PackagesPage />} /> 
            <Route path="singlePackageDetails/:id" element={<PrivateRoute > <SinglePackageDetails /></PrivateRoute >} />
            <Route path="popular_destinations" element={<PopularDestination />} />
            <Route path="signIn" element={<SignIn />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer></Footer>
        </AuthProvider>
      </BrowserRouter>


    </div>
  );
}

export default App;
