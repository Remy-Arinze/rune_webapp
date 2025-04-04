'use client'
import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { ContentCreatorCard } from './content_card'

export function CustomTabs() {
  const [activeTab, setActiveTab] = useState('rune')

  return (
    <Tabs 
      value={activeTab} 
      onValueChange={setActiveTab}
      className="w-full   "
    >
      {/* Custom Tab List */}
     <div className='flex items-center justify-between'>
        <p className='text-[18px] font-bold' >News Feed</p>
         <TabsList className="w-[25%] p-1 h-auto rounded-xl">
        {[
          { value: 'rune', label: 'Rune' },
          { value: 'trending', label: 'Trending' },
          { value: 'tournaments', label: 'Tournaments' },
        ].map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}  
            style={activeTab === tab.value  ? { 
            boxShadow: '0 3px 0 #65d4d0f8',
            transform: 'translateZ(0)' // Force GPU acceleration
          } : {}}
            className={`
               py-1.5 text-[12px] font-medium transition-all
              ${activeTab === tab.value 
                ? 'bg-white dark:bg-[var(--primary)] text-black shadow-sm rounded-lg' 
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
              }
            `}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
     </div>

      {/* Tab Contents */}
      <div className="  text-white w-full rounded-lg">
        <TabsContent value="rune">
         <ContentCreatorCard />
        </TabsContent>

        <TabsContent value="trending">
          <h3 className="text-xl font-bold mb-4">Trending Content</h3>
          <p>Popular and trending items will appear here.</p>
        </TabsContent>

        <TabsContent value="tournaments">
          <h3 className="text-xl font-bold mb-4">Tournaments</h3>
          <p>Upcoming and ongoing tournaments will be listed here.</p>
        </TabsContent>
      </div>
    </Tabs>
  )
}