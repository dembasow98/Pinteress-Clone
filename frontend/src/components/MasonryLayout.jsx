import React from 'react'
import Masonry from 'react-masonry-css'
import Pin from './Pin'

const MasonryLayout = ({pins}) => {

    //breakpoints for the masonry layout

    const breakpointColumnsObj = {
        default: 4,
        3000: 6,
        2000: 5,
        1200: 3,
        1000: 2,
        500: 1
    }


  return (
    <Masonry 
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column flex animate-slide-forward"
    >
        {

            pins?.map((pin) => (
                <Pin key={pin._id} pin={pin} className = "w-max" />
            ))
        }
    </Masonry>
  )
}

export default MasonryLayout