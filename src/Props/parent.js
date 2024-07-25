import React from 'react'
import Children from './children'

const Parent = () => {
  return (
    <div className='flex flex-col items-center'>
        <h1 className='mt-10'>Parent Component</h1>
        <Children heading="Children 1" color="bg-red-200"/>
        <Children heading="Children 2" color="bg-yellow-200"/>
        <Children heading="Children 3" color="bg-gray-200"/>
    </div>
  )
}

export default Parent