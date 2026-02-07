"use client"
import { useScroll, useTransform } from "framer-motion"
import Tag from "@/components/Tag"
import {useEffect, useRef, useState } from "react"
import { twMerge } from "tailwind-merge"
export default function Intro(){
    const scrollTarget =  useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({target:scrollTarget,offset:['start end','end end']})
    const texts = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit laudantiuum tempore rem, quasi excepturi.".split(' ')
    const [current,setCurrent] = useState(0)
    const wordindex = useTransform(scrollYProgress,[0,1],[0,texts.length])
    useEffect(()=>{
        wordindex.on ('change',(latest)=>{
            setCurrent(latest)
        })
    },[wordindex])
    return <section className="py-24">
        <div className="sticky top-20 md:top-28 lg:top-40">
            <div className="flex justify-center">
                <Tag>
                    Introducing Layers
                </Tag>
            </div>
            <div className="text-3xl md:text-5xl lg:text-6xl text-center font-medium mt-10 font-poppins">
                <span>Your Creative Process deserve better.</span>
                <span className="text-white/15 transition-all duration-300">
              {texts.map((word, index) => {
    // Check if the current scroll 'count' has passed this word's index
    const isHighlighted = index < current; 
    
    return (
        <span 
            key={index} // Use index here because 'texts' might have duplicate words
            className={twMerge(
                "transition-colors duration-300", 
                isHighlighted ? "text-white" : "text-white/15"
            )}
        >
            {`${word} `}
        </span>
    );
})}
                </span>
                <span className="text-lime-400 block">That&apos;s why we built layers</span>
            </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget}></div>
    </section>
    }