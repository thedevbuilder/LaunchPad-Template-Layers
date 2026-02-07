"use client"
import figma from "@/assets/images/figma-logo.svg"
import notion from "@/assets/images/notion-logo.svg"
import slack from "@/assets/images/slack-logo.svg"
import relume from "@/assets/images/relume-logo.svg"
import framer from "@/assets/images/framer-logo.svg"
import github from "@/assets/images/github-logo.svg"
import Tag from "@/components/Tag"
import Image from "next/image"
import { easeInOut, motion } from "framer-motion"
import { Fragment } from "react"

const integrations = [
    { name: "Figma", src:figma, icon: "figma-logo.svg", description: "Figma is a collaborative interface design tool." },
    { name: "Notion",src:notion, icon: "notion-logo.svg", description: "Notion is an all-in-one workspace for notes and docs." },
    { name: "Slack",src:slack, icon: "slack-logo.svg", description: "Slack is a powerful team communication platform." },
    { name: "Relume",src:relume, icon: "relume-logo.svg", description: "Relume is a no-code website builder and design system." },
    { name: "Framer",src:framer, icon: "framer-logo.svg", description: "Framer is a professional website prototyping tool." },
    { name: "GitHub",src:github, icon: "github-logo.svg", description: "GitHub is the leading platform for code collaboration." },
];

export default function Integrations() {
    return <section className="mt-50 font-poppins p-3 overflow-hidden max-w-5xl mx-auto">
        <div className="lg:grid-cols-2 lg:grid items-center lg:gap-16">
            <div className="">
            <div className="py-6">
           <Tag>Integrations</Tag>
            </div>
            <h2 className="text-5xl font-medium leading-normal mt-6" >Plays well with <span className="text-lime-400">others</span> </h2>
            <p  className="text-white/50 text-lg"> Layers seamlessly connect with your favorite tools,
                making it easy to plug in any workflow and collaborate across
                platforms.</p>
            </div>
           
                {/* Integration card  */}
            <div className="h-100 lg:h-200 mt-8 lg:mt-0 overflow-hidden mask-[linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
                <motion.div 
                animate={{
                    y:"-50%",
                }}
                transition={{
                    duration:20,
                    ease:easeInOut,
                    repeat:Infinity
                }}
                className="flex flex-col gap-2 pb-4 md:grid md:grid-cols-2 md:gap-4">
                     {Array.from({length:2}).map((_,i)=>(
                     <Fragment key={i}>
                    {integrations.map((integration)=>(
                        <div key={integration.name}  className="bg-neutral-900 border border-white/10 rounded-3xl p-6">
                                <div className="flex justify-center"><Image src={integration.src} alt={integration.icon} className="size-24"/></div>
                                     <div className="text-3xl text-center mt-6">{integration.name}</div>
                                  <div className="text-center text-white/50 mt-2">{integration.description}</div>
                        </div>
                    ))}
                    </Fragment>
                                    
                                    )
                                )}
                  
                    
                </motion.div>
             </div>

        </div>
    </section>;
}
