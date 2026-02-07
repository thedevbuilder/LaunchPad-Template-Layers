
export default function CallToAction(){
    return <section className="py-24">
        <div className="overflow-x-hidden flex py-2">
            <div className="flex whitespace-nowrap gap-16 ">          
        {Array.from({length:10}).map((_,i)=>(
            <div key={i} className="text-7xl font-medium">
                <span className="text-lime-400">&#10038;</span>
                <span>Try it for free</span>
            </div>
        ))}
            </div>
        </div>
    </section>
}