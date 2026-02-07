import Image from "next/image";
import logo from "@/assets/images/logo.svg"
import { siteConfig } from "@/config/site";
const {navLinkFooter} = siteConfig


export default function Footer() {
    return <section className="md:flex md:justify-between md:px-3 md:items-center">
            <div className="flex justify-center py-6">
                <Image  className="w-auto h-9 " src={logo} alt="logo of layers"/>
            </div>
            <div className="pb-6 md:pb-0">
                <nav className="flex gap-6 text-xs text-white/50 font-poppins md:items-center justify-center">
                {navLinkFooter.map((link)=> (<a key={link.label} href={link.label}>{link.label}</a>))}
                </nav>
            </div>
    </section>
}
