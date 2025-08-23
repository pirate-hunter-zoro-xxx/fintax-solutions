'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#243047] px-4 sm:px-6 lg:px-10 py-4 bg-[#111722] sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
        <Link href="/" className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity">
          <Image 
            src="/favicon.svg" 
            alt="FinTax Solutions" 
            width={32}
            height={32}
            className="h-8 lg:h-10 w-8 lg:w-10"
            priority
          />
          <div className="flex flex-col">
            <span className="text-lg lg:text-xl font-bold text-white leading-tight">FinTax</span>
            <span className="text-xs lg:text-sm text-[#93a6c8] leading-tight">Solutions</span>
          </div>
        </Link>
        <div className="hidden lg:flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <Link className="text-white text-sm lg:text-base font-medium leading-normal hover:text-[#1650bb] transition-colors" href="/">Home</Link>
            <Link className="text-white text-sm lg:text-base font-medium leading-normal hover:text-[#1650bb] transition-colors" href="/services">Services</Link>
            <Link className="text-white text-sm lg:text-base font-medium leading-normal hover:text-[#1650bb] transition-colors" href="/about">About Us</Link>
            <Link className="text-white text-sm lg:text-base font-medium leading-normal hover:text-[#1650bb] transition-colors" href="/contact">Contact</Link>
          </div>
          <button className="flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-11 lg:h-12 px-6 bg-[#1650bb] hover:bg-[#1446a0] transition-colors text-white text-sm lg:text-base font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Schedule Free Consultation</span>
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            onClick={toggleMenu}
            className="text-white p-2 hover:bg-[#243047] rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={toggleMenu}>
          <div 
            className="fixed top-0 right-0 h-full w-64 bg-[#111722] border-l border-[#243047] shadow-xl transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col p-6 space-y-6 mt-16">
              <Link 
                className="text-white text-lg font-medium leading-normal hover:text-[#1650bb] transition-colors py-2 border-b border-[#243047]" 
                href="/"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                className="text-white text-lg font-medium leading-normal hover:text-[#1650bb] transition-colors py-2 border-b border-[#243047]" 
                href="/services"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link 
                className="text-white text-lg font-medium leading-normal hover:text-[#1650bb] transition-colors py-2 border-b border-[#243047]" 
                href="/about"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link 
                className="text-white text-lg font-medium leading-normal hover:text-[#1650bb] transition-colors py-2 border-b border-[#243047]" 
                href="/contact"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <button 
                className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-[#1650bb] hover:bg-[#1446a0] transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] mt-6"
                onClick={toggleMenu}
              >
                <span className="truncate">Schedule Free Consultation</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
