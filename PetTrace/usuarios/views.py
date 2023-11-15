from django.http import JsonResponse
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect
from . forms import *
from . models import *
from django.http import HttpResponse
from django.http import HttpResponseRedirect
import json
from django.db.models import Q




# Create your views here.
def index(request):
    return render(request, 'index/index.html')



def perfil(request):
     return render(request, 'index/perfil.html')
 
 
def perdidas(request):
     
     if request.method == 'POST':

          filtros = json.loads(request.body)

          request.session['filtros']= filtros
          request.session.modified = True
          request.session.save()

          filtros2 = request.session.get('filtros',{})
          print(filtros2)


     else:
          filtros = request.session.get('filtros',{})
          print(filtros)
         


          color = None
          raza = None
          especie = None
          sexo = None
          tamaño = None
          localidad = None
          barrio = None
          fecha = None

          for clave in filtros:
               if clave:
                    if clave == "color":
                          color = str(filtros["color"].keys())
                    elif clave == "raza":
                          raza = str(filtros["raza"].keys())
                    elif clave == "especie":
                          especie = str(filtros["especie"].keys())
                    elif clave == "sexo":
                          sexo = str(filtros["sexo"].keys())
                    elif clave == "tamaño":
                          tamaño = str(filtros["tamaño"].keys())
                    elif clave == "localidad":
                          localidad = str(filtros["localidad"].keys())
                    elif clave == "barrio":
                          barrio = str(filtros["barrio"].keys())
                    else:
                          fecha = str(filtros["fecha"].keys())


          print(fecha)
                    
                         



          """ color = str(filtros["color"].keys())
          raza = str(filtros["raza"].keys())
          especie = str(filtros["especie"].keys())
          sexo = str(filtros["sexo"].keys())
          tamaño = str(filtros["tamaño"].keys())
          localidad = str(filtros["localidad"].keys())
          barrio = str(filtros["barrio"].keys())
          fecha = str(filtros["fecha"].keys()) """
          




          if color or raza or especie or localidad or barrio or fecha or sexo or tamaño is not None :
          
               publicaciones = MascotasPerdidas.objects.select_related('id_mascota', 'id_usuario__id_usuario','idestado_salud').filter(

               Q(id_mascota__colormas=color) | Q(id_mascota__colormas__isnull=True),
               Q(id_mascota__razamas=raza) | Q(id_mascota__razamas__isnull=True),
               Q(id_mascota__especiemas=especie) | Q(id_mascota__especiemas__isnull=True),
               Q(id_mascota__sexomas=sexo) | Q(id_mascota__sexomas__isnull=True),
               Q(id_mascota__tamañomas=tamaño) | Q(id_mascota__tamañomas__isnull=True),
               Q(localidadExtravio=localidad) | Q(localidadExtravio__isnull=True),
               Q(barrioExtravio=barrio) | Q(barrioExtravio__isnull=True))
               
               
          

          else:

                publicaciones = MascotasPerdidas.objects.select_related('id_mascota', 'id_usuario__id_usuario','idestado_salud')


     return render(request, 'index/perdidas.html', {'publicaciones':publicaciones})




def informacionPubli(request, id_publicacion):

     

     publicacion = MascotasPerdidas.objects.select_related('id_mascota' , 'id_usuario__id_usuario','idestado_salud'  ).get(id_publicacion=id_publicacion)


     data = {
          'publicacion': {
               'localidadExtravio': publicacion.localidadExtravio,
               'barrioExtravio': publicacion.barrioExtravio,
               
               'fechaExtravio': publicacion.fechaExtravio,
               
               'horaExtravio': publicacion.horaExtravio,
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
          if formPublicacion.is_valid():
            
            if formSaludMascota.is_valid(): 
               
               if formMascota.is_valid():

                    

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



                    # SE GUARDAN LOS DATOS, SE AGREGAN LOS OBJETOS Y LUGARES MANUALMENTE
                    publicacion = formPublicacion.save(commit=False)
                    publicacion.apartado = 'perdidas'
                    publicacion.idestado_salud = estado_salud
                    publicacion.id_usuario = usuario
                    publicacion.id_mascota = mascota

                    #POR ULTIMO SE GUARDA EL FORMULARIO
                    publicacion.save()

                    

                    return redirect('perdidas')
               
               

     return HttpResponse('NO SE GUARDÓ')




          


@login_required
def editarPubliPerdidas(request,id_publicacion):
     publicacion = MascotasPerdidas.objects.get(id_publicacion=id_publicacion)
     mascotaa = Mascota.objects.get(id_mascota=publicacion.id_mascota.pk)
     saludMascota = SaludMascota.objects.get(idestado_salud=publicacion.idestado_salud.pk)
     
     
     if request.method == 'POST':
          formMascota = MascotaPerdidaForm(request.POST, request.FILES, instance=mascotaa)
          formSaludMascota = SaludMascotaForm(request.POST, instance=saludMascota)
          formPublicacion = PubliMascotaPerdidaForm(request.POST, instance=publicacion)
          if formMascota.is_valid() and formSaludMascota.is_valid() and formPublicacion.is_valid():

               
               vacunasmas = request.POST.getlist('vacunasmas')

     
               formMascota.save()

               estado_salud =  formSaludMascota.save(commit=False)

               
               
               estado_salud.guardar_vacunas(vacunasmas)
               estado_salud.save()
               

               
               formPublicacion.save()
               

               
               

               return redirect('perdidas')

     return HttpResponse('error al actualizar')






def eliminarPubli(request,id_publicacion):
     if(request.method == "DELETE"):
          publicacion = MascotasPerdidas.objects.get(id_publicacion=id_publicacion)
          mascota = Mascota.objects.get(id_mascota=publicacion.id_mascota.pk)
          salud_mascota = SaludMascota.objects.get(idestado_salud=mascota.idestado_salud.pk)


          salud_mascota.delete()
          mascota.delete()
          publicacion.delete()


          return HttpResponseRedirect('/perdidas/')
          #return JsonResponse({'estado':'exitoso'})
     return redirect('PUBLICACION NO ELIMINADA')
     
     
     









         




