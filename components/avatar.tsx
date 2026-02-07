import { twMerge } from "tailwind-merge";
import { HTMLAttributes } from "react";

export default function Avatar(props:HTMLAttributes<HTMLDivElement>){
    const {className,children} = props
   return <div className={twMerge("size-20 rounded-full overflow-hidden border-4 p-1 bg-neutral-900",className)}>
            {children}
         </div>
}