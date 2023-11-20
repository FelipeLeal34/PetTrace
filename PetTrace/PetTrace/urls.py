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
from django.urls import path
from usuarios.views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name='index'),
    path('perfil/', perfil, name='perfil'),
    path('perdidas/', perdidas, name='perdidas'),
    path('agregarPubli', agregarPubliPerdidas, name='agregarPubliPerdidas' ),
    path('informacionPubli/<int:id_publicacion>/', informacionPubli, name='informacionPubli' ),
    path('editarPubli/<int:id_publicacion>/', editarPubliPerdidas, name='editarPubliPerdidas' ),
    path('eliminarPubli/<int:id_publicacion>/', eliminarPubli, name='eliminarPubli' ),
    path('encontradas', encontradas, name='encontradas' ),
    path('agregarPubli', agregarPubliEncontradas, name='agregarPubliEncontradas' ),


] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT )
