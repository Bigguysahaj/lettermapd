import Image from 'next/image'
import {Button} from '@/components/ui/button'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import movie from '@/pages/movie'
import { useState } from 'react'
import {  ModeToggle} from '@/components/ui/toggle-load'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <section className='py-24 flex flex-col items-center text-center
       gap-6'>
        <h1 className='text-4xl font-bold'>lettermapd</h1>
        <p className='text-2xl text-primary'>A tool for mapping your letterboxd movies</p>  
      </section>
      <div className='flex gap-6 items-center justify-center'>
        <Button  variant="outline">lettermapd</Button>
        <Button   variant="outline">
          <Link href= {"/movie"}>
            Your Movies
          </Link>
        </Button>
      </div>

    </div>
  )
}
