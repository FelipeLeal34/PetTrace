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


# Create your views here.
def index(request):
    return render(request, 'index/index.html')


@login_required
def perfil(request):

     publiPerdidas = MascotasPerdidas.objects.select_related('id_mascota', 'id_usuario','idestado_salud').filter(id_usuario=request.user.id)

     publiEncontradas = MascotasEncontradas.objects.select_related('id_mascota', 'id_usuario','idestado_salud').filter(id_usuario=request.user.id)
     # publiAdopciones= MascotasAdopcion.objects.select_related('id_mascota', 'id_usuario','idestado_salud').filter(id_usuario=request.user.id)
     context = {'perdidas':publiPerdidas,'encontradas':publiEncontradas}

     return render(request, 'index/perfil.html',context)

 
 
def perdidas(request):

     context = {}

     publicaciones = None
     
     if request.method == 'POST':

          filtros = json.loads(request.body)

          request.session['filtros']= filtros
          request.session.modified = True
          request.session.save()


     else:
          filtros = request.session.get('filtros',{})


          args = {}
         

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
                         args[clave+'Extravio'] = str(list(filtros[clave].keys())[1])
                    elif clave == "barrio":
                         args[clave+'Extravio'] = str(list(filtros[clave].keys())[0])
                    else:
                         args[clave+'Publicacion'] = str(list(filtros[clave].keys())[0])
               


          if args :
          
               publicaciones = MascotasPerdidas.objects.select_related('id_mascota', 'id_usuario','idestado_salud').filter(**args)

               context['publicaciones'] = publicaciones

               if request.user.is_authenticated:
                    publicacionesFav = publicacionesFavoritas.objects.filter(id_usuario = request.user.id).values_list('id_publicacion', flat=True)
                    
                    context['publicacionesFav'] = publicacionesFav
                    
     
          


          else:
               # publicacion_ptr__usuario
                publicaciones = MascotasPerdidas.objects.select_related('id_mascota', 'id_usuario','idestado_salud')

                context['publicaciones'] = publicaciones

                if request.user.is_authenticated:
                    publicacionesFav = publicacionesFavoritas.objects.filter(id_usuario = request.user.id).values_list('id_publicacion', flat=True)
                    
                    context['publicacionesFav'] = publicacionesFav

                


     return render(request, 'index/perdidas.html', context)


def encontradas(request):

     publicaciones = None

     if request.method == 'POST':

          filtros = json.loads(request.body)

          request.session['filtros']= filtros
          request.session.modified = True
          request.session.save()


     else:
          filtros = request.session.get('filtros',{})


          args = {}
          


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
                         args[clave+'Encuentro'] = str(list(filtros[clave].keys())[1])
                    elif clave == "barrio":
                         args[clave+'Encuentro'] = str(list(filtros[clave].keys())[0])
                    else:
                         args[clave+'Publicacion'] = str(list(filtros[clave].keys())[0])
               


          if args :
          
               publicaciones = MascotasEncontradas.objects.select_related('id_mascota', 'id_usuario','idestado_salud').filter(**args)
                    

          else:

                    publicaciones = MascotasEncontradas.objects.select_related('id_mascota', 'id_usuario','idestado_salud')


     return render(request, 'index/encontradas.html', {'publicaciones':publicaciones})




def adopciones(request):

     publicaciones = None

     if request.method == 'POST':

          filtros = json.loads(request.body)

          request.session['filtros']= filtros
          request.session.modified = True
          request.session.save()


     else:
          filtros = request.session.get('filtros',{})


          args = {}
          


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
                         args[clave+'Adopcion'] = str(list(filtros[clave].keys())[1])
                    elif clave == "barrio":
                         args[clave+'Adopcion'] = str(list(filtros[clave].keys())[0])
                    else:
                         args[clave+'Publicacion'] = str(list(filtros[clave].keys())[0])

               

          if args :
          
               publicaciones = MascotasAdopcion.objects.select_related('id_mascota', 'id_usuario','idestado_salud').filter(**args)
                    

          else:

                    publicaciones = MascotasAdopcion.objects.select_related('id_mascota', 'id_usuario','idestado_salud')


     return render(request, 'index/adopciones.html', {'publicaciones':publicaciones})




def informacionPubli(request, id_publicacion):


     publicacion = None
     url_anterior = request.META.get('HTTP_REFERER')
     url = url_anterior.split(':8000')
     
     if(url[1] == '/perdidas/'):


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


     else:

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
    

     return JsonResponse({'status':'success','data':data})

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
        return redirect('perfil')
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


"""views.py
from django.views.generic.edit import UpdateView from .models import Perfil

class PerfilUpdateView(UpdateView): model = Perfil fields = [‘descripcion’] success_url = ‘/perfil/’

urls.py
from .views import PerfilUpdateView

urlpatterns = [ # otras urls path(‘perfil/editar/’, PerfilUpdateView.as_view(), name=‘perfil_editar’), ]

template.html
<form method=“post”>{% csrf_token %} {{ form.as_p }} <input type=“submit” value=“Guardar”> </form>"""

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





"""def login(request):
    
    documento = request.POST["documento"]
    password = request.POST["password"]
    user = authenticate(request, documento=documento, password=password)
    if user is not None:
        login(request, user)
        # Redirect to a success page.
        return render(request, 'index/perfil.html')
    else:
        from django.core.exceptions import ValidationError
        # Return an 'invalid login' error message.
        raise ValidationError('El usuario no esta registrado.')"""
    
    
    
    
    
    
    
    
    
