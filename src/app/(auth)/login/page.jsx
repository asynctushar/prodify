"use client";

import UnAuthGuard from "@/components/hoc/UnAuthGuard";
import Footer from "@/components/layout/Footer";
import LoginForm from "@/components/shared/auth/LoginForm";
import React from "react";

const Login = () => {
    return (
        <>
            <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-16">

                    <div className="text-center space-y-3">
                        <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                            Prodify
                        </h2>
                        <h5 className="text-base sm:text-lg text-muted-foreground max-w-sm mx-auto">
                            Manage your products with clarity and control
                        </h5>
                    </div>

                    <LoginForm />


                </div>
            </main>

            <Footer />
        </>
    );
};

export default UnAuthGuard(Login);