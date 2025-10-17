import React from 'react';
import Header from './Header';
import Footer from './Footer';

const ProtectedLayout = ({ children }) => {
    return (
        <main className='min-h-full flex flex-col flex-1'>
            <Header />
            {children}
            <Footer />
        </main>
    );
};

export default ProtectedLayout;