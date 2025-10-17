"use client";

import AuthGuard from '@/components/hoc/AuthGuard';
import ProtectedLayout from '@/components/layout/ProtectedLayout';
import React from 'react';

const Products = () => {
    return (
        <ProtectedLayout>
            <div className='flex-1'>
                afsdf
            </div>
        </ProtectedLayout>
    );
};

export default AuthGuard(Products);