'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../chat/Auth';
import { IconLogout, IconArrowLeft } from '@tabler/icons-react';
import { motion } from 'framer-motion';

export default function SettingsPage() {
  const { user, logOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await logOut();
    router.push('/chat');
  };

  const handleBack = () => {
    router.push('/chat');
  };

  // Animation variants for fade-in
  const pageAnimationVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const childAnimationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gray-100 dark:bg-neutral-900 flex flex-col"
      initial="hidden"
      animate="visible"
      variants={pageAnimationVariants}
    >
      {/* Header */}
      <motion.header 
        className="bg-white dark:bg-neutral-800 p-4 shadow-sm"
        variants={childAnimationVariants}
      >
        <div className="max-w-5xl mx-auto flex items-center">
          <button 
            onClick={handleBack}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-700"
          >
            <IconArrowLeft className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </button>
          <h1 className="ml-4 text-xl font-medium text-gray-800 dark:text-gray-200">Settings</h1>
        </div>
      </motion.header>

      {/* Main content */}
      <motion.main 
        className="flex-1 max-w-5xl mx-auto w-full p-6"
        variants={childAnimationVariants}
      >
        <motion.div 
          className="bg-white dark:bg-neutral-800 rounded-xl shadow-sm p-6 mb-6"
          variants={childAnimationVariants}
        >
          <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Account</h2>
          
          {user ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Signed in as</p>
                  <p className="font-medium">{user.email}</p>
                </div>
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2 py-2 px-4 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50 transition-colors"
                >
                  <IconLogout className="h-4 w-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">Not signed in</p>
          )}
        </motion.div>

        <motion.div 
          className="bg-white dark:bg-neutral-800 rounded-xl shadow-sm p-6"
          variants={childAnimationVariants}
        >
          <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Help</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Bluebox is your AI-powered medical assistant, designed to help answer health-related questions.
          </p>
          <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            <p>Version 1.0.0</p>
          </div>
        </motion.div>
      </motion.main>
    </motion.div>
  );
} 