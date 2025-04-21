'use client'
import React from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./components/Sidebar";
 
import { Provider } from 'react-redux'
import { store } from '@/store'
export function Providers({ children }: { children: React.ReactNode }) {

    const pathname = usePathname();
      // List of routes that should NOT show the sidebar
  const noSidebarRoutes = ["/game", "/focus-mode", "/chess"];

  const hideSidebar = noSidebarRoutes.includes(pathname);
  return <Provider store={store}>
    <section className="flex w-[90%] mx-auto pt-5">
              {!hideSidebar && (
                <div className="sticky top-[80px] h-[calc(100vh-80px)]">
                  <Sidebar />
                </div>
              )}

              <div className={hideSidebar ? "w-full" : "ml-10 w-[70vw]"}>
                {children}
              </div>
            </section>
  </Provider>
}