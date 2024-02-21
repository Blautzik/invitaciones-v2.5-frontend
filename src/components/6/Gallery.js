'use client'

import { AiOutlinePlayCircle } from "react-icons/ai";
import { useState } from 'react'
import { easeInOut, easeIn, motion } from "framer-motion"
import Image from 'next/image'
import { GallerySlider } from './GallerySlider';
import { openSans } from "@/utils/fonts";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"



export default function Gallery({ imagenes, titulo }) {
  const [index, setIndex] = useState(0)
  const [openModal, setOpenModal] = useState();
  const [showVideo, setShowVideo] = useState()

  const props = { openModal, setOpenModal };


  const openClose = (index) => {
    setIndex(index)

  }

  const images = [];
  const imagenesArr = imagenes[0];

  for (let i = 1; i <= 6; i++) {
    const foto = imagenesArr[`foto${i}`];
    if (foto) {
      images.push(foto);
    }
  }

  const portadaVideo = imagenes[0].foto7

  const customTheme = {
    content: {
      "base": "h-full w-full p-4 md:h-auto",
      "inner": "rounded-lg bg-transparent shadow flex flex-col "
    },
    header: {
      close: {
        base: " ",
        icon: "h-8 w-8"
      }
    },
  }

  return (
    <>
      <Dialog>
        <div className="flex flex-col items-center bg-[#fff] z-10 w-screen md:max-w-4xl text-center">
          <h2 className={`${openSans.className} text-4xl md:text-9xl md:mb-6 mt-4 mb-6 `}>{titulo}</h2>
          <div className="grid grid-cols-2 gap-y-1 md:justify-center md:gap-1 w-full pl-1 mb-10">
            {imagenes.map(e => <div
              key={e}
              className='rounded drop-shadow-2xl relative h-52 md:h-[350px]'
              style={{
                width: '98%', // Set a fixed width (adjust as needed)
                overflow: 'hidden', // Ensure consistent sizing
                objectFit: 'cover', // Ensure consistent image display
              }}
              onClick={() => openClose(imagenes.indexOf(e))}>
              <DialogTrigger asChild>
                <Image
                  src={e}
                  alt='foto'
                  quality={50}
                  fill
                  style={{
                    borderRadius: '5px',
                    objectFit: "cover", // Ensure consistent image display
                    objectPosition: 'top'
                  }}
                />
              </DialogTrigger>
            </div>
            )}
          </div>
        </div>


        <DialogContent className="sm:max-w-[600px]">
            <GallerySlider images={imagenes} index={index} />
        </DialogContent>

      </Dialog>

    </>
  );
}





