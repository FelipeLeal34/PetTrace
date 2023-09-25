from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from . forms import *

# Create your views here.
def index(request):
    return render(request, 'index/index.html')



def perfil(request):
     return render(request, 'index/perfil.html')
 
 
def perdidas(request):
     return render(request, 'index/perdidas.html')


@login_required
def agregarPubli(request):
     if request.method == 'POST':
          formMascota = agregarMascotaForm(request.POST, request.FILES )
          formSaludMascota = agregarSaludMascotaForm(request.POST)
          if formMascota.is_valid():
               if formSaludMascota.is_valid():
                    id_usuario = request.user.id
                    perfil = Usuario.objects.get(id=id_usuario)
                    img1 = request.POST.get('img1')
                    img2 = request.POST.get('img2')
                    img3 = request.POST.get('img3')
                    img4 = request.POST.get('img4')
                    img5 = request.POST.get('img5')
                    nombremas = request.POST.get('nombremas')
                    especiemas = request.POST.get('especiemas')
                    tamañomas = request.POST.get('tamañomas')
                    sexomas = request.POST.get('sexomas')
                    sexomas = request.POST.get('sexomas')
                    sexomas = request.POST.get('sexomas')
                    sexomas = request.POST.get('sexomas')
                    sexomas = request.POST.get('sexomas')
                    
                    




