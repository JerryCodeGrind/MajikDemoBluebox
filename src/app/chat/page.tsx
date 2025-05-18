'use client';

import React from 'react';
import { Sidebar, SidebarMenu } from './sidebar';
import ChatWindow from './chatwindow';

// Simple page that shows the chat interface for all users
export default function ChatPage() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-neutral-900">
      {/* Sidebar with absolute positioning to prevent affecting main content */}
      <div className="absolute h-full z-10">
        <Sidebar>
          <SidebarMenu />
        </Sidebar>
      </div>
      
      {/* Main content with fixed position and width */}
      <div className="flex-1 h-full overflow-hidden ml-[80px] md:ml-[80px]">
        <ChatWindow />
      </div>
    </div>
  );
}