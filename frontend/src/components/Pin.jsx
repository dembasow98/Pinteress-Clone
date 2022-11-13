import React from 'react'
import { urlFor } from '../client'

const Pin = ({pin:{_id, title, about, destination, image, postedBy }}) => {
  return (
    <div>
        <img src={urlFor(image).size(700, 250).url()} alt="pin" className="w-full h-64 rounded-md" />
    </div>
  )
}

export default Pin