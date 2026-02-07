import {twMerge} from 'tailwind-merge'
import {clsx, ClassValue } from 'clsx'
type pointerProps ={
    name:string,
    color:string
}
function cn(...inputs:ClassValue[]){
    return twMerge(clsx(inputs))
}
 const Pointer:React.FC<pointerProps> = ({name,color})=>{
    return <div className='relative'>
        <svg width="62" className={cn(color == 'red'? 'transform -scale-x-100':"")} height="43" viewBox="0 0 62 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8333 10.8333L15.8333 15.8333M2.5 2.5L8.39167 16.6417L10.4833 10.4833L16.6417 8.39167L2.5 2.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
<div className={cn("p-2 absolute  font-medium rounded-full font-poppins text-xs",color == "red" && "bg-red-400 top-5 right-5", color =="green" && "bg-green-400 top-5 left-5")}>{name}</div>
</div>
}
export default Pointer