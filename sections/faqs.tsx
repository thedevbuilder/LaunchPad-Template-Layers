"use client"
import Faq from "@/components/faq";
import Tag from "@/components/Tag";
import { useState } from "react";
import { siteConfig } from "@/config/site";

export default function Faqs() {
    const {headline,hook,powerWord,QA} = siteConfig["Faqs"]
        const [selectedIndex,setSelectIndex] = useState(0)
    return <section className="mt-40 font-poppins mx-auto px-4 max-w-5xl">
        <div>
            <div className="flex justify-center">
                <Tag>{headline}</Tag>
            </div>
            <h2 className="font-medium text-5xl text-center mt-6 max-w-xl mx-auto">{hook} <span className="text-lime-400">{powerWord}</span></h2>
              <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
                 {QA.map(({question,answer},index)=> <Faq selectedIndex={selectedIndex} setSelectedIndex={setSelectIndex} index={index} key={index} answer={answer} question={question}/>)}
           </div>
        </div>
    </section>;
}
