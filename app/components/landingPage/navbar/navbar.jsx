"use client";
import React, {useState, Component} from 'react';
import logo from './cover.png'
import Link from 'next/link'
import Image from 'next/image'
export default function Navbar(){
    let [open,setOpen] = useState(false)
    const openn =()=>{
        setOpen(!open)
    }
    return(
        <>
            <section>
                <nav className="flex w-full fixed top-0 z-[100] bg-white left-0 shadow-xl h-fit justify-between items-center px-[20px] py-[10px]">
                <Image 
                    src={logo}
                    alt="Description of the image" // Alt text for accessibility
                    width={130} // Width of the image
                    height={50} // Height of the image
                /> 
                    <ul className={`flex flex-row max-md:flex-col max-md:transition-all max-md:fixed ${open ? ' max-md:left-[0%]' : ' max-md:left-[-70%]'} max-md:top-0 max-md:h-[100vh] max-md:w-[70%] max-md:text-2xl max-md:bg-white shadow-2xl items-center justify-center gap-[15px]`}>
                        <li className="hover:underline cursor-pointer">Home</li>
                        <li className="hover:underline cursor-pointer">About</li>
                        <li className="hover:underline cursor-pointer">Services</li>
                        <li className="hover:underline cursor-pointer">Contact Us</li>
                        <hr />
                    <ul className="hidden max-md:flex flex-col-reverse pt-[30px] items-center justify-center gap-[15px]">
                        <Link href="/components/landingPage/signup/"><button className="bg-gradient-to-tr from-orange-400 to-red-500 px-[20px] py-[10px] text-white rounded-full ">Log In</button></Link>
                        <Link href="/components/landingPage/signup/"><button className="bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text"><p>Register</p></button></Link>
                    </ul>
                    </ul>
                    <ul className="flex max-md:hidden items-center justify-center gap-[15px]">
                        <button className="bg-gradient-to-tr from-orange-400 to-red-500 px-[20px] py-[10px] text-white rounded-full ">Log In</button>
                        <button className="bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text"><p>Register</p></button>
                    </ul>
                    <button onClick={openn} className="hidden max-md:flex flex-col gap-[3px]">
                        <p className="w-[33px] h-[4px] bg-black rounded-full"></p>
                        <p className="w-[33px] h-[4px] bg-black rounded-full"></p>
                        <p className="w-[33px] h-[4px] bg-black rounded-full"></p>
                    </button>
                </nav>
            </section>
        </>
    )
}