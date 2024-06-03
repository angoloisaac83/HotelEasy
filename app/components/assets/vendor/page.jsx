import React from 'react'
import Sidebar from './sidebar/page'
import Table from './table/page'
import { VendorData } from '/app/data.js'
export default function Vendor(){
    
    return(
        <>
            <section className='w-full bg-slate-200 flex items-center justify-start'>
                <Sidebar />
                <Table />
            </section>
        </>
    )
}