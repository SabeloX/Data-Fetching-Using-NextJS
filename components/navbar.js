import Image from "next/image"
import Link from "next/link"

export const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image
                    src="/logo.png"
                    width={128}
                    height={128}
                />
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/people">People List</Link>
        </nav>
    )
}