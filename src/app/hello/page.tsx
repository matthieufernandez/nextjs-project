import { useEffect } from "react";

export default async function Hello() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // throw Error("Whatever!");

    // useEffect(() => {console.log("you used a useEffect hook")}, [])

    return <div>Hello world</div>
}