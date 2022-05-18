import Link from "next/link"
import { useRouter } from "next/router";
import { useEffect } from "react";

export default () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000);
    } ,[]);
    return (
        <div className="not-found">
            <h1>Ooopse...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
    )
}