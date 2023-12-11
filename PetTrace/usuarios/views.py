from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.contrib import messages
from usuarios.forms import *
from django.urls import reverse
from django.contrib.auth import authenticate, login, get_user_model
from django.contrib.auth.decorators import login_required
from usuarios.models import *
# from usuarios.models import Usuario
from django.http import HttpResponse, HttpResponseRedirect
from django.db.models import Q
from django.views.decorators.csrf import csrf_exempt
#import requests
import json

from django.template.loader import render_to_string


# Create your views here.
def index(request):
    return render(request, 'index/index.html')





def filtros(request,apartado):

     args = {}

     if request.method == 'POST':

          if request.body:

               filtros = json.loads(request.body)

               request.session['filtros']= filtros
               request.session.modified = True
               request.session.save()

     else:

          filtros = request.session.get('filtros',{})

          if filtros:
          
               for clave in filtros:
                    if filtros[clave]:
                              if clave == "color":
                                   args['id_mascota__'+clave+'mas'] = str(list(filtros[clave].keys())[0])
                              elif clave == "raza":
                                   args['id_mascota__'+clave+'mas'] = str(list(filtros[clave].keys())[0])
                              elif clave == "especie":
                                   args['id_mascota__'+clave+'mas'] = str(list(filtros[clave].keys())[0])
                              elif clave == "sexo":
                                   args['id_mascota__'+clave+'mas'] = str(list(filtros[clave].keys())[0])
                              elif clave == "tamaño":
                                   args['id_mascota__'+clave+'mas'] = str(list(filtros[clave].keys())[0])
                              elif clave == "localidad":
                                   args[clave+apartado] = str(list(filtros[clave].keys())[1])
                              elif clave == "barrio":
                                   args[clave+apartado] = str(list(filtros[clave].keys())[0])
                              else:
                                   args[clave+'Publicacion'] = str(list(filtros[clave].keys())[0])

     return args

 
 
def perdidas(request):

     context = {}

     publicaciones = None
     
     args = filtros(request,'Extravio')

     print(args)

     if args:
     
          publicaciones = MascotasPerdidas.objects.select_related('id_mascota', 'id_usuario','idestado_salud').filter(**args)


          
               
     else:
          # publicacion_ptr__usuario
               publicaciones = MascotasPerdidas.objects.select_related('id_mascota', 'id_usuario','idestado_salud')
               

     context['publicaciones'] = publicaciones

     
     if request.user.is_authenticated:
               publicacionesFav = publicacionesFavoritas.objects.filter(id_usuario = request.user.id).values_list('id_publicacion', flat=True)
               
               context['publicacionesFav'] = publicacionesFav


                
     return render(request, 'index/perdidas.html', context)


def encontradas(request):

     context = {}

     publicaciones = None
     
     args = filtros(request,'Encuentro')

     if args:
     
          publicaciones = MascotasEncontradas.objects.select_related('id_mascota', 'id_usuario','idestado_salud').filter(**args)

               
     else:
          # publicacion_ptr__usuario
               publicaciones = MascotasEncontradas.objects.select_related('id_mascota', 'id_usuario','idestado_salud')
               

     context['publicaciones'] = publicaciones

     
     if request.user.is_authenticated:
               publicacionesFav = publicacionesFavoritas.objects.filter(id_usuario = request.user.id).values_list('id_publicacion', flat=True)
               
               context['publicacionesFav'] = publicacionesFav

     return render(request, 'index/encontradas.html', context)




def adopciones(request):

     context = {}

     publicaciones = None
     
     args = filtros(request,'Adopcion')

     if args:
     
          publicaciones = MascotasAdopcion.objects.select_related('id_mascota', 'id_usuario','idestado_salud').filter(**args)

               
     else:
          # publicacion_ptr__usuario
               publicaciones = MascotasAdopcion.objects.select_related('id_mascota', 'id_usuario','idestado_salud')
               

     context['publicaciones'] = publicaciones

     
     if request.user.is_authenticated:
               publicacionesFav = publicacionesFavoritas.objects.filter(id_usuario = request.user.id).values_list('id_publicacion', flat=True)
               
               context['publicacionesFav'] = publicacionesFav



     return render(request, 'index/adopciones.html', context)




