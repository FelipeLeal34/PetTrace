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
          if formMascota.is_valid() and formSaludMascota.is_valid():
               id_usuario = request.user.id
               usuario = Usuario.objects.get(id=id_usuario)
               salud_mascota = formSaludMascota.save()
               idestado_salud = salud_mascota.pk

               mascota = formMascota.save(commit=False)
               mascota.id_usuario = usuario
               mascota.idestado_salud = idestado_salud
               mascota.save()







          '''id_usuario = request.user.id
                    perfil = Usuario.objects.get(id=id_usuario)
                    img1 = request.POST.get('img1')
                    img2 = request.POST.get('img2')
                    img3 = request.POST.get('img3')
                    img4 = request.POST.get('img4')
                    img5 = request.POST.get('img5')
                    nombremas = request.POST.get('nombremas')
                    especiemas = request.POST.get('especiemas')
                    razamas = request.POST.get('razamas')
                    tamañomas = request.POST.get('tamañomas')
                    sexomas = request.POST.get('sexomas')
                    colormas = request.POST.get('colormas')
                    edadmas = request.POST.get('edadmas')
                    marcasmas = request.POST.get('marcasmas')
                    accesoriosmas = request.POST.get('accesoriosmas')
                    enfermedadesmas = request.POST.get('enfermedadesmas')
                    estitilizacionmas = request.POST.get('estitilizacionmas')
                    medicamentosmas = request.POST.get('medicamentosmas')
                    vacunasmas = request.POST.get('vacunasmas')
                    localidad = request.POST.get('txtlocalidad')
                    barrio = request.POST.get('txtbarrios')
                    fechaExtravío = request.POST.get('fechaextra')


                    saludMascota = SaludMascota(enfermedades=enfermedadesmas,vacunas=vacunasmas,esterilizacion=estitilizacionmas,
                                                medicamentos=medicamentosmas)


                    saludMascota.save()




                    mascota = Mascota(nombremas=nombremas,
                                      especie=especiemas,
                                      raza=razamas,
                                      sexo=sexomas,
                                      color=colormas,
                                      accesorios=accesoriosmas,
                                      tamano=tamañomas,
                                      edad=edadmas,
                                      caracteristicas=marcasmas,
                                      img1=img1,
                                      img2=img2,
                                      img3=img3,
                                      img4=img4,
                                      img5=img5,
                                      id_usuario=id_usuario,
                                      idestado_salud=)'''
                    
                    




