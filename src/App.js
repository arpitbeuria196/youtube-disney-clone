import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import { Provider } from 'react-redux';
import store from './utils/appStore';
import Home from './components/Home';

function App() {
  const router = createBrowserRouter([
      {
        path: "/",  // Changed "name" to "path"
        element: <Login />
      },
      {
        path:"/home",
        element:<Home/>
      }
  ]);

  return (
    <div className="bg-[#040714]">
      <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
      
    </div>
  );
}

export default App;
