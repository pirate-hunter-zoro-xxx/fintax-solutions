'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#243047] px-4 sm:px-6 lg:px-10 py-4 bg-[#111722] sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
        <div className="flex items-center gap-3 text-white">
          {/* Logo Icon - Using existing favicon */}
          <div className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center">
            <img 
              src="/favicon.svg" 
              alt="FinTax Solutions Logo" 
              className="w-full h-full"
            />
          </div>
          
          {/* Company Name */}
          <div className="flex flex-col">
            <h1 className="text-lg lg:text-xl font-bold text-white leading-tight">
              FinTax Solutions
            </h1>
            <p className="text-xs text-[#93a6c8] leading-tight hidden sm:block">
              Professional Financial Excellence
            </p>
          </div>
        </div>
        
        {/* Desktop Menu - unchanged */}
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
            className="text-white p-2 hover:bg-[#243047] rounded-md transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-[89px] left-0 right-0 bg-[#111722] border-b border-[#243047] z-40 shadow-lg">
          <div className="px-4 sm:px-6 py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-white text-base font-medium py-2 hover:text-[#1650bb] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className="text-white text-base font-medium py-2 hover:text-[#1650bb] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/about" 
                className="text-white text-base font-medium py-2 hover:text-[#1650bb] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/contact" 
                className="text-white text-base font-medium py-2 hover:text-[#1650bb] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <button 
                className="w-full mt-4 px-6 py-3 bg-[#1650bb] hover:bg-[#1446a0] text-white font-bold rounded-xl transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}