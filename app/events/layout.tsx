import React from 'react';
import Sidebar from "@/components/layouts/Sidebar";

function SidebarLayout({children}: {children: React.ReactNode}) {
  return (
    <section className="flex relative lg:w-[1150px] gap-4 mx-auto px-2 mt-16 md:mt-32">
      <Sidebar/>
      {children}
    </section>
  );
}

export default SidebarLayout;