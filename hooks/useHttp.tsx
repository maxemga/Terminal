import { useCallback, useState } from "react"

export const useHttp: any = () => {

    const request = async(url: string, method: string = 'GET', body: any = null, type ={}, headers: any = {}) => {

        if (method == "POST") {
            const response = await fetch('http://62.113.109.217:3000/api/add', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(body)
              });
        }

      
       else {
        const responce = await fetch(`http://62.113.109.217:3000${url}`);
        const data = await responce.json();

        return data;
       }

       
    }

    

    return { request }
}