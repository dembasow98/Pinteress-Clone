import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'


import {client} from '../client';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';

import { feedQuery, searchQuery } from '../utils/data';

const Feed = () => {

  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);
  
  //
  const {categoryId} = useParams();


  useEffect(() => {
    //set the loading state to true while the data is being fetched
    setLoading(true);
    if(categoryId) {

      const query = searchQuery(categoryId);

      client.fetch(query).then((res) => {
        setPins(res);
        setLoading(false);
      });
    } else {
      client.fetch(feedQuery).then((res) => {
        setPins(res);
        setLoading(false);
      });
    }

  }, [categoryId])

  if(loading){
    return <Spinner message="We're adding new ideas to your feed!" />
  }
  
  return (
    <div className='flex w-full dark:text-gray-100 '>
       {
          pins && <MasonryLayout pins={pins} />
       }
    </div>
  )
}

export default Feed