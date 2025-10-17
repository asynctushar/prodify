"use client";

import AuthGuard from '@/components/hoc/AuthGuard';
import React from 'react';

const Products = () => {
    return (
        <div>Products</div>
    );
};

export default AuthGuard(Products);