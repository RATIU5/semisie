"use client";
import styles from '@/css/header.module.css'
import { cn } from '@/lib/utils';
import Logo from '@/svg/logo'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`bg-white p-4 flex relative`}>
      <button id='mobileMenu' onClick={()=>{setIsOpen((prev)=>{return !prev})}}>
        
        <span className={cn('block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out', {
          'rotate-45': isOpen,
          '-translate-y-1.5': !isOpen
        })}></span>
        <span className={cn('block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out', {
          'opacity-0': isOpen
        })}></span>
        <span className={cn('block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out', {
          '-rotate-45': isOpen,
          
        })}></span>
      </button>
      <a className={`absolute flex justify-center ${styles.logo}`} href='/'><Logo/></a>
      <div id='mobileNav' className={cn(`text-black absolute ${styles.mobileNav}`, {
        'left-0': isOpen,
        '-left-full': !isOpen
      })} aria-hidden={!isOpen}>
        <ul>
          <li className='p-4 border-b'>Link 1</li>
          <li className='p-4 border-b'>Link 2</li>
          <li className='p-4 border-b'>Link 3</li>
        </ul>
      </div>
    </header>
  )
}