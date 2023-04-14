import './style.css'
import { motion } from 'framer-motion'
import { images } from '../../data'
import {useEffect, useState, useRef} from 'react'

export const Card = () => {
    const carousel = useRef()
    const [width, setWidth] = useState(0)

    useEffect(()=>{
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])
    return (
        <div className='slider'>
           <motion.div 
            ref={carousel} 
            className='carousel' 
            whileTap={{cursor: 'grabbing'}}
           >
                <motion.div 
                    className='inner' 
                    drag='x'
                    dragConstraints={{right:0 , left: -width}}
                    initial={{y:400}}
                    animate={{y:0}}
                    transition={{duration: 0.8}}
                >
                    {images.map((item)=>[
                        <motion.div className='image'key={item.id}>
                            <img src={item.image} alt={item.alt}/>
                        </motion.div>
                    ])}
                </motion.div>
           </motion.div>
        </div>
    )
}