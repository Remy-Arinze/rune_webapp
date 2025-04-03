import React from 'react'
import { CustomTabs } from '../components/tab_component'
import { Button } from '@/components/ui/button'
import { FaPlus } from 'react-icons/fa'
import { SearchBar } from '../components/searchbar'
import { SelectDropdown } from '../components/dropdown'

export default function Tournament() {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <p className='text-2xl font-bold'>Tournament</p>
        <p className='text-md'>Apr 3 10:00 AM  </p>

      
      </div>

      <div className='flex justify-between mt-10 '>
          <div className='w-full'>
          <CustomTabs tabs={[
            { label: 'On going', value: 'on-going' },
            { label: 'Schedule', value: 'schedule' },
            { label: 'Watch', value: 'watch' },
          ]}  >
            {/* ON Going tab */}
            <div className='mt-5 w-ful'>
       <div className="flex space-x-5 w-1/2">
               <SearchBar />
              <SelectDropdown
                options={[{ value: 'all', label: 'All Types' }, { value: 'bullet', label: 'Bullet' },{ value: 'blitz', label: 'Blitz' }]}
                placeholder='All Types'
               />
       </div>

               <div className="mt-10 w-full h-[400px] bg-[var(--dark)]"></div>
            </div>
            {/* Schedule tab */}
            <div></div>
            {/* Watch tab */}
            <div></div>
          </CustomTabs>
        </div>
        <Button className='bg-[var(--primary)] px-20' >
            <div className='flex items-center space-x-1'>
            <FaPlus color='black'/>
            <p className='text-black'>Create</p>
          </div>
        </Button>
      </div>
    </div>
  )
}
