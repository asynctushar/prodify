import React from 'react';
import Header from './Header';

const ProtectedLayout = ({ children }) => {
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    );
};

export default ProtectedLayout;