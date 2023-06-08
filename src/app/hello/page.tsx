import { useEffect } from "react";

export default async function Page() {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // throw Error("Whatever!");

    // useEffect(() => {console.log("you used a useEffect hook")}, [])

    return <div>Hello world</div>
}