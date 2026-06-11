import React from 'react';
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react';
import axios from 'axios';

const inter = Inter({ subsets: ['latin'] })

export const BASE_URL = 'https://api.letterboxd.com/api/v0';

const MoviePage: React.FC = () => {
  const [loading, setLoading] = React.useState(true);
  const [movies, setMovies] = useState([]);
  
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >

      <section className='py-24 flex flex-col items-center text-center
       gap-6'>
        <h1 className='text-4xl font-bold'>Movie Page</h1>
        <p className='text-2xl text-primary'>Please wait...</p>  
      </section>

    </div>
  );
};

export default MoviePage;