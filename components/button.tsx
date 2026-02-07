import { ButtonHTMLAttributes } from "react"
import { cva,type VariantProps} from "class-variance-authority"
const button_variant = cva("border font-poppins rounded-full  px-6 font-medium",{
    variants:{
        variant:{
            primary:"bg-lime-400  text-black border-lime-400",
            secondary:"border-white text-white bg-transparent",
           
        },
         size:{
            smx:"h-10",
            sm:"h-12"

         },
        defaultVariants:{
            variant:"primary"
        }
    }
})
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,VariantProps<typeof button_variant>{}
export default function Button({className,variant,size,...props}:ButtonProps){
    return <button className={button_variant({variant,className,size})}>{props.children}</button>
}