import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Header />
            <main className='max-w-[1225px] mx-auto'>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;