import facebookIcon from '../assets/icon-facebook.svg'
import instagramIcon from '../assets/icon-instagram.svg'
import pinterestIcon from '../assets/icon-pinterest.svg'
import twitterIcon from '../assets/icon-twitter.svg'
import youtubeIcon from '../assets/icon-youtube.svg'
import logoIcon from '../assets/logo.svg'

export const footerMobileView = (
    <section className=' py-10 px-5 bg-Very-Dark-Blue flex flex-col gap-10 items-center'>
        <div className='flex flex-row gap-4'>
            <input type="text" placeholder='Updates in your inbox…' className='py-2 px-4 rounded-3xl'/>
            <button className='w-20'>Go</button>
        </div>

        <div className='w-full flex flex-row justify-around text-Very-Pale-Red'>
            <div>
                <ul className='flex flex-col gap-2'>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Pricing</a>
                    </li>
                    <li>
                        <a href="">Products</a>
                    </li>
                    <li>
                        <a href="">About Us</a>
                    </li>
                </ul>
            </div>

            <div>
                <ul className='flex flex-col gap-2'>
                    <li>
                        <a href="">Careers</a>
                    </li>
                    <li>
                        <a href="">Community</a>
                    </li>
                    <li>
                        <a href="">Privacy Policy</a>
                    </li>
                </ul>
            </div>
        </div>

        <div className=' flex flex-row gap-4'>
            <img src={facebookIcon} className='w-7 hover:cursor-pointer' alt="facebook Icon" />

            <img src={youtubeIcon} className='w-7 hover:cursor-pointer' alt="youtube Icon" />

            <img src={twitterIcon} className='w-7 hover:cursor-pointer' alt="twitter Icon" />

            <img src={pinterestIcon} className='w-7 hover:cursor-pointer' alt="pinterest Icon" />

            <img src={instagramIcon} className='w-7 hover:cursor-pointer' alt="instagram Icon" />
        </div>

        <div>
            <img src={logoIcon} className=' text-Very-Light-Gray' alt="Manage Logo" />
        </div>

        <p className=' text-Dark-Blue'>
            Copyright 2020. All Rights Reserved
        </p>

        <div className=" text-xs text-center">
            Challenge by <a className=' text-Dark-Grayish-Blue' href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a className=' text-Dark-Grayish-Blue' href="https://mishael-joe.vercel.app/">Mishael Joseph</a>.
        </div>
    </section>
)

export const footerDesktopView = (
    <section className='  bg-Very-Dark-Blue'>
        <div>
            <div className="max-w-7xl mx-auto py-10 px-5 flex flex-row gap-10 items-center">
                <div className="flex flex-col justify-between  h-32 basis-1/3">
                    <div>
                        <img src={logoIcon} className=' text-Very-Light-Gray' alt="Manage Logo" />
                    </div>

                    <div className='flex flex-row gap-4'>
                        <img src={facebookIcon} className='w-7 hover:cursor-pointer' alt="facebook Icon" />

                        <img src={youtubeIcon} className='w-7 hover:cursor-pointer' alt="youtube Icon" />

                        <img src={twitterIcon} className='w-7 hover:cursor-pointer' alt="twitter Icon" />

                        <img src={pinterestIcon} className='w-7 hover:cursor-pointer' alt="pinterest Icon" />

                        <img src={instagramIcon} className='w-7 hover:cursor-pointer' alt="instagram Icon" />
                    </div>
                </div>

                <div className='w-full flex flex-row justify-between px- text-Very-Pale-Red basis-1/2'>
                    <div>
                        <ul className='flex flex-col gap-2'>
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">Pricing</a>
                            </li>
                            <li>
                                <a href="">Products</a>
                            </li>
                            <li>
                                <a href="">About Us</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <ul className='flex flex-col gap-2'>
                            <li>
                                <a href="">Careers</a>
                            </li>
                            <li>
                                <a href="">Community</a>
                            </li>
                            <li>
                                <a href="">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className=" flex flex-col justify-between h-32 items-end basis-1/3">
                    <div className='flex flex-row gap-4'>
                        <input type="text" placeholder='Updates in your inbox…' className='py-2 px-4 rounded-3xl'/>
                        <button className='w-20'>Go</button>
                    </div>

                    <p className=" text-Dark-Grayish-Blue">Copyright 2020. All Rights Reserved</p>
                </div>
            </div>

            <div className=" text-xs text-center py-8 text-Very-Light-Gray">
                Challenge by <a className=' text-Dark-Grayish-Blue' href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a className=' text-Dark-Grayish-Blue' href="https://mishael-joe.vercel.app/">Mishael Joseph</a>.
            </div>
        </div>
    </section>
)