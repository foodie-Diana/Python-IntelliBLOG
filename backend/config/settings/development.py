"""
开发环境配置
"""

from .base import *

# 开发环境特定设置
DEBUG = True

# 允许所有主机 (仅开发环境)
ALLOWED_HOSTS = ['*']

# 开发数据库 (SQLite)
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# 暂时移除开发工具，稍后添加
# INSTALLED_APPS += [
#     'debug_toolbar',
#     'django_extensions',
# ]

# MIDDLEWARE += [
#     'debug_toolbar.middleware.DebugToolbarMiddleware',
# ]

# Debug Toolbar配置
INTERNAL_IPS = [
    '127.0.0.1',
    'localhost',
]

# 开发环境CORS设置 (允许所有)
CORS_ALLOW_ALL_ORIGINS = True

# 邮件后端 (开发环境使用控制台)
EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

# 缓存 (开发环境使用内存缓存)
CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
        'LOCATION': 'unique-snowflake',
    }
}

# 日志级别 (开发环境更详细)
LOGGING['root']['level'] = 'DEBUG'
LOGGING['loggers']['apps']['level'] = 'DEBUG'

# 静态文件 (开发环境)
STATICFILES_DIRS = [
    BASE_DIR / 'static',
]