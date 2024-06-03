import React from 'react'
import { VendorData } from '/app/data.js'
import { CiSearch } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { FaArrowUpLong } from "react-icons/fa6";

export default function Table(){
    const filterd = VendorData.filter(item => item.CompanyName === 'Brass Suites');
    
    return(
        <>
            <section className='w-full flex flex-col h-[100vh] items-center p-[30px] pt-[15px] justify-between'>
                <nav className='w-full h-fit flex items-center justify-between'>
                    <h1 className='text-[32px] font-[600]'>Hello Angolo ,</h1>
                    <span className='flex items-center justify-center w-fit h-fit'><CiSearch className='absolute ml-[-12%] text-xl font-[600]' /><input type="search" className='pl-[35px] py-[5px] placeholder:text-lg rounded-[5px]' placeholder='Search' name="" id="" /></span>
                </nav>
                <header className='w-full'>
                    {filterd.map((items) => (
                    <section className="w-[90%] bg-white h-fit p-[20px] rounded-xl flex items-center justify-between">
                    <div className='flex p-[10px] border-r-[1px] border-[grey] px-[40px] items-center justify-center gap-[10px] w-fit' key={items.id}>
                        <span className=' w-[45px] h-[45px] font-[500] rounded-full flex items-center justify-center bg-green-200'><IoPeopleOutline className='w-[32px] h-[32px] text-green-500' /></span>
                        <ul>
                            <li>Total Customers</li>
                            <li className='text-2xl font-[500]'>{items.totalcustomers}</li>
                            <li className='flex items-center justify-center'><span className='text-green-600 flex items-center justify-center w-fit h-fit '><FaArrowUpLong />16%</span> this month</li>
                        </ul>
                    </div> 
                    <div className='flex p-[10px] border-r-[1px] border-[grey] px-[40px] items-center justify-center gap-[10px] w-fit' key={items.id}>
                        <span className=' w-[45px] h-[45px] font-[500] rounded-full flex items-center justify-center bg-green-200'><IoPeopleOutline className='w-[32px] h-[32px] text-green-500' /></span>
                        <ul>
                            <li>Total Customers</li>
                            <li className='text-2xl font-[500]'>{items.totalcustomers}</li>
                            <li className='flex items-center justify-center'><span className='text-green-600 flex items-center justify-center w-fit h-fit '><FaArrowUpLong />16%</span> this month</li>
                        </ul>
                    </div> 
                    <div className='flex p-[10px] px-[40px] items-center justify-center gap-[10px] w-fit' key={items.id}>
                        <span className=' w-[45px] h-[45px] font-[500] rounded-full flex items-center justify-center bg-green-200'><IoPeopleOutline className='w-[32px] h-[32px] text-green-500' /></span>
                        <ul>
                            <li>Total Customers</li>
                            <li className='text-2xl font-[500]'>{items.totalcustomers}</li>
                            <li className='flex items-center justify-center'><span className='text-green-600 flex items-center justify-center w-fit h-fit '><FaArrowUpLong />16%</span> this month</li>
                        </ul>
                    </div> 
                    </section>
                    ))}
                </header>
            </section>
        </>
    )
}