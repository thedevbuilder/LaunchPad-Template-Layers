"use client"
import { twMerge } from "tailwind-merge"
import { AnimatePresence,motion } from "framer-motion"
export default function Faq(props:{question:string,selectedIndex:number,setSelectedIndex:React.Dispatch<number>,answer:string,index:number}){
    const {question,answer,index,selectedIndex,setSelectedIndex} = props
    return <div className="bg-neutral-900 border border-white/10 rounded-2xl p-6" onClick={()=> setSelectedIndex(index)}>
            <div className="flex items-center">
            <h3 className="flex-1">{question}</h3>
            <svg xmlns="http://www.w3.org/2000/svg" 
            width="24" height="24" viewBox="0 0 24 24" 
            fill="none" stroke="currentColor" strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round"
             className={twMerge("feather feather-plus text-lime-400 shrink-0",selectedIndex == index && "rotate-45")}><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </div>
        <AnimatePresence>
  {selectedIndex === index && (
    <motion.div
      initial={{ height: 0, opacity: 0, marginTop: 0 }}
      animate={{ height: "auto", opacity: 1, marginTop: 24 }}
      exit={{ height: 0, opacity: 0, marginTop: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="overflow-hidden" // Crucial for "slick" height animations
    >
      <p className="text-xs text-white/50 font-poppins">
        {answer}
      </p>
    </motion.div>
  )}
</AnimatePresence>
            </div>
}