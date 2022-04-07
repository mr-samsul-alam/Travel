import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NotFound from './Pages/NotFound/NotFound';
import Homepage from './Pages/HomePage/Homepage/Homepage';
import SignUp from './Pages/AuthenticationPages/SignUp/SignUp';
import AboutPage from './Pages/AboutPage/AboutPage';
import SignIn from './Pages/AuthenticationPages/SignIn/SignIn';
import PopularDestination from './Pages/PopularDestination/PopularDestination/PopularDestination'; 
import Footer from './Pages/Shared/Footer/Footer';
import PackagesPage from './Pages/PackagesPage/PackagesPage/PackagesPage';
import AuthProvider from './Context/AuthProvider';
import SinglePackageDetails from './Pages/PackagesPage/SinglePackageDetails/SinglePackageDetails.js';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import DashBoardHome from './Pages/DashBoard/DashBoardHome/DashBoardHome';
import GiveReview from './Pages/DashBoard/GiveReview/GiveReview';
import MyCart from './Pages/DashBoard/MyCart/MyCart';
import AddServices from './Pages/DashBoard/AddServices/AddServices';
import MakeAdmin from './Pages/DashBoard/MakeAdmin/MakeAdmin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider >
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="home" element={<Homepage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="packages" element={<PackagesPage />} />
            <Route path="singlePackageDetails/:id" element={<PrivateRoute > <SinglePackageDetails /></PrivateRoute >} />

            <Route path="/dashboard" element={<PrivateRoute>
              <DashBoard />
             </PrivateRoute>}>

              <Route exact path="/dashboard" element={<PrivateRoute><DashBoardHome /></PrivateRoute>}>
              </Route>

              <Route path={"/dashboard/giveReview"} element={<PrivateRoute><GiveReview /></PrivateRoute>}>
              </Route>
              <Route path={"/dashboard/myPlans"} element={<PrivateRoute><MyCart /></PrivateRoute>}>
              </Route>
              <Route path={"/dashboard/addServices"} element={<PrivateRoute><AddServices /></PrivateRoute>}>
              </Route>
              <Route path={"/dashboard/makeAdmin"} element={<PrivateRoute><MakeAdmin /></PrivateRoute>}>
              </Route>

            </Route>


            
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
