from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.contrib import messages
from PetTrace.forms import UserRegisterForm, UserLoginForm
from django.urls import reverse
from django.contrib.auth import authenticate, login, get_user_model
from django.contrib.auth.decorators import login_required
from usuarios.models import Usuario

from . models import *
from django.core import serializers



# Create your views here.
def index(request):
    return render(request, 'index/index.html')
@login_required
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


User = get_user_model() # Obtener el modelo de usuario personalizado

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







         



