import React from 'react';
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-8 ">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover" href="#skills">Skills</a>
        <a className="link link-hover" href="#projects">Projects</a>
        <a className="link link-hover" href="#contact">Contact</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/mahfuzakhanom.trina/" aria-label="facebook">
            <FaFacebookF className="w-6 h-6 text-black hover:text-gray-700 transition-colors" />
          </a>
          <a href="https://www.instagram.com/___trinaaa__/" aria-label="instagram">
            <FaInstagram className="w-6 h-6 text-black hover:text-gray-700 transition-colors" />
          </a>
          <a href="https://github.com/MahfujaKhanamTrina" aria-label="github">
            <FaGithub className="w-6 h-6 text-black hover:text-gray-700 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/mahfuja-khanam-1878bb243/" aria-label="linkedin">
            <FaLinkedinIn className="w-6 h-6 text-black hover:text-gray-700 transition-colors" />
          </a>
        </div>
      </nav>
      <aside>
        <p>Mahfuja Khanam © {new Date().getFullYear()} - All rights reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
