"use client";

import { useSelector } from "react-redux";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const UnAuthGuard = (Component) => {
    return (props) => {
        const { token } = useSelector((state) => state.auth);
        const router = useRouter();

        useEffect(() => {
            if (token) {
                router.replace("/products");
            }
        }, [token]);


        return !token ? <Component {...props} /> : null;
    };
};

export default UnAuthGuard;
