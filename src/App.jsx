
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { initializeUser, selectUser } from "./redux/slice/userSlice";

import Login from "./pages/Login";
import Sidebar from "./layout/Sidebar";
import Topbar from "./layout/Topbar";
import ErrorPage  from "./pages/404";
import LandingPage from './pages/LandingPage'
import Dashboard from "./components/Dashboard";
import UserForm  from './components/UserForm'
import HeroSection from './components/HeroSection';
import Footer from './components/footer';
import InfluencerPage from './pages/InfluencerlistPage'

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const user = useSelector(selectUser);

  const [language, setLanguage] = useState('en');


  useEffect(() => {
    const fetchUser = async () => {
      await dispatch(initializeUser());
      setLoading(false);
    };

    fetchUser();
  }, [dispatch]);

  if (loading) {
    return null; // Or a loading spinn
  }

  return (
    <div>
      
      <div >
        <div >
            {user && user.token ? (
              user.user.role === "admin" ? (
                <>
                  {user && user.token && <Sidebar userRole={user.user.role} />}
                  {user && user.token && <Topbar userRole={user.user.role} />}
                  <Routes>
                    <Route path="/" element={<Navigate to="/dashboard" />} />
                    <Route path="/dashboard" element={<Dashboard userRole={user.user.role} />} />
                  </Routes>
                 

                </>
              ) : user.user.role === "Manager" ? (
                <>
                  <Routes>
                    <Route path="/" element={<Navigate to="/dashboard" />} />
                    <Route path="/dashboard" element={<Dashboard userRole={user.user.role} />} />
                  </Routes>
                </>
              ) : null
            ) : (
              <div className='bg-gray-900'>                  
              <HeroSection language={language} setLanguage={setLanguage} />

                <Routes >
                  <Route path="/" element={<LandingPage language={language}  />} />
                  <Route path="/influencers" element={<InfluencerPage language={language} />} />
                  <Route path="/signupkkk" element={<UserForm />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/*" element={<ErrorPage />} />
                </Routes>


                <Footer language={language} />

              </div>

            )}
            
        </div>
      </div>
    </div>
  );
};

export default App;
