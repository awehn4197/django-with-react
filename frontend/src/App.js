import { Container } from 'react-bootstrap'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'

import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <HomeScreen /> },
            { path: "product/:id", element: <ProductScreen /> },
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
