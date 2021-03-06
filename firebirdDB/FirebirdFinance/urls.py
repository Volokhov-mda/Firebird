"""FirebirdFinance URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.http import HttpResponse
from django.urls import include
from django.urls import path
from django.urls import re_path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions

schema_view = get_schema_view(
    openapi.Info(
        title="FirebirdFinance's API",
        default_version='v1',
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)


def index(request):
    return HttpResponse("Greetings from FirebirdFinance's server!")


api_urlpatterns = [
    path('coins/', include('api.coins.urls'), name='coins'),
]

urlpatterns = [
    re_path(r'^$', index, name='index'),
    path('admin/', admin.site.urls),
    re_path('^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    re_path('^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    re_path('^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    path('api/', include(api_urlpatterns), name='API'),
]

urlpatterns += staticfiles_urlpatterns()
