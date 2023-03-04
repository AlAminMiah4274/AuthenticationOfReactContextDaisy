import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoutes from './routers/PrivateRoutes';
import Orders from './components/Orders';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <PrivateRoutes><Home></Home></PrivateRoutes>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/orders',
          // if a user is logged out and i do not want to allow the user in a component, code will be written like this.
          // for more see the PrivateRoute component. 
          element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
        }
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
