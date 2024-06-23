import Link from "next/link";
import { Button } from "./ui/button";
import { Span } from "next/dist/trace";

/* Components */

import Nav from "./Nav";

const Header = () => {
  return (
<header className="py-8 xl:py-12 text-white">
    <div className="container mx-auto flex justify-between itens-center">
        <Link href="/">
        <h1 className="text-4xl font-semibold">Khalil <span className="text-accent hover:text-accent-hover transition-all">The Dev</span></h1>
        </Link>
        {/* Desktop Nav & hire me */}
        <div className="hidden xl:flex items-center gap-8">
        <Nav/>
        <Link href="https://www.linkedin.com/in/khalil-camargo-packer-035ba91a5/">
        <Button>Fale comigo!</Button>
        </Link>
        </div>
        {/* Mobile Nav */}
        <div className="xl:hidden">
            Mobile Nav
        </div>
    </div>
</header>
  )
}

export default Header
