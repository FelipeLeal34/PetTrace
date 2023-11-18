from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.contrib import messages
from PetTrace.forms import *
from django.urls import reverse
from django.contrib.auth import authenticate, login, get_user_model
from django.contrib.auth.decorators import login_required
from usuarios.models import Usuario
from .models import *
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
     return render(request, 'index/perfil.html')
 
 
def perdidas(request):

     publicaciones = None
     
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
                          color = list(filtros["color"].keys())
                    elif clave == "raza":
                          raza = list(filtros["raza"].keys())
                    elif clave == "especie":
                          especie = list(filtros["especie"].keys())
                    elif clave == "sexo":
                          sexo = list(filtros["sexo"].keys())
                    elif clave == "tamaño":
                          tamaño = list(filtros["tamaño"].keys())
                    elif clave == "localidad":
                          localidad = list(filtros["localidad"].keys())
                    elif clave == "barrio":
                          barrio = list(filtros["barrio"].keys())
                    else:
                          fecha = list(filtros["fecha"].keys())


          print(color)
          print(raza)
          print(especie)
          print(sexo)
          print(tamaño)
          print(localidad)
          print(barrio)
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

               Q(id_mascota__colormas__in=color) | Q(id_mascota__razamas__in=raza) 
               | Q(id_mascota__especiemas__in=especie) | Q(id_mascota__sexomas__in=sexo) | Q(id_mascota__tamañomas__in=tamaño) 
               | Q(localidadExtravio__in=localidad) | Q(barrioExtravio__in=barrio))
               # Q(id_mascota__colormas__in=color) | Q(id_mascota__colormas__isnull=True),
               # Q(id_mascota__razamas__in=raza) | Q(id_mascota__razamas__isnull=True),
               # Q(id_mascota__especiemas__in=especie) | Q(id_mascota__especiemas__isnull=True),
               # Q(id_mascota__sexomas__in=sexo) | Q(id_mascota__sexomas__isnull=True),
               # Q(id_mascota__tamañomas__in=tamaño) | Q(id_mascota__tamañomas__isnull=True),
               # Q(localidadExtravio__in=localidad) | Q(localidadExtravio__isnull=True),
               # Q(barrioExtravio__in=barrio) | Q(barrioExtravio__isnull=True))
          


          else:

                publicaciones = MascotasPerdidas.objects.select_related('id_mascota', 'id_usuario__id_usuario','idestado_salud')


     return render(request, 'index/perdidas.html', {'publicaciones':publicaciones})




def informacionPubli(request, id_publicacion):

     

     publicacion = MascotasPerdidas.objects.select_related('id_mascota' , 'id_usuario__id','idestado_salud'  ).get(id_publicacion=id_publicacion)


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
    form = UsuarioForm()
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
     
     
     









         




