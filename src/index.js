import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route , Routes } from 'react-router-dom';
import Ayhagah from './pages/volunteer-posts';
import About from './pages/about';
import 'bootstrap/dist/css/bootstrap.css';
import NavMenu from './components/navbar/NavMenu';
import Login from './pages/login';
import VolunteerPost from './pages/volunteer-posts';
import Register from './pages/register';
import VolunteeringRegister from './pages/volunteering-register';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
<BrowserRouter>
<NavMenu/>
  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/ayhagah' element={<Ayhagah/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/volunteering-register' element={<VolunteeringRegister/>}/>
    <Route path='/volunteer-posts' element={<VolunteerPost/>}/>
    
  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
