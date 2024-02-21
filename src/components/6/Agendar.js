
import { comfortaa, openSans } from "@/utils/fonts";
import Image from "next/image";
import { RiFacebookLine, RiTwitterLine, RiInstagramLine } from "react-icons/ri";
import { BiCalendar, BiCalendarCheck } from "react-icons/bi";
import { format } from "date-fns";
import { es } from "date-fns/locale";




const Agendar = ({foto, links, fecha}) => {
    console.log(links)
    const fechaCeremonia = new Date(fecha)
    fechaCeremonia.setDate(fechaCeremonia.getDate() + 1);
    const formattedDate = format(fechaCeremonia, 'yyyy/M/d', { locale: es });

    console.log(formattedDate)


    return (
        <div className='flex flex-col items-center justify-between'>
            <div className="flex flex-col items-center h-60 justify-between">

            <BiCalendar className="h-20 w-20 text-black mt-6 " />

            <h3 className={`${comfortaa.className} text-4xl text-center pb-4`}>Agregalo a tu calendario</h3>
            <a className={`${openSans.className} bg-black text-white flex justify-evenly items-center md:w-72 w-68 text-[14px] font-[600] px-6 py-2 mb-6 rounded-full `}
                href={`https://calendar.google.com/calendar/u/0/r/week/${formattedDate}`}
                target="_blank"
                >
                <BiCalendarCheck className="text-[20px]" />
                AGENDAR
            </a>
                </div>
            <div className="shadow-2xl mb-6">
                {
                    foto &&
                    <Image
                    src={foto}
                    width={300}
                    height={80}
                    style={{
                        borderRadius: 5,
                    }}
                    />
                }
            </div>
            
               
                <div className="md:w-96 w-10/12 flex items-center justify-evenly mb-">
                {links[1] && 
                <div className=" border-black text-black flex items-center border rounded-full h-16 w-16">
                    <RiFacebookLine className="text-xl m-auto" />
                </div>}
                {links[2]&&
                <div className=" border-black text-black flex items-center border rounded-full h-16 w-16">
                    <RiTwitterLine className="text-xl m-auto"/>
                </div>}
                {links[0] &&
                <div className=" border-black text-black flex items-center border rounded-full h-16 w-16 ">
                     <RiInstagramLine className="text-xl m-auto"/>
                </div>}
            </div>
            
        </div>
    )
}

export default Agendar