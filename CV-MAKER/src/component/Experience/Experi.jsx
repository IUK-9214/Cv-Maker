import React from 'react'

function Experi(props) {
  return (
    <div>
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-gray-800">{props.company}</h3>
            <span className="text-sm text-gray-500">{props.date}</span>
          </div>
          <p className="italic text-gray-700 text-sm mb-1">{props.position}</p>
          <p className="text-sm">
           {props.description}
          </p>
        </div>
  )
}

export default Experi