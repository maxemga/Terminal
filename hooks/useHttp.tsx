import { useCallback, useState } from "react"
import { operators } from "../pages/api/data/operators"

export const useHttp: any = () => {

    const request = async(url: string) => {
        const responce = await fetch(`http://localhost:3000${url}`);
        const data = await responce.json();

        if (!data) {
            return{
                notFound: true,
            }
        }

        return data;
    }

    

    return { request }
}