"use client";

import UnAuthGuard from '@/components/hoc/UnAuthGuard';
import Footer from '@/components/layout/Footer';
import React from 'react';

const Login = () => {
    return (
        <main>
            Login
            <Footer />
        </main>
    );
};

export default UnAuthGuard(Login);