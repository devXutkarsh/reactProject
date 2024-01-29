import { FaRegFileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import React from 'react'
import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion"


function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference}
     whileDrag={{scale:1.1}}
     dragElastic={0.1}
     dragTransition={{bounceStiffness: 100, bounceDamping:30}}
      className='relative flex-shrink-0 w-60 h-72 mt-10 ml-10 rounded-[30px] bg-zinc-900 overflow-hidden text-white p-5'>
      <FaRegFileAlt />
<p className='text-white text-sm mt-5 pt-5  font-semibold font'>{data.desc}</p>
<div className=' footer absolute bottom-0 left-0 w-full'>

<div className='flex items-center justify-between py-3 px-5 mb-5 ml-5'>
<h3 className='text-white '>{data.filesize}</h3>
<span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center ">
{data.close ? <IoClose />: < LuDownload size="0.7em" color= "#fff"/>}
</span>
</div>

{data.tag.isOpen && (
  <div className={`tag w-full  ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} py-4 flex items-center justify-center`}>
  <h3 className='text-md text-center text-white font-semibold'>{data.tag.tagTitle}</h3>
</div>
)}


</div>
<motion.div>
  
</motion.div >
  {/* text
  footer
  data
  tag */}
    </motion.div>
    
  )
}

export default Card