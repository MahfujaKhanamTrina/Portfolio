import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
]

const Navbar = () => {

    const [mobileMenuOpen, setMobileMenu] = useState(false)
    return (
        <header className='sticly top-0 z-50 w-full bg-gray-200/85 backdrop-blur supports-[backdrop-filter]:bg-gray-200/25 px-4 lg:px-0'>

            <div className='max-w-[1110px] mx-auto flex h-14 items-center justify-center relative'>
            <div className="flex justify-between items-center w-full">
  {/* Left Side - Portfolio */}
  <a href="#" className="flex items-center">
    <p className="text-yellow-600 text-3xl font-bold">Portfolio</p>
  </a>

  {/* Right Side - Nav Links */}
  <nav className="hidden md:flex items-center space-x-8 font-medium">
    {navLinks.map((link) => (
      <a
        key={link.href}
        href={link.href}
        className="transition-colors hover:text-foreground/80"
      >
        {link.label}
      </a>
    ))}
  </nav>
</div>


                    <button className='absolute right-4 inline-flex items-center justify-center rounded-md md:hidden' onClick={()=> setMobileMenu(!mobileMenuOpen)}>
                        <span className='sr-only'>
                            Toggle Main Menu
                        </span>
                        {
                            mobileMenuOpen ? (
                                <X className='h-6 w-6' aria-hidden='true'></X>
                            ) : (
                                    <Menu className='h-6 w-6' area-hidden='true'></Menu>
                                )}
                            
                    </button>
                </div>

                {
                    mobileMenuOpen && (
                        <div className='md:hidden'>
                            <div className='space-y-1 px-2 pd-3 pt-2 text-center'>
                                {
                                    navLinks.map((link) => (
                                        <a key={link.href} href={link.href} className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-slate-50 hover:text-gray-900' onClick={() => setMobileMenu(false)}> {link.label}</a>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
          
            
        </header>
    );
};

export default Navbar;