import React from 'react';
import Sidebar from './sidebar/'
import Vendor from './page'
export default function Layout(){

    return(
        <>
            <section>
                <Sidebar />
                <Vendor />
            </section>
        </>
    )
}