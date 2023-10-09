import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
    return (
        <div className="nav-container border-b-2 border-black">
            <Link href='/'>
                <Logo />
            </Link>
            <div className="nav-menu">
                <Link href={'/login'} className="nav-link white">
                    <div className="">Login</div>
                </Link>
                <Link href={'/pricing'} className="nav-link black">
                    <div className="">Pricing</div>
                </Link>
            </div>
        </div>
    )
}
