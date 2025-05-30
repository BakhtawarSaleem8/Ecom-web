import './App.css';
// import Home from './pages/Home';
// import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
// import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';

const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <Home></Home>,
  // },
  // {
  //   path: '/login',
  //   element: <LoginPage></LoginPage>,
  // },
  {
    path: '/signup',
    element: <SignupPage></SignupPage>,
  },
    {
    path: '/*',
    element: <h1>no route</h1>,
  },
]);

 export default function App() {
  return (
   <div className="App">
      {/* {userChecked && ( */}
        <>
          <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <RouterProvider router={router} />
        </>
      {/* )} */}
    </div>
  );
}