"""template_name = "login/inicioSesion.html"
    form_class = MiLoginForm
    
    form = MiLoginForm()
        if documento is not None and password:
        # Busca al usuario por su email en la base de datos
            try:
                user = Usuario.objects.get(documento=documento)
            except Usuario.DoesNotExist:
            # Si no existe el usuario, lanza un error de validación
                raise ValidationError('El usuario no esta registrado.')
            else:
                # Si existe el usuario, verifica su contraseña
                self.user_cache = authenticate(self.request, documento=user.documento, password=password)
                if self.user_cache is None:
                    # Si la contraseña es incorrecta, lanza un error de validación
                    raise ValidationError('El correo o la contraseña son incorrectos.')
                else:
                    # Si la contraseña es correcta, guarda al usuario en el cache y retorna los datos limpios
                    self.confirm_login_allowed(self.user_cache)
                    #raise ValidationError('si sirve pero no reenvia.')"""
                    
    
def agregarPubli(request):

     url_anterior = request.META.get('HTTP_REFERER')
     url = url_anterior.split(':8000')

     if request.method == 'POST':

          
     
          if(url[1] == '/perdidas/'):

               formMascota = MascotaPerdidaForm(request.POST, request.FILES)
               formSaludMascota = SaludMascotaForm(request.POST)
               formPublicacion = PubliMascotaPerdidaForm(request.POST)


          elif(url[1] == '/encontradas/'):
      

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


                    if(url[1] == '/perdidas/' or url[1] == '/adopciones/' ):
                         vacunasmas = request.POST.getlist('vacunasmas')
                         estado_salud.guardar_vacunas(vacunasmas)


                    mascotaIns = formMascota.save(commit=False)
                    mascotaIns.id_usuario = usuario
                    mascotaIns.idestado_salud = estado_salud
                    mascotaIns.save()

                    
                    id_mascota = mascotaIns.pk
                    mascota = Mascota.objects.get(id_mascota=id_mascota)


                    publicacion = formPublicacion.save(commit=False)
                    publicacion.apartado = url[1].strip('/')
                    publicacion.idestado_salud = estado_salud
                    publicacion.id_usuario = usuario
                    publicacion.id_mascota = mascota
                    publicacion.save()
                    

               
               
                    return redirect(url[1])


               
     return HttpResponse('error al guardar')
    





@login_required
def editarPubli(request,id_publicacion):

     if request.method == 'POST':

          url_anterior = request.META.get('HTTP_REFERER')
          url = url_anterior.split(':8000')
     
          if(url[1] == '/perdidas/'):

               publicacion = MascotasPerdidas.objects.get(id_publicacion=id_publicacion)
               mascotaa = Mascota.objects.get(id_mascota=publicacion.id_mascota.pk)
               saludMascota = SaludMascota.objects.get(idestado_salud=publicacion.idestado_salud.pk)

               formMascota = MascotaPerdidaForm(request.POST, request.FILES, instance=mascotaa)
               formSaludMascota = SaludMascotaForm(request.POST, instance=saludMascota)
               formPublicacion = PubliMascotaPerdidaForm(request.POST, instance=publicacion)


          elif(url[1] == '/encontradas/'):
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

               

               if(url[1] == '/perdidas/' or url[1] == '/adopciones/' ):

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
                    

               return redirect(url[1])


               
     return HttpResponse('error al actualizar')






def eliminarPubli(request,id_publicacion):


     url_anterior = request.META.get('HTTP_REFERER')
     url = url_anterior.split(':8000')


     if(request.method == "DELETE"):


          if(url[1] == "/perdidas/"):
               publicacion = MascotasPerdidas.objects.get(id_publicacion=id_publicacion)
               

          elif(url[1] == "/encontradas/"):
               publicacion = MascotasEncontradas.objects.get(id_publicacion=id_publicacion)

          else:
               publicacion = MascotasAdopcion.objects.get(id_publicacion=id_publicacion)
               
              


          mascota = Mascota.objects.get(id_mascota=publicacion.id_mascota.pk)
          salud_mascota = SaludMascota.objects.get(idestado_salud=mascota.idestado_salud.pk)

          salud_mascota.delete()
          mascota.delete()
          publicacion.delete()

          return HttpResponseRedirect(url[1])

          

     return HttpResponse('PUBLICACION NO ELIMINADA')



def agregarFav(request,id_publicacion):

     url_anterior = request.META.get('HTTP_REFERER')
     url = url_anterior.split(':8000')

     response_data = {}

     if(url[1] == '/perdidas/'):

          try:

               usuario = Usuario.objects.get(id = request.user.id)
               publicacion = MascotasPerdidas.objects.get(id_publicacion=id_publicacion)

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
     

     else:

          try:

               usuario = Usuario.objects.get(id = request.user.id)
               publicacion = MascotasEncontradas.objects.get(id_publicacion=id_publicacion)

               publicacionfav = publicacionesFavoritas.objects.get(id_publicacion=publicacion,usuario=usuario)

               if(publicacionfav):

                    publicacionfav.delete()

                    response_data = {'success': True}

               else:


                    publifav = publicacionesFavoritas(id_publicacion=publicacion,usuario=usuario)

                    publifav.save()

                    response_data = {'success': True}

          except Exception as e:
               
               response_data = {'success': False, 'message': str(e)}
     
     
     return JsonResponse(response_data)




     
     
     









         




