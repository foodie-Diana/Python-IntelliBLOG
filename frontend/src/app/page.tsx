'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"

interface ApiResponse {
  status: string
  message: string
  version: string
}

export default function Home() {
  const [apiStatus, setApiStatus] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 测试API连接
    const testApi = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/health/')
        const data = await response.json()
        setApiStatus(data)
      } catch (error) {
        console.error('API连接失败:', error)
        setApiStatus({
          status: 'error',
          message: 'Django API连接失败',
          version: 'unknown'
        })
      } finally {
        setLoading(false)
      }
    }

    testApi()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* 导航栏 */}
      <nav className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                IntelliBlog
              </h1>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/foodie-Diana" 
                 className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                 target="_blank" 
                 rel="noopener noreferrer">
                GitHub
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                AI聊天
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 主内容区 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero区域 */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <Image
              className="mx-auto rounded-full"
              src="/next.svg"
              alt="头像"
              width={120}
              height={120}
              priority
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            欢迎来到我的博客
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            分享技术、思考和生活
          </p>
          
          {/* API状态显示 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-4">系统状态</h3>
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <span className="ml-2">检测中...</span>
              </div>
            ) : (
              <div>
                <div className={`flex items-center mb-2 ${
                  apiStatus?.status === 'success' ? 'text-green-600' : 'text-red-600'
                }`}>
                  <div className={`w-3 h-3 rounded-full mr-2 ${
                    apiStatus?.status === 'success' ? 'bg-green-500' : 'bg-red-500'
                  }`}></div>
                  <span className="font-medium">
                    {apiStatus?.status === 'success' ? '后端连接正常' : '后端连接失败'}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {apiStatus?.message}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  版本: {apiStatus?.version}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* 文章列表区域 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 示例文章卡片 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Django + Next.js 博客搭建记录
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                记录使用Django作为后端，Next.js作为前端搭建个人博客的完整过程...
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">2024-12-19</span>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  阅读更多 →
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Python学习心得
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                从C++转向Python的学习经验分享，包括语法差异、生态系统等...
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">2024-12-18</span>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  阅读更多 →
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                云服务器部署指南
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                详细介绍如何将Django + Next.js项目部署到腾讯云服务器...
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">即将发布</span>
                <a href="#" className="text-gray-400 text-sm font-medium">
                  敬请期待
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 链接区域 */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            快速链接
          </h2>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/foodie-Diana" 
               className="flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
               target="_blank" 
               rel="noopener noreferrer">
              <span>GitHub</span>
            </a>
            <a href="#" 
               className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              <span>AI聊天助手</span>
            </a>
            <a href="#" 
               className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              <span>联系我</span>
            </a>
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 IntelliBlog. 使用 Django + Next.js 构建
          </p>
        </div>
      </footer>
    </div>
  )
}