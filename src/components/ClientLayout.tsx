'use client';

import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar: Collapses on mobile */}
      <Sidebar isOpen={isSidebarOpen} />
      
      {/* Content Area: Adjust padding based on screen size */}
      <div className="flex-1 flex flex-col transition-all duration-300">
        <Navbar onToggle={() => setSidebarOpen(!isSidebarOpen)} />
        <main className="p-4 bg-gray-100 flex-1">{children}</main>
      </div>
    </div>
  );
}
