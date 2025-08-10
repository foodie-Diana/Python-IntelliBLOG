"""
URL配置
"""
from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

def api_health_check(request):
    """API健康检查接口"""
    return JsonResponse({
        'status': 'success',
        'message': 'Django API is running!',
        'version': '1.0.0'
    })

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/health/', api_health_check, name='health_check'),
    # 后续添加其他API路由
]