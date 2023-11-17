"""
URL configuration for PetTrace project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
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
from django.contrib.auth import views as auth_views
from django.urls import path, reverse_lazy
from usuarios.views import *
from usuarios import views
from django.contrib.auth.views import LoginView, LogoutView


urlpatterns = [
    #path('admin/', admin.site.urls),
    path('', index, name='index'),
    path('perfil/', perfil, name='perfil'),
    path('perdidas/', perdidas, name='perdidas'),
    path('registrar/', views.registrar, name='registrar'),
    path('login/', LoginView.as_view(template_name='login/inicioSesion.html'), name='login'),
    path('logout', auth_views.LogoutView.as_view(template_name='index/perdidas.html'), name='logout'),
    path('reset/', views.reset, name='reset'),
    path('resetHecho/', views.resetHecho, name='resetHecho'),
    path('resetEmail/', views.resetEmail, name='resetEmail'),
    path('resetConfirm/', views.resetConfirm, name='resetConfirm'),
    path('resetComplete/', views.resetComplete, name='resetComplete'),
]
