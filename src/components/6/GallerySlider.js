'use client'

import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import { useEffect, useState } from "react"


export function GallerySlider({ images, index }) {
    const [final, setFinal] = useState([])
    console.log('final', final)

    useEffect(() => {
        const reorderedImg = images.slice(index).concat(images.slice(0, index))
        setFinal([...reorderedImg])     
    }, [])
    
   console.log(index)



    return (
        (<Carousel>
            <CarouselContent >
                {final.map((e, index) => (
                    <CarouselItem key={index} className="">
                        <div className="">
                            <img
                                src={e}
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className='hidden sm:block' />
            <CarouselNext className='hidden sm:block' />
        </Carousel>)
    )
}


