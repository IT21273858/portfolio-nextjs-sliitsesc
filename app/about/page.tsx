'use client'
import React from 'react'
import Image from "next/image";
import { FiFacebook, FiGlobe, FiInstagram, FiTwitter, FiUser } from "react-icons/fi"
import Link from 'next/link';


const DetailComp = ({ label, detail }: { label: string, detail: string }) => {
    return <div className=' w-full px-5 flex flex-col text-white'>
        <div className=' flex gap-3 items-center'>
            <FiUser />
            <label>{label}</label>

        </div>
        <p className=' mt-1'>{detail}</p>
    </div>
}



const AboutPage = () => {
    return (
        <section>
            <div className=' w-full h-full  divide-x divide-white gap-1  grid grid-cols-2'>
                <section className=' h-full w-full'>
                    <Image
                        src={"/image.jpg"}
                        alt="profile pic"
                        width={300}
                        height={300}
                        className="rounded-md border-[2px] border-white -ml-2 hover:grayscale transition-all duration-300 w-full h-full"
                    />
                </section>
                <section className=' w-full h-full overflow-y-auto overflow-x-hidden grid gap-2'>
                    <DetailComp label='Name' detail='Star Shangeeth' />
                    <DetailComp label='Address' detail='63A, Mannning Place, Wellewathatha, Colobo 06' />
                    <DetailComp label='Contact' detail='011 2505406' />

                    <div className=' w-full px-5 flex flex-col text-white'>
                        <div className=' flex gap-3 items-center'>
                            <FiGlobe />
                            <label>Social</label>

                        </div>
                        <div
                            className=' mt-3 flex gap-3'

                        >
                            <Link href={"https://www.instagram.com/nodekidos/"}><FiInstagram /></Link>
                            <Link href={"https://www.instagram.com/nodekidos/"}><FiFacebook /></Link>
                            <Link href={"https://www.instagram.com/nodekidos/"}><FiTwitter /></Link>

                        </div>
                    </div>

                </section>
            </div>

        </section>
    )
}

export default AboutPage
