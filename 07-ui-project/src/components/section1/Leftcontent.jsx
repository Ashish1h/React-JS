import React from 'react'
import { MoveUpRight } from 'lucide-react'

const Leftcontent = () => {
  return (
    <div className='h-full w-1/3 bg-white overflow-hidden'>
      <div className='p-6'>
        <div><h3 className='mb-7  text-4xl font-bold'>Prospective<br/> <span>customer</span> <br/> Segmentation</h3></div>
        <p className='text-xl font-medium text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias voluptate deleniti modi, expedita hic autem explicabo, minus ipsum, ipsa qui accusamus? Dolorem sint in iste error debitis animi eos</p>
      </div>
      <div className='text-9xl'><i className='ri-arrow-right-up-line'><MoveUpRight /></i></div>
      <div></div>
    </div>
  )
}

export default Leftcontent
