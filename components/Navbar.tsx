'use client';

import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
        
        {/* Logo */}
        <Link href='/' className='flex justify-center items-center gap-2'>
          <Image
            src='/logo2.png'
            alt='Car hub Logo'
            width={79}
            height={18}
            className='object-contain'
          />
           <span className='text-black text-lg font-bold'>Carhub</span>
        </Link>

        {/* Butoane */}
        <div className="flex items-center gap-4">
          <CustomButton text='Sign In' />
          <button 
            type='button' 
            className="bg-orange-200 rounded-full bg-red min-w-[130px] py-2 px-4"
          >
            Sign Up
          </button>
        </div>

      </nav>
    </header>
  );
}

export default Navbar

