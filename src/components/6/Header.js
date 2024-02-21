
import Image from 'next/image';

import { alegreya, comfortaa, minion, openSans, roboto } from '../../utils/fonts';
import Countdown from './Countdown';
import Link from 'next/link';



const Header = ({ coverImage, title, date, coverImagePc }) => {

    const imageStyle = {
        objectFit: 'cover',
        objectPosition: '50% 10%',
        zIndex: 0,
        opacity: 0.60,
        backgroundColor: '#555',
    }

    const titulo = title.toUpperCase()


    return (
        <div className="relative h-[100vh] bg-slate-800 overflow-hidden">
          <div className="top-0 w-full h-full relative">
      
            <div className='md:hidden h-full'>
              <Image
                src={coverImage}
                fill
                quality={50}
                style={imageStyle}
                alt='portada'
              />
            </div>
      
            <div className='hidden md:block'>
              <Image
                src={coverImagePc}
                fill
                quality={100}
                style={imageStyle}
                alt='portada'
              />
            </div>
      
            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-between items-center'>
      
              <div className='pt-20 relative z-10'>
                <h1 className={`${minion.className} text-gray-50 max-w-sm text-center text-5xl font-[200]`}>{titulo}</h1>
                <h2 className={`${minion.className} text-gray-50 max-w-sm text-center text-2xl font-[200]`}>MIS 15 AÑOS</h2>
              </div>
      
              <div className='flex flex-col items-center relative z-10'>
                <h2 className={`${openSans.className} text-gray-50 max-w-xs text-center text-xl tracking-widest font-[100]`}>Faltan</h2>
                <Countdown date={date} />
                <Link href='#info' scroll={false}>
                  <button className={`${openSans.className} py-3 px-9 bg-white rounded-full text-gray-900 font-[900] text-center mb-16`}>MÁS INFO</button>
                </Link>
              </div>
      
              {/* Overlay gradient */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-slate-800 opacity-95"></div>
            </div>
          </div>
        </div>
      );
}

export default Header