"use client";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const Home = () => {
    const { token } = useSelector((state) => state.auth);
    const router = useRouter();

    return token ? router.push("/products") : router.push("/login");
};

export default Home;