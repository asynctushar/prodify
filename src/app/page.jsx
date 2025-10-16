"use client";

import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

const Home = () => {
    const { isLoading, token, error } = useSelector((state) => state.auth);

    if (isLoading) return "Loading";

    if (token) {
        return redirect("/products");
    }
    else {
        return redirect("/login");
    }
};

export default Home;