def informacionPubli(request, id_publicacion):


     context = {}

     if request.body :
          
          mensaje = json.loads(request.body)
     
          apartado = str(mensaje['apartado'])

          publicacion = None

     

   

          if(apartado == 'perdidas'):


               publicacion = MascotasPerdidas.objects.select_related('id_mascota' , 'id_usuario','idestado_salud'  ).get(id_publicacion=id_publicacion)


               data = {
                    'publicacion': {
                         'localidadExtravio': publicacion.localidadExtravio,
                         'barrioExtravio': publicacion.barrioExtravio,
                         
                         'fechaExtravio': publicacion.fechaExtravio,
                         
                         'horaExtravio': publicacion.horaExtravio,
                         'recompensa': publicacion.recompensa
                         
                    },
                    'usuario': {
                         'nombre': publicacion.id_usuario.username,
                         'telefono': publicacion.id_usuario.telefono,
                         'email': publicacion.id_usuario.email
                         
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
                    }

               }


          elif(apartado == 'encontradas'):

               publicacion = MascotasEncontradas.objects.select_related('id_mascota' , 'id_usuario','idestado_salud'  ).get(id_publicacion=id_publicacion)


               data = {
                    'publicacion': {
                         'localidadEncuentro': publicacion.localidadEncuentro,
                         'barrioEncuentro': publicacion.barrioEncuentro,
                         
                         'fechaEncuentro': publicacion.fechaEncuentro,
                         
                         'horaEncuentro': publicacion.horaEncuentro
                         
                         
                    },
                    'usuario': {
                         'nombre': publicacion.id_usuario.username,
                         'telefono': publicacion.id_usuario.telefono,
                         'email': publicacion.id_usuario.email
                         
                    },
                    'mascota': {
                         
                         'especiemas': publicacion.id_mascota.especiemas,
                         'razamas': publicacion.id_mascota.razamas,
                         'sexomas': publicacion.id_mascota.sexomas,
                         'colormas': publicacion.id_mascota.colormas,
                         
                         'accesoriosmas': publicacion.id_mascota.accesoriosmas,
                         'tamañomas': publicacion.id_mascota.tamañomas,
                         'marcasmas': publicacion.id_mascota.marcasmas,
                         'img1': publicacion.id_mascota.img1.url,
                         'img2': publicacion.id_mascota.img2.url,
                         'img3': publicacion.id_mascota.img3.url,
                         'img4': publicacion.id_mascota.img4.url,
                         'img5': publicacion.id_mascota.img5.url
                         
                    },
                    'estado_salud': {
                         'enfermedadesmas': publicacion.idestado_salud.enfermedadesmas,
                         'esterilizacionmas': publicacion.idestado_salud.esterilizacionmas,
                    }
               }
     
          else:

               publicacion = MascotasAdopcion.objects.select_related('id_mascota' , 'id_usuario','idestado_salud'  ).get(id_publicacion=id_publicacion)
               


               data = {
                    'publicacion': {
                         'localidadAdopcion': publicacion.localidadAdopcion,
                         'barrioAdopcion': publicacion.barrioAdopcion,
                         'motivoAdopcion': publicacion.motivoAdopcion,
                         'requisitosAdopcion': publicacion.requisitosAdopcion
                         
                    },
                    'usuario': {
                         'nombre': publicacion.id_usuario.username,
                         'telefono': publicacion.id_usuario.telefono,
                         'email': publicacion.id_usuario.email
                         
                    },
                    'mascota': {
                         'nombremas': publicacion.id_mascota.nombremas,
                         'especiemas': publicacion.id_mascota.especiemas,
                         'edadmas': publicacion.id_mascota.edadmas,
                         'razamas': publicacion.id_mascota.razamas,
                         'tamañomas': publicacion.id_mascota.tamañomas,
                         'sexomas': publicacion.id_mascota.sexomas,
                         'colormas': publicacion.id_mascota.colormas,
                         'personalidadmas': publicacion.id_mascota.personalidadmas,
                         'entrenamientomas': publicacion.id_mascota.entrenamientomas,
                         'socializacionmas': publicacion.id_mascota.socializacionmas,

                         'img1': publicacion.id_mascota.img1.url,
                         'img2': publicacion.id_mascota.img2.url,
                         'img3': publicacion.id_mascota.img3.url,
                         'img4': publicacion.id_mascota.img4.url,
                         'img5': publicacion.id_mascota.img5.url
                         
                    },
                    'estado_salud': {
                         'enfermedadesmas': publicacion.idestado_salud.enfermedadesmas,
                         'vacunasmas': publicacion.idestado_salud.mostrar_vacunas(),
                         'esterilizacionmas': publicacion.idestado_salud.esterilizacionmas,
                         'medicamentosmas': publicacion.idestado_salud.medicamentosmas,
                    }
               }
          context['data'] = data



     return JsonResponse(context)

