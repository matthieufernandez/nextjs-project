"use client"

import { useEffect } from "react";

export default function Page() {

    
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    useEffect(() => {console.log("you used a useEffect hook")}, [])

    return <div>Hello world</div>
}