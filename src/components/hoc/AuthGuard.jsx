"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthGuard = (Component) => {
    return (props) => {
        const { token } = useSelector((state) => state.auth);
        const router = useRouter();

        useEffect(() => {
            if (!token) {
                router.replace("/login");
            }
        }, [token]);

        return token ? <Component {...props} /> : null;
    };
};

export default AuthGuard;