def prueba(request):
    return render(request, 'index/prueba.html')

def registrar(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():

            # Recibes los datos del formulario
            first_name = form.cleaned_data.get('first_name')
            last_name = form.cleaned_data.get('last_name')
            documento = form.cleaned_data.get('documento')
            email = form.cleaned_data.get('email')
            telefono = form.cleaned_data.get('telefono')
            localidad = form.cleaned_data.get('localidad')
            barrio = form.cleaned_data.get('barrio')
            username = form.cleaned_data.get('username')
            longitud = form.cleaned_data.get('longitud')
            latitud = form.cleaned_data.get('latitud')
            password = form.cleaned_data.get('password')

            # se crea el usuario con los datos y se le asignas la contraseña encriptada
            usuario = Usuario(first_name=first_name,last_name=last_name, username=username, documento=documento,email=email, telefono=telefono, localidad=localidad, barrio=barrio, longitud=longitud, latitud=latitud)
            usuario.set_password(password)
            usuario.save()

            # Aquí puedes enviar un mensaje de éxito o redirigir al usuario a otra página
            messages.success(request, f'Usuario {usuario.username} registrado con éxito.')
            return redirect(reverse('login'))
    else:
        form = UserRegisterForm()
        print ('error')
    return render(request, 'login/registro.html', {'form': form})


User = get_user_model() # Obtener el modelo de usuario personalizado"""

def login(request):
    if request.user.is_authenticated:
        # Si el usuario está logueado, redirigirlo a su perfil
        
        return redirect('perfil', request.user.id)
    else:
        # Si el usuario no está logueado, mostrarle el formulario de login
        context = {}
        if request.method == 'POST':
            # Obtener los datos del formulario
            username = request.POST.get('username')
            password = request.POST.get('password')
            # Autenticar al usuario
            user = authenticate(request, username=username, password=password)
            if user is not None:
                # Si el usuario existe y está activo, iniciar sesión y redirigir
                if user.is_active:
                    login(request, user)
                else:
                    # Si el usuario está inactivo o la contraseña es incorrecta, mostrar un mensaje de error
                    context['error'] = 'Contraseña incorrecta.'
            else:
                # Si el usuario no existe, mostrar un mensaje de error
                context['error'] = 'El usuario no esta registrado'
        # Crear una instancia del formulario
        form = UserLoginForm()
        # Pasar el formulario y el contexto al renderizar la plantilla
        return render(request, 'login/inicioSesion.html', {'form': form, **context})


@csrf_exempt # Esto es para evitar el error de CSRF al usar AJAX
def editar_descripcion(request):
    if request.method == "POST":
        # Obtenemos el usuario y el perfil
        usuario = request.user
        perfil = usuario.perfil
        # Obtenemos la nueva descripción del formulario
        nueva_descripcion = request.POST.get("descripcion")
        # Actualizamos el perfil con la nueva descripción
        perfil.descripcion = nueva_descripcion
        perfil.save()
        # Devolvemos una respuesta JSON con el resultado
        return JsonResponse({"success": True, "descripcion": nueva_descripcion})
    else:
        # Si el método no es POST, devolvemos un error
        return JsonResponse({"success": False, "error": "Método no permitido"})
    
def usuario_view(request):
    form = UserRegisterForm()
    context = {'form': form}
    return render(request, 'usuario.html', context)


@csrf_exempt
@login_required
def editar_usuario(request):
    if request.method == "POST":
        usuario = request.user
        perfil = usuario.perfil
        campo_editar = request.POST.get("campo_editar")
        nuevo_valor = request.POST.get("nuevo_valor")

        # Actualizar el campo correspondiente en función de 'campo_editar'
        if campo_editar == "descripcion":
            perfil.descripcion = nuevo_valor
        elif campo_editar == "telefono":
            usuario.telefono = nuevo_valor
        elif campo_editar == "correo":
            usuario.email = nuevo_valor
        elif campo_editar == "nombre_usuario":
            usuario.username = nuevo_valor

        perfil.save()
        usuario.save()

        return JsonResponse({"success": True, "nuevo_valor": nuevo_valor, "campo_editar": campo_editar})
    else:
        return JsonResponse({"success": False, "error": "Método no permitido"})



def reset(request):
    return render(request, 'login/resetPassword/reset.html')
def resetHecho(request):
    return render(request, 'login/resetPassword/resetHecho.html')
def resetEmail(request):
    return render(request, 'login/resetPassword/resetEmail.html')
def resetConfirm(request):
    return render(request, 'login/resetPassword/resetConfirm.html')
def resetComplete(request):
    return render(request, 'login/resetPassword/resetComplete.html')





@login_required (login_url='login')
def perfil(request, id_usuario):
     
    usuario = Usuario.objects.get(pk =id_usuario)
    usuarioPerfil = Perfil.objects.get(pk =id_usuario)

    if request.method == 'POST':


        form = PerfilForm(request.POST, request.FILES, instance=usuarioPerfil)
        if form.is_valid():
            perfil = form.save(commit=False)
            perfil.usuario = usuario
            perfil.save()
        # Redirigir a alguna URL de éxito, por ejemplo, la página de perfil del usuario
        return redirect('perfil', id_usuario)
    else:

        context = {}
        form = PerfilForm(instance=usuarioPerfil)

        context['form'] = form


        favoritas = []
        publisPerdidas = []
        publisEncontradas = []
        publisAdopciones = []



        usuario = Usuario.objects.get(id=id_usuario)
        context['usuario'] = usuario



        publiPerdidasUsu = MascotasPerdidas.objects.select_related('id_mascota','id_usuario','idestado_salud').filter(id_usuario=id_usuario)
        context['perdidas'] = publiPerdidasUsu

        publiEncontradasUsu = MascotasEncontradas.objects.select_related('id_mascota', 'id_usuario','idestado_salud').filter(id_usuario=id_usuario)
        context['encontradas'] = publiEncontradasUsu

        publiAdopcionesUsu= MascotasAdopcion.objects.select_related('id_mascota', 'id_usuario','idestado_salud').filter(id_usuario=id_usuario)
        context['adopciones'] = publiAdopcionesUsu

        publiFavsUsu= publicacionesFavoritas.objects.select_related('id_publicacion').filter(id_usuario=id_usuario)


        for publicacion in publiFavsUsu:

            if publicacion.id_publicacion.apartado == 'perdidas':

                publiPerdida = MascotasPerdidas.objects.filter(pk = publicacion.id_publicacion.pk)
                publisPerdidas.extend(publiPerdida)

            elif publicacion.id_publicacion.apartado == 'encontradas':

                publiEncontrada = MascotasEncontradas.objects.filter(pk = publicacion.id_publicacion.pk)
                publisEncontradas.extend(publiEncontrada)


            else:

                publiAdopcion = MascotasAdopcion.objects.filter(pk = publicacion.id_publicacion.pk)
                publisAdopciones.extend(publiAdopcion)




        favoritas.extend(publisPerdidas)
        favoritas.extend(publisEncontradas)
        favoritas.extend(publisAdopciones) 

        context['favoritas'] = favoritas



        if request.user.is_authenticated:
            publicacionesFav = publicacionesFavoritas.objects.filter(id_usuario = request.user.id).values_list('id_publicacion', flat=True)

            context['publicacionesFav'] = publicacionesFav


    return render(request, 'index/perfil.html',context)



                    
@login_required (login_url='login')
def agregarPubli(request):

     apartado = request.POST.get('apartado')


     

     if request.method == 'POST':

          
     
          if(apartado == 'perdidas'):

               formMascota = MascotaPerdidaForm(request.POST, request.FILES)
               formSaludMascota = SaludMascotaForm(request.POST)
               formPublicacion = PubliMascotaPerdidaForm(request.POST)


          elif(apartado == 'encontradas'):
      

               formMascota = MascotaEncontradaForm(request.POST, request.FILES)
               formSaludMascota = SaludMascotaForm(request.POST)
               formPublicacion = PubliMascotaEncontradaForm(request.POST)

          else:


               formMascota = MascotaAdopcionForm(request.POST, request.FILES)
               formSaludMascota = SaludMascotaForm(request.POST)
               formPublicacion = PubliMascotaAdopcionForm(request.POST)


          if formMascota.is_valid() and formSaludMascota.is_valid() and formPublicacion.is_valid():

          

                    id_usuario = request.user.id
                    usuario = Usuario.objects.get(id=id_usuario)

                    salud_mascota = formSaludMascota.save()
                    idestado_salud = salud_mascota.pk
                    estado_salud = SaludMascota.objects.get(idestado_salud=idestado_salud)


                    if(apartado == 'perdidas' or apartado == 'adopciones' ):
                         vacunasmas = request.POST.getlist('vacunasmas')
                         estado_salud.guardar_vacunas(vacunasmas)


                    mascotaIns = formMascota.save(commit=False)
                    mascotaIns.id_usuario = usuario
                    mascotaIns.idestado_salud = estado_salud
                    mascotaIns.save()

                    
                    id_mascota = mascotaIns.pk
                    mascota = Mascota.objects.get(id_mascota=id_mascota)


                    publicacion = formPublicacion.save(commit=False)
                    publicacion.apartado = apartado
                    publicacion.idestado_salud = estado_salud
                    publicacion.id_usuario = usuario
                    publicacion.id_mascota = mascota
                    publicacion.save()
                    

               
               
                    return redirect(apartado)


               
     return HttpResponse('error al guardar')
    





@login_required (login_url='login')
def editarPubli(request,id_publicacion):

     if request.method == 'POST':

          apartado = request.POST.get('apartado')
     
          if(apartado == 'perdidas'):

               publicacion = MascotasPerdidas.objects.get(id_publicacion=id_publicacion)
               mascotaa = Mascota.objects.get(id_mascota=publicacion.id_mascota.pk)
               saludMascota = SaludMascota.objects.get(idestado_salud=publicacion.idestado_salud.pk)

               formMascota = MascotaPerdidaForm(request.POST, request.FILES, instance=mascotaa)
               formSaludMascota = SaludMascotaForm(request.POST, instance=saludMascota)
               formPublicacion = PubliMascotaPerdidaForm(request.POST, instance=publicacion)


          elif(apartado == 'encontradas'):
               publicacion = MascotasEncontradas.objects.get(id_publicacion=id_publicacion)
               mascotaa = Mascota.objects.get(id_mascota=publicacion.id_mascota.pk)
               saludMascota = SaludMascota.objects.get(idestado_salud=publicacion.idestado_salud.pk)

               formMascota = MascotaEncontradaForm(request.POST, request.FILES, instance=mascotaa)
               formSaludMascota = SaludMascotaForm(request.POST, instance=saludMascota)
               formPublicacion = PubliMascotaEncontradaForm(request.POST, instance=publicacion)

          else:

               publicacion = MascotasAdopcion.objects.get(id_publicacion=id_publicacion)
               mascotaa = Mascota.objects.get(id_mascota=publicacion.id_mascota.pk)
               saludMascota = SaludMascota.objects.get(idestado_salud=publicacion.idestado_salud.pk)

               formMascota = MascotaAdopcionForm(request.POST, request.FILES, instance=mascotaa)
               formSaludMascota = SaludMascotaForm(request.POST, instance=saludMascota)
               formPublicacion = PubliMascotaAdopcionForm(request.POST, instance=publicacion)


          if formMascota.is_valid() and formSaludMascota.is_valid() and formPublicacion.is_valid():

               

               if(apartado == 'perdidas' or apartado == '/adopciones/' ):

                    vacunasmas = request.POST.getlist('vacunasmas')
                    estado_salud =  formSaludMascota.save(commit=False)    
                    estado_salud.guardar_vacunas(vacunasmas) 
                    formMascota.save()
                    formPublicacion.save()
                    estado_salud.save()      

                    

               else:
                    formMascota.save()
                    formPublicacion.save()
                    formSaludMascota.save()  
                    

               return redirect(apartado)


               
     return HttpResponse('error al actualizar')





@login_required (login_url='login')
def eliminarPubli(request,id_publicacion):


     mensaje = json.loads(request.body)
     apartado = str(mensaje['apartado'])


     if(request.method == "DELETE"):


          if(apartado == "perdidas"):
               publicacion = MascotasPerdidas.objects.get(id_publicacion=id_publicacion)
               

          elif(apartado == "encontradas"):
               publicacion = MascotasEncontradas.objects.get(id_publicacion=id_publicacion)

          else:
               publicacion = MascotasAdopcion.objects.get(id_publicacion=id_publicacion)
               
              


          mascota = Mascota.objects.get(id_mascota=publicacion.id_mascota.pk)
          salud_mascota = SaludMascota.objects.get(idestado_salud=mascota.idestado_salud.pk)

          salud_mascota.delete()
          mascota.delete()
          publicacion.delete()

          return HttpResponseRedirect(apartado)

          

     return HttpResponse('PUBLICACION NO ELIMINADA')


@login_required (login_url='login')
def agregarFav(request,id_publicacion):

     mensaje = json.loads(request.body)
     apartado = str(mensaje['apartado'])

     

     response_data = {}

     if(apartado == 'perdidas'):

          publicacion = MascotasPerdidas.objects.get(id_publicacion=id_publicacion)

     elif(apartado == 'encontradas'):

          publicacion = MascotasEncontradas.objects.get(id_publicacion=id_publicacion)

     else:

          publicacion = MascotasAdopcion.objects.get(id_publicacion=id_publicacion)



     try:

          usuario = Usuario.objects.get(id = request.user.id)


          try:
               publicacionfav = publicacionesFavoritas.objects.get(id_publicacion=publicacion,id_usuario=usuario)
          except publicacionesFavoritas.DoesNotExist:
               publicacionfav = None

          if(publicacionfav):

               publicacionfav.delete()

               response_data['deleted'] = True
               response_data['success'] = True

          else:


               publifav = publicacionesFavoritas(id_publicacion=publicacion,id_usuario=usuario)

               publifav.save()

               response_data['saved'] = True
               response_data['success'] = True


     except Exception as e:

          response_data = {'success': False, 'message': str(e)}
     

          
     
     
     return JsonResponse(response_data)



@csrf_exempt
@login_required (login_url='login')
def agregarComentario(request,id_publicacion):

     usuario = Usuario.objects.get(pk = request.user.id)
     publicacion = Publicacion.objects.get(pk = id_publicacion)

     if request.method == "POST":

          comentario = request.POST.get('comentario')
               

          comentarioObj = Comentario.objects.create(comentario=comentario,id_usuario=usuario,id_publicacion=publicacion)



          return JsonResponse({'exito':True})
          
          
     return JsonResponse({'exito':False})




def cargarComentarios(request,id_publicacion):

     ultimoid = request.GET.get('ultimoid',0)
     mensaje = request.GET.get('mensaje','')


     try:

          ObjComentarios = Comentario.objects.select_related('id_usuario').filter(id_publicacion = id_publicacion , pk__gt=ultimoid)

     except:

          ObjComentarios = {}


     comentarios = {}
    
     if ObjComentarios:
          for obj in ObjComentarios:

               comentario = {'comentario':obj.comentario,
                              'nombreusu':obj.id_usuario.username,
                              'id_usuario':obj.id_usuario.id,
                              'fotoperfil':obj.id_usuario.perfil.imagen.url,
                              'fechacom':obj.fechacom,
                              'id_publicacion':id_publicacion}


               comentarios[obj.pk] = comentario





     return JsonResponse(comentarios)

