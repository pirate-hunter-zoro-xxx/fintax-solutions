import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#243047] px-4 sm:px-6 lg:px-10 py-4 bg-[#111722] sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="flex items-center gap-4 text-white">
        <img src="/images/fintax-logo.svg" alt="FinTax Solutions" className="h-8 lg:h-10 w-auto" />
      </div>
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
        <button className="text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}
