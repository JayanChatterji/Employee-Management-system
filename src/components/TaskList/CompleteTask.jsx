import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='h-full flex-shrink-0 p-5 w-[300px] bg-blue-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='text-sm'>{data.date}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
        <p className='test-sm mt-2'>{data.description}</p>
        <div className='mt-6'>
            <button className='w-full bg-green-600  py-1 px-2 text-xs font-medium rounded '>Completed</button>
        </div>
      </div>
  )
}

export default CompleteTask
