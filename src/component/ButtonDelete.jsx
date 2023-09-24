import React from 'react';

function ButtonDelete({deletDone, deletAll}) {
    
  return (
    <section>
      <div className="mt-7 gap-4 flex">
        <button className="py-2 bg-red-600 font-lg w-2/4 text-white rounded-sm" onClick={()=>deletDone()}>Delete done task</button> 
        <button className="py-2 bg-red-600 font-lg w-2/4 text-white rounded-sm" onClick={()=>deletAll()}>Delete all task</button> 
      </div>
    </section>
  )
}

export default ButtonDelete