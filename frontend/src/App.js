import { Container } from 'react-bootstrap'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <HomeScreen /> },
            { path: 'product/:id', element: <ProductScreen /> },
            { path: '/cart/:id?', element: <CartScreen />},
            { path: '/login', element: <LoginScreen />},
            { path: '/register', element: <RegisterScreen />},
            { path: '/profile', element: <ProfileScreen />},
            { path: '/shipping', element: <ShippingScreen />},
            { path: '/payment', element: <PaymentScreen />},
            { path: '/placeorder', element: <PlaceOrderScreen />},
        ],
    },
]);

function MainLayout() {
    return (
        <div>
            <Header />
            <main className='py-3'>
                <Container>
                    <Outlet /> {/* This is where child routes will render */}
                </Container>
            </main>
            <Footer />
        </div>
    );
}

function App() {
    return <RouterProvider router={router} />;
}

// function MainLayout(props) {
//     console.log(props)
//     const children = props.children
//     return (
//         <div className="">
//             <Header></Header>
//             <main className='py-3'>
//                 <Container>
//                     {children}
//                 </Container>
//             </main>
//             <Footer></Footer>
//         </div>
//     )
// }

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <MainLayout><HomeScreen /></MainLayout>,
//     },
//     {
//         path: "/product/:id",
//         element: <MainLayout><ProductScreen /></MainLayout>,
//     },
// ]);

// function App() {
//     return (
//         <RouterProvider router={router} />
//     );
// }

export default App;
