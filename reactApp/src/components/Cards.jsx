import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion"

function Cards({data, reference}) {
  return (
    <motion.div drag dragConstraints= {reference} whileDrag={{scale: 1.2}} className='relative w-60 h-72 rounded-[40px] bg-zinc-900 p-10 text-white px-8 py-10 overflow-hidden'>
        <FaRegFileAlt/>
        <p className='text-sm leading-none mt-5 '>{data.desc}</p>
        <div className='footer absolute bottom-0  w-full   left-0'>
            <div className='flex items-center justify-between px-8 py-3 mb-3'>
               <h5>{data.filesize}</h5>
                 <span className='w-5 h-5 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {data.close ? <MdOutlineClose/>: <MdOutlineFileDownload/> }
                 </span>
            </div>
            {
                data.tag.isOpen && (<div className={`tag w-full py-4 ${data.tag.tagColor == "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                <h3 className='text-sm font-semibold' >{data.tag.tagTitle}</h3>
            </div>
           ) }
        </div>
    </motion.div>
    
  )
}

export default Cards