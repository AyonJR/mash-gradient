import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../features/counters/counterSlice';
import Posts from '../showingPosts/Posts'

const Banner = () => {
  const count = useSelector((state) => state.counter.value);  
  const dispatch = useDispatch();

  return (
    <div className="h-[100vh] mt-[50vh]">
      <div className="flex gap-4 items-center justify-center z-10">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 rounded-lg text-white bg-slate-950"
        >
          Increase
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 rounded-lg text-white bg-slate-950"
        >
          Decrease
        </button>
      </div>
      <div className="flex justify-center mt-10">
        <h2 className="text-white text-3xl font-semibold">Count: {count}</h2>
      </div>

{/* all the posts */}
    <div className='mt-10'>
      <Posts></Posts>
    </div>
 

    </div>
  );
};

export default Banner;
