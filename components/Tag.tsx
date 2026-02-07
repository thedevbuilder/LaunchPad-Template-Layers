import { twMerge } from "tailwind-merge";
import { HTMLAttributes } from "react";

export default function Tag (props:HTMLAttributes<HTMLDivElement>){
    const {className,children,...otherProps} = props
    
    return <div className={twMerge("inline-flex border text-lime-400 font-poppins items-center border-lime-400 gap-2 px-3 py-1 rounded-full uppercase text-sm",className)}{...otherProps}>
            <span>&#10038;</span>
            <span>{children}</span>
    </div>


}