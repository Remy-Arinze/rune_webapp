import { StaticImageData } from 'next/image'
import React from 'react'
import Image from 'next/image'

interface props{
    image:StaticImageData;
    title:string;
    subtitle:string;
    stake:string;
    slot:string;
    date:string;
    index:string|number;
    width?:string;
    height?:string

}

export default function TournamentCard({title,subtitle,index,stake,slot,image,date,width,height}:props) {
  return (
         <div className={`flex-shrink-0 ${width ? width : "md:w-[35%] w-[80%]"} ${height ? height : ""}`} >
                                <div key={index} className="bg-[var(--dark)] p-2 rounded-lg">
                                <div className='bg-[var(--background)]'>
                                    <Image src={image} alt="" className=" h-[100px] object-contain"/>
                                </div>
                                <p className="capitalise text-gray-400 text-[10px]">
                                    {date}
                                </p>
                                <p className="text-[12px] md:text-md Capitalise ">
                                    {title }
                                </p>
                                <p className="text-gray-400 text-[11px]">
                                    {subtitle || "Completed"}
                                </p>
 
                                <div className="flex items-center md:mt-5 mt-1 py-1 rounded-md space-x-3 bg-[var(--background)]">
                                    <div className="bg-orange-500 font-semibold text-[var(--background)] flex items-center justify-center py-2 flex-1 rounded-br-[15px] rounded-bl-md rounded-tl-md text-[10px]">
                                        <p>{stake}</p>
                                    </div>
                                        <p className=" rounded-md flex-1 text-[10px]">Join Tournament</p>
                                </div>
                            </div>
                            <div className="flex bg-[var(--dark)] mt-1 rounded-lg items-center px-5 py-1 justify-between space-x-5">
                                <div className=" flex space-x-1">
                                    <div className="h-[20px] w-[20px] rounded-full bg-[var(--background)]"></div>
                                    <div className="h-[20px] w-[20px] rounded-full bg-[var(--background)]"></div>
                                    <div className="h-[20px] w-[20px] rounded-full bg-[var(--background)]"></div>
                                    <div className="h-[20px] w-[20px] rounded-full bg-[var(--background)]"></div>
                                </div>
                                <div>
                                    <p className="text-[10px]">{slot} Slots Open </p>
                                </div>
                            </div>
                            </div>
  )
}
