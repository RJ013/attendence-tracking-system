import React from 'react'
import AddNewStudent from './_components/AddNewStudent'

function Student() {
  return (
    <div>
        <h2 className='font-bold text-2xl flex justify-between items-center' >
           Students 
           <AddNewStudent/>
        </h2>
    </div>
  )
}

export default Student