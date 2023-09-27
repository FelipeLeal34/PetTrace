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
def agregarPubliPerdidas(request):
     if request.method == 'POST':

          # SE INSTANCIAN LOS DOS MODELSFORMS DE FORMS.PY, SE LE INDICA AL FORMULARIO DE MASCOTA QUE SE ENVIARÁN ARCHIVOS
          formMascota = MascotaPerdidaForm(request.POST, request.FILES )
          formSaludMascota = SaludMascotaForm(request.POST)
          formPublicacion = PubliMascotaPerdidaForm(request.POST)
          if formMascota.is_valid() and formSaludMascota.is_valid() and formPublicacion.is_valid():

               #SE OBTIEME EL ID DEL USUARIO LOGUEADO, ES DECIR, DEL QUE HIZO LA PUBLICACION
               id_usuario = request.user.id
               vacunasmas = request.POST.getlist('vacunasmas')

               #SE CREA UN OBJETO DE ESE USUARIO
               usuario = Usuario.objects.get(id_usuario=id_usuario)

               #SE GUARDA EL FORMULARIO DE SALUD MASCOTA YA VALIDADO, ES DECIR, SE GUARDAN LOS DATOS EN LA BASE DE DATOS
               salud_mascota = formSaludMascota.save()
               
               

               #SE OBTIENE EL ID DE ESE ULTIMO REGISTRO DE LA TABLA 'SALUD_MASCOTA'
               idestado_salud = salud_mascota.pk

               #SE CREA UN OBJETO DE ESE ESTADO DE SALUD
               estado_salud = SaludMascota.objects.get(idestado_salud=idestado_salud)
               estado_salud.guardar_vacunas(vacunasmas)

               # SE GUARDAN TODOS LOS CAMPOS DEL FORMULARIO MASCOTAS YA VALIDADO, PERO AÚN NO SE SUBE A LA BASE DE DATOS

               mascotaIns = formMascota.save(commit=False)


               #SE LE ASIGNA EN EL CAMPO ID_USUARIO DE LA TABLA MASCOTAS, EL OBJETO 'USUARIO' YA CREADO
               mascotaIns.id_usuario = usuario

               #SE LE ASIGNA EN EL CAMPO IDESTADO_SALUD DE LA TABLA MASCOTAS, EL OBJETO 'ESTADO_SALUD' YA CREADO
               mascotaIns.idestado_salud = estado_salud

               #SE GUARDA EL FORMULARIO DE MASCOTAS YA VALIDADO, ES DECIR, SE GUARDAN LOS DATOS EN LA BASE DE DATOS
               mascotaIns.save()

               #SE OBTIENE EL ID DE ESE ULTIMO REGISTRO DE LA TABLA 'MASCOTAS'
               id_mascota = mascotaIns.pk

               #SE CREA UN OBJETO DE ESE ULTIMPO REGISTRO DE LA TABLA 'MASCOTAS'
               mascota = Mascota.objects.get(id_mascota=id_mascota)


               #SE OBTIENEN LA LOCALIDAD Y EL BARRIO DE EXTRAVIO MANUALMENTE, PARA NO MODIFICAR LOS NAMES DEL HTML Y EVITAR PROBLEMAS CON EL JS
               localidadExtravio = request.POST.get('txtlocalidad')
               barrioExtravio = request.POST.get('txtbarrios')

               # SE GUARDAN LOS DATOS, SE AGREGAN LOS OBJETOS Y LUGARES MANUALMENTE
               publicacion = formPublicacion.save(commit=False)
               publicacion.apartado = 'perdidas'
               publicacion.idestado_salud = estado_salud
               publicacion.id_usuario = usuario
               publicacion.id_mascota = mascota
               publicacion.localidadExtravio = localidadExtravio
               publicacion.barrioExtravio = barrioExtravio

               #POR ULTIMO SE GUARDA EL FORMULARIO
               publicacion.save()

               return render(request,'index/perdidas.html')







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
                    
                    




