# IntelliBlog - 智能个人博客系统

> 一个集成AI技术的现代化个人博客系统，用于学习Python生态和展示技术能力

## 🚀 项目特色

- 🧠 **智能内容分析**: 自动提取关键词、生成摘要、分析写作风格
- 🕸️ **知识图谱**: 可视化知识点之间的关联关系
- 📊 **数据洞察**: 个人成长数据分析和可视化
- 🤖 **AI助手**: 基于个人内容的智能对话系统
- 🎨 **现代UI**: 响应式设计、暗黑模式、流畅动画

## 🛠️ 技术栈

### 后端
- **框架**: Django 4.2 + Django REST Framework
- **数据库**: PostgreSQL + Neo4j + Redis
- **AI/ML**: spaCy + scikit-learn + transformers
- **任务队列**: Celery + Redis

### 前端
- **框架**: Next.js 14 + TypeScript
- **样式**: Tailwind CSS + Headless UI
- **状态管理**: Zustand
- **图表**: Chart.js + D3.js

## 📁 项目结构

```
intelliblog/
├── backend/                 # Django后端
│   ├── config/             # 项目配置
│   ├── apps/               # 应用模块
│   └── requirements/       # 依赖管理
├── frontend/               # Next.js前端
│   ├── src/                # 源代码
│   └── public/             # 静态资源
├── docs/                   # 项目文档
├── scripts/                # 部署脚本
└── venv/                   # Python虚拟环境
```

## 🚦 快速开始

### 环境要求
- Python 3.11+
- Node.js 18+
- Git

### 安装依赖

1. **克隆项目**
```bash
git clone https://github.com/foodie-Diana/Python-IntelliBLOG.git
cd Python-IntelliBLOG
```

2. **后端设置**
```bash
# 创建虚拟环境
python -m venv venv
venv\Scripts\activate  # Windows
# source venv/bin/activate  # Linux/Mac

# 安装依赖
pip install -r backend/requirements/dev.txt

# 数据库迁移
cd backend
python manage.py migrate
python manage.py createsuperuser
```

3. **前端设置**
```bash
cd frontend
npm install
npm run dev
```

### 运行项目

```bash
# 后端 (端口 8000)
cd backend
python manage.py runserver

# 前端 (端口 3000)
cd frontend
npm run dev
```

## 📚 开发文档

- [需求规格说明书](需求规格说明书.md)
- [开发文档](开发文档.md)
- [API文档](docs/api.md)
- [部署指南](docs/deployment.md)

## 🎯 开发进度

- [x] 项目初始化和环境搭建
- [x] 基础项目结构创建
- [ ] Django后端框架搭建
- [ ] 用户认证系统
- [ ] 内容管理功能
- [ ] AI分析功能集成
- [ ] 知识图谱构建
- [ ] 前端界面开发
- [ ] 数据可视化
- [ ] 系统集成测试
- [ ] 云端部署

## 🤝 贡献指南

这是一个个人学习项目，主要用于：
1. 学习Python生态系统
2. 掌握全栈开发技能
3. 展示技术能力和项目经验

## 📄 许可证

MIT License

## 👨‍💻 作者

- **开发者**: [你的姓名]
- **GitHub**: [@foodie-Diana](https://github.com/foodie-Diana)
- **项目开始时间**: 2024年12月

---

⭐ 如果这个项目对你有帮助，请给个星标支持！
