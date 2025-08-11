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
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航栏 */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-blue-600 mr-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z"/>
                </svg>
              </div>
            </div>
            <div className="flex space-x-8 text-gray-600">
              <a href="#" className="hover:text-gray-900 transition-colors">首页</a>
              <a href="#" className="hover:text-gray-900 transition-colors">说说</a>
              <a href="#" className="hover:text-gray-900 transition-colors">关于</a>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容区域 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* 左侧主内容区 */}
          <div className="flex-1 lg:w-2/3">
            
            {/* Hero横幅 */}
            <div className="relative h-80 mb-8 rounded-lg overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600">
                <Image
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Hero背景"
                  fill
                  className="object-cover mix-blend-overlay"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h1 className="text-4xl font-bold mb-2">
                  AI智能博客平台开发的高级玩法
                </h1>
                <p className="text-lg opacity-90">
                  探索现代Web开发技术栈，包括Django + Next.js全栈开发，以及云端部署的最佳实践...
                </p>
                <div className="flex items-center mt-4 text-sm opacity-80">
                  <span>智识分享</span>
                  <span className="mx-2">·</span>
                  <span>发表于</span>
                </div>
              </div>
            </div>

            {/* 最新文章分类 */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">最新文章</h2>
              <div className="flex space-x-4 mb-6">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                  开发
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                  学习
                </button>
              </div>
            </div>

            {/* 文章列表 */}
            <div className="space-y-6">
              {/* 文章卡片1 */}
              <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="flex">
                  <div className="w-48 h-32 flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="文章图片"
                      width={192}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                      Django + Next.js 全栈博客开发实战
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      详细记录使用Python Django作为后端，Next.js + TypeScript作为前端，搭建现代化个人博客的完整过程。从项目初始化、环境配置，到前后端开发、UI设计，再到云端部署，记录每一个关键步骤...
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>2024-12-19</span>
                      <div className="flex items-center space-x-4">
                        <span>👁️ 1</span>
                        <span>💬 0</span>
                        <span>👍 0</span>
                      </div>
                      <span className="text-blue-500">开发</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* 右侧侧边栏 */}
          <div className="lg:w-1/3 space-y-6">
            
            {/* 个人信息卡片 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-4">
            <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="头像"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Hansong Liu</h3>
                <p className="text-sm text-gray-600 mb-4">一名热爱技术和生活的开发者</p>
                
                {/* 统计数据 */}
                <div className="flex justify-around text-center border-t border-gray-100 pt-4">
                  <div>
                    <div className="text-xl font-bold text-gray-900">2</div>
                    <div className="text-xs text-gray-500">分类数</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">1</div>
                    <div className="text-xs text-gray-500">文章数</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">3</div>
                    <div className="text-xs text-gray-500">标签数</div>
                  </div>
                </div>

                {/* 社交链接 */}
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="https://github.com/foodie-Diana" 
                     className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                     target="_blank"
                     rel="noopener noreferrer">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* 最新文章 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-1 h-5 bg-blue-500 mr-2"></span>
                最新文章
              </h3>
              <div className="space-y-3">
                <a href="#" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors">
                  Django + Next.js 全栈博客开发实战
                </a>
              </div>
            </div>

            {/* 标签云 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-1 h-5 bg-green-500 mr-2"></span>
                标签云
                <span className="ml-auto text-xs text-gray-500">更多 →</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Django</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">Python</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Next.js</span>
              </div>
            </div>

            {/* API状态显示 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-gray-900 mb-4">系统状态</h3>
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                  <span className="ml-2 text-sm">检测中...</span>
                </div>
              ) : (
                <div>
                  <div className={`flex items-center mb-2 ${
                    apiStatus?.status === 'success' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <div className={`w-2 h-2 rounded-full mr-2 ${
                      apiStatus?.status === 'success' ? 'bg-green-500' : 'bg-red-500'
                    }`}></div>
                    <span className="text-sm">
                      {apiStatus?.status === 'success' ? '后端连接正常' : '后端连接失败'}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    {apiStatus?.message}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">RSS</span>
              📡 RSS
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              🔐 站点地图
            </a>
          </div>
          <div className="flex justify-center space-x-2 mb-4">
            <span className="bg-gray-800 text-white px-2 py-1 text-xs rounded">Power</span>
            <span className="bg-pink-500 text-white px-2 py-1 text-xs rounded">Live</span>
            <span className="bg-orange-500 text-white px-2 py-1 text-xs rounded">学生认证</span>
            <span className="bg-blue-500 text-white px-2 py-1 text-xs rounded">实况监控</span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 Hansong Liu. 使用 Django + Next.js 构建
          </p>
        </div>
      </footer>
    </div>
  )
}