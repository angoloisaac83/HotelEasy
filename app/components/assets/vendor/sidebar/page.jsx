import React from 'react';
import Image from 'next/image'
import { IoSettingsOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import { TbLogout2 } from "react-icons/tb";
import { AiOutlineProduct } from "react-icons/ai";
import { TbDatabaseDollar } from "react-icons/tb";
import { BsPersonBoundingBox } from "react-icons/bs";
export default function Sidebar(){

    return(
        <>
            <section className='bg-white'>
                <header className='p-[20px] px-[20px] text-slate-900 text-[17px] w-fit flex flex-col items-start justify-ceter shadow-2xl h-[100vh]'>
                    <h1 className='text-3xl font-[800] flex items-center gap-[10px] justify-center'><IoSettingsOutline />Dashboard</h1>
                    <br /><br />
                    <ul className='flex flex-col items-start justify-center gap-[12px]'>
                        <li className='flex w-full h-fit p-[10px] hover:bg-purple-800 rounded-lg cursor-pointer hover:text-white items-center justify-center gap-[8px]'><IoSettingsOutline />Dashboard<FaAngleRight /></li>
                        <li className='flex w-full h-fit p-[10px] hover:bg-purple-800 rounded-lg cursor-pointer hover:text-white items-center justify-center gap-[8px]'><AiOutlineProduct />Services<FaAngleRight /></li>
                        <li className='flex w-full h-fit p-[10px] hover:bg-purple-800 rounded-lg cursor-pointer hover:text-white items-center justify-center gap-[8px]'><TbDatabaseDollar />Income<FaAngleRight /></li>
                        <li className='flex w-full h-fit p-[10px] hover:bg-purple-800 rounded-lg cursor-pointer hover:text-white items-center justify-center gap-[8px]'><BsPersonBoundingBox />Profile<FaAngleRight /></li>
                    </ul>
                    <br /><br /><br />
                    <ul>
                        <button className='flex w-full h-fit p-[10px] hover:bg-purple-800 rounded-lg cursor-pointer hover:text-white items-center justify-center gap-[8px]'><TbLogout2 />Log Out</button>
                    </ul>
                </header>
            </section>
        </>
    )
}
