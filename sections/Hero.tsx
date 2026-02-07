"use client"
import Button from "@/components/button"
 import Image from "next/image"
 import designexample_one from "@/assets/images/design-example-1.png"
import designexample_two from "@/assets/images/design-example-2.png"
import upointer from "@/assets/images/cursor-you.svg"
import Pointer from "@/components/pointer"
import { easeIn, easeInOut, motion,useAnimate } from "framer-motion"
import { useEffect } from "react"
import  Icon from "@/components/icon"
 export default function Hero(){
    const [leftscope,leftanimate] =useAnimate()
    const [leftpointerscope,leftpointeranimate] =useAnimate()
    const [rightscope,rightanimate] = useAnimate()
    const [rightpointerscope,rightpointeranimate] = useAnimate()

    useEffect(()=>{
        leftanimate([
                 [leftscope.current,{opacity:1},{duration:0.5}],
                  [leftscope.current,{y:0,x:0},{duration:0.5,ease:easeIn}]
            
        ])
        leftpointeranimate([
            [leftpointerscope.current,{opacity:1},{duration:0.5}],
             [leftpointerscope.current,{x:0,y:0},{duration:0.5,ease:easeIn}],
            [leftpointerscope.current,{x:30,y:[0,16]},{duration:0.5,ease:easeInOut}]
        ])
        rightanimate([
            [rightscope.current,{opacity:1},{duration:0.5}],
            [rightscope.current,{x:0,y:0},{duration:0.5,ease:easeIn}]
        ])
        rightpointeranimate([
            [rightpointerscope.current,{opacity:1},{duration:0.5}],
            [rightpointerscope.current,{x:0,y:0},{duration:0.5,ease:easeIn}],
            [rightpointerscope.current,{x:-40,y:0},{duration:0.5,ease:easeInOut}]
        ])
     },[leftpointerscope, leftscope, rightpointerscope, rightscope])
    return <section style={{cursor: `url(${upointer.src}),auto`}}>
            <div className="mt-30 md:mt-40 lg:mt-50 relative  overflow-x-clip">
                  {/* left */}
                <motion.div ref={leftscope}
                    drag
                    initial={{opacity:0,y:100,x:-100}}
                className=" hidden lg:block absolute lg:-left-20 top-0 ">              
                    <Image draggable="false" src={designexample_one} height={300} alt="showcase layers app in action"/>
                </motion.div>

                <motion.div 
                ref={leftpointerscope} initial={{opacity:0,x:-100,y:100}}className=" hidden lg:block absolute top-40 left-25">
                     <Pointer name="Olivia" color="green"/>
                </motion.div>
                {/* highlight */}
             <div className="flex justify-center">
                <div className="inline-flex justify-center p-4 py-1 font-poppins gap-0.5 items-center text-xs text-white/60  font-medium px-3 bg-linear-to-r from-purple-400 to-pink-400 rounded-full">
                    <Icon name='Sparkles' className="text-white/60 size-3"/> $7.5M seed round raised
                </div>
                </div>
                {/* headline */}
                <h1 className="text-5xl md:text-6xl px-5 xl:text-8xl  mx-auto font-medium leading-tight max-w-5xl text-center font-poppins mt-6">
                    Impactful design, created effortlessly
                </h1>
                <p className="text-center max-w-2xl mx-auto px-2.5 text-sm text-white/50 mt-8 font-poppins">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero libero soluta enim, et est perferendis ad, facilis velit sapiente iure, cupiditate officiis ipsum. Amet minus quae, dolorum quis cupiditate eaque.</p>
                    {/* right */}
                <motion.div 
                 ref={rightpointerscope}
                  initial={{opacity:0,x:100,y:100}}
                 className=" hidden lg:block absolute -top-7 right-21 z-30">
                     <Pointer name="Andrew" color="red"/>
                </motion.div>
                <motion.div
                 ref={rightscope}
                 drag
                initial={{opacity:0,x:100,y:100}}
                className=" hidden lg:block absolute -right-45 -top-10">
                    <Image  draggable="false"  src={designexample_two} width={300} alt="showcase layers app in action"/>
                </motion.div>
                </div>
                <form className="flex max-w-xs z-25 md:max-w-lg border mx-auto  border-white/50 rounded-full mt-8">
                <input
                type="email"
                placeholder="Enter your mail"
                className="bg-transparent text-sm pl-2 whitespace-nowrap font-poppins flex-1 outline-none"
                /> 
                <Button type="submit" variant="primary" size="smx">Sign Up</Button>
                </form>
    </section>
 }