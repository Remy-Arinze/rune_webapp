'use client'
import { useState, ReactNode } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import React from 'react'

type TabItem = {
  value: string
  label: string
  disabled?: boolean
  icon?: ReactNode
}

type CustomTabsProps = {
  defaultTab?: string
  tabs: TabItem[]
  children: ReactNode
  header?: ReactNode
  tabListClassName?: string
  tabTriggerClassName?: string
  tabContentClassName?: string
  containerClassName?: string
  onTabChange?: (value: string) => void
}

export function CustomTabs({
  defaultTab,
  tabs,
  children,
  header,
  tabListClassName = '',
  tabTriggerClassName = '',
  tabContentClassName = '',
  containerClassName = '',
  onTabChange
}: CustomTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.value || '')

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    onTabChange?.(value)
  }

  if (!tabs.length) return null

  return (
    <Tabs
      value={activeTab}
      onValueChange={handleTabChange}
      className={`w-full ${containerClassName}`}
    >
      <div className='flex items-center justify-between'>
        {header}
      <div className='w-full bg-(var(--background)]'>
          <TabsList className={`p-1 h-auto rounded-xl  ${tabListClassName}`}>
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              disabled={tab.disabled}
              style={activeTab === tab.value ? { 
                boxShadow: '0 3px 0 #65d4d0f8',
                transform: 'translateZ(0)' // Force GPU acceleration
              } : {}}
              className={`
                py-1.5 mr-5 text-[12px] font-medium transition-all
                ${activeTab === tab.value 
                  ? 'bg-white dark:bg-[var(--primary)] text-black shadow-sm rounded-lg' 
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                }
                ${tabTriggerClassName}
              `}
            >
              {tab.icon && <span className="mr-2">{tab.icon}</span>}
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      </div>

      <div className={`text-white w-full rounded-lg ${tabContentClassName}`}>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child) && tabs[index]) {
            return (
              <TabsContent value={tabs[index].value}>
                {child}
              </TabsContent>
            )
          }
          return null
        })}
      </div>
    </Tabs>
  )
}