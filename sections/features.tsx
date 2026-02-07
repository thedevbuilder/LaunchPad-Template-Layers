import Tag from "@/components/Tag";
import FeatureCard from "@/components/featurecard";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg"
import avatar2 from "@/assets/images/avatar-florence-shaw.jpg"
import avatar3 from "@/assets/images/avatar-lula-meyers.jpg"
import Image from "next/image";
import Key from "@/components/keys";
import Avatar from "@/components/avatar";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return <section>
        <div className="">
            <div className="flex justify-center">
            <Tag>Features</Tag>
            </div>
            <h2 className="text-6xl mt-6 text-center font-poppins font-medium max-w-2xl mx-auto">Where Power meets <span className="text-lime-400">simplicity</span></h2>
        </div>
        <div className="mt-12 max-w-5xl gap-8 grid w-xs md:w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-4 mx-auto">
            <FeatureCard
            className="md:col-span-2 lg:col-span-1"
            title="Real-time Collabration"
            description="Work together seemlessly with conflict-free team editing"
            >
            <Avatar className="z-40 border-blue-400">
                 <Image className="rounded-full" src={avatar1} alt="avatar one"/>
            </Avatar>
             <Avatar className="border-purple-400 z-20 -ml-6">
                 <Image className="rounded-full" src={avatar2} alt="avatar two"/>
            </Avatar>
             <Avatar className="border-amber-400 z-10 -ml-6">
                 <Image className="rounded-full" src={avatar3} alt="avatar three"/>
            </Avatar>
            <div className=" flex justify-center items-center gap-x-0.5  size-20 rounded-full overflow-hidden z-0 -ml-6 bg-white/25">
                {['1','2','3'].map(x=> <span key={x} className="rounded-full bg-white  w-0.5 h-0.5 p-1"></span>)}
            </div>
            </FeatureCard>
             <FeatureCard
             className="md:col-span-2 lg:col-span-1"
            title="Interactive Prototyping"
            description="engage your client with prototypes that react to user interaction"
            >
                <span className="text-4xl font-bold  text-center text-white/20">we've achieve <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text">incredible</span> growth this year</span>
            </FeatureCard>
             <FeatureCard
             className="md:col-start-2 md:col-span-2 lg:col-span-1 md"
            title="keyboard quick action"
            description="powerful command to help you create design more quickly"
            >
                <div className="aspect-video flex gap-4 items-center justify-center">
          <Key className="w-28">
                    Shift
                     </Key>
                 <Key>
                     Alt
                </Key>
                 <Key>
                    C
                </Key>

                </div>
             
            </FeatureCard>
        </div>
    <div className="mt-8 font-poppins max-w-5xl mx-auto flex flex-wrap gap-3 justify-center ">
            {features.map(x=>(
            <div className="text-xs font-medium  md:text-xl items-center gap-2 bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl" key={x}>
                <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex  items-center justify-center">&#10038;</span>
                <span>{x}</span>
            </div>
        ))}</div>
    </section>;
}
