import { Profiler } from 'react';
import CartDrawer from './components/CartDrawer';
import AuthLayout from './pages/_AuthLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
// import Products from './data/Products';
import Shop from './pages/Shop';
import AppRoutes from './routes/AppRoutes';


export default function App() {
  return <>
    <AppRoutes />

    <CartDrawer />
    {/* <AuthLayout /> */}
    {/* <Profile /> */}
    {/* <NotFound /> */}
</>
}
