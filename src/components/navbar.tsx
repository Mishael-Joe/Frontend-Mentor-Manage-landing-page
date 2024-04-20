import { useState } from "react"

import closeMenuIcon from '../assets/icon-close.svg'
import hamburgerMenuIcon from '../assets/icon-hamburger.svg'
import logo from '../assets/logo.svg'

const Navbar = () => {
    const [isShow, setIsShow] = useState(false);

  return (
    <section className="flex flex-row justify-between items-center py-5 md:px-8 px-5">
        <div>
            <span><img src={logo} alt="Manage logo" /></span>
        </div>

        <div className="navlinks hidden md:inline">
            <ul className="flex flex-row gap-4 md:font-semibold lg:text-lg lg:font-medium">
                <li className=" hover:text-Dark-Grayish-Blue hover:cursor-pointer opacity-95">Pricing</li>
                <li className=" hover:text-Dark-Grayish-Blue hover:cursor-pointer opacity-95">Product</li>
                <li className=" hover:text-Dark-Grayish-Blue hover:cursor-pointer opacity-95">About Us</li>
                <li className=" hover:text-Dark-Grayish-Blue hover:cursor-pointer opacity-95">Careers</li>
                <li className=" hover:text-Dark-Grayish-Blue hover:cursor-pointer opacity-95">Community</li>
            </ul>
        </div>

        {isShow && (
            <div className="w-72 h-fit rounded-md bg-Very-Light-Gray shadow-2xl shadow-Dark-Grayish-Blue absolute top-16 right-5 text-center">
                <ul className="flex flex-col gap-4">
                    <li className="pt-4">Pricing</li>
                    <li>Product</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li className="pb-4">Community</li>
                </ul>
            </div>
        )}

        <div>
            {isShow && (
                <button className="transparent" onClick={() => setIsShow(false)}>
                    <img src={closeMenuIcon} alt="close menu" />
                </button>
            )}

            {!isShow && (
                <button className="transparent md:hidden" onClick={() => setIsShow(true)}>
                    <img src={hamburgerMenuIcon} alt="open menu" />
                </button>
            )}
            
            <button className="hidden md:inline md:py-1.5 md:px-2 lg:py-2.5 lg:px-4 hover:shadow-Very-Pale-Red hover:shadow-lg">
                Get Started
            </button>
        </div>
    </section>
  )
}

export default Navbar