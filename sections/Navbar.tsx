"use client"
import Image from "next/image"
import logo from "@/assets/images/logo.svg"
import Button from "@/components/button"
import Link from "next/link"
import { useState } from "react"
import { twMerge } from "tailwind-merge"
import { AnimatePresence,motion } from "framer-motion"
import { siteConfig } from "@/config/site"
const {navLinkHeader} = siteConfig
export default function Navbar(){
    const [isOpen,setisOpen] = useState(false)
    return <section className="py-4 px-2 lg:py-8 fixed w-full m top-0 z-50 ">
                <div className=" max-w-5xl  flex flex-col  rounded-[35px] md:rounded-full mx-auto border border-white/15 p-2 items-center  bg-neutral-950/70 backdrop-blur">
                   <div className=" w-full grid grid-cols-2 md:grid-cols-3 px-2 text-sm  p-2 items-center">
                    <div>
                        <Image src={logo} 
                         className="w-auto h-9 ml-2"
                         alt="the logo of landing page"/>
                    </div>
                    <nav className="hidden font-poppins gap-6 font-medium  justify-center md:flex">
                        {navLinkHeader.map(x=><Link key={x.label} href={x.link} >{x.label}</Link>)}
                    </nav>
                    <div className="flex justify-end  md:gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg"
                         width="24" height="24" viewBox="0 0 24 24"
                          fill="none" stroke="currentColor" strokeWidth="2" 
                          strokeLinecap="round" strokeLinejoin="round" 
                          className="feather feather-menu mr-2 md:hidden"
                            onClick={()=>setisOpen(!isOpen)}>
                            <line x1="3" y1="6" x2="21" y2="6" className={twMerge(isOpen&&"rotate-45 origin-left -translate-y-1")}>
                            </line>
                            <line x1="3" y1="12" x2="21" y2="12" className={twMerge(isOpen&&"opacity-0")}>
                            </line>
                             <line x1="3" y1="18" x2="21" y2="18"  className={twMerge(isOpen&&"-rotate-45 origin-left translate-y-1")}>
                            </line></svg> 
                            <Button  variant="secondary" className=" hidden md:block">Login</Button>
                             <Button variant="primary" size="sm" className=" hidden md:block">Sign up</Button>
                           
                    </div>
                   </div>
                  <AnimatePresence>
                 {isOpen&&<motion.div
                 initial={{height:0}}
                 animate={{height:"auto"}}
                 exit={{height:0}}
                className="overflow-hidden">
                    <div   className="flex flex-col items-center py-4 gap-4">
                        {navLinkHeader.map(link=> <a key={link.label}className="py-2 font-poppins" href={link.link}>{link.label}</a>)}
                        <Button  variant="secondary" size="sm">Login</Button>
                         <Button variant="primary" size="sm">Sign up</Button>
                    </div>
                         
                   </motion.div>}
                   </AnimatePresence>
                </div>
         </section>
}