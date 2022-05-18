import Link from "next/link"

export default () => {
    return (
        <div className="not-found">
            <h1>Ooopse...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
    )
}