import { apiFetcher } from "@/lib/fetcher";

export const loginApi = async (data) => {
    return apiFetcher("/auth", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)

    });
};