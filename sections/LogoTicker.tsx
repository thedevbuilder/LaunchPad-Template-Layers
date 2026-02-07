"use client"
import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";
import {siteConfig} from "@/config/site"
export default function LogoTicker() {
    const {LogoTicker} = siteConfig
    return <div className="mx-auto py-24 overflow-x-clip">
        <h2 className="text-white/80 text-center text-md ont-poppins">Already choose by these market leaders</h2>
        <div className="my-10 overflow-hidden mt-12 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
         <motion.div
         animate={{
            x:"-50%"
         }}
         transition={{
            duration:30,
            ease:"linear",
            repeat:Infinity
         }}
         className="flex flex-none pr-24 gap-24">
            {Array.from({length:2}).map((_,i)=>(
                    <Fragment key={i}>
                        {LogoTicker['logos'].map(x=><Image height={45} src={x.image} alt={x.name} key={x.name}/>)}
                    </Fragment>
                )
            )
                  
            }
        </motion.div>
         </div>
    </div>;
}
