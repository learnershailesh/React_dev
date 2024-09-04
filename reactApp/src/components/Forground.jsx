import React, {useRef,useState} from 'react';
import Cards from './Cards'



function Forground() {

    const ref = useRef(null);
    const data = [
        {
            desc: "Lorem is that color is good for us okk.",
            filesize: ".9mb",
            close: false,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    
        },
        {
            desc: "Lorem is that color is good for us okk.",
            filesize: ".9mb",
            close: false,
            tag: {isOpen: true, tagTitle: "Upload Now", tagColor: "blue"},
    
        },
        {
            desc: "Lorem is that color is good for us okk.",
            filesize: ".9mb",
            close: false,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    
        },
    ];
  return (
    <div ref={ref} className='fixed  z-[3] top-0 left-0 w-full h-full flex gap-5 p-5 '>
        {data.map((item, index)=>(
            <Cards data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default Forground