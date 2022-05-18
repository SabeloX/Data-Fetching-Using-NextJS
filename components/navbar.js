import Link from "next/link"

export const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>People</h1>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/people">People List</Link>
        </nav>
    )
}