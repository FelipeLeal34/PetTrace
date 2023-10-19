from django.http import JsonResponse
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from . forms import *
from . models import *
from django.core import serializers



# Create your views here.
def index(request):
    return render(request, 'index/index.html')



def perfil(request):
     return render(request, 'index/perfil.html')
 
 
def perdidas(request):

     
     publicaciones = MascotasPerdidas.objects.select_related('id_mascota', 'id_usuario__id_usuario','idestado_salud')
     return render(request, 'index/perdidas.html', {'publicaciones':publicaciones})




def verPubliModalPerdida(request, id_publicacion):

     

     publicacion = MascotasPerdidas.objects.select_related('id_mascota' , 'id_usuario__id_usuario','idestado_salud'  ).get(id_publicacion=id_publicacion)


     data = {
          'publicacion': {
               'localidadExtravio': publicacion.localidadExtravio,
               'barrioExtravio': publicacion.barrioExtravio,
               'fechaExtravio': publicacion.fechaExtravio,
               'recompensa': publicacion.recompensa
               
          },
          'usuario': {
               'nombre': publicacion.id_usuario.id_usuario.username,
               'telefono': publicacion.id_usuario.telefono,
               'email': publicacion.id_usuario.id_usuario.email
               
          },
          'mascota': {
               'nombremas': publicacion.id_mascota.nombremas,
               'especiemas': publicacion.id_mascota.especiemas,
               'razamas': publicacion.id_mascota.razamas,
               'sexomas': publicacion.id_mascota.sexomas,
               'colormas': publicacion.id_mascota.colormas,
               'edadmas': publicacion.id_mascota.edadmas,
               'accesoriosmas': publicacion.id_mascota.accesoriosmas,
               'tamañomas': publicacion.id_mascota.tamañomas,
               'marcasmas': publicacion.id_mascota.marcasmas,
               'img1': publicacion.id_mascota.img1.url,
               'img2': publicacion.id_mascota.img2.url,
               'img3': publicacion.id_mascota.img3.url,
               'img4': publicacion.id_mascota.img4.url,
               'img5': publicacion.id_mascota.img5.url,
               
          },
          'estado_salud': {
               'enfermedadesmas': publicacion.idestado_salud.enfermedadesmas,
               'vacunasmas': publicacion.idestado_salud.mostrar_vacunas(),
               'esterilizacionmas': publicacion.idestado_salud.esterilizacionmas,
               'medicamentosmas': publicacion.idestado_salud.medicamentosmas,
          },
     }
     '''publicacion = serializers.serialize('json', [publicacion])
     perfil = serializers.serialize('json', [publicacion.id_usuario])
     usuario = serializers.serialize('json', [publicacion.id_usuario.id_usuario])
     mascota = serializers.serialize('json', [publicacion.id_mascota])
     estado_salud = serializers.serialize('json', [publicacion.idestado_salud])'''

     return JsonResponse({'status':'success','data':data})

     

     





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







